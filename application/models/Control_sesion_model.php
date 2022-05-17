<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Control_sesion_model extends CI_Model {

	
	public function __construct()
	{
		parent::__construct();
		
		if(!isset($this->session->login) || !$this->session->login){

			redirect(site_url());
			die();
		}
	}
	

}

/* End of file Control_sesion_model.php */
