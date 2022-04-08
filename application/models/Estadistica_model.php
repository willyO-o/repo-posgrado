<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Estadistica_model extends CI_Model
{

	//contador de documentos subidos, cantidad especialidades etc

	public function nro_archivos()
	{

		return $this->db->count_all("srp_documentos");
	}
	public function nro_especialidades()
	{
		return $this->db->count_all("srp_especialidades");
	}


	public function get_barra($anio)
	{

		$sql = "SELECT mes,coalesce(t,0) as publicados  
			FROM meses
			LEFT JOIN (SELECT to_char(fecha_publicacion, 'MM')  as id_mes, COUNT(*) as t 
							from srp_documentos
							WHERE to_char(fecha_publicacion, 'yyyy') ='" . $anio . "'
							GROUP BY id_mes) CC USING(id_mes) ORDER BY id_mes ASC";
		return $this->db->query($sql)->result();
	}

	public function get_anios()
	{
		$sql = "SELECT to_char(fecha_publicacion,'yyyy') as anios 
			FROM srp_documentos
			GROUP BY  anios 
			ORDER BY anios DESC";
		return $this->db->query($sql)->result();
	}

	public function get_ultimo_anio()
	{
		$sql = "SELECT max(to_char(fecha_publicacion,'yyyy')) as max_anio FROM srp_documentos ";
		return $this->db->query($sql)->row()->max_anio;
	}
}

/* End of file Estadistica_model.php */
