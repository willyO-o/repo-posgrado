<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Archivo extends CI_Controller {

	
	public function __construct()
	{
		parent::__construct();
		$this->load->model('archivo_model');
		
		//$this->request = json_decode(file_get_contents('php://input'));
	}
	

	public function getArchivo()
	{
		$data['archivos']=$this->archivo_model->get_archivos();
		echo json_encode($data);
	
	}
	public function save()
	{
	
		$uuid = uniqid();
		$config['file_name']=$uuid;
		$config['upload_path']= './uploads/';
		$config['allowed_types']= 'pdf';
		$config['max_size']  = 32000;
		$this->load->library('upload', $config);
		if ( !$this->upload->do_upload('archivo'))
		{
			$respuesta = array('error' => $this->upload->display_errors());

				
		}
		else
		{
			$resultado = array('upload_data' => $this->upload->data());

			$datos = array(
				'titulo' => strtoupper($this->input->post('titulo')), 
				'ruta' => $resultado['upload_data']['file_name'], 
				'autor' => strtoupper($this->input->post('autor')), 
				'tutor' => strtoupper($this->input->post('tutor')), 
				'uuid' => $uuid, 
				'resumen' => $this->input->post('resumen'), 
				'id_categoria' => $this->input->post('id_categoria'), 
				'id_tipo' => $this->input->post('id_tipo'), 
				'id_ver_esp' => $this->input->post('id_ver_esp'), 
				'sede' => $this->input->post('sede'), 	
			);

			if ($this->archivo_model->set_archivos($datos)) {
				$respuesta = array('error' => 0);
			} else {
				$respuesta = array('error' => 1);
			}
			
		}

		echo json_encode($respuesta);

		
	}

	public function datosSelect()
	{
		$this->load->model('especialidad_model');
		$data['especialidades']=$this->especialidad_model->get_especialidades();
		$data['tipos']=$this->db->get('tipos')->result();
		$data['categorias']=$this->db->get('categorias')->result();
		

		echo json_encode($data);
		

		
	}

}

/* End of file Archivo.php */
