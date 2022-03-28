<?php 

defined('BASEPATH') OR exit('No direct script access allowed');

class Tipo_model extends CI_Model {

	
	public function __construct()
	{
		parent::__construct();
		
	}

	public function listar_tipos()
	{
		$resultado= $this->db->get('srp_tipos')->result();
		return $resultado;
	}
	

}

/* End of file Tipo_model.php */
