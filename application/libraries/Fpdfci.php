<?php 
require_once APPPATH.'third_party/fpdf/fpdf.php';
class Fpdfci {
   	//funciones que queremos implementar en Miclase.
	public $fpdf;
	

    public function __construct()
    {
    	$this->fpdf = new FPDF();
	}	

	// Los siguientes metodos son para tener mas estructurado la creacion de pdf

	public function generarCabecera()
	{
		$this->fpdf->AddPage('P','A4',0);
		$this->fpdf->SetFont('Arial','B',16);
	}

	public function generarPieDePagina()
	{

	}

}

?>
