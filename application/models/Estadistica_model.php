<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Estadistica_model extends CI_Model {

	//contador de documentos subidos, cantidad especialidades etc

	public function nroArchivos()
	{
		$sql="SELECT COUNT(*) as nro FROM archivos";
		return $this->db->query($sql)->row()->nro;
		
	}
	public function nroEspecialidades()
	{
		$sql="SELECT COUNT(*) as nro FROM especialidades";
		return $this->db->query($sql)->row()->nro;
		
	}


	public function get_barra($anio)
	{
		$sql="SELECT mes,coalesce(t,0) as publicados  
			FROM meses
			LEFT JOIN (SELECT to_char(fecha_publicacion, 'MM')  as id_mes, COUNT(*) as t 
							from metadatos
							WHERE to_char(fecha_publicacion, 'yyyy') ='".$anio."'
							GROUP BY id_mes) CC USING(id_mes) ORDER BY id_mes ASC";
		return $this->db->query($sql)->result();
	}

	public function get_anios()
	{
		$sql="SELECT to_char(fecha_publicacion,'yyyy') as anios 
			FROM metadatos
			GROUP BY  anios";
		return $this->db->query($sql)->result();
	}


}

/* End of file Estadistica_model.php */
