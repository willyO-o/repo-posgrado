<?php

defined('BASEPATH') or exit('No direct script acces allowed');

class Especialidad_model extends CI_Model
{

	public function listar_especialidades()
	{
		$this->db->from('srp_especialidades');
		$this->db->order_by('RANDOM()');
		$this->db->limit(10);
		return $this->db->get()->result();
	}





	public function get_especialidad_id(int $id_esp)
	{
		$this->db->where('id_especialidad', $id_esp);
		return $this->db->get('srp_especialidades')->row();
	}

	public function set_especialidad($datos)
	{
		$this->db->insert('srp_especialidades', $datos);
		return $this->db->insert_id();
	}
	public function update_especialidad($datos, int $id_esp)
	{
		$this->db->where('id_especialidad', $id_esp);
		return $this->db->update('srp_especialidades', $datos);
	}

	public function delete_especialidad(int $id_esp)
	{
		$this->db->where('id_especialidad', $id_esp);
		return $this->db->delete('srp_especialidades');
	}



	// versiones
	public function get_versiones()
	{
		return $this->db->get('versiones')->result();
	}

	public function get_version_id(int $id_version)
	{
		$this->db->where('id_version', $id_version);
		return $this->db->get('versiones')->row();
	}

	public function set_version($datos)
	{
		return $this->db->insert('versiones', $datos);
	}
	public function update_version($datos, int $id_version)
	{
		$this->db->where('id_version', $id_version);
		return $this->db->update('versiones', $datos);
	}

	public function delete_version(int $id_version)
	{
		$this->db->where('id_version', $id_version);
		return $this->db->delete('verisiones');
	}

	//tabla intermedia
	public function set_ver_esp($datos)
	{
		return $this->db->insert('ver_esp', $datos);
	}

	public function update_ver_esp($datos, int $id_ver_esp)
	{
		$this->db->where('id_ver_esp', $id_ver_esp);
		return $this->db->update('ver_esp', $datos);
	}

	public function buscar_especialidad(string $texto,  $es_filtro = false)
	{
		$texto = strtolower($texto);
		$this->db->select("ver_esp.id_ver_esp as id, especialidad || ' ' || version as text ");
		$this->db->from('srp_especialidades');
		$this->db->join('ver_esp', 'ver_esp.id_especialidad = srp_especialidades.id_especialidad', 'left');
		$this->db->join('versiones', 'versiones.id_version = ver_esp.id_version', 'left');
		$this->db->like('LOWER(especialidad)', $texto);
		$this->db->or_like('LOWER(version)', $texto);
		$data = $this->db->get()->result();

		if ($es_filtro) {
			array_unshift($data, (object)["id" => 0, "text" => "Todos"]);
		}

		return $data;
	}
}

/* End of file especialidad_model.php */
