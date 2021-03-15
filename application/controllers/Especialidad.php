<?php 

defined('BASEPATH') OR exit('No direct script access allowed');

class Especialidad extends CI_Controller {
    
    public function __construct()
    {
        parent::__construct();
        $this->load->model('especialidad_model');

        
    }
    
    public function index()
    {
        $data['data']=$this->especialidad_model->get_especialidades();
    }

}

/* End of file Especialidad.php */
