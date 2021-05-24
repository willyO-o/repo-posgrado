<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Archivo extends CI_Controller
{


	public function __construct()
	{
		parent::__construct();
		$this->load->model('archivo_model');

		//$this->request = json_decode(file_get_contents('php://input'));
	}


	public function getArchivo()
	{
		$data['archivos'] = $this->archivo_model->get_archivos();
		echo json_encode($data);
	}

	public function listar()
	{
		$this->load->model('especialidad_model');
		$data['especialidades'] = $this->especialidad_model->get_especialidades();
		$data['archivos'] = $this->archivo_model->get_archivos();
		$data['categorias'] = $this->archivo_model->get_categorias();
		$data['tipos'] = $this->archivo_model->get_tipos();
		echo json_encode($data);
	}

	public function getArchivoName($uuid)
	{
		$data['documento'] = $this->archivo_model->get_view_archivo_uuid($uuid);
		echo json_encode($data);
	}

	public function save()
	{
		$this->load->library('session');

		if ($this->input->post('actualizar') == 'true') {

			$id_archivo = $this->input->post('id_archivo');
			$metadata = array(
				'autor' => strtoupper($this->input->post('autor')),
				'anio_creacion' => $this->input->post('anio'),
				'resumen' => $this->input->post('resumen'),
				'titulo' => strtoupper($this->input->post('titulo')),
				'sede' => $this->input->post('sede'),
				'tutor' => strtoupper($this->input->post('tutor')),
				'id_categoria' => $this->input->post('id_categoria'),
				'id_tipo' => $this->input->post('id_tipo'),
				'id_ver_esp' => $this->input->post('id_ver_esp'),
			);
			if ($this->archivo_model->update_metadatos($metadata, $id_archivo)) {

				$respuesta = array('error' => 0);
			} else {
				$respuesta = array('error' => 1);
			}
		} else {

			$uuid = uniqid();
			$config['file_name'] = $uuid;
			$config['upload_path'] = './uploads/';
			$config['allowed_types'] = 'pdf';
			$config['max_size']  = 32000;
			$this->load->library('upload', $config);
			if (!$this->upload->do_upload('archivo')) {
				$respuesta = array('error' => $this->upload->display_errors());
			} else {
				$resultado = array('upload_data' => $this->upload->data());
				$file_size = round(($resultado['upload_data']['file_size'] / 1000), 2);
				$datos_archivo = array(
					'descripcion' => 'DOCUMENTO',
					'tamanio' => $file_size,
					'formato' => 'PDF',
					'nombre' => $resultado['upload_data']['file_name'],
					'uuid' => $uuid,
				);
				$id_archivo = $this->archivo_model->set_archivos($datos_archivo);
				if ($id_archivo > 0) {

					$metadata = array(
						'autor' => strtoupper($this->input->post('autor')),
						'fecha_publicacion' => date('Y-m-d'),
						'anio_creacion' => $this->input->post('anio'),
						'resumen' => $this->input->post('resumen'),
						'lenguaje' => 'ES',
						'titulo' => strtoupper($this->input->post('titulo')),
						'sede' => $this->input->post('sede'),
						'tutor' => strtoupper($this->input->post('tutor')),
						'id_categoria' => $this->input->post('id_categoria'),
						'id_tipo' => $this->input->post('id_tipo'),
						'id_ver_esp' => $this->input->post('id_ver_esp'),
						'id_archivo' => $id_archivo,
						'id_usuario'=> $this->session->userdata('id'),
					);
					if ($this->archivo_model->set_metadatos($metadata)) {

						$respuesta = array('error' => 0);
					} else {
						unlink('./uploads/' . $resultado['upload_data']['file_name']);
						$respuesta = array('error' => 1);
					}
				} else {
					$respuesta = array('error' => 1);
				}
			}
		}




		echo json_encode($respuesta);
	}

	public function datosSelect()
	{
		$this->load->model('especialidad_model');
		$data['especialidades'] = $this->especialidad_model->get_especialidades();
		$data['tipos'] = $this->db->get('tipos')->result();
		$data['categorias'] = $this->db->get('categorias')->result();


		echo json_encode($data);
	}

	public function pdf($pdf = '')
	{
		if ($pdf == '') {
			redirect(base_url() . "error404");
			die();
		}
		$this->db->where('nombre', $pdf);
		$this->db->from('archivos');
		if (!$this->db->count_all_results() > 0) {
			redirect(base_url() . "error404");
			die();
		}

		echo '<!DOCTYPE html>
		<html lang="es">
		<head>
			<meta charset="UTF-8">
			<title>Document</title>
			<style>
				body{
					margin:0;
					height:100vh;
					background-color:#000;
					
				}
				iframe{
					border:none
				}	
			</style>
		</head>
		<body onload="disableContextMenu();" oncontextmenu="return false">
			<iframe  id="pdf" src="' . base_url() . 'uploads/' . $pdf . '#toolbar=0"  id="vistaDocumento" width="100%" height="100%"></iframe>
			<script type="text/javascript">
			function disableContextMenu()
  			{	
				window.frames["pdf"].document.oncontextmenu = function(){ return false;};   
			}
			</script>
		</body>
		</html>
		';
	}

	public function delete()
	{
		$id_archivo = $this->input->post('id_archivo');
		$datos_archivo = $this->archivo_model->get_archivo_id($id_archivo);
		if ($datos_archivo) {
			if ($this->archivo_model->delete_archivo($id_archivo)) {
				unlink('./uploads/' . $datos_archivo->nombre);
				$data['respuesta'] = 1;
			} else {
				$data['respuesta'] = 0;
			}
		} else {
			$data['respuesta'] = 0;
		}
		echo json_encode($data);
	}

	public function search()
	{
		$search = $this->input->post('search');
		$id_categoria = $this->input->post('id_categoria');
		$anio = $this->input->post('anio');

		// var_dump($this->input->post());die();
		$sql = "SELECT * FROM view_archivos ";
		if ($search != '') {
			$palabra = explode(" ", $search);
			$sql .= "	WHERE titulo ILIKE '%" . $palabra[0] . "%' OR resumen ILIKE '%" . $palabra[0] . "%' OR especialidad ILIKE '%" . $palabra[0] . "%' ";

			for ($i = 1; $i < count($palabra); $i++) {
				if (!empty($palabra[$i])) {
					$sql .= " OR titulo ILIKE '%" . $palabra[$i] . "%' OR resumen ILIKE '%" . $palabra[$i] . "%' OR especialidad ILIKE '%" . $palabra[$i] . "%' ";
				}
			}
			
		}
		if ($id_categoria != 0) {
			$subconsulta="SELECT * FROM (".$sql.") consulta ";
			$sql=$subconsulta;
			$sql .=  " WHERE id_categoria=" . $id_categoria ;
	
		}
		if ($anio != 0) {
			if ($id_categoria==0) {
				$subconsulta="SELECT * FROM (".$sql.") consulta ";
				$sql=$subconsulta;
				$sql .=  "WHERE anio_creacion=" . $anio ;
			}else{
				
				$sql .=  " AND anio_creacion=" . $anio ;
			}

		}

		//echo json_encode($sql);die();

		$data['archivos'] = $this->archivo_model->get_busqueda($sql);

		$data['categorias'] = $this->archivo_model->get_categorias();

		echo json_encode($data);
	}
}

/* End of file Archivo.php */
