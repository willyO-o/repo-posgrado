<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Autor_programa extends CI_Controller {

	
	public function __construct()
	{
		parent::__construct();
		
		
		$this->load->model('autor_model');
		
	}
	

	public function autor_programa_listar_ajax()
	{
		$limit=$this->input->post('limit') !=null ? $this->input->post('limit'):10;
		$ofset=$this->input->post('ofset') !=null ? $this->input->post('ofset') : 0;
		$palabra_buscar=$this->input->post('palabra_buscar');

		$data=$this->autor_model->filtrar_autores($limit,$ofset,$palabra_buscar);

		echo json_encode($data);
	}

	public function autor_programa_registrar()
	{
		$datos_autor['ci_autor']= strtoupper($this->input->post('ci_autor')) ;
		$datos_autor['nombre_autor']=strtoupper($this->input->post('nombre_autor'));
		$datos_autor['paterno_autor']=strtoupper($this->input->post('paterno_autor'));
		$datos_autor['materno_autor']=strtoupper($this->input->post('materno_autor'));

		$resultado=$this->autor_model->insertar_autores( $datos_autor);
		if($resultado>0){
			$respuesta['error']=0;
			$respuesta['mensaje']="Autor registrado..";

		}else{
			$respuesta['error']=1;
			$respuesta['mensaje']="Ocurrio un error intente de nuevo";
		}

		echo json_encode($respuesta);
		
	}

	public function autor_programa_actualizar()
	{
		$datos_autor['ci_autor']= strtoupper($this->input->post('ci_autor')) ;
		$datos_autor['nombre_autor']=strtoupper($this->input->post('nombre_autor'));
		$datos_autor['paterno_autor']=strtoupper($this->input->post('paterno_autor'));
		$datos_autor['materno_autor']=strtoupper($this->input->post('materno_autor'));
		$id_autor = $this->input->post('id_autor');
		

		$resultado=$this->autor_model->actualizar_autores( $id_autor, $datos_autor);
		if($resultado>0){
			$respuesta['error']=0;
			$respuesta['mensaje']="Autor Actualizado..";

		}else{
			$respuesta['error']=1;
			$respuesta['mensaje']="Ocurrio un error intente de nuevo";
		}

		echo json_encode($respuesta);
		
	}


}

/* End of file Autores_programa.php */
