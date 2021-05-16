<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Auth extends CI_Controller
{


	public function __construct()
	{
		parent::__construct();
		$this->load->model('usuario_model');
		$this->load->library('session');
	}

	public function login()
	{
		$usuario = strtoupper($this->input->post('usuario'));
		$password = $this->input->post('password');

		$datos_usuario = $this->usuario_model->get_nombre_usuario($usuario);


		if ($datos_usuario && password_verify($password, $datos_usuario->password)) {

			$this->session->set_userdata('nombre', $datos_usuario->nombre);
			$this->session->set_userdata('apellido', $datos_usuario->apellido);
			$this->session->set_userdata('id', $datos_usuario->id_usuario);
			$this->session->set_userdata('id_rol', $datos_usuario->id_rol);
			$this->session->set_userdata('login', true);
			$respuesta['error'] = 0;
		} else {
			$respuesta['error'] = 1;
		}


		echo json_encode($respuesta);
	}
	public function logout()
	{
		$this->session->sess_destroy();
		redirect(base_url());
	}
}

/* End of file Auth.php */
