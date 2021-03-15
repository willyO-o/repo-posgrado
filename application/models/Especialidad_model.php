<?php

defined('BASEPATH') OR exit('No direct script acces allowed');

class Especialidad_model extends CI_Model {

    public function get_especialidades()
    {
        return $this->db->get('especialidades')->result();
        
    }

    public function get_especialidades_id(int $id_esp)
    {
        $this->db->where('id_especialidades', $id_esp);
        return $this->db->get('especialidades')->row();
        
    }

    public function set_especialidades($datos)
    {
        return $this->db->insert('especialidades', $datos);
        
    }
    public function update_especialidades($datos,int $id_esp)
    {
        $this->db->where('id_especialidades', $id_esp);
        return $this->db->update('especialidades', $datos);
        
    }

    public function delete_especialidades(int $id_esp)
    {
        $this->db->where('id_especialidades', $id_esp);
        return $this->db->delete('especialidades');
        
    }

}

/* End of file especialidad_model.php */
