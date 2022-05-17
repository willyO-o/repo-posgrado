<?php


defined('BASEPATH') or exit('No direct script access allowed');

class Autor_programa extends CI_Controller
{


	public function __construct()
	{
		parent::__construct();

		$this->load->model('control_sesion_model');
		

		$this->load->model('autor_model');
	}


	public function autor_programa_listar_ajax()
	{
		$limit = $this->input->post('limit') != null ? $this->input->post('limit') : 10;
		$ofset = $this->input->post('ofset') != null ? $this->input->post('ofset') : 0;
		$palabra_buscar = $this->input->post('palabra_buscar');

		$data = $this->autor_model->filtrar_autores($limit, $ofset, $palabra_buscar);

		echo json_encode($data);
	}

	public function autor_programa_registrar()
	{

		$this->load->library('form_validation');

		$this->form_validation->set_rules(
			'ci_autor',
			'C.I. Autor',
			'required',
			['required' => 'El campo %s. es requerido']
		);

		$this->form_validation->set_rules(
			'nombre_autor',
			'Nombre(s) Autor',
			'required',
			['required' => 'El campo %s. es requerido']

		);
		$this->form_validation->set_rules(
			'paterno_autor',
			'Apellido Paterno del Autor',
			'required',
			['required' => 'El campo %s. es requerido']

		);
		$this->form_validation->set_rules(
			'materno_autor',
			'Apellido Materno del Autor',
			'required',
			['required' => 'El campo %s. es requerido']

		);


		if ($this->form_validation->run()) {

			$datos_autor['ci_autor'] = strtoupper($this->input->post('ci_autor'));
			$datos_autor['nombre_autor'] = strtoupper($this->input->post('nombre_autor'));
			$datos_autor['paterno_autor'] = strtoupper($this->input->post('paterno_autor'));
			$datos_autor['materno_autor'] = strtoupper($this->input->post('materno_autor'));
			$datos_autor['grado_academico'] = strtoupper($this->input->post('grado_academico'));

			

			$accion = $this->input->post('accion');

			if ($accion == "nuevo") {
				$datos_autor['estado_autor'] = "REGISTRADO";

				$resultado = $this->autor_model->insertar_autores($datos_autor, true);

				if ($resultado) {
					$respuesta=["exito"=>true , "mensaje"=> "Autor registrado Correctamente."];
				} else {
					$respuesta=["exito"=>false , "mensaje"=> "Ocurrio un error, no se Pudo procesar el Registro."];
				}
			} else {
				$datos_autor['estado_autor'] = "ACTUALIZADO";

				$id_autor= $this->input->post('id_autor');
				$resultado = $this->autor_model->actualizar_autores($id_autor, $datos_autor);

				if ($resultado) {
					$respuesta=["exito"=>true , "mensaje"=> "Autor Actualizado Correctamente."];
				} else {
					$respuesta=["exito"=>false , "mensaje"=> "Ocurrio un error, no se Pudo procesar la Actualizacion."];
				}
			}
		} else {
			$respuesta=["exito"=>false , "mensaje"=> validation_errors()];

		}

		echo json_encode($respuesta);
	}

	public function autor_programa_eliminar()
	{

		$id_autor = $this->input->post('id_autor');

		$datos_autor["estado_autor"]="ELIMINADO";
		$respuesta["exito"] = $this->autor_model->actualizar_autores($id_autor, $datos_autor);


		echo json_encode($respuesta);
	}
}

/* End of file Autores_programa.php */
