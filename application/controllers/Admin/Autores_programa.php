<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Autores_programa extends CI_Controller {

	
	public function __construct()
	{
		parent::__construct();
		
		
		$this->load->model('autor_model');
		
	}
	

	public function autores_programa_listar_ajax()
	{
		$limit=$this->input->post('limit') !=null ? $this->input->post('limit'):10;
		$ofset=$this->input->post('ofset') !=null ? $this->input->post('ofset') : 0;
		$palabra_buscar=$this->input->post('palabra_buscar');

		$data=$this->autor_model->filtrar_autores($limit,$ofset,$palabra_buscar);

		echo json_encode($data);
	}


}

/* End of file Autores_programa.php */
