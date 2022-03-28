<?php 

defined('BASEPATH') OR exit('No direct script access allowed');

class Autor_model extends CI_Model {

	
	public function __construct()
	{
		parent::__construct();
		
	}

	public function listar_autores()
	{
		return $this->db->get('srp_autores');

	}

	public function insertar_autores(array $datos_autor)
	{
		$this->db->insert('srp_autores', $datos_autor);
		return $this->db->insert_id();
	}

	public function buscar_autor(string $texto, bool $es_filtro=false)
	{
		$texto = strtolower($texto);
		$this->db->select("id_autor as id, nombre_autor || ' '|| paterno_autor || ' ' ||materno_autor|| ', ' || ci_autor as text");
		$this->db->from('srp_autores');
		$this->db->like("LOWER(nombre_autor)",$texto);
		$this->db->or_like("LOWER(paterno_autor)",$texto);
		$this->db->or_like("LOWER(materno_autor)",$texto);
		$this->db->or_like("LOWER(ci_autor)",$texto);
		$data = $this->db->get()->result();

		if ($es_filtro) {
			array_unshift($data, (object)["id" => 0, "text" => "Todos"]);
		}

		return $data;

	}
	
	

}

/* End of file Autor_model.php */
