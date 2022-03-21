<?php 

defined('BASEPATH') OR exit('No direct script access allowed');

class Tipo_model extends CI_Model {

	
	public function __construct()
	{
		parent::__construct();
		
	}

	public function listar_tipos($es_option=false)
	{
		$resultado= $this->db->get('tipos')->result();
		if($es_option){
			array_unshift($resultado,(Object)["id_tipo"=>0,"tipo"=>"Todos"]);
		}

		return $resultado;
	}
	

}

/* End of file Tipo_model.php */
