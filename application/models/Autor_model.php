<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Autor_model extends CI_Model
{


	private $url_destino="https://posgrado.upea.bo/";

	public function __construct()
	{
		parent::__construct();
	}

	public function listar_autores()
	{
		return $this->db->get('srp_autores');
	}

	public function buscar_autor($texto,  $es_filtro = false)
	{

		$this->db->select("id_autor as id, nombre_autor || ' '|| paterno_autor || ' ' ||materno_autor|| ', ' || ci_autor as text");
		$this->db->from('srp_autores');
		$this->db->like("LOWER(nombre_autor)", $texto);
		$this->db->or_like("LOWER(paterno_autor)", $texto);
		$this->db->or_like("LOWER(materno_autor)", $texto);
		$this->db->or_like("LOWER(ci_autor)", $texto);
		$this->db->or_like("LOWER(nombre_autor || ' '|| paterno_autor || ' ' ||materno_autor)", $texto);

		$data = $this->db->get()->result();
		$array_aux = [];
		foreach ($data as $persona) {
			$persona->id = base64_encode($persona->id);
			$array_aux[] = $persona;
		}

		if ($es_filtro) {
			array_unshift($array_aux, (object)["id" => 0, "text" => "Todos"]);
		}

		return $array_aux;
	}

	public function filtrar_autores($limit, $ofset, $palabra_buscar)
	{
		$palabra_buscar = strtolower($palabra_buscar);
		$this->db->start_cache();
		$this->db->from('srp_autores');
		$this->db->where('estado_autor !=', "ELIMINADO");
		
		if ($palabra_buscar != '') {
			$this->db->like('LOWER(nombre_autor)', $palabra_buscar);
			$this->db->or_like('LOWER(paterno_autor)', $palabra_buscar);
			$this->db->or_like('LOWER(materno_autor)', $palabra_buscar);
			$this->db->or_like('ci_autor', $palabra_buscar);
		}

		$this->db->stop_cache();
		$resultado["total_resultados"] = $this->db->count_all_results();
		$this->db->order_by('id_autor', 'desc');

		$this->db->limit($limit, $ofset);
		$resultado["autores"] = $this->db->get()->result();
		$resultado["q"] = $this->db->last_query();

		$this->db->flush_cache();
		return $resultado;
	}

	public function insertar_autores($datos_autor, $es_manual=false)
	{
		if ($es_manual) {
			$this->db->set('id_autor', "nextval('serial_autores_manual')", FALSE); //false escape
			$this->db->set('nombre_autor', $datos_autor["nombre_autor"]);
			$this->db->set('ci_autor', $datos_autor["ci_autor"]);
			$this->db->set('paterno_autor', $datos_autor["paterno_autor"]);
			$this->db->set('materno_autor', $datos_autor["materno_autor"]);
			$this->db->set('grado_academico', $datos_autor["grado_academico"]);
			$this->db->set('estado_autor', $datos_autor["estado_autor"]);


			return $this->db->insert("srp_autores");
		} else {
			return $this->db->insert('srp_autores', $datos_autor);
		}
		
	}

	public function actualizar_autores($id_autor, $datos_autor)
	{
		$this->db->where('id_autor', $id_autor);
		$this->db->update('srp_autores', $datos_autor);
		return $this->db->affected_rows();
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
		$resultado["autores"] = $this->db->get()->result();
		$resultado["q"] = $this->db->last_query();

		return $resultado;
	}

	public function filtrar_autores_reporte($limit, $ofset, $palabra_buscar)
	{
		$palabra_buscar = strtolower($palabra_buscar);
		$this->db->start_cache();
		$this->db->select('*');
		$this->db->from('srp_autores');

		if ($palabra_buscar != '') {
			$this->db->like('LOWER(nombre_autor)', $palabra_buscar);
			$this->db->or_like('LOWER(paterno_autor)', $palabra_buscar);
			$this->db->or_like('LOWER(materno_autor)', $palabra_buscar);
			$this->db->or_like('ci_autor', $palabra_buscar);
		}

		$this->db->stop_cache();
		$resultado["total_resultados"] = $this->db->count_all_results();
		$this->db->order_by('id_autor', 'desc');

		// $this->db->limit($limit, $ofset);
		$resultado= $this->db->get()->result();

		$this->db->flush_cache();
		return $resultado;
	}

	public function verificar_autor($id_autor)
	{
		$this->db->where('id_autor', $id_autor);
		$this->db->from('srp_autores');
		return $this->db->count_all_results();
	}

	/////////////////********************   autores psg */

	public function buscar_autor_psg($texto,  $es_filtro = false)
	{
		$psg = $this->load->database('psg', TRUE);

		$texto = strtolower($texto);


		$psg->select("id_persona as id, nombre || ' '|| paterno || ' ' ||materno|| ', ' || ci as text");
		$psg->from('principal.psg_persona');
		$psg->like("LOWER(nombre)", $texto);
		$psg->or_like("LOWER(paterno)", $texto);
		$psg->or_like("LOWER(materno)", $texto);
		$psg->or_like("LOWER(ci)", $texto);
		$psg->or_like("LOWER( nombre || ' '|| paterno || ' ' ||materno)", $texto);

		$psg->limit(15);

		$data = $psg->get()->result();

		// $this->db->select("id_autor as id, nombre_autor || ' '|| paterno_autor || ' ' ||materno_autor|| ', ' || ci_autor as text");
		// $this->db->from('srp_autores');
		// $this->db->like("LOWER(nombre_autor)", $texto);
		// $this->db->or_like("LOWER(paterno_autor)", $texto);
		// $this->db->or_like("LOWER(materno_autor)", $texto);
		// $this->db->or_like("LOWER(ci_autor)", $texto);
		// $data = $this->db->get()->result();
		$array_aux = [];
		foreach ($data as $persona) {
			$persona->id = base64_encode($persona->id);
			$array_aux[] = $persona;
		}

		if ($es_filtro) {
			array_unshift($array_aux, (object)["id" => 0, "text" => "Todos"]);
		}

		return $data;
	}

	public function listar_autor_id_psg($id_persona)
	{

		$psg = $this->load->database('psg', TRUE);

		$psg->select("id_persona , nombre   , paterno ,materno, ci, oficio_trabajo ");
		$psg->from('principal.psg_persona');
		$psg->where('id_persona', $id_persona);

		$persona = $psg->get()->row();

		$persona->id_persona = base64_encode($persona->id_persona);

		return $persona;
	}


	public function autor_url($id_autor)
	{
		$persona = curl_init();

		// corregir el error SSL certificate problem: self signed certificate
		curl_setopt($persona, CURLOPT_URL, $this->url_destino."API/V1/repositorio/listarPersona?authorizacion=2aaf44f48588015297845d50adaeb0bePSG&idPersona=$id_autor");

		curl_setopt($persona, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($persona, CURLOPT_SSL_VERIFYHOST, false);

		curl_setopt($persona, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($persona, CURLOPT_CUSTOMREQUEST, 'GET');

		$respuesta = curl_exec($persona);
		curl_close($persona);

		return $respuesta;
		
	}
}

/* End of file Autor_model.php */
