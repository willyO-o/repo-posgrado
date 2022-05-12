<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Documento_model extends CI_Model
{



	public function filtrar_datos($filtros,  $limit,  $ofset,  $es_admin = false)
	{
		$filtros = (object)$filtros;
		$this->db->start_cache();
		$this->db->select('SUBSTRING( titulo,0,70) as titulo, anio_creacion, resumen,  
							anio_creacion, fecha_publicacion,   sede_ciudad as sede,   id_documento , nombre_autor, paterno_autor, materno_autor ');
		$this->db->from('srp_documentos');
		$this->db->join('srp_autores', 'srp_autores.id_autor = srp_documentos.id_autor', 'inner');
		$this->db->join('srp_sedes', 'srp_sedes.id_sede = srp_documentos.id_sede', 'inner');


		if (!$es_admin) {
			$this->db->where('srp_documentos.estado_documento !=', "eliminado");
		}

		if ($filtros->texto_buscar != "") {
			$this->db->like("titulo", strtoupper($filtros->texto_buscar));
			//	$this->db->or_like("autor", strtoupper($filtros->texto_buscar));
		}

		if ($filtros->id_especialidad != 0) {
			$this->db->where('srp_documentos.id_ver_esp', $filtros->id_especialidad);
		}
		if ($filtros->id_categoria != 0) {
			$this->db->where('srp_documentos.id_categoria', $filtros->id_categoria);
		}
		if ($filtros->id_tipo_documento != 0) {
			$this->db->where('srp_documentos.id_tipo', $filtros->id_tipo_documento);
		}
		if ($filtros->id_autor != 0) {
			$this->db->where('srp_documentos.id_autor', $filtros->id_autor);
		}


		$this->db->stop_cache();
		$resultado["total_resultados"] = $this->db->count_all_results();

		$this->db->order_by('srp_documentos.id_documento', 'desc');

		$this->db->limit($limit, $ofset);
		$resultado["archivos"] = $this->db->get()->result();

		$this->db->flush_cache();
		return $resultado;
	}

	public function filtrar_datos_reporte($filtros,  $limit = 0,  $ofset = 0,  $es_admin = false)
	{
		$filtros = (object)$filtros;
		$this->db->start_cache();
		$this->db->select('titulo, anio_creacion, resumen,  
							anio_creacion, fecha_publicacion,   sede_ciudad as sede,   srp_documentos.id_documento , nombre_autor, paterno_autor, materno_autor,es_publico,nro_paginas, version, especialidad, categoria,tipo ,observaciones');
		$this->db->from('srp_documentos');
		$this->db->join('srp_autores', 'srp_autores.id_autor = srp_documentos.id_autor', 'left');
		$this->db->join('srp_sedes', 'srp_sedes.id_sede = srp_documentos.id_sede', 'left');
		$this->db->join('srp_tipos', 'srp_tipos.id_tipo = srp_documentos.id_tipo', 'left');
		$this->db->join('ver_esp', 'ver_esp.id_ver_esp = srp_documentos.id_ver_esp', 'left');
		$this->db->join('srp_especialidades', 'srp_especialidades.id_especialidad = ver_esp.id_especialidad', 'left');
		$this->db->join('versiones', 'versiones.id_version = ver_esp.id_version', 'left');
		
		$this->db->join('srp_categorias', 'srp_categorias.id_categoria = srp_documentos.id_categoria', 'left');
		
		


		if (!$es_admin) {
			$this->db->where('srp_documentos.estado_documento !=', "eliminado");
		}

		if ($filtros->texto_buscar != "") {
			$this->db->like("titulo", strtoupper($filtros->texto_buscar));
			//	$this->db->or_like("autor", strtoupper($filtros->texto_buscar));
		}

		if ($filtros->id_especialidad != 0) {
			$this->db->where('srp_documentos.id_ver_esp', $filtros->id_especialidad);
		}
		if ($filtros->id_categoria != 0) {
			$this->db->where('srp_documentos.id_categoria', $filtros->id_categoria);
		}
		if ($filtros->id_tipo_documento != 0) {
			$this->db->where('srp_documentos.id_tipo', $filtros->id_tipo_documento);
		}
		if ($filtros->id_autor != 0) {
			$this->db->where('srp_documentos.id_autor', $filtros->id_autor);
		}

		$this->db->order_by('id_documento', 'desc');
		$this->db->stop_cache();

		if ($limit == 0) {
			$limit = $this->db->count_all_results();
		}

		$this->db->limit($limit, $ofset);
		$resultado = $this->db->get()->result();

		$this->db->flush_cache();
		return $resultado;
	}

	public function listar_documento_id(int $id_documento, bool $es_admin = false)
	{

		$this->db->start_cache();
		$this->db->select('uuid, titulo, nombre_autor,paterno_autor,materno_autor,ci_autor,srp_autores.id_autor, anio_creacion, resumen,categoria,version,especialidad, srp_documentos.id_categoria ,srp_documentos.id_tipo, srp_documentos.id_ver_esp, 
							anio_creacion, fecha_publicacion, lenguaje,  sede_ciudad as sede, srp_documentos.id_sede, tipo,  es_publico,  usuarios.nombre as nombre_usuario, apellido, nombre_archivo,tamanio_archivo,nro_paginas , codigo_documento,observaciones, id_documento ');
		$this->db->from('srp_documentos');
		$this->db->join('ver_esp', 'ver_esp.id_ver_esp = srp_documentos.id_ver_esp', 'left');
		$this->db->join('srp_especialidades', 'srp_especialidades.id_especialidad = ver_esp.id_especialidad', 'left');
		$this->db->join('versiones', 'versiones.id_version = ver_esp.id_version', 'left');
		$this->db->join('srp_categorias', 'srp_categorias.id_categoria = srp_documentos.id_categoria', 'left');
		$this->db->join('srp_tipos', 'srp_tipos.id_tipo = srp_documentos.id_tipo', 'left');
		$this->db->join('srp_autores', 'srp_autores.id_autor = srp_documentos.id_autor', 'left');
		$this->db->join('usuarios', 'usuarios.id_usuario = srp_documentos.id_usuario', 'left');
		$this->db->join('srp_sedes', 'srp_sedes.id_sede = srp_documentos.id_sede', 'left');

		if (!$es_admin) {
			$this->db->where('srp_documentos.estado_documento !=', "eliminado");
		}
		$this->db->where('srp_documentos.id_documento', $id_documento);

		$resultado = $this->db->get()->row();

		return $resultado;
	}



	public function registrar_documento($datos)
	{
		$this->db->insert('srp_documentos', $datos);
		return $this->db->insert_id();
	}

	public function actualizar_documento($datos,  $id_documento)
	{
		$this->db->where('id_documento', $id_documento);
		return $this->db->update('srp_documentos', $datos);
	}

	public function eliminar_documento($id_documento)
	{
		$this->db->where('id_documento', $id_documento);
		return $this->db->update('srp_documentos', ["estado_documento" => "eliminado"]);
	}


	//**publico */

	public function listar_documentos_publico($limit = 10, $ofset = 0, int $id_especialidad = 0, int $id_categoria = 0, int  $id_tipo_documento = 0)
	{
		$this->db->start_cache();
		$this->db->select("uuid, titulo,nombre_autor||' '||paterno_autor||' '||materno_autor as autor, anio_creacion,SUBSTRING( resumen,0,150) as resumen,
							anio_creacion, fecha_publicacion");
		$this->db->from('srp_documentos');
		$this->db->join('srp_autores', 'srp_documentos.id_autor = srp_autores.id_autor', 'inner');
		$this->db->join('ver_esp', 'ver_esp.id_ver_esp = srp_documentos.id_ver_esp', 'inner');
		$this->db->join('srp_especialidades', 'srp_especialidades.id_especialidad = ver_esp.id_especialidad', 'inner');
		$this->db->join('versiones', 'versiones.id_version = ver_esp.id_version', 'inner');

		$this->db->where('srp_documentos.estado_documento !=', "eliminado");

		if ($id_especialidad != 0) {
			$this->db->where('srp_especialidades.id_especialidad', $id_especialidad);
		}
		if ($id_categoria != 0) {
			$this->db->where('srp_documentos.id_categoria', $id_categoria);
		}
		if ($id_tipo_documento != 0) {
			$this->db->where('srp_documentos.id_tipo', $id_tipo_documento);
		}

		$this->db->order_by('srp_documentos.id_documento', 'desc');
		$this->db->stop_cache();
		$resultado["total_resultados"] = $this->db->count_all_results();

		$this->db->limit($limit, $ofset);
		$resultado["archivos"] = $this->db->get()->result();
		$resultado["q"] = $this->db->last_query();

		$this->db->flush_cache();
		return $resultado;
	}

	public function listar_documento_uuid_publico(string $uuid)
	{

		$this->db->start_cache();
		$this->db->select("uuid, titulo,nombre_autor||' '||paterno_autor||' '||materno_autor as autor, anio_creacion, resumen,categoria,version,especialidad, srp_documentos.id_categoria ,srp_documentos.id_tipo, srp_documentos.id_ver_esp, 
							anio_creacion, fecha_publicacion, lenguaje,  sede_ciudad, srp_documentos.id_sede, tipo,   tamanio_archivo, nro_paginas ,  id_documento , nombre_archivo as nombre");
		$this->db->from('srp_documentos');
		$this->db->join('srp_autores', 'srp_documentos.id_autor = srp_autores.id_autor', 'inner');
		$this->db->join('ver_esp', 'ver_esp.id_ver_esp = srp_documentos.id_ver_esp', 'left');
		$this->db->join('srp_especialidades', 'srp_especialidades.id_especialidad = ver_esp.id_especialidad', 'left');
		$this->db->join('versiones', 'versiones.id_version = ver_esp.id_version', 'left');
		$this->db->join('srp_categorias', 'srp_categorias.id_categoria = srp_documentos.id_categoria', 'left');
		$this->db->join('srp_tipos', 'srp_tipos.id_tipo = srp_documentos.id_tipo', 'left');
		$this->db->join('srp_sedes', 'srp_sedes.id_sede = srp_documentos.id_sede', 'left');

		$this->db->where('srp_documentos.estado_documento !=', "eliminado");

		$this->db->where('srp_documentos.uuid', $uuid);

		$resultado = $this->db->get()->row();
		return $resultado;
	}

	public function verificar_codigo($codigo_documento)
	{
		$this->db->where('uuid', $codigo_documento);
		return $this->db->count_all_results("srp_documentos");
	}


	

	public function buscar_documentos_publico($palabra_buscar,  $limit,  $ofset)
	{

		$this->db->start_cache();

		$this->db->select("uuid, titulo,nombre_autor||' '||paterno_autor||' '||materno_autor as autor, anio_creacion,SUBSTRING( resumen,0,150) as resumen,
							anio_creacion, fecha_publicacion");
		$this->db->from('srp_documentos');
		$this->db->join('srp_autores', 'srp_documentos.id_autor = srp_autores.id_autor', 'inner');
		$this->db->join('ver_esp', 'ver_esp.id_ver_esp = srp_documentos.id_ver_esp', 'inner');
		$this->db->join('srp_especialidades', 'srp_especialidades.id_especialidad = ver_esp.id_especialidad', 'inner');
		$this->db->join('versiones', 'versiones.id_version = ver_esp.id_version', 'inner');

		$this->db->where('srp_documentos.estado_documento !=', "eliminado");

		$this->db->like('srp_documentos.titulo', $palabra_buscar);
		$this->db->or_like('srp_documentos.resumen', $palabra_buscar);

		$this->db->stop_cache();
		$resultado["total_resultados"] = $this->db->count_all_results();

		$this->db->order_by('srp_documentos.id_documento', 'desc');

		$this->db->limit($limit, $ofset);
		$resultado["archivos"] = $this->db->get()->result();
		$resultado["q"] = $this->db->last_query();

		$this->db->flush_cache();
		return $resultado;
	}
	public function filtrar_documentos_publico($filtros,  $limit,  $ofset)
	{
		$filtros = (object)$filtros;
		$this->db->start_cache();
		$this->db->select("SUBSTRING( titulo,0,70) as titulo, anio_creacion, resumen,  uuid,
							anio_creacion, fecha_publicacion,   sede_ciudad as sede,   id_documento , nombre_autor||' '||paterno_autor||' '||materno_autor as autor ");
		$this->db->from('srp_documentos');
		$this->db->join('srp_autores', 'srp_autores.id_autor = srp_documentos.id_autor', 'inner');
		$this->db->join('srp_sedes', 'srp_sedes.id_sede = srp_documentos.id_sede', 'inner');


		$this->db->where('srp_documentos.estado_documento !=', "eliminado");

		//selecciona y asigna los tipos de filtro
		$this->asignar_filtro($filtros->filtro, $filtros->relacion_filtro, $filtros->palabra_buscar);

		$this->db->stop_cache();
		$resultado["total_resultados"] = $this->db->count_all_results();

		$this->db->order_by('srp_documentos.id_documento', 'desc');

		$this->db->limit($limit, $ofset);
		$resultado["archivos"] = $this->db->get()->result();
		$resultado["q"] = $this->db->last_query();


		$this->db->flush_cache();
		return $resultado;
	}

	private function asignar_filtro($filtro, $relacion_filtro, $palabra_buscar)
	{
		$palabra_buscar= strtolower($palabra_buscar);
		
		switch ($filtro) {
			case 1:

				switch ($relacion_filtro) {
					case 1:
						$this->db->like('LOWER(srp_documentos.titulo)', $palabra_buscar);
						break;
					case 2:
						$this->db->where('LOWER(srp_documentos.titulo)', $palabra_buscar);
						break;
					case 3:
						$this->db->not_like('LOWER(srp_documentos.titulo)', $palabra_buscar);
						break;
					case 2:
						$this->db->where('LOWER(srp_documentos.titulo) != ', $palabra_buscar);
						break;
					default:

						break;
				}

				break;
			case 2:

				switch ($relacion_filtro) {
					case 1:
						$this->db->like("LOWER(nombre_autor||' '||paterno_autor||' '||materno_autor)", $palabra_buscar);
						break;
					case 2:
						$this->db->where("LOWER(nombre_autor||' '||paterno_autor||' '||materno_autor)", $palabra_buscar);
						break;
					case 3:
						$this->db->not_like("LOWER(nombre_autor||' '||paterno_autor||' '||materno_autor)", $palabra_buscar);
						break;
					case 4:
						$this->db->where("LOWER(nombre_autor||' '||paterno_autor||' '||materno_autor) != ", $palabra_buscar);
						break;
					default:

						break;
				}
				break;
			case 3:
				switch ($relacion_filtro) {
					case 1:
						$this->db->like('LOWER(CAST(srp_documentos.anio_creacion as varchar))', $palabra_buscar);
						break;
					case 2:
						$this->db->where('srp_documentos.anio_creacion', $palabra_buscar);
						break;
					case 3:
						$this->db->not_like('LOWER(CAST(srp_documentos.anio_creacion as varchar))', $palabra_buscar);
						break;
					case 2:
						$this->db->where('LOWER(CAST(srp_documentos.anio_creacion as varchar)) != ', $palabra_buscar);
						break;
					default:

						break;
				}

				break;
			case 4:

				switch ($relacion_filtro) {
					case 1:
						$this->db->like('LOWER(srp_documentos.titulo)', $palabra_buscar);
						$this->db->or_like('LOWER(srp_documentos.resumen)', $palabra_buscar);

						break;
					case 2:
						$this->db->where('srp_documentos.titulo)', $palabra_buscar);
						$this->db->or_where('srp_documentos.resumen)', $palabra_buscar);

						break;
					case 3:
						$this->db->not_like('LOWER(srp_documentos.titulo)', $palabra_buscar);
						$this->db->not_like('LOWER(srp_documentos.resumen)', $palabra_buscar);

						break;
					case 4:
						$this->db->where('LOWER(srp_documentos.titulo) != ', $palabra_buscar);
						$this->db->or_where('LOWER(srp_documentos.resumen) != ', $palabra_buscar);

						break;
					default:

						break;
				}

				break;
			default:

				break;
		}
	}


	public function listar_docuemnto_id_autor($id_autor)
	{
		$this->db->start_cache();
		$this->db->select("uuid, titulo,nombre_autor||' '||paterno_autor||' '||materno_autor as autor, anio_creacion,SUBSTRING( resumen,0,150) as resumen,
							anio_creacion, fecha_publicacion");
		$this->db->from('srp_documentos');
		$this->db->join('srp_autores', 'srp_documentos.id_autor = srp_autores.id_autor', 'inner');
		$this->db->join('ver_esp', 'ver_esp.id_ver_esp = srp_documentos.id_ver_esp', 'inner');
		$this->db->join('srp_especialidades', 'srp_especialidades.id_especialidad = ver_esp.id_especialidad', 'inner');
		$this->db->join('versiones', 'versiones.id_version = ver_esp.id_version', 'inner');

		$this->db->where('srp_documentos.estado_documento !=', "eliminado");
		$this->db->where('srp_documentos.es_publico', "SI");
		
		$this->db->where('srp_documentos.id_autor', $id_autor);
		$this->db->stop_cache();
		$resultado["total_resultados"] = $this->db->count_all_results();

		$resultado["archivos"] = $this->db->get()->result();
		$resultado["q"] = $this->db->last_query();


		$this->db->flush_cache();
		return $resultado;
	
	}


	//******************  categorias y tipos de  documentos***************


	public function get_tipos()
	{
		return $this->db->get('srp_tipos')->result();
	}

	public function get_busqueda($sql)
	{
		return $this->db->query($sql)->result();
	}
}

/* End of file Documento_model.php */
