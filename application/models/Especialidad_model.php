<?php

defined('BASEPATH') or exit('No direct script acces allowed');

class Especialidad_model extends CI_Model
{

	public function listar_especialidades()
	{
		$this->db->from('public.srp_especialidades');
		$this->db->order_by('RANDOM()');
		$this->db->limit(10);
		return $this->db->get()->result();



	}

	public function filtrar_especialidades($limit, $ofset, $palabra_buscar)
	{
		$palabra_buscar = strtolower($palabra_buscar);
		$this->db->start_cache();
		$this->db->from('srp_especialidades');
		$this->db->where('estado_especialidad !=', "ELIMINADO");
		

		if ($palabra_buscar != '') {
			$this->db->like('LOWER(especialidad)', $palabra_buscar);
		}

		$this->db->stop_cache();
		$resultado["total_resultados"] = $this->db->count_all_results();
		$this->db->order_by('id_especialidad', 'desc');

		$this->db->limit($limit, $ofset);

		$resultado["especialidades"] = $this->db->get()->result();

		$this->db->flush_cache();
		return $resultado;
	}


	public function verificar_especialidad_id($id_especialidad)
	{
		$this->db->where('id_especialidad', $id_especialidad);
		$this->db->from('srp_especialidades');
		return $this->db->count_all_results();
	}

	public function verificar_nombre_especialidad($especialidad)
	{
		$this->db->where('especialidad', $especialidad);
		$this->db->from('srp_especialidades');
		return $this->db->count_all_results();
	}


	public function buscar_especialidad( $texto,  $es_filtro = false)
	{



		$texto = strtolower($texto);
		$this->db->select("id_especialidad as id, especialidad  as text ");
		$this->db->from('srp_especialidades');
		$this->db->like('LOWER(especialidad)', $texto);
		$data = $this->db->get()->result();

		if ($es_filtro) {
			array_unshift($data, (object)["id" => 0, "text" => "Todos"]);
		}

		return $data;
	}


	public function get_especialidad_id(int $id_esp)
	{
		$this->db->where('id_especialidad', $id_esp);
		return $this->db->get('srp_especialidades')->row();
	}

	public function set_especialidad($datos, $es_manual = false)
	{
		if ($es_manual) {
			$this->db->set('id_especialidad', "nextval('serial_especialidades')", FALSE); //false escape
			$this->db->set('especialidad', $datos["especialidad"]);
			$this->db->set('estado_especialidad', "REGISTRADO");
			return  $this->db->insert('srp_especialidades');
		} else {
			return $this->db->insert('srp_especialidades', $datos);
			
		}
	}
	public function update_especialidad($id_esp, $datos)
	{
		$this->db->where('id_especialidad', $id_esp);
		return $this->db->update('srp_especialidades', $datos);
	}

	public function delete_especialidad( $id_esp)
	{
		$this->db->where('id_especialidad', $id_esp);
		$this->db->update('srp_especialidades', ["estado_especialidad"=>"ELIMINADO"]);
		
		return $this->db->affected_rows();
		
	}


	// base de datos  psg

	public function buscar_especialidad_psg(string $texto,  $es_filtro = false)
	{
		$psg = $this->load->database('psg', TRUE);

		$texto = strtolower($texto);


		$psg->select("id_planificacion_programa as id, descripcion_grado_academico||' EN  '||nombre_programa as text");
		$psg->from('public.psg_vista_programas');
		$psg->like("LOWER(descripcion_grado_academico)", $texto);
		$psg->or_like("LOWER(nombre_programa)", $texto);
		$psg->or_like("LOWER(descripcion_grado_academico||' '||nombre_programa)", $texto);

		$psg->limit(15);

		$data = $psg->get()->result();


		// $texto = strtolower($texto);
		// $this->db->select("ver_esp.id_ver_esp as id, especialidad || ' ' || version as text ");
		// $this->db->from('srp_especialidades');
		// $this->db->join('ver_esp', 'ver_esp.id_especialidad = srp_especialidades.id_especialidad', 'left');
		// $this->db->join('versiones', 'versiones.id_version = ver_esp.id_version', 'left');
		// $this->db->like('LOWER(especialidad)', $texto);
		// $this->db->or_like('LOWER(version)', $texto);
		// $data = $this->db->get()->result();

		if ($es_filtro) {
			array_unshift($data, (object)["id" => 0, "text" => "Todos"]);
		}

		return $data;
	}

	public function listar_especialidad_id_psg($id_especialidad)
	{
		$psg = $this->load->database('psg', TRUE);

		$psg->select("id_planificacion_programa , descripcion_grado_academico, nombre_programa ");
		$psg->from('public.psg_vista_programas');
		$psg->where('id_planificacion_programa', $id_especialidad);

		$especialidad = $psg->get()->row();
		return $especialidad;
	}
}

/* End of file especialidad_model.php */
