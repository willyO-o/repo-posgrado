<?php

defined('BASEPATH') or exit('No direct script access allowed');


use PhpOffice\PhpSpreadsheet\Spreadsheet;
// use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class Reportes_documento extends CI_Controller
{


	public function __construct()
	{
		parent::__construct();

		$this->load->model('documento_model');
	}

	public function reportes_documento_generar_reporte()
	{
		//var_dump($this->input->post());

		$accion = $this->input->post('accion');
		if ($accion == null) {
			echo "ERROR: Faltan parametros para generar reportes ";
			die();
		}


		$filtros['id_especialidad'] = $this->input->post('filtro_especialidad');
		$filtros['id_autor'] = $this->input->post('filtro_autor');
		$filtros['id_tipo_documento'] = $this->input->post('filtro_tipo');
		$filtros['id_categoria'] = $this->input->post('filtro_categoria');
		$filtros['texto_buscar'] = $this->input->post('filtro_texto_buscar');
		$limit = $this->input->post('limit') != null ? $this->input->post('limit') : 10;
		$ofset = $this->input->post('ofset') != null ? $this->input->post('ofset') : 0;


		$documentos = $this->documento_model->filtrar_datos_reporte($filtros, $limit, $ofset);


		if ($accion == "pdf") {
			$this->reportes_documento_generar_reporte_pdf($documentos);
		}
		if ($accion == "excel") {
			$this->reportes_documento_generar_reporte_excel($documentos);
		}
	}

	public function reportes_documento_generar_reporte_pdf($documentos)
	{


		$this->load->library('fpdf_mc_table');

		$pdf = new Fpdf_mc_table();

		$pdf->SetImgUrl(base_url("assets/img/logo_posgrado.png"));
		$pdf->SetTitlePdf('REPORTE DE DOCUMENTOS REGISTRADOS');

		$pdf->SetWidths(array(10, 80, 15, 20, 30, 30, 18,15,26, 20));
		$pdf->SetTableHeader([
			utf8_decode("#"),
			utf8_decode("Titulo"),
			utf8_decode("Año "),
			utf8_decode("Fecha Publicacion"),
			utf8_decode("Sede"),
			utf8_decode("Autor"),
			utf8_decode("Permiso Publico"),
			utf8_decode("Nro de Paginas"),
			utf8_decode("Categoria"),
			utf8_decode("Tipo de Documento"),
			// utf8_decode("Programa"),

		

		]);
		$pdf->AddPage('L', "", 0);

		$pdf->SetAligns(['L', 'L', 'C', 'C', 'L', 'L','C']);
		$pdf->SetFont('Arial', '', 8);
		$contador = 1;
		foreach ($documentos as $fila_doc) {
			// echo count($fila_doc);
			$pdf->Row([
				$contador++,
				utf8_decode($fila_doc->titulo),
				utf8_decode($fila_doc->anio_creacion),
				utf8_decode($fila_doc->fecha_publicacion),
				utf8_decode($fila_doc->sede),
				utf8_decode($fila_doc->nombre_autor . " " . $fila_doc->paterno_autor . " " . $fila_doc->materno_autor),
				utf8_decode($fila_doc->es_publico),
				utf8_decode($fila_doc->nro_paginas),
				utf8_decode($fila_doc->categoria),
				utf8_decode($fila_doc->tipo),
				// utf8_decode($fila_doc->especialidad. " VERSION ".$fila_doc->version),


				// utf8_decode( $fila_doc->paterno_autor),

			]);
		}

		$pdf->Output('reporte_documentos_publicados.pdf', 'I');
	}



	public function reportes_documento_generar_reporte_excel($documentos)
	{
		//var_dump($documentos);

		$documento = new Spreadsheet();
		$documento->getProperties()
			->setLastModifiedBy('Wil psg')
			->setTitle('Lista de Documentos Publicados')
			->setDescription('docuemnto en Excel de los documentos publicadoos referentes a 
									tesis,  mongrafias, tesinas, etc. de la Direccion de POSGRADO UPEA');
		$documento->getActiveSheet()->getColumnDimension('A')->setWidth(5);
		$documento->getActiveSheet()->getColumnDimension('B')->setWidth(80);
		$documento->getActiveSheet()->getColumnDimension('C')->setWidth(10);
		$documento->getActiveSheet()->getColumnDimension('D')->setWidth(11);
		$documento->getActiveSheet()->getColumnDimension('E')->setWidth(15);
		$documento->getActiveSheet()->getColumnDimension('F')->setWidth(35);
		$documento->getActiveSheet()->getColumnDimension('G')->setWidth(20);
		$documento->getActiveSheet()->getColumnDimension('H')->setWidth(8);
		$documento->getActiveSheet()->getColumnDimension('I')->setWidth(35);
		$documento->getActiveSheet()->getColumnDimension('J')->setWidth(15);
		$documento->getActiveSheet()->getColumnDimension('K')->setWidth(15);
		$documento->getActiveSheet()->getColumnDimension('L')->setWidth(25);




		$documento->getActiveSheet()->getStyle('A1:N1')->applyFromArray(["font" => ["bold" => true]]);
		$documento->getActiveSheet()->getStyle('A:N')->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_TOP);

		$documento->getActiveSheet()->getStyle('A:N')->getAlignment()->setWrapText(true);

		$documento->getActiveSheet()
			->getStyle('A1:L1')
			->getFill()
			->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)
			->getStartColor()
			->setARGB('85E332');


		$hoja_calculo = $documento->getActiveSheet();

		$hoja_calculo->setTitle('Lista de Documentos Publicados');
		$encabezado = ["Nro", "Titulo", "Año Creacion", "Fecha Registro", "Sede", "Autor", "Cuenta Con Permiso para Publicar", "Nro de Paginas", "Programa","Categoria","Tipo de Documento" ,"Observaciones"];

		$hoja_calculo->fromArray($encabezado, null, 'A1');

		$contador = 1;
		$contador_fila = 2;

		foreach ($documentos as $row) {

			$hoja_calculo->setCellValueByColumnAndRow(1, $contador_fila, $contador);
			$hoja_calculo->setCellValueByColumnAndRow(2, $contador_fila, $row->titulo);
			$hoja_calculo->setCellValueByColumnAndRow(3, $contador_fila, $row->anio_creacion);
			$hoja_calculo->setCellValueByColumnAndRow(4, $contador_fila, $row->fecha_publicacion);
			$hoja_calculo->setCellValueByColumnAndRow(5, $contador_fila, $row->sede);
			$hoja_calculo->setCellValueByColumnAndRow(6, $contador_fila, $row->nombre_autor . " " . $row->paterno_autor . " " . $row->materno_autor);
			$hoja_calculo->setCellValueByColumnAndRow(7, $contador_fila, $row->es_publico);
			$hoja_calculo->setCellValueByColumnAndRow(8, $contador_fila, $row->nro_paginas);
			$hoja_calculo->setCellValueByColumnAndRow(9, $contador_fila, $row->especialidad." VERSION ".$row->version );
			$hoja_calculo->setCellValueByColumnAndRow(10, $contador_fila, $row->categoria);
			$hoja_calculo->setCellValueByColumnAndRow(11, $contador_fila, $row->tipo);
			$hoja_calculo->setCellValueByColumnAndRow(12, $contador_fila, $row->observaciones);



			$contador++;
			$contador_fila++;
		}

		$writer = new Xlsx($documento);

		$filename = 'Documentos Registrados';

		header('Content-Type: application/vnd.ms-excel');
		header('Content-Disposition: attachment;filename="' . $filename . '.xlsx"');
		header('Cache-Control: max-age=0');

		$writer->save('php://output'); // download file 
	}
}

/* End of file Reportes_documento.php */
