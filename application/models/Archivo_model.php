<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Archivo_model extends CI_Model {

    public function get_archivos()
    {
        return $this->db->get('archivos')->result();    
    }

    public function get_archivo_id(int $id_archivo)
    {
        $this->db->where('id_archivo', $id_archivo);
        return $this->db->get('archivos')->row();
        
    }

    public function set_archivos($datos)
    {
        return $this->db->insert('archivos', $datos);
        
    }
    public function update_archivos($datos,int $id_archivo)
    {
        $this->db->where('id_archivo', $id_archivo);
        return $this->db->update('archivos', $datos);
        
    }

    public function delete_archivo(int $id_archivo)
    {
        $this->db->where('id_archivo', $id_archivo);
        return $this->db->delete('archivos');
        
    }



}

/* End of file archivo_model.php */
