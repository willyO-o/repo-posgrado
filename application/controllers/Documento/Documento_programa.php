<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Documento_programa extends CI_Controller
{

	private $ruta_archivos = "./uploads/";

	public function __construct()
	{
		parent::__construct();
		$this->load->model('control_sesion_model');

		$this->load->model('documento_model');
	}


	public function documento_programa_filtrar_datos_ajax()
	{
		$filtros['id_categoria'] = $this->input->post('id_categoria');
		$filtros['id_tipo_documento'] = $this->input->post('id_tipo');
		$filtros['id_autor'] =$this->encryption->decrypt( $this->input->post('id_autor'));
		$filtros['id_especialidad'] = $this->input->post('id_especialidad');
		$filtros['texto_buscar'] = $this->input->post('texto_buscar');
		$limit = $this->input->post('limit') ? $this->input->post('limit') : 10;
		$ofset = $this->input->post('ofset') ? $this->input->post('ofset') : 0;

		$es_admin=$this->session->userdata("id_rol") == 1 ? true: false;
		$data = $this->documento_model->filtrar_datos($filtros, $limit, $ofset,$es_admin);

		echo json_encode($data);
	}


	public function documento_programa_lista_id_ajax()
	{
		$id_metadato = (int)$this->input->post('id_documento');
		$data["documento"] = $this->documento_model->listar_documento_id($id_metadato);
		echo json_encode($data);
	}

	public function documento_programa_registrar_documento()
	{
		$this->load->model('autor_model');
		
		$this->load->model('especialidad_model');
		
		
		$this->load->library('session');
		$documento = array(
			'anio_creacion'	 	=> $this->input->post('anio'),
			'resumen'		 	=> $this->input->post('resumen'),
			'titulo'			=> strtoupper($this->input->post('titulo')),
			'id_sede'		 	=> $this->input->post('id_sede'),
			'id_tipo' 			=> $this->input->post('id_tipo'),
			'id_categoria'		=> $this->input->post('id_categoria'),
			'observaciones'		=> $this->input->post('observaciones') != "" ?  $this->input->post('observaciones') : "-",
			'codigo_documento'	=> $this->input->post('codigo_documento') != "" ? strtoupper($this->input->post('codigo_documento')) : "-",
			'es_publico'		=> strtoupper($this->input->post('es_publico')),

		);

		// $id_autor=	 $this->input->post('id_autor');
		$id_autor=$this->encryption->decrypt($this->input->post('id_autor'));

		

		$existe_autor= $this->autor_model->verificar_autor($id_autor);
		// echo json_encode($existe_autor); die();
		if($existe_autor==0){
			$persona= $this->autor_model->listar_autor_id_psg($id_autor);
			$datos_autor=[
				"id_autor"=> $this->encryption->decrypt( $persona->id_persona),
				"nombre_autor"=>$persona->nombre,
				"paterno_autor"=>$persona->paterno,
				"materno_autor"=>$persona->materno,
				"ci_autor"=>$persona->ci,
				"grado_academico" => $persona->oficio_trabajo,
				"estado_autor" => "REGISTRADO",
			];

			$this->autor_model->insertar_autores($datos_autor);
		}


		$id_especialidad = $this->input->post('id_especialidad');
		$existe_especialidad= $this->especialidad_model->verificar_especialidad_id($id_especialidad);
		if ($existe_especialidad==0) {
			$especialidad= $this->especialidad_model->listar_especialidad_id_psg($id_especialidad);
			$datos_especialidad=[
				"id_especialidad"=>$especialidad->id_planificacion_programa,
				"especialidad" =>$especialidad->descripcion_grado_academico."  EN  ". $especialidad->nombre_programa,
				"estado_especialidad" => "REGISTRADO",
			];

			$this->especialidad_model->set_especialidad($datos_especialidad);
		}

		$documento["id_autor"]=$id_autor;
		$documento["id_especialidad"]=$id_especialidad;
		// echo $id_especialidad; die();



		if ($this->input->post('actualizar') == 'true') {

			$id_documento = (int)$this->input->post('id_documento');
			$documento['estado_documento'] = "actualizado";

			$res = $this->documento_model->actualizar_documento($documento, $id_documento);
			if ($res) {

				$respuesta = array('error' => 0);
			} else {
				$respuesta = array('error' => 1);
			}
		} else {

			$uuid = uniqid();
			$config['file_name'] = $uuid;
			$config['upload_path'] = $this->ruta_archivos;
			$config['allowed_types'] = 'pdf';
			$config['max_size']  = 100000;

			$this->load->library('upload', $config);

			if ($this->upload->do_upload('archivo')) {

				$resultado = array('upload_data' => $this->upload->data());
				$file_size = round(($resultado['upload_data']['file_size'] / 1000), 2);
				date_default_timezone_set('America/La_Paz');
				$documento['tamanio_archivo'] = $file_size;
				$documento['nombre_archivo'] = $resultado['upload_data']['file_name'];
				$documento['uuid'] = $uuid;
				$documento['lenguaje'] = "ES";
				$documento['nro_paginas'] = $this->input->post('nro_paginas');
				$documento['fecha_publicacion'] = date("Y-m-d");
				$documento['id_usuario'] = $this->session->userdata('id');
				$documento['estado_documento'] = "registrado";


				$id_archivo = $this->documento_model->registrar_documento($documento);

				if ($id_archivo > 0) {

					$respuesta = array('error' => 0);
				} else {
					$respuesta = array('error' => 1);
					unlink($this->ruta_archivos . $documento['nombre_archivo']);
				}
			} else {

				date_default_timezone_set('America/La_Paz');
				$documento['tamanio_archivo'] = "0";
				$documento['uuid'] = $uuid;
				$documento['lenguaje'] = "ES";
				$documento['nro_paginas'] = $this->input->post('nro_paginas');
				$documento['fecha_publicacion'] = date("Y-m-d");
				$documento['id_usuario'] = $this->session->userdata('id');
				$documento['estado_documento'] = "registrado";


				$id_archivo = $this->documento_model->registrar_documento($documento);

				if ($id_archivo > 0) {

					$respuesta = array('error' => 0);
				} else {
					$respuesta = array('error' => 1);
					unlink($this->ruta_archivos . $documento['nombre_archivo']);
				}
				
			}
		}
		echo json_encode($respuesta);
	}

	public function documento_programa_ver_archivo_pdf($pdf = '', $is_iframe = false)
	{

		$html = '<!DOCTYPE html>
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
		if (!$is_iframe) {

			if ($pdf == '') {
				redirect(base_url() . "error404");
				die();
			}
			$this->db->where('nombre_archivo', $pdf);
			$this->db->from('srp_documentos');
			if (!$this->db->count_all_results() > 0) {
				redirect(base_url() . "error404");
				die();
			}
		} else {
			if ($pdf == '') {

				redirect(base_url() . "error404/error404Iframe");
				die();
			}
			$this->db->where('nombre_archivo', $pdf);
			$this->db->from('srp_documentos');
			if (!$this->db->count_all_results() > 0) {
				redirect(base_url() . "error404/error404Iframe");
				die();
			}
		}
		echo $html;
	}

	public function documento_programa_eliminar()
	{

		$id_documento = $this->input->post('id_documento');
		$res = $this->documento_model->eliminar_documento($id_documento);
		if ($res) {
			$data['respuesta'] = 1;
		} else {
			$data['respuesta'] = 0;
		}

		echo json_encode($res);
	}


	public function documento_programa_buscar_especialidad()
	{

		$this->load->model('especialidad_model');

		$texto = $this->input->post('term');

		$data = $this->especialidad_model->buscar_especialidad_psg($texto);
		echo json_encode($data);
	}

	public function documento_programa_buscar_autor()
	{

		$this->load->model('autor_model');

		$texto = $this->input->post('term');

		$data = $this->autor_model->buscar_autor_psg($texto);
		echo json_encode($data);
	}

	public function documento_programa_buscar_autor_filtro()
	{

		$this->load->model('autor_model');

		$texto = $this->input->post('term');

		$data = $this->autor_model->buscar_autor($texto, true);
		echo json_encode($data);
	}

	public function documento_programa_buscar_especialidad_filtro()
	{

		$this->load->model('especialidad_model');

		$texto = $this->input->post('term');

		$data = $this->especialidad_model->buscar_especialidad($texto, true);
		echo json_encode($data);
	}

	public function documento_programa_listar_filtros()
	{

		$this->load->model('categoria_model');
		$this->load->model('tipo_model');


		$data["tipos_documento"] = $this->tipo_model->listar_tipos(true);
		$data["categorias"] = $this->categoria_model->listar_categorias(true);
		echo json_encode($data);
	}

	public function documento_programa_listar_parametros()
	{

		$this->load->model('categoria_model');
		$this->load->model('tipo_model');
		$this->load->model('sede_model');



		$data["tipos_documento"] = $this->tipo_model->listar_tipos();
		$data["categorias"] = $this->categoria_model->listar_categorias();
		$data['sedes'] = $this->sede_model->listar_sedes();
		echo json_encode($data);
	}


	public function get_estadisticas()
	{
		$this->load->model('estadistica_model');

		$data['nroArchivos'] = $this->estadistica_model->nro_archivos();
		$data['nroEspecialidades'] = $this->estadistica_model->nro_especialidades();
		$data['anios'] = $this->estadistica_model->get_anios();

		echo json_encode($data);
	}
	public function get_ultimo_anio()
	{
		$this->load->model('estadistica_model');

		$data["anio"] = $this->estadistica_model->get_ultimo_anio();
		echo json_encode($data);
	}

	public function barras($anio)
	{
		$this->load->model('estadistica_model');

		$data['barras'] = $this->estadistica_model->get_barra($anio);

		echo json_encode($data);
	}
}

/* End of file Archivo.php */
