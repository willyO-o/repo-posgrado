<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {


	public function index()
	{
		$data['consulta']=$this->db->get('roles')->result();
		
		
		$this->load->view('base',$data);
	}
}
