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
	public function save()
	{

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
			$file_size=round(($resultado['upload_data']['file_size'] / 1000),2);
			$datos_archivo = array(
				'descripcion' => 'DOCUMENTO',
				'tamanio' => $file_size,
				'formato' => 'PDF',
				'nombre' => $resultado['upload_data']['file_name'],
				'uuid' => $uuid,
			);
			$id_archivo=$this->archivo_model->set_archivos($datos_archivo);
			if ($id_archivo>0) {

				$metadata=array(
					'autor' => strtoupper($this->input->post('autor')), 
					'fecha_publicacion'=>date('Y-m-d'),
					'anio_creacion'=> $this->input->post('anio'),
					'resumen' => $this->input->post('resumen'), 
					'lenguaje'=> 'ES',
					'titulo' => strtoupper($this->input->post('titulo')), 
					'sede' => $this->input->post('sede'), 	
					'tutor' => strtoupper($this->input->post('tutor')), 
					'id_categoria' => $this->input->post('id_categoria'), 
					'id_tipo' => $this->input->post('id_tipo'), 
					'id_ver_esp' => $this->input->post('id_ver_esp'),
					'id_archivo'=> $id_archivo,
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

	public function delete()
	{
		$id_archivo = $this->input->post('id_archivo');

		echo $id_archivo;
		die();
		$datos_archivo = $this->archivo_model->get_archivo_id($id_archivo);
		if ($datos_archivo) {
			if ($this->archivo_model->delete_archivo($id_archivo)) {
				unlink('./uploads/' . $datos_archivo->ruta);
				$data['respuesta'] = 1;
			} else {
				$data['respuesta'] = 0;
			}
		} else {
			$data['respuesta'] = 0;
		}
		echo json_encode($data);
	}
}

/* End of file Archivo.php */
