<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Archivo extends CI_Controller {

	
	public function __construct()
	{
		parent::__construct();
		$config['file_name']="TE-0003";
		$config['upload_path']= './uploads/';
		$config['allowed_types']= 'pdf';
		$config['max_size']  = 32000;
		$this->load->library('upload', $config);
		//$this->request = json_decode(file_get_contents('php://input'));
	}
	

	public function index()
	{
		
		
		
		
	}
	public function save()
	{
		//var_dump($this->upload);

		//var_dump($_POST);
		//echo ($this->input->post('nombre'));
		//die();
		
		if ( ! $this->upload->do_upload('archivo'))
		{
				$error = array('error' => $this->upload->display_errors());

				
		}
		else
		{
				$error = array('upload_data' => $this->upload->data());

			
		}
		echo json_encode($error);
	}

}

/* End of file Archivo.php */
