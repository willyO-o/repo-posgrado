<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Archivo_model extends CI_Model {

    public function get_archivos()
    {
        return $this->db->get('view_archivos')->result();    
    }
	public function get_archivos_public()
	{
		$sql= 'SELECT id_archivo, nombre, titulo, autor, anio_creacion, substr(resumen, 1, 250) as resumen
				FROM  archivos
				JOIN metadatos 
				USING(id_archivo)';
		return $this->db->query($sql)->result();
		 
		
	}

    public function get_archivo_id(int $id_archivo)
    {
        $this->db->where('id_archivo', $id_archivo);
        return $this->db->get('archivos')->row();
        
    }
	public function get_view_archivo_uuid($uuid)
	{
		$this->db->where('uuid', $uuid);
		return $this->db->get('view_archivos')->row();
	}

    public function set_archivos($datos)
    {
        $this->db->insert('archivos', $datos);
		return $this->db->insert_id();
		 
        
    }
	public function set_metadatos($datos)
    {
        $this->db->insert('metadatos', $datos);
		return $this->db->insert_id();
		 
        
    }
    public function update_metadatos($datos,int $id_archivo)
    {
        $this->db->where('id_archivo', $id_archivo);
        return $this->db->update('metadatos', $datos);
        
    }

    public function delete_archivo(int $id_archivo)
    {
        $this->db->where('id_archivo', $id_archivo);
        return $this->db->delete('archivos');
        
    }

	public function get_ver_est_id(int $id_ver_esp)
    {
        $this->db->where('id_ver_esp', $id_ver_esp);
        return $this->db->get('ver_esp')->row();
        
    }

	//******************  categorias y tipos de  documentos***************

	public function get_categorias()
	{
		return $this->db->get('categorias')->result();
	}
	public function get_tipos()
	{
		return $this->db->get('tipos')->result();
	}

	public function get_busqueda($sql)
	{
		return $this->db->query($sql)->result();
	}

	public function get_barras()
	{
		$sql="SELECT Mes,IFNULL(t,0) 'trancri',IFNULL(c,0) 'conso' FROM
		(SELECT 1 as IdMes , 'Enero'     as Mes UNION
		SELECT 2 as IdMes , 'Febrero'    as Mes UNION
		SELECT 3 as IdMes , 'Marzo'      as Mes UNION
		SELECT 4 as IdMes , 'Abril'      as Mes UNION
		SELECT 5 as IdMes , 'Mayo'       as Mes UNION
		SELECT 6 as IdMes , 'Junio'      as Mes UNION
		SELECT 7 as IdMes , 'Julio'      as Mes UNION
		SELECT 8 as IdMes , 'Agosto'     as Mes UNION
		SELECT 9 as IdMes , 'Septiembre' as Mes UNION
		SELECT 10 as IdMes, 'Octubre'    as Mes UNION
		SELECT 11 as IdMes, 'Noviembre'  as Mes UNION
		SELECT 12 as IdMes, 'Diciembre'  as Mes) TM
		LEFT JOIN (SELECT month(fechReg) 'idMes', COUNT(*) 't' 
					from boleta
					GROUP BY idMes )TT USING(idMes)
		LEFT JOIN (SELECT month(fechReg) 'idMes', COUNT(*) 'c' 
					from boleta_consolidado
					GROUP BY idMes )TC USING(idMes)";
	}

}

/* End of file archivo_model.php */
