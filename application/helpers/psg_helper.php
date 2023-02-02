<?php defined('BASEPATH') or exit('No direct script access allowed');
if (!function_exists('nulo_si_vacio')) {
    function nulo_si_vacio($dato)
    {
        if (is_string($dato)) $dato = preg_replace('/\s+/', ' ', trim($dato));
        return is_null($dato) ? null : (empty($dato) ? null : $dato);
    }
}
if (!function_exists('mes_literal')) {
    function mes_literal($mes = 0)
    {
        switch (intval($mes)) {
            case 1:
                $resultado = 'ENERO';
                break;
            case 2:
                $resultado = 'FEBRERO';
                break;
            case 3:
                $resultado = 'MARZO';
                break;
            case 4:
                $resultado = 'ABRIL';
                break;
            case 5:
                $resultado = 'MAYO';
                break;
            case 6:
                $resultado = 'JUNIO';
                break;
            case 7:
                $resultado = 'JULIO';
                break;
            case 8:
                $resultado = 'AGOSTO';
                break;
            case 9:
                $resultado = 'SEPTIEMBRE';
                break;
            case 10:
                $resultado = 'OCTUBRE';
                break;
            case 11:
                $resultado = 'NOVIEMBRE';
                break;
            case 12:
                $resultado = 'DICIEMBRE';
                break;
            default:
                $resultado = '';
                break;
        }
        return $resultado;
    }
}

if (!function_exists('fecha_literal')) {
    function fecha_literal($fecha, $formato = 0)
    {
        $dias = array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
        $meses = array(1 => "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
        $infofecha = getdate(strtotime($fecha));
        if (empty($fecha)) {
            return ('');
        } else {
            switch ($formato) {
                case 1:
                    return ($infofecha['mday'] < 10 ? '0' : '') . $infofecha['mday'] . ' de ' . $meses[$infofecha['mon']] . ' de ' . $infofecha['year'];
                    break;
                case 2:
                    return $dias[$infofecha['wday']] . ', ' . ($infofecha['mday'] < 10 ? '0' : '') . $infofecha['mday'] . ' de ' . $meses[$infofecha['mon']] . ' de ' . $infofecha['year'];
                    break;
                case 3:
                    return $dias[$infofecha['wday']] . ', ' . ($infofecha['mday'] < 10 ? '0' : '') . $infofecha['mday'] . ' de ' . $meses[$infofecha['mon']] . ' de ' . $infofecha['year'] . ' [Hrs. ' . ($infofecha['hours'] < 10 ? '0' : '') . $infofecha['hours'] . ':' . ($infofecha['minutes'] < 10 ? '0' : '') . $infofecha['minutes'] . ']';
                    break;
                case 5:
                    return ($infofecha['mday'] < 10 ? '0' : '') . $infofecha['mday'] . ' de ' . $meses[$infofecha['mon']] . ' de ' . $infofecha['year'] . ' [Hrs. ' . ($infofecha['hours'] < 10 ? '0' : '') . $infofecha['hours'] . ':' . ($infofecha['minutes'] < 10 ? '0' : '') . $infofecha['minutes'] . ']';
                    break;
                case 9:
                    return ($infofecha['mday'] < 10 ? '0' : '') . $infofecha['mday'] . '/' . substr(strtolower($meses[$infofecha['mon']]), 0, 3);
                    break;
                case 10:
                    return $infofecha['year'];
                    break;
                case 20:
                    return $infofecha['mon'];
                    break;
                case 30:
                    return $infofecha['mday'];
                    break;
                default:
                    return date('Y-m-d H:i:s', strtotime($fecha));
                    break;
            }
        }
    }
}

if (!function_exists('formatear_fechas')) {
    function formatear_fechas($fechas, $separador, $formato = "d-m-Y", $separador_final = '')
    {
        $fechas = explode($separador, $fechas);
        foreach ($fechas as $key => $fecha) {
            $fechas[$key] = date($formato, strtotime(trim($fecha)));
        }
        $separador = empty($separador_final) ? $separador : $separador_final;
        return implode($separador, $fechas);
    }
}




if (!function_exists('titulos')) {
    function titulos($cadena = NULL)
    {
        $resultado = NULL;
        if (!is_null($cadena)) {
            $search = [' DE ', ' DEL ', ' LA ', ' LAS ', ' LOS ', ' Y ', ' E ', ' O ', ' A ', ' POR ', ' CON ', ' EN ', ' UN ', ' UNA ', ' UNO ', ' UNOS ', ' UNAS ', ' PARA ', ' DE ', ' DEL ', ' LA ', ' LAS ', ' LOS ', ' Y ', ' E ', ' O ', ' A ', ' POR ', ' CON ', ' EN ', ' UN ', ' UNA ', ' UNO ', ' UNOS ', ' UNAS ', ' PARA '];
            $replace = [' de ', ' del ', ' la ', ' las ', ' los ', ' y ', ' e ', ' o ', ' a ', ' por ', ' con ', ' en ', ' un ', ' una ', ' uno ', ' unos ', ' unas ', ' para ', ' de ', ' del ', ' la ', ' las ', ' los ', ' y ', ' e ', ' o ', ' a ', ' por ', ' con ', ' en ', ' un ', ' una ', ' uno ', ' unos ', ' unas ', ' para '];
            $resultado = mb_convert_case($cadena, MB_CASE_TITLE);
            $resultado = str_replace($search, $replace, $resultado);
        }
        return $resultado;
    }
}
if (!function_exists('numero_romano')) {
    function numero_romano($integer, $upcase = true)
    {
        $table = array(
            'M' => 1000, 'CM' => 900, 'D' => 500, 'CD' => 400, 'C' => 100,
            'XC' => 90, 'L' => 50, 'XL' => 40, 'X' => 10, 'IX' => 9,
            'V' => 5, 'IV' => 4, 'I' => 1
        );
        $return = '';
        while ($integer > 0) {
            foreach ($table as $rom => $arb) {
                if ($integer >= $arb) {
                    $integer -= $arb;
                    $return .= ($upcase ? $rom : strtolower($rom));
                    break;
                }
            }
        }
        return $return;
    }
}
if (!function_exists('romano_numero')) {

    function romano_numero($roman)
    {
        $romans = array(
            'M' => 1000, 'CM' => 900, 'D' => 500, 'CD' => 400, 'C' => 100, 'XC' => 90, 'L' => 50, 'XL' => 40, 'X' => 10, 'IX' => 9, 'V' => 5, 'IV' => 4, 'I' => 1,
        );
        $result = 0;

        foreach ($romans as $key => $value) {
            while (strpos($roman, $key) === 0) {
                $result += $value;
                $roman = substr($roman, strlen($key));
            }
        }
        return $result;
    }
}

if (!function_exists('insertar_tabla')) {
    function insertar_tabla($tabla = null, $datos = null)
    {
        $CI = &get_instance();
        return ($CI->db->insert($tabla, $datos)) ? $CI->db->insert_id() : $CI->db->error();
    }
}

if (!function_exists('seleccionar_tabla')) {
    function seleccionar_tabla($tabla = null, $condicion = null, $orden = null, $columnas = '*')
    {
        $CI = &get_instance();
        $CI->db->order_by($orden);
        $CI->db->select($columnas);
        return  $condicion !== null ? $CI->db->get_where($tabla, $condicion) : $CI->db->get($tabla);
    }
}

if (!function_exists('actualizar_tabla')) {
    function actualizar_tabla($tabla = null, $datos = null, $condicion = null)
    {
        $CI = &get_instance();
        return ($CI->db->update($tabla, $datos, $condicion)) ? true : $CI->db->error;
    }
}

if (!function_exists('eliminar_tabla')) {
    function eliminar_tabla($tabla = null, $condicion = null)
    {
        $CI = &get_instance();
        return ($CI->db->delete($tabla, $condicion)) ? true : $CI->db->error;
    }
}

if (!function_exists('existe_registro')) {
    function existe_registro($tabla = null, $condicion = null)
    {
        $CI = &get_instance();
        if (is_null(seleccionar_tabla($tabla, $condicion)->row_array())) {
            return false;
        } else {
            return true;
        }
    }
}







if (!function_exists('numero_literal')) {
    function numero_literal($num, $fem = false, $dec = true, $is_num = false)
    {
        $numOriginal = $num;
        $matuni[2] = "dos";
        $matuni[3] = "tres";
        $matuni[4] = "cuatro";
        $matuni[5] = "cinco";
        $matuni[6] = "seis";
        $matuni[7] = "siete";
        $matuni[8] = "ocho";
        $matuni[9] = "nueve";
        $matuni[10] = "diez";
        $matuni[11] = "once";
        $matuni[12] = "doce";
        $matuni[13] = "trece";
        $matuni[14] = "catorce";
        $matuni[15] = "quince";
        $matuni[16] = "dieciseis";
        $matuni[17] = "diecisiete";
        $matuni[18] = "dieciocho";
        $matuni[19] = "diecinueve";
        $matuni[20] = "veinte";
        $matunisub[2] = "dos";
        $matunisub[3] = "tres";
        $matunisub[4] = "cuatro";
        $matunisub[5] = "quin";
        $matunisub[6] = "seis";
        $matunisub[7] = "sete";
        $matunisub[8] = "ocho";
        $matunisub[9] = "nove";

        $matdec[2] = "veint";
        $matdec[3] = "treinta";
        $matdec[4] = "cuarenta";
        $matdec[5] = "cincuenta";
        $matdec[6] = "sesenta";
        $matdec[7] = "setenta";
        $matdec[8] = "ochenta";
        $matdec[9] = "noventa";
        $matsub[3] = 'mill';
        $matsub[5] = 'bill';
        $matsub[7] = 'mill';
        $matsub[9] = 'trill';
        $matsub[11] = 'mill';
        $matsub[13] = 'bill';
        $matsub[15] = 'mill';
        $matmil[4] = 'millones';
        $matmil[6] = 'billones';
        $matmil[7] = 'de billones';
        $matmil[8] = 'millones de billones';
        $matmil[10] = 'trillones';
        $matmil[11] = 'de trillones';
        $matmil[12] = 'millones de trillones';
        $matmil[13] = 'de trillones';
        $matmil[14] = 'billones de trillones';
        $matmil[15] = 'de billones de trillones';
        $matmil[16] = 'millones de billones de trillones';

        $numeroFloat = explode('.', $num);
        $num = $numeroFloat[0];
        $num = trim((string)@$num);
        if ($num[0] == '-') {
            $neg = 'menos ';
            $num = substr($num, 1);
        } else
            $neg = '';
        while ($num[0] == '0')
            $num = substr($num, 1);
        if ($num[0] < '1' or $num[0] > 9)
            $num = '0' . $num;
        $zeros = true;
        $punt = false;
        $ent = '';
        $fra = '';
        for ($c = 0; $c < strlen($num); $c++) {
            $n = $num[$c];
            if (!(strpos(".,'''", $n) === false)) {
                if ($punt)
                    break;
                else {
                    $punt = true;
                    continue;
                }
            } elseif (!(strpos('0123456789', $n) === false)) {
                if ($punt) {
                    if ($n != '0')
                        $zeros = false;
                    $fra .= $n;
                } else
                    $ent .= $n;
            } else
                break;
        }
        $ent = '     ' . $ent;
        if ($dec and $fra and !$zeros) {
            $fin = ' coma';
            for ($n = 0; $n < strlen($fra); $n++) {
                if (($s = $fra[$n]) == '0')
                    $fin .= ' cero';
                elseif ($s == '1')
                    $fin .= $fem ? ' una' : ' un';
                else
                    $fin .= ' ' . $matuni[$s];
            }
        } else
            $fin = '';
        if ((int)$ent === 0)
            return 'Cero ' . $fin;
        $tex = '';
        $sub = 0;
        $mils = 0;
        $neutro = false;
        while (($num = substr($ent, -3)) != '   ') {
            $ent = substr($ent, 0, -3);
            if (++$sub < 3 and $fem) {
                $matuni[1] = 'una';
                $subcent = 'as';
            } else {
                $matuni[1] = $neutro ? 'un' : 'uno';
                $subcent = 'os';
            }
            $t = '';
            $n2 = substr($num, 1);
            if ($n2 == '00') {
            } elseif ($n2 < 21)
                $t = ' ' . $matuni[(int)$n2];
            elseif ($n2 < 30) {
                $n3 = $num[2];
                if ($n3 != 0)
                    $t = 'i' . $matuni[$n3];
                $n2 = $num[1];
                $t = ' ' . $matdec[$n2] . $t;
            } else {
                $n3 = $num[2];
                if ($n3 != 0)
                    $t = ' y ' . $matuni[$n3];
                $n2 = $num[1];
                $t = ' ' . $matdec[$n2] . $t;
            }
            $n = $num[0];
            if ($n == 1) {
                $t = ' ciento' . $t;
                if ($is_num == true) {
                    $t = ' cien';
                }
            } elseif ($n == 5) {
                $t = ' ' . $matunisub[$n] . 'ient' . $subcent . $t;
            } elseif ($n != 0) {
                $t = ' ' . $matunisub[$n] . 'cient' . $subcent . $t;
            }
            if ($sub == 1) {
            } elseif (!isset($matsub[$sub])) {
                if ($num == 1) {
                    $t = ' mil';
                } elseif ($num > 1) {
                    $t .= ' mil';
                }
            } elseif ($num == 1) {
                $t .= ' ' . $matsub[$sub] . '&oacute;n';
            } elseif ($num > 1) {
                $t .= ' ' . $matsub[$sub] . 'ones';
            }
            if ($num == '000')
                $mils++;
            elseif ($mils != 0) {
                if (isset($matmil[$sub]))
                    $t .= ' ' . $matmil[$sub];
                $mils = 0;
            }
            $neutro = true;
            $tex = $t . $tex;
        }
        $tex = $neg . substr($tex, 1) . $fin;
        if (empty($numeroFloat[1])) {
            $numeroFloat[1] = '00';
        } else {
            $parte_decimal = (round($numOriginal, 2) - (int)$numOriginal) * 100;
        }
        $bolivianos = '/100 bolivianos';
        if ($is_num == true) {
            $bolivianos = '';
            $numeroFloat[1] = '';
        }
        if (empty($parte_decimal))
            $end_num = ucfirst($tex) . ' ' . $numeroFloat[1] . $bolivianos;
        else
            $end_num = ucfirst($tex) . ' ' . round($parte_decimal) . $bolivianos;
        return $end_num;
    }
}






if (!function_exists('imagen_base64')) {
    function imagen_base64($ruta_imagen): array
    {
        /** Codifica imagenes en base64 y devuelve el tipo de imagen y la imagen en cadena base64 */
        if (is_file($ruta_imagen) && file_exists($ruta_imagen)) {
            $tipo = pathinfo($ruta_imagen, PATHINFO_EXTENSION);
            $imagen = file_get_contents($ruta_imagen);
            return ['tipo' => $tipo, 'string_imagen' => base64_encode($imagen), 'imagen' => 'data:image/' . $tipo . ';base64,' . base64_encode($imagen)];
        } else {
            return ['msj' => 'No se encontro el archivo'];
        }
    }
}



function eliminar_acentos($cadena)
{
    //Codificamos la cadena en formato utf8 en caso de que nos de errores
    // $cadena = utf8_encode($cadena);

    //Ahora reemplazamos las letras
    $cadena = str_replace(
        array('á', 'à', 'ä', 'â', 'ª', 'Á', 'À', 'Â', 'Ä'),
        array('a', 'a', 'a', 'a', 'a', 'A', 'A', 'A', 'A'),
        $cadena
    );

    $cadena = str_replace(
        array('é', 'è', 'ë', 'ê', 'É', 'È', 'Ê', 'Ë'),
        array('e', 'e', 'e', 'e', 'E', 'E', 'E', 'E'),
        $cadena
    );

    $cadena = str_replace(
        array('í', 'ì', 'ï', 'î', 'Í', 'Ì', 'Ï', 'Î'),
        array('i', 'i', 'i', 'i', 'I', 'I', 'I', 'I'),
        $cadena
    );

    $cadena = str_replace(
        array('ó', 'ò', 'ö', 'ô', 'Ó', 'Ò', 'Ö', 'Ô'),
        array('o', 'o', 'o', 'o', 'O', 'O', 'O', 'O'),
        $cadena
    );

    $cadena = str_replace(
        array('ú', 'ù', 'ü', 'û', 'Ú', 'Ù', 'Û', 'Ü'),
        array('u', 'u', 'u', 'u', 'U', 'U', 'U', 'U'),
        $cadena
    );

    $cadena = str_replace(
        array('ñ', 'Ñ', 'ç', 'Ç'),
        array('n', 'N', 'c', 'C'),
        $cadena
    );

    return $cadena;
}











if (!function_exists('formatear_fechas_literal')) {
    function formatear_fechas_literal($fechas, $formato)
    {
        $fecha_formateada = '';
        $fechas = explode(' ', $fechas);
        foreach ($fechas as $key => $fecha) {
            $fecha_formateada .= strftime($formato, strtotime($fecha)) . ' ';
        }
        return $fecha_formateada;
    }
}






if (!function_exists('numeros_literal')) {
    function numeros_literal($numero)
    {
        $nf = new NumberFormatter("es", NumberFormatter::SPELLOUT);
		return $nf->format($numero);
    }
}


