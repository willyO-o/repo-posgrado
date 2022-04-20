<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Principal_publico extends CI_Controller
{


	public function __construct()
	{
		parent::__construct();
		$this->load->model('documento_model');
	}


	public function principal_publico_listar_parametros_ajax()
	{

		$this->load->model('especialidad_model');
		$this->load->model('categoria_model');
		$this->load->model('tipo_model');

		$data['especialidades'] = $this->especialidad_model->listar_especialidades();
		$data['categorias'] = $this->categoria_model->listar_categorias();
		$data['tipos'] = $this->tipo_model->listar_tipos();

		echo json_encode($data);
	}

	public function principal_publico_listar_documentos_ajax($limit = 10, $ofset = 0, $paginar = 1, $id_especialidad = 0, $id_categoria = 0, $id_tipo_documento = 0)
	{

		

		$limit = (int) $this->input->post('elementos_pagina');
		$ofset = (int) $this->input->post('ofset');
		$id_especialidad = (int) $this->input->post('filtro_area');
		$id_categoria = (int) $this->input->post('filtro_categoria');
		$id_tipo_documento = (int) $this->input->post('filtro_tipo_documento');


		$this->load->model('especialidad_model');
		$data = $this->documento_model->listar_documentos_publico($limit, $ofset, $id_especialidad, $id_categoria, $id_tipo_documento);

		$data["post"] = $this->input->post();

		echo json_encode($data);
	}

	public function principal_publico_listar_documento_uuid_ajax()
	{
		

		$uuid = $this->input->post('uuid');
		$data["existe"] = false;
		$data['documento'] = $this->documento_model->listar_documento_uuid_publico($uuid);
		if ($data['documento']) {
			$data["existe"] = true;
		}
		$data["p"]=$this->input->post();		
		echo json_encode($data);
	}

	public function principal_publico_visualizar_pdf( $codigo_documento)
	{
		$existe_documento=$this->documento_model->verificar_codigo($codigo_documento);
		if(!$existe_documento){
			redirect("error404");
		}
		$data["pdf"]=true;
		$data["codigo_documento"]=$codigo_documento;
		$data["vista"]="layouts/publico/pdf_publico";
		$this->load->view('layouts/publico/base_publico', $data);
		
	}

	public function principal_publico_filtrar_busqueda_ajax()
	{
		// echo json_encode($this->input->post());die();

		$filtros['palabra_buscar']=$this->input->post('texto_buscar');
		$filtros['filtro']=$this->input->post('filtro');
		$filtros['relacion_filtro']=$this->input->post('relacio_filtro');
		$limit = $this->input->post('limit') !=null ? $this->input->post('limit'): 10;
		$ofset = $this->input->post('ofset') !=null ? $this->input->post('ofset'): 0;

		$data=$this->documento_model->filtrar_documentos_publico($filtros, $limit , $ofset);

		echo json_encode($data);

		
	}

	public function principal_publico_buscar_ajax()
	{
		//  echo json_encode($this->input->post());die();

		$palabra_buscar=$this->input->post('texto_buscar');
		$limit = $this->input->post('limit') !=null ? $this->input->post('limit'): 10;
		$ofset = $this->input->post('ofset') !=null ? $this->input->post('ofset'): 0;
		$data=$this->documento_model->buscar_documentos_publico($palabra_buscar, $limit , $ofset);

		echo json_encode($data);
	}

	public function principal_publico_listar_autores_ajax()
	{
		
		$this->load->model('autor_model');

		$data=$this->autor_model->listar_autores_publico();

		echo json_encode($data);
		
	}

	public function principal_publico_listar_documentos_autor_ajax()
	{
		$id_autor=$this->input->post('id_autor');
		
		$data=$this->documento_model->listar_docuemnto_id_autor($id_autor);

		echo json_encode($data);
	}
}

/* End of file Principal_publico.php */
