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
	public function get_barras()
	{
		$sql="SELECT Mes,coalesce(t,0) as publicados  FROM
			(SELECT '01' as IdMes , 'Enero'     as Mes UNION
			SELECT '02' as IdMes , 'Febrero'    as Mes UNION
			SELECT '03' as IdMes , 'Marzo'      as Mes UNION
			SELECT '04' as IdMes , 'Abril'      as Mes UNION
			SELECT '05' as IdMes , 'Mayo'       as Mes UNION
			SELECT '06' as IdMes , 'Junio'      as Mes UNION
			SELECT '07' as IdMes , 'Julio'      as Mes UNION
			SELECT '08' as IdMes , 'Agosto'     as Mes UNION
			SELECT '09' as IdMes , 'Septiembre' as Mes UNION
			SELECT '10' as IdMes, 'Octubre'    as Mes UNION
			SELECT '11' as IdMes, 'Noviembre'  as Mes UNION
			SELECT '12' as IdMes, 'Diciembre'  as Mes) TM
			LEFT JOIN (SELECT to_char(fecha_publicacion, 'MM')  as idMes, COUNT(*) as t 
					from metadatos
					WHERE to_char(fecha_publicacion, 'yyyy') ='2020'
					GROUP BY idMes ) TT USING(idMes) ORDER BY idMes ASC";
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


}

/* End of file Estadistica_model.php */
