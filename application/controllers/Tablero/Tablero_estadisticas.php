<?php 


defined('BASEPATH') OR exit('No direct script access allowed');

class Tablero_estadisticas extends CI_Controller {


	
	public function __construct()
	{
		parent::__construct();
		
	}
	
	public function tablero_estadisticas_listar_barras($anio)
	{
		$this->load->model('estadistica_model');

		$data['barras'] = $this->estadistica_model->listar_barra($anio);
		
		echo json_encode($data);
	}
	public function tablero_estadisticas_ultimo_anio()
	{
		$this->load->model('estadistica_model');

		$data["anio"] = $this->estadistica_model->get_ultimo_anio();
		echo json_encode($data);
	}

	public function tablero_estadisticas_listar_totales()
	{
		$this->load->model('estadistica_model');

		$data['total_archivos'] = $this->estadistica_model->contar_documentos();
		$data['total_especialidades'] = $this->estadistica_model->nro_especialidades();
		$data['anios'] = $this->estadistica_model->listar_anios();

		echo json_encode($data);
	}

}

/* End of file Tablero_programa.php */
