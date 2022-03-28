<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Principal_publico extends CI_Controller
{


	public function __construct()
	{
		parent::__construct();
	}


	public function listar_parametros_ajax()
	{

		$this->load->model('especialidad_model');
		$this->load->model('categoria_model');
		$this->load->model('tipo_model');

		$data['especialidades'] = $this->especialidad_model->listar_especialidades();
		$data['categorias'] = $this->categoria_model->listar_categorias();
		$data['tipos'] = $this->tipo_model->listar_tipos();

		echo json_encode($data);
	}

	public function listar_documentos_ajax($limit = 10, $ofset = 0, $paginar = 1, $id_especialidad = 0, $id_categoria = 0, $id_tipo_documento = 0)
	{

		$this->load->model('documento_model');

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

	public function listar_documento_uuid_ajax()
	{
		$this->load->model('documento_model');

		$uuid = $this->input->post('uuid');
		$data["existe"] = false;
		$data['documento'] = $this->documento_model->listar_documento_uuid_publico($uuid);
		if ($data['documento']) {
			$data["existe"] = true;
		}
		$data["p"]=$this->input->post();		
		echo json_encode($data);
	}
}

/* End of file Principal_publico.php */
