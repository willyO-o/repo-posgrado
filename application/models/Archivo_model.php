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


}

/* End of file archivo_model.php */
