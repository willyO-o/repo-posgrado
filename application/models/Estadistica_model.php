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
	public function nroArchivosMEs()
	{
		$sql="SELECT COUNT(*) as nro FROM metadatos 
			 WHERE to_char(fecha_publicacion, 'MM') = to_char(NOW(), 'MM') 
			 AND to_char(fecha_publicacion, 'YYYY')=to_char(NOW(), 'YYYY')";
		return $this->db->query($sql)->row()->nro;
		
	}


}

/* End of file Estadistica_model.php */
