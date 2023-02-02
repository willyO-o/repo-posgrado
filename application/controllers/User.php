<?php

defined('BASEPATH') or exit('No direct script access allowed');

class User extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		if ($this->session->id_rol!=1) {
			$respuesta['error'] = 3;
			echo json_encode($respuesta);
			die();
		}
		$this->load->model('usuario_model');
	}


	public function index()
	{
		$data["usuarios"] = $this->usuario_model->get_usuarios();
		echo json_encode($data);
	}
	public function new()
	{

		$usuario = strtoupper($this->input->post('usuario'));

		if (!$this->usuario_model->get_nombre_usuario($usuario)) {
			$password = $this->input->post('password');
			$nombre = $this->input->post('nombre');
			$apellido = $this->input->post('apellido');
			$rol = $this->input->post('rol');
			$password_hash = password_hash($password, PASSWORD_DEFAULT, [12]);
			$datos = array(
				'usuario' => $usuario,
				'password' => $password_hash,
				'nombre' => strtoupper($nombre),
				'apellido' => strtoupper($apellido),
				'estado' => True,
				'id_rol' => $rol
			);
			$insertado = $this->usuario_model->set_usuarios($datos);
			$respuesta['error'] = $insertado ? 0 : 2;
		} else {
			$respuesta['error'] = 1;
		}
		echo json_encode($respuesta);
	}

	public function estado()
	{
		$id_usuario = $this->input->post('id_usuario');
		$resultado = $this->usuario_model->estado_usuario($id_usuario);
		if ($resultado) {
			$respuesta['error'] = 0;
		} else {
			$respuesta['error'] = 1;
		}

		echo json_encode($respuesta);
	}
	public function update()
	{


		$password = $this->input->post('password');
		$id_usuario = $this->input->post('id_usuario');
		$password_hash = password_hash($password, PASSWORD_DEFAULT, [12]);
		$datos = array(
			'password' => $password_hash,
		);
		$insertado = $this->usuario_model->update_usuarios($datos, $id_usuario);
		$respuesta['error'] = $insertado ? 0 : 1;

		echo json_encode($respuesta);
	}
	public function delete()
	{
		$id_usuario = $this->input->post('id_usuario');
		$resultado = $this->usuario_model->delete_usuario($id_usuario);
		if ($resultado) {
			$respuesta['error'] = 0;
		} else {
			$respuesta['error'] = 1;
		}
		echo json_encode($respuesta);
	}

	public function roles()
	{
		$lista=seleccionar_tabla('srp_roles',null,"id_rol ASC")->result();
		
		return $this->output->set_content_type('application/json')->set_output(json_encode($lista));
	}
}

/* End of file User.php */
