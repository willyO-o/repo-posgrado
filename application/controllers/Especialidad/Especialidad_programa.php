<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Especialidad_programa extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->model('control_sesion_model');

		$this->load->model('especialidad_model');
	}

	public function index()
	{
		$data['versiones'] = $this->especialidad_model->get_versiones();
		$data['especialidades'] = $this->especialidad_model->get_especialidades();

		echo json_encode($data);
	}


	public function especialidad_programa_listar_especialidades_ajax()
	{
		$limit = $this->input->post('limit') != null ? $limit = $this->input->post('limit') : 10;
		$ofset = $this->input->post('ofset') != null ? $this->input->post('ofset') : 0;
		$palabra_buscar = $this->input->post('palabra_buscar');

		$data = $this->especialidad_model->filtrar_especialidades($limit, $ofset, $palabra_buscar);

		echo json_encode($data);
	}

	public function especialidad_programa_registrar()
	{

		$this->load->library('form_validation');




		$this->form_validation->set_rules(
			'especialidad',
			'Especialidad',
			'required',
			['required' => 'El campo %s. es requerido']
		);


		if ($this->form_validation->run()) {
			$accion = $this->input->post('accion');
			$datos = array(
				'especialidad' => strtoupper($this->input->post("especialidad")),
			);
			if ($accion == "nuevo") {

				$datos["estado_especialidad"]="REGISTRADO";
				$resultado = $this->especialidad_model->set_especialidad($datos,true);
				if ($resultado) {
					$respuesta = [
						"exito" => true,
						"mensaje" => "Programa Registrado Exitosamente."
					];
				} else {
					$respuesta = [
						"exito" => false,
						"mensaje" => "Ocurrio un error, intente nuevamente."
					];
				}
			} else {
				$id_especialidad=$this->input->post('id_especialidad');
				$datos["estado_especialidad"]="ACTUALIZADO";
				
				$resultado = $this->especialidad_model->update_especialidad($id_especialidad,$datos);
				if ($resultado) {
					$respuesta = [
						"exito" => true,
						"mensaje" => "Programa Actualizado Exitosamente."
					];
				} else {
					$respuesta = [
						"exito" => false,
						"mensaje" => "Ocurrio un error, intente nuevamente."
					];
				}
			}
		} else {
			$respuesta = [
				"exito" => false,
				"mensaje" => validation_errors(),
			];
		}


		echo json_encode($respuesta);
	}



	public function especialidad_programa_eliminar()
	{
		$id_especialidad = $this->input->post('id_especialidad');
		
		$respuesta["exito"]=$this->especialidad_model->delete_especialidad($id_especialidad);
		echo json_encode($respuesta);
	}


	public function selectArchivo()
	{

		$data['especialidades'] = $this->especialidad_model->get_especialidades();

		echo json_encode($data);
	}
	//versiones
	public function getVersiones()
	{
		$data['versiones'] = $this->especialidad_model->get_versiones();
		echo json_encode($data);
	}
	public function registrarVersion()
	{
		$datos = array(
			'version' => strtoupper($this->request->version),
		);
		$resultado = $this->especialidad_model->set_version($datos);
		$respuesta['error'] = ($resultado) ? false : true;

		echo json_encode($respuesta);
	}
	public function updateVersion()
	{
		$datos = array(
			'version' => strtoupper($this->request->version),
		);
		$id_version = $this->request->id_version;
		$resultado = $this->especialidad_model->update_version($datos, $id_version);
		$respuesta['error'] = ($resultado) ? false : true;

		echo json_encode($respuesta);
	}
	public function deleteVersion()
	{
		$id_version = $this->request->id_version;
		$resultado = $this->especialidad_model->delete_version($id_version);
		$respuesta['error'] = ($resultado) ? false : true;
		echo json_encode($respuesta);
	}
}

/* End of file Especialidad.php */
