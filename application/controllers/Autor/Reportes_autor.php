<?php

defined('BASEPATH') or exit('No direct script access allowed');


use PhpOffice\PhpSpreadsheet\Spreadsheet;
// use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class Reportes_autor extends CI_Controller
{


	public function __construct()
	{
		parent::__construct();

		$this->load->model('autor_model');
	}

	public function reportes_autor_generar_reporte()
	{
		//var_dump($this->input->post());

		$accion = $this->input->post('accion');
		if ($accion == null) {
			echo "ERROR: Faltan parametros para generar reportes ";
			die();
		}

		$texto_buscar= $this->input->post('filtro_texto_buscar');
		$limit = $this->input->post('limit') != null ? $this->input->post('limit') : 10;
		$ofset = $this->input->post('ofset') != null ? $this->input->post('ofset') : 0;


		$persona = $this->autor_model->filtrar_autores_reporte($limit, $ofset,$texto_buscar);


		if ($accion == "pdf") {
			$this->reportes_autor_generar_reporte_pdf($persona);
		}
		if ($accion == "excel") {
			$this->reportes_autor_generar_reporte_excel($persona);
		}
	}

	public function reportes_autor_generar_reporte_pdf($persona)
	{


		$this->load->library('fpdf_mc_table');

		$pdf = new Fpdf_mc_table();
		$pdf->SetImgUrl(base_url("assets/img/logo_posgrado.png"));

		$pdf->SetTitlePdf('REPORTE DE AUTORES REGISTRADOS');
		$pdf->SetWidths(array(10,30, 25, 25, 25,20,35));
		$pdf->SetTableHeader([
			utf8_decode("#"),
			utf8_decode("Nombre(s)"),
			utf8_decode("Ap. Paterno"),
			utf8_decode("Ap. Materno"),
			utf8_decode("C.I."),
			utf8_decode("Ocupacion"),
			utf8_decode("Estado"),

		]);

		$pdf->AddPage('P', "", 0);
		$pdf->SetAligns(['C', 'L', 'L', 'L', 'L', 'L',]);
		$pdf->SetFont('Arial', '', 9);
		$contador = 1;
		foreach ($persona as $fila_doc) {
			// echo count($fila_doc);
			$pdf->Row([
				$contador++,
				utf8_decode($fila_doc->nombre_autor),
				utf8_decode($fila_doc->paterno_autor),
				utf8_decode($fila_doc->materno_autor),
				utf8_decode($fila_doc->ci_autor),
				utf8_decode($fila_doc->grado_academico),
				utf8_decode($fila_doc->estado_autor),

				// utf8_decode( $fila_doc->paterno_autor),

			]);
		}

		$pdf->Output('reporte_documentos_publicados.pdf', 'I');
	}



	public function reportes_autor_generar_reporte_excel($persona)
	{
		//var_dump($persona);

		$documento = new Spreadsheet();
		$documento->getProperties()
			->setLastModifiedBy('Wil psg')
			->setTitle('Lista de Autores Posgraduantes Registrados')
			->setDescription('docuemnto en Excel de las personaas Autores de los documentos publicadoos referentes a 
									tesis,  mongrafias, tesinas, etc. de la Direccion de POSGRADO UPEA');
		$documento->getActiveSheet()->getColumnDimension('A')->setWidth(10);
		$documento->getActiveSheet()->getColumnDimension('B')->setWidth(30);
		$documento->getActiveSheet()->getColumnDimension('C')->setWidth(25);
		$documento->getActiveSheet()->getColumnDimension('D')->setWidth(25);
		$documento->getActiveSheet()->getColumnDimension('E')->setWidth(25);
		$documento->getActiveSheet()->getColumnDimension('F')->setWidth(20);
		$documento->getActiveSheet()->getColumnDimension('F')->setWidth(35);


		$hoja_calculo = $documento->getActiveSheet();

		$hoja_calculo->setTitle('Lista de Documentos Publicados');
		$encabezado = ["Nro", "Nombre(s)", "Ap. Paterno", "Ap. Materno", "C.I.", "Ocupacion","Estado"];

		$hoja_calculo->fromArray($encabezado, null, 'A1');

		$contador = 1;
		$contador_fila = 2;

		foreach ($persona as $row) {

			$hoja_calculo->setCellValueByColumnAndRow(1, $contador_fila, $contador);
			$hoja_calculo->setCellValueByColumnAndRow(2, $contador_fila, $row->nombre_autor);
			$hoja_calculo->setCellValueByColumnAndRow(3, $contador_fila, $row->paterno_autor);
			$hoja_calculo->setCellValueByColumnAndRow(4, $contador_fila, $row->materno_autor);
			$hoja_calculo->setCellValueByColumnAndRow(5, $contador_fila, $row->ci_autor);
			$hoja_calculo->setCellValueByColumnAndRow(6, $contador_fila, $row->grado_academico);
			$hoja_calculo->setCellValueByColumnAndRow(7, $contador_fila, $row->estado_autor);

			$contador++;
			$contador_fila++;
		}

		$writer = new Xlsx($documento);

		$filename = 'Documentos Publicados';

		header('Content-Type: application/vnd.ms-excel');
		header('Content-Disposition: attachment;filename="' . $filename . '.xlsx"');
		header('Cache-Control: max-age=0');

		$writer->save('php://output'); // download file 
	}
}

/* End of file Reportes_documento.php */

/* End of file Reportes_autor.php */
