<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Principal extends CI_Controller {


	public function index()
	{
		$data['consulta']=$this->db->get('roles')->result();
		$this->load->view('layouts/publico/base_publico',$data);
	}

	public function admin()
	{
		$this->load->library('session');
		if (isset($this->session->id) && $this->session->login) {
			$data['consulta']=$this->db->get('roles')->result();
			$this->load->view('base',$data);
		} else {
			redirect(base_url());
		}
		
		
	}
}
