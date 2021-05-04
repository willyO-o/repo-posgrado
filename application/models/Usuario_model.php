<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Usuario_model extends CI_Model {

    public function get_usuarios()
    {
        return $this->db->get('usuarios')->result();
        
    }
	public function get_nombre_usuario($usuario)
	{
		$this->db->where('usuario', $usuario);
		return $this->db->get('usuarios')->row();
		
	}

    public function get_usuario_id(int $id_user)
    {
        $this->db->where('id_usuario', $id_user);
        return $this->db->get('usuarios')->row();
        
    }

    public function set_usuarios($datos)
    {
        return $this->db->insert('usuarios', $datos);
        
    }
    public function update_usuarios($datos,int $id_user)
    {
        $this->db->where('id_usuario', $id_user);
        return $this->db->update('usuarios', $datos);
        
    }

    public function delete_usuario(int $id_user)
    {
        $this->db->where('id_usuario', $id_user);
        return $this->db->delete('usuarios');
        
    }
    public function estado_usuario(int $id_user)
    {
		$this->db->set('estado', 'NOT estado', FALSE);
        $this->db->where('id_usuario', $id_user);
        return $this->db->update('usuarios');  
    }
}

/* End of file Usuario_model.php */
