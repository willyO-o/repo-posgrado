<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Archivo_model extends CI_Model {

    public function get_archivos()
    {
        return $this->db->get('view_archivos')->result();    
    }

    public function get_archivo_id(int $id_archivo)
    {
        $this->db->where('id_archivo', $id_archivo);
        return $this->db->get('archivos')->row();
        
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


}

/* End of file archivo_model.php */
