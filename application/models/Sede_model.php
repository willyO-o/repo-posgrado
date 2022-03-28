<?php 

defined('BASEPATH') OR exit('No direct script access allowed');

class Sede_model extends CI_Model {

	
	public function __construct()
	{
		parent::__construct();
		
	}

	public function listar_sedes()
	{
		return $this->db->get('srp_sedes')->result();
		
	}
	

}

/* End of file Sede_model.php */
