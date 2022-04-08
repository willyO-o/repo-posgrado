
 <?php if (!defined('BASEPATH')) exit('No direct script access allowed');

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class Reporte_posgraduante_excel extends Spreadsheet
{
    public function __construct()
    {
        parent::__construct();
    }

    public function lista_posgraduante($data=null)
    {
		$datos_planificacion_asignacion_modulo_programa = $data['datos_planificacion_asignacion_modulo_programa'];
		$datos_persona_docente = $data['datos_persona_docente'];
		$lista_posgraduante = $data['lista_posgraduante'];
		$nro_resolucion = $data['nro_resolucion'];
		
        $this->setActiveSheetIndex(0);
        $this->getActiveSheet()->setTitle('Lista de Posgraduantes');
		
		$this->setActiveSheetIndex(0)->mergeCells('A1:J1')->setCellValue('A1', 'Universidad Pública de El Alto');
		 // Fuente de la primera fila en negrita
        $boldArray = array('font' => array('bold' => false,'name' => 'Edwardian Script ITC','size' => 28));
        $this->getActiveSheet()->getStyle('A1:A1')->applyFromArray($boldArray)->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
		
		$this->setActiveSheetIndex(0)->mergeCells('A2:J2')->setCellValue('A2', 'Creada por Ley 2115 del 5 de Septiembre de 2000 y Autonoma por Ley 2556 del 12 de Noviembre de 2003');
        // Fuente de la primera fila en negrita
        $boldArray = array('font' => array('bold' => false,'name' => 'Times New Roman','size' => 8));
        $this->getActiveSheet()->getStyle('A2:A2')->applyFromArray($boldArray)->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
			
			
        $this->getActiveSheet()->mergeCells('A3:J3')->setCellValue("A3", 'POSGRADO');
		// Fuente de la primera fila en negrita
        $boldArray = array('font' => array('bold' => true,'name' => 'Arial','size' => 21));
        $this->getActiveSheet()->getStyle('A3:J3')->applyFromArray($boldArray)->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
			
			
        $this->getActiveSheet()->mergeCells('A4:J4')->setCellValue("A4", 'LISTA DE POSGRADUANTES');
		// Fuente de la primera fila en negrita
        $boldArray = array('font' => array('bold' => true,'name' => 'Arial','size' => 21));
        $this->getActiveSheet()->getStyle('A4:J4')->applyFromArray($boldArray)->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
			
			
        $this->getActiveSheet()->setCellValue("A5", 'Posgrado :'.$datos_planificacion_asignacion_modulo_programa->descripcion_grado_academico);
        // Fuente de la primera fila en negrita
        $boldArray = array('font' => array('bold' => true,'name' => 'Arial','size' => 12,5));
        $this->getActiveSheet()->getStyle('A5')->applyFromArray($boldArray)->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT);
			
			
		$this->getActiveSheet()->setCellValue("A6", 'Programa: ' . $datos_planificacion_asignacion_modulo_programa->nombre_programa);
        // Fuente de la primera fila en negrita
        $boldArray = array('font' => array('bold' => true,'name' => 'Arial','size' => 12,5));
        $this->getActiveSheet()->getStyle('A6')->applyFromArray($boldArray)->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT);
			
			
		$this->getActiveSheet()->setCellValue("A7", 'Modulo: ' . $datos_planificacion_asignacion_modulo_programa->numero_modulo);
        // Fuente de la primera fila en negrita
        $boldArray = array('font' => array('bold' => true,'name' => 'Arial','size' => 12,5));
        $this->getActiveSheet()->getStyle('A7')->applyFromArray($boldArray)->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT);
			
			
		$this->getActiveSheet()->setCellValue("G7", 'Modalidad: ' . $datos_planificacion_asignacion_modulo_programa->nombre_tipo_programa);
        // Fuente de la primera fila en negrita
        $boldArray = array('font' => array('bold' => true,'name' => 'Arial','size' => 12,5));
        $this->getActiveSheet()->getStyle('G7')->applyFromArray($boldArray)->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT);
			
			
		$this->getActiveSheet()->setCellValue("A8", 'Docente: ' . $datos_persona_docente->abreviatura . ' ' . $datos_persona_docente->paterno . ' ' . $datos_persona_docente->materno . ' ' . $datos_persona_docente->nombre);
        // Fuente de la primera fila en negrita
        $boldArray = array('font' => array('bold' => true,'name' => 'Arial','size' => 12,5));
        $this->getActiveSheet()->getStyle('A8')->applyFromArray($boldArray)->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT);
			
			
		$this->getActiveSheet()->setCellValue("G8", 'Resolución CEFORPI N°: ' . $nro_resolucion);
        // Fuente de la primera fila en negrita
        $boldArray = array('font' => array('bold' => true,'name' => 'Arial','size' => 12,5));
        $this->getActiveSheet()->getStyle('G8')->applyFromArray($boldArray)->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT);
			
			
		$this->getActiveSheet()->setCellValue("A9", 'Nombramiento Docente Posgrado: DPG-CA-VCR-' . $datos_planificacion_asignacion_modulo_programa->nro_nombramiento . '/' . $datos_planificacion_asignacion_modulo_programa->gestion);
        // Fuente de la primera fila en negrita
        $boldArray = array('font' => array('bold' => true,'name' => 'Arial','size' => 12,5));
        $this->getActiveSheet()->getStyle('A9')->applyFromArray($boldArray)->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT);
			
			
		$this->getActiveSheet()->setCellValue("G9", 'Paralelo: ' . $datos_planificacion_asignacion_modulo_programa->paralelo);
        // Fuente de la primera fila en negrita
        $boldArray = array('font' => array('bold' => true,'name' => 'Arial','size' => 12,5));
        $this->getActiveSheet()->getStyle('G9')->applyFromArray($boldArray)->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT);
			
			
		$this->getActiveSheet()->setCellValue("A10", 'Fecha de Inicio: ' . $datos_planificacion_asignacion_modulo_programa->fecha_inicio.' Fecha de Conclusión: ' . $datos_planificacion_asignacion_modulo_programa->fecha_fin);
        // Fuente de la primera fila en negrita
        $boldArray = array('font' => array('bold' => true,'name' => 'Arial','size' => 12,5));
        $this->getActiveSheet()->getStyle('A10')->applyFromArray($boldArray)->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT);
			
			
		$this->getActiveSheet()->setCellValue("G10", 'Gestión: ' . $datos_planificacion_asignacion_modulo_programa->gestion);
        // Fuente de la primera fila en negrita
        $boldArray = array('font' => array('bold' => true,'name' => 'Arial','size' => 12,5));
        $this->getActiveSheet()->getStyle('G10')->applyFromArray($boldArray)->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT);
			
		$this->setActiveSheetIndex(0)->mergeCells('A11:A12')->setCellValue('A11', 'N°');
		 // Fuente de la primera fila en negrita
        $boldArray = array('font' => array('bold' => true,'name' => 'Arial','size' => 9));
        $this->getActiveSheet()->getStyle('A11:A12')->applyFromArray($boldArray)->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
			
			
		$this->setActiveSheetIndex(0)->mergeCells('B11:D11')->setCellValue('B11', 'NÓMINA DE POSGRADUANTES');
		 // Fuente de la primera fila en negrita
        $boldArray = array('font' => array('bold' => true,'name' => 'Arial','size' => 9));
        $this->getActiveSheet()->getStyle('B11:D11')->applyFromArray($boldArray)->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
			
		
		$this->setActiveSheetIndex(0)->setCellValue('B12', 'APELLIDO PATERNO');
		 // Fuente de la primera fila en negrita
        $boldArray = array('font' => array('bold' => true,'name' => 'Arial','size' => 6,5));
        $this->getActiveSheet()->getStyle('B12')->applyFromArray($boldArray)->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
			
			
		$this->setActiveSheetIndex(0)->setCellValue('C12', 'APELLIDO MATERNO');
		 // Fuente de la primera fila en negrita
        $boldArray = array('font' => array('bold' => true,'name' => 'Arial','size' => 6,5));
        $this->getActiveSheet()->getStyle('C12')->applyFromArray($boldArray)->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
			
		$this->setActiveSheetIndex(0)->setCellValue('D12', 'NOMBRE(S)');
		 // Fuente de la primera fila en negrita
        $boldArray = array('font' => array('bold' => true,'name' => 'Arial','size' => 6,5));
        $this->getActiveSheet()->getStyle('D12')->applyFromArray($boldArray)->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
		
		$this->setActiveSheetIndex(0)->mergeCells('E11:E12')->setCellValue('E11', 'N° DE CEDULA DE IDENTIDAD');
		 // Fuente de la primera fila en negrita
        $boldArray = array('font' => array('bold' => true,'name' => 'Arial','size' => 6));
        $this->getActiveSheet()->getStyle('E11:E12')->applyFromArray($boldArray)->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
			
		$this->setActiveSheetIndex(0)->mergeCells('F11:F12')->setCellValue('F11', 'EXP.');
		 // Fuente de la primera fila en negrita
        $boldArray = array('font' => array('bold' => true,'name' => 'Arial','size' => 6));
        $this->getActiveSheet()->getStyle('F11:F12')->applyFromArray($boldArray)->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
			
		$this->setActiveSheetIndex(0)->mergeCells('G11:G12')->setCellValue('G11', 'C.F. s/100 pts.');
		 // Fuente de la primera fila en negrita
        $boldArray = array('font' => array('bold' => true,'name' => 'Arial','size' => 6));
        $this->getActiveSheet()->getStyle('G11:G12')->applyFromArray($boldArray)->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
			
		$this->setActiveSheetIndex(0)->mergeCells('H11:I12')->setCellValue('H11', 'CALIFICACIÓN LITERAL');
		 // Fuente de la primera fila en negrita
        $boldArray = array('font' => array('bold' => true,'name' => 'Arial','size' => 7));
        $this->getActiveSheet()->getStyle('H11:I12')->applyFromArray($boldArray)->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
			

		$this->setActiveSheetIndex(0)->mergeCells('J11:J12')->setCellValue('J11', 'RESULTADO');
		 // Fuente de la primera fila en negrita
        $boldArray = array('font' => array('bold' => true,'name' => 'Arial','size' => 8));
        $this->getActiveSheet()->getStyle('J11:J12')->applyFromArray($boldArray)->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
			
        $this->getActiveSheet()->getColumnDimension('A')->setWidth(4);
        $this->getActiveSheet()->getColumnDimension('B')->setWidth(20);
        $this->getActiveSheet()->getColumnDimension('C')->setWidth(20);
        $this->getActiveSheet()->getColumnDimension('D')->setWidth(20);
        $this->getActiveSheet()->getColumnDimension('E')->setWidth(15);
        $this->getActiveSheet()->getColumnDimension('F')->setWidth(10);
        $this->getActiveSheet()->getColumnDimension('G')->setWidth(10);
        $this->getActiveSheet()->getColumnDimension('H')->setWidth(20);
        $this->getActiveSheet()->getColumnDimension('J')->setWidth(15);
        //$this->getActiveSheet()->getStyle("A" . $contador . ":H" . $contador)->getFont()->setBold(true);
	
		$contador = 13; 
		$x=1;

        if($lista_posgraduante != null){
            foreach($lista_posgraduante as $lista_posgraduante_fila)
            {
                $nota_final_modulo = $lista_posgraduante_fila->nota_final_modulo;
                $nota_final_literal = (!empty($nota_final_modulo)) ? numero_literal($nota_final_modulo, '', '', true) : '';
                
                $this->getActiveSheet()->setCellValue("A" . $contador, ($x++));
                $this->getActiveSheet()->setCellValue("B" . $contador, $lista_posgraduante_fila->paterno);           
                $this->getActiveSheet()->setCellValue("C" . $contador, $lista_posgraduante_fila->materno);           
                $this->getActiveSheet()->setCellValue("D" . $contador, $lista_posgraduante_fila->nombre);           
                $this->getActiveSheet()->setCellValue("E" . $contador, $lista_posgraduante_fila->ci);           
                $this->getActiveSheet()->setCellValue("F" . $contador, $lista_posgraduante_fila->expedido);           
                $this->getActiveSheet()->setCellValue("G" . $contador, $nota_final_modulo);           
                $this->getActiveSheet()->mergeCells("H". $contador.":I".$contador)->setCellValue("H" . $contador, $nota_final_literal);           
                $this->getActiveSheet()->setCellValue("J" . $contador, estado_nota_final_modulo($nota_final_modulo));            
                $contador++;
            }
        }else{            
            $this->setActiveSheetIndex(0)->mergeCells('A13:J13')->setCellValue('A13', 'NO HAY ESTUDIANTES INSCRITOS EN EL PROGRAMA');
            $boldArray = array('font' => array('bold' => true,'name' => 'Arial','size' => 9));
            $this->getActiveSheet()->getStyle('A13:J13')->applyFromArray($boldArray)->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
        }

        $rango="A11:J".$contador;
        $styleArray = [
        'borders' => ['allBorders' => ['borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THICK,
        'color' => ['argb' => '000000'],]]    
        ];
        $this->getActiveSheet()->getStyle($rango)->applyFromArray($styleArray);
        $hoy = date("Ymdhis");
        $filename = 'reporte_inscritos_' . str_replace(array(' ', '|'), '_', $hoy);
        $writer = new Xlsx($this);
        header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment;filename="'. $filename .'.xlsx"');
        header('Cache-Control: max-age=0');
		ob_end_clean();
        $writer->save('php://output');

    }

}
