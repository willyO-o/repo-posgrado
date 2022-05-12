<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Autor_model extends CI_Model
{


	public function __construct()
	{
		parent::__construct();
	}

	public function listar_autores()
	{
		return $this->db->get('srp_autores');
	}

	public function filtrar_autores($limit, $ofset, $palabra_buscar)
	{
		$palabra_buscar = strtolower($palabra_buscar);
		$this->db->start_cache();
		$this->db->from('srp_autores');

		if ($palabra_buscar != '') {
			$this->db->like('LOWER(nombre_autor)', $palabra_buscar);
			$this->db->or_like('LOWER(paterno_autor)', $palabra_buscar);
			$this->db->or_like('LOWER(materno_autor)', $palabra_buscar);
			$this->db->or_like('ci_autor', $palabra_buscar);
		}

		$this->db->order_by('id_autor', 'desc');
		$this->db->stop_cache();
		$resultado["total_resultados"] = $this->db->count_all_results();

		$this->db->limit($limit, $ofset);
		$resultado["autores"] = $this->db->get()->result();
		$resultado["q"] = $this->db->last_query();

		$this->db->flush_cache();
		return $resultado;
	}

	public function insertar_autores( $datos_autor)
	{
		$this->db->insert('srp_autores', $datos_autor);
		return $this->db->insert_id();
	}

	public function actualizar_autores($id_autor, $datos_autor)
	{
		$this->db->where('id_autor', $id_autor);
		$this->db->update('srp_autores', $datos_autor);
		return $this->db->insert_id();
	}

	public function buscar_autor( $texto,  $es_filtro = false)
	{
		$psg = $this->load->database('psg', TRUE);
		
		$texto = strtolower($texto);


		// $psg->select("id_persona as id, nombre || ' '|| paterno || ' ' ||materno|| ', ' || ci as text");
		// $psg->from('principal.psg_persona');
		// $psg->like("LOWER(nombre)", $texto);
		// $psg->or_like("LOWER(paterno)", $texto);
		// $psg->or_like("LOWER(materno)", $texto);
		// $psg->or_like("LOWER(ci)", $texto);
		// $psg->limit(15);
		
		// $data = $psg->get()->result();

		$this->db->select("id_autor as id, nombre_autor || ' '|| paterno_autor || ' ' ||materno_autor|| ', ' || ci_autor as text");
		$this->db->from('srp_autores');
		$this->db->like("LOWER(nombre_autor)", $texto);
		$this->db->or_like("LOWER(paterno_autor)", $texto);
		$this->db->or_like("LOWER(materno_autor)", $texto);
		$this->db->or_like("LOWER(ci_autor)", $texto);
		$data = $this->db->get()->result();

		if ($es_filtro) {
			array_unshift($data, (object)["id" => 0, "text" => "Todos"]);
		}

		return $data;
	}

	public function listar_autores_publico()
	{
		$this->db->select('id_autor');
		$this->db->from('srp_documentos');
		$this->db->where('estado_documento !=', 'eliminado');
		$this->db->where('es_publico', 'SI');
		$this->db->order_by('random()');
		$this->db->limit(20);
		$sub_query = $this->db->get_compiled_select();

		
		$this->db->select("paterno_autor||' '||materno_autor||' ,'||nombre_autor as autor , id_autor  ");
		$this->db->from('srp_autores');
		$this->db->where(" id_autor  IN ($sub_query)", NULL, FALSE);
		$resultado["autores"]=$this->db->get()->result();
		$resultado["q"] = $this->db->last_query();

		return $resultado;

	}

	public function filtrar_autores_reporte($limit, $ofset, $palabra_buscar)
	{
		$palabra_buscar = strtolower($palabra_buscar);
		$this->db->start_cache();
		$this->db->from('srp_autores');

		if ($palabra_buscar != '') {
			$this->db->like('LOWER(nombre_autor)', $palabra_buscar);
			$this->db->or_like('LOWER(paterno_autor)', $palabra_buscar);
			$this->db->or_like('LOWER(materno_autor)', $palabra_buscar);
			$this->db->or_like('ci_autor', $palabra_buscar);
		}

		$this->db->order_by('id_autor', 'desc');
		$this->db->stop_cache();
		$resultado["total_resultados"] = $this->db->count_all_results();

		$this->db->limit($limit, $ofset);
		$resultado["autores"] = $this->db->get()->result();
		$resultado["q"] = $this->db->last_query();

		$this->db->flush_cache();
		return $resultado;
	}
}

/* End of file Autor_model.php */
