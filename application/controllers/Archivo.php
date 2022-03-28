<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Archivo extends CI_Controller
{

	private $ruta_archivos = "./uploads/";

	public function __construct()
	{
		parent::__construct();
		$this->load->model('documento_model');
	}


	public function getArchivo()
	{
		$data = $this->documento_model->listar_documentos_publico(10, 0, 0, 0, 0);
		echo json_encode($data);
	}

	public function filtrar_datos()
	{
		$datos['id_categoria'] = $this->input->post('id_categoria');
		$datos['id_tipo_documento'] = $this->input->post('id_tipo');
		$datos['id_autor'] = $this->input->post('id_autor');
		$datos['id_especialidad'] = $this->input->post('id_especialidad');
		$datos['texto_buscar'] = $this->input->post('texto_buscar');
		$limit = $this->input->post('limit') ? $this->input->post('limit') : 10;
		$ofset = $this->input->post('ofset') ? $this->input->post('ofset') : 0;

		$data = $this->documento_model->filtrar_datos($datos, $limit, $ofset);

		echo json_encode($data);
	}

	public function listar($limit = 10, $ofset = 0, $paginar = 1, $id_especialidad = 0, $id_categoria = 0, $id_tipo_documento = 0)
	{
		$this->load->model('especialidad_model');
		$resultado = $this->documento_model->listar_documentos_publico($limit, $ofset, $id_especialidad, $id_categoria, $id_tipo_documento);
		$data['archivos'] = $resultado['archivos'];
		$data['total_archivos'] = $resultado["total_resultados"];

		echo json_encode($data);
	}

	public function getArchivoName($uuid)
	{
		$data['documento'] = $this->documento_model->listar_documento_uuid_publico($uuid);
		echo json_encode($data);
	}

	public function archivo_id()
	{
		$id_metadato = (int)$this->input->post('id_documento');
		$data["documento"] = $this->documento_model->listar_documento_id($id_metadato);
		echo json_encode($data);
	}

	public function save()
	{
		$this->load->library('session');

		//echo json_encode($this->input->post());die();

		$documento = array(
			'id_autor'			=> $this->input->post('id_autor'),
			'anio_creacion'	 	=> $this->input->post('anio'),
			'resumen'		 	=> $this->input->post('resumen'),
			'titulo'			=> strtoupper($this->input->post('titulo')),
			'id_sede'		 	=> $this->input->post('id_sede'),
			'id_tipo' 			=> $this->input->post('id_tipo'),
			'id_ver_esp'		=> $this->input->post('id_ver_esp'),
			'id_categoria'		=> $this->input->post('id_categoria'),
			'observaciones'		=> $this->input->post('observaciones') !="" ?  $this->input->post('observaciones'): "-",
			'codigo_documento'	=> $this->input->post('codigo_documento')!="" ?strtoupper($this->input->post('codigo_documento')): "-",
			'es_publico'		=> strtoupper($this->input->post('es_publico')),

		);

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
				$respuesta = array('error' => $this->upload->display_errors());
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

	public function pdf($pdf = '', $is_iframe = false)
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
			$this->db->where('nombre', $pdf);
			$this->db->from('archivos');
			if (!$this->db->count_all_results() > 0) {
				redirect(base_url() . "error404");
				die();
			}

		} else {
			if ($pdf == '') {

				redirect(base_url() . "error404/error404Iframe");
				die();
			}
			$this->db->where('nombre', $pdf);
			$this->db->from('archivos');
			if (!$this->db->count_all_results() > 0) {
				redirect(base_url() . "error404/error404Iframe");
				die();
			}
		}
		echo $html;
	}

	public function delete()
	{
		$id_documento = (int) $this->input->post('id_metadato');

		$res = $this->documento_model->eliminar_documento($id_documento);
		if ($res) {
			$data['respuesta'] = 1;
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
			$subconsulta = "SELECT * FROM (" . $sql . ") consulta ";
			$sql = $subconsulta;
			$sql .=  " WHERE id_categoria=" . $id_categoria;
		}
		if ($anio != 0) {
			if ($id_categoria == 0) {
				$subconsulta = "SELECT * FROM (" . $sql . ") consulta ";
				$sql = $subconsulta;
				$sql .=  "WHERE anio_creacion=" . $anio;
			} else {

				$sql .=  " AND anio_creacion=" . $anio;
			}
		}

		//echo json_encode($sql);die();

		$data['archivos'] = $this->documento_model->get_busqueda($sql);

		$data['categorias'] = $this->documento_model->get_categorias();

		echo json_encode($data);
	}

	public function getEstadisticas()
	{
		$this->load->model('estadistica_model');

		$data['nroArchivos'] = $this->estadistica_model->nroArchivos();
		$data['nroEspecialidades'] = $this->estadistica_model->nroEspecialidades();
		$data['anios'] = $this->estadistica_model->get_anios();

		echo json_encode($data);
	}

	public function barras($anio)
	{
		$this->load->model('estadistica_model');

		$data['barras'] = $this->estadistica_model->get_barra($anio);

		echo json_encode($data);
	}

	public function buscar_especialidad()
	{

		$this->load->model('especialidad_model');

		$texto = $this->input->post('term');

		$data = $this->especialidad_model->buscar_especialidad($texto);
		echo json_encode($data);
	}

	public function buscar_autor()
	{

		$this->load->model('autor_model');

		$texto = $this->input->post('term');

		$data = $this->autor_model->buscar_autor($texto);
		echo json_encode($data);
	}
	public function buscar_especialidad_filtro()
	{

		$this->load->model('especialidad_model');

		$texto = $this->input->post('term');

		$data = $this->especialidad_model->buscar_especialidad($texto, true);
		echo json_encode($data);
	}
	public function listar_filtros()
	{

		$this->load->model('categoria_model');
		$this->load->model('tipo_model');


		$data["tipos_documento"] = $this->tipo_model->listar_tipos(true);
		$data["categorias"] = $this->categoria_model->listar_categorias(true);
		echo json_encode($data);
	}

	public function listar_parametros()
	{

		$this->load->model('categoria_model');
		$this->load->model('tipo_model');
		$this->load->model('sede_model');



		$data["tipos_documento"] = $this->tipo_model->listar_tipos();
		$data["categorias"] = $this->categoria_model->listar_categorias(true);
		$data['sedes'] = $this->sede_model->listar_sedes();
		echo json_encode($data);
	}


	private function extraer_paginas_documento($ruta_documento = "")
	{


		if (!file_exists($this->ruta_archivos . "60c22a1e86079.pdf"))
			return 0;
		if (!$fp = @fopen($this->ruta_archivos . "60c22a1e86079.pdf", "r"))
			return 0;
		$i = 0;
		$type = "/Contents";
		while (!feof($fp)) {
			$line = fgets($fp, 255);
			$x = explode($type, $line);
			if (count($x) > 1) {
				$i++;
			}
		}
		fclose($fp);
		return (int) $i;
	}


	public function migrar()
	{
		die();
		$this->db->select('id_archivo,tamanio as tamanio_archivo,nombre as nombre_archivo,uuid');
		$r = $this->db->get('archivos')->result_array();


		foreach ($r as $q) {
			$id = $q["id_archivo"];

			unset($q["id_archivo"]);
			$this->db->update('srp_documentos', $q);

			$this->db->where('id_archivo', $id);
		}
	}
}

/* End of file Archivo.php */
