<?php 

defined('BASEPATH') OR exit('No direct script access allowed');

class Especialidad extends CI_Controller {
    
    public function __construct()
    {
        parent::__construct();
        $this->load->model('especialidad_model');
		$this->request = json_decode(file_get_contents('php://input'));
        
    }
    
    public function index()
    {
        $data['versiones']=$this->especialidad_model->get_versiones();
		$data['especialidades']=$this->especialidad_model->get_especialidades();
		
		echo json_encode($data);
    }

	public function save()
	{
		// echo json_encode($this->request);
		// exit();

		$datos = array(
			'especialidad' => strtoupper($this->request->espec), 
		);
		$id_version=$this->request->id_version; 
		$id_especialidad=$this->especialidad_model->set_especialidad($datos);
		if ($id_especialidad) {
			$data = array('id_especialidad' =>  $id_especialidad, 'id_version'=> $id_version);
			if ($this->especialidad_model->set_ver_esp($data)) {
				$respuesta['respuesta']=true;
			}else{
				$respuesta['respuesta']=false;
			}	
		}else{
			$respuesta['respuesta']=false;
		}

		echo json_encode($respuesta);
	}

}

/* End of file Especialidad.php */
