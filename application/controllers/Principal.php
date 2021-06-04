<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Principal extends CI_Controller
{
	
	public function __construct()
	{
		parent::__construct();
		$this->load->library('session');
	}
	


	public function index()
	{
		$this->load->view('layouts/publico/base_publico');
	}

	public function admin()
	{
		
		if (isset($this->session->id) && $this->session->login) {
			$data['usuario'] = $this->session->userdata();

			$this->load->view('base', $data);
		} else {
			redirect(base_url());
		}
	}
}
