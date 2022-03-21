<?php 

defined('BASEPATH') OR exit('No direct script access allowed');

class Categoria_model extends CI_Model {

	
	public function __construct()
	{
		parent::__construct();
		
	}

	public function buscar_categoria(string $texto)
	{
		
		$this->db->select("id_categoria as id, categoria  ");
		
	}
	public function listar_categorias($es_option=false)
	{
		$resultado=$this->db->get('categorias')->result();
		if($es_option){
			array_unshift($resultado,(Object)["id_categoria"=>0,"categoria"=>"TODOS"]);
		}

		return $resultado;
	}
	

}

/* End of file Categoria_model.php */
