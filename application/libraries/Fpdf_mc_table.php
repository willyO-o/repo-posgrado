<?php
require_once APPPATH . 'third_party/fpdf/fpdf.php';


class Fpdf_mc_table extends FPDF
{
	var $widths;
	var $aligns;
	var $img_url = '';
	var $title_pdf;
	var $table_header;

	function SetWidths($w)
	{
		//Set the array of column widths
		$this->widths = $w;
	}

	function SetAligns($a)
	{
		//Set the array of column alignments
		$this->aligns = $a;
	}
	function SetImgUrl($img_url)
	{
		$this->img_url = $img_url;
	}
	function SetTitlePdf($title_pdf)
	{
		$this->title_pdf = $title_pdf;
	}
	function SetTableHeader($table_header)
	{
		$this->table_header = $table_header;
	}

	function Row($data)
	{
		//Calculate the height of the row
		$nb = 0;
		for ($i = 0; $i < count($data); $i++)
			$nb = max($nb, $this->NbLines($this->widths[$i], $data[$i]));
		$h = 5 * $nb;
		//Issue a page break first if needed
		$this->CheckPageBreak($h);
		//Draw the cells of the row
		for ($i = 0; $i < count($data); $i++) {
			$w = $this->widths[$i];
			$a = isset($this->aligns[$i]) ? $this->aligns[$i] : 'L';
			//Save the current position
			$x = $this->GetX();
			$y = $this->GetY();
			//Draw the border
			$this->Rect($x, $y, $w, $h);
			//Print the text
			$this->MultiCell($w, 5, $data[$i], 0, $a);
			//Put the position to the right of the cell
			$this->SetXY($x + $w, $y);
		}
		//Go to the next line
		$this->Ln($h);
	}

	function CheckPageBreak($h)
	{
		//If the height h would cause an overflow, add a new page immediately
		if ($this->GetY() + $h > $this->PageBreakTrigger)
			$this->AddPage($this->CurOrientation);


	}

	function NbLines($w, $txt)
	{
		//Computes the number of lines a MultiCell of width w will take
		$cw = &$this->CurrentFont['cw'];
		if ($w == 0)
			$w = $this->w - $this->rMargin - $this->x;
		$wmax = ($w - 2 * $this->cMargin) * 1000 / $this->FontSize;
		$s = str_replace("\r", '', $txt);
		$nb = strlen($s);
		if ($nb > 0 and $s[$nb - 1] == "\n")
			$nb--;
		$sep = -1;
		$i = 0;
		$j = 0;
		$l = 0;
		$nl = 1;
		while ($i < $nb) {
			$c = $s[$i];
			if ($c == "\n") {
				$i++;
				$sep = -1;
				$j = $i;
				$l = 0;
				$nl++;
				continue;
			}
			if ($c == ' ')
				$sep = $i;
			$l += $cw[$c];
			if ($l > $wmax) {
				if ($sep == -1) {
					if ($i == $j)
						$i++;
				} else
					$i = $sep + 1;
				$sep = -1;
				$j = $i;
				$l = 0;
				$nl++;
			} else
				$i++;
		}
		return $nl;
	}

	function Header()
	{

		$this->SetFont('Arial', 'B', 14);
		$this->Image($this->img_url, 10, 10, 45);
		$this->Cell(0, 0, $this->title_pdf, 0, 1, 'C');
		$this->SetFont('Arial', 'B', 9);
		$this->Ln(20);
		$this->SetAligns(['C', 'L', 'C', 'C', 'C', 'C', 'C', 'C']);
		$this->Row($this->table_header);

		//$this->Image(base_url("assets/img/posgrado.png"), 10, 10, -300);


		// $this->Cell(0, 0, 'REPORTE DE DOCUMENTOS PUBLICADOS', 0, 1, 'C');


		//Table with  rows and 4 columns
		// $this->SetWidths(array(10,70, 15, 20, 30,30,20));



		// $this->Row([
		// 	utf8_decode("#"),
		// 	utf8_decode("Titulo"),
		// 	utf8_decode("Año "),
		// 	utf8_decode("Fecha Publicacion"),
		// 	utf8_decode("Sede"),
		// 	utf8_decode("Autor"),
		// 	utf8_decode("Permiso Publico"),

		// ]);


	}
}
