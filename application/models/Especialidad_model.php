<?php

defined('BASEPATH') OR exit('No direct script acces allowed');

class Especialidad_model extends CI_Model {

    public function get_especialidades()
    {
        return $this->db->get('view_especialidades')->result();
        
    }

    public function get_especialidad_id(int $id_esp)
    {
        $this->db->where('id_especialidades', $id_esp);
        return $this->db->get('especialidades')->row();
        
    }

    public function set_especialidad($datos)
    {
		$this->db->insert('especialidades', $datos);
        return $this->db->insert_id();
		
        
    }
    public function update_especialidad($datos,int $id_esp)
    {
        $this->db->where('id_especialidades', $id_esp);
        return $this->db->update('especialidades', $datos);
        
    }

    public function delete_especialidad(int $id_esp)
    {
        $this->db->where('id_especialidades', $id_esp);
        return $this->db->delete('especialidades');
        
    }



	// versiones
	public function get_versiones()
    {
        return $this->db->get('verisiones')->result();
        
    }

    public function get_version_id(int $id_version)
    {
        $this->db->where('id_version', $id_version);
        return $this->db->get('verisiones')->row();
        
    }

    public function set_version($datos)
    {
        return $this->db->insert('verisiones', $datos);
        
    }
    public function update_version($datos,int $id_version)
    {
        $this->db->where('id_version', $id_version);
        return $this->db->update('verisiones', $datos);
        
    }

    public function delete_version(int $id_version)
    {
        $this->db->where('id_version', $id_version);
        return $this->db->delete('verisiones');
        
    }

	//tabla intermedia
	public function set_ver_esp($datos)
    {
        return $this->db->insert('ver_esp', $datos);
        
    }

}

/* End of file especialidad_model.php */
