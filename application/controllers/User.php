<?php

defined('BASEPATH') or exit('No direct script access allowed');

class User extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->model('usuario_model');
	}


	public function index()
	{
		$data["usuarios"] = $this->usuario_model->get_usuarios();
		echo json_encode($data);
	}
	public function new()
	{


		$password = password_hash("79515350", PASSWORD_DEFAULT, [12]);

		$datos = array(
			'usuario' => 'ctwilly1412',
			'password' => $password,
			'nombre' => "willy",
			'apellido' => "chana",
			'estado' => True,
			'id_rol' => 1
		);

		$this->usuario_model->set_usuarios($datos);
	}
	public function show()
	{
	}
	public function edit()
	{
		# code...
	}
	public function update()
	{
		# code...
	}
	public function delete()
	{
		# code...
	}
}

/* End of file User.php */
