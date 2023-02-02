<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Usuario_model extends CI_Model {

    public function get_usuarios()
    {
		$this->db->select("*");
		$this->db->from("srp_usuarios u");
		$this->db->join("srp_roles r", "r.id_rol = u.id_rol");
        return $this->db->get()->result();
        
    }
	public function get_nombre_usuario($usuario)
	{
		$this->db->where('usuario', $usuario);
		return $this->db->get('srp_usuarios')->row();
		
	}

    public function get_usuario_id(int $id_user)
    {
        $this->db->where('id_usuario', $id_user);
        return $this->db->get('srp_usuarios')->row();
        
    }

    public function set_usuarios($datos)
    {
        return $this->db->insert('srp_usuarios', $datos);
        
    }
    public function update_usuarios($datos,int $id_user)
    {
        $this->db->where('id_usuario', $id_user);
        return $this->db->update('srp_usuarios', $datos);
        
    }

    public function delete_usuario(int $id_user)
    {
        $this->db->where('id_usuario', $id_user);
        return $this->db->delete('srp_usuarios');
        
    }
    public function estado_usuario(int $id_user)
    {
		$this->db->set('estado', 'NOT estado', FALSE);
        $this->db->where('id_usuario', $id_user);
        return $this->db->update('srp_usuarios');  
    }

	public function get_permisos($id_usuario)
	{
		$this->db->select("p.id_permiso, permiso, ruta, orden, separador");
		$this->db->from("srp_permiso p");
		$this->db->join("srp_rol_permiso rp", "rp.id_permiso = p.id_permiso");
		$this->db->join("srp_usuarios u", "u.id_rol = rp.id_rol");
		$this->db->where('u.id_usuario', $id_usuario);
		$this->db->where('p.estado','ACTIVO');
		$this->db->order_by('p.orden', 'ASC');
		$permisos=$this->db->get();
		return empty($permisos->result()) ? [] : $permisos->result();
	}
}

/* End of file Usuario_model.php */
