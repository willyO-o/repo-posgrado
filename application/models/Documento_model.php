<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Documento_model extends CI_Model {

    public function get_archivos($limit=10,$ofset=0,$id_especialidad,$id_categoria,$id_tipo_documento)
    {
		$this->db->start_cache() ;
		$this->db->select('uuid,SUBSTRING( titulo,0,70) as titulo, autor, anio_creacion, resumen, usuario,categoria,version,especialidad, 
							anio_creacion, fecha_publicacion, formato, lenguaje,  sede, tipo, tutor , usuarios.nombre as nombre_usuario, apellido, archivos.nombre');
		$this->db->from('archivos');
		$this->db->join('metadatos', 'metadatos.id_archivo = archivos.id_archivo', 'left');
		$this->db->join('ver_esp', 'ver_esp.id_ver_esp = metadatos.id_ver_esp', 'left');
		$this->db->join('especialidades', 'especialidades.id_especialidad = ver_esp.id_especialidad', 'left');
		$this->db->join('versiones', 'versiones.id_version = ver_esp.id_version', 'left');
		$this->db->join('categorias', 'categorias.id_categoria = metadatos.id_categoria', 'left');
		$this->db->join('tipos', 'tipos.id_tipo = metadatos.id_tipo', 'left');
		$this->db->join('usuarios', 'usuarios.id_usuario = metadatos.id_usuario', 'left');

		$this->db->order_by('metadatos.id_archivo', 'desc');
		$this->db->stop_cache();
		$resultado["total_resultados"]=$this->db->count_all_results();

		$this->db->limit($limit,$ofset);
        $resultado["archivos"]= $this->db->get()->result();    
		$this->db->flush_cache();
		return $resultado;
    }

	public function filtrar_datos(array $filtros,int $limit,int $ofset, bool $es_admin=false)
	{
		$filtros=(object)$filtros;
		$this->db->start_cache() ;
		$this->db->select('SUBSTRING( titulo,0,70) as titulo, autor, anio_creacion, resumen,  
							anio_creacion, fecha_publicacion,   sede, tutor,  id_documento ');
		$this->db->from('srp_documentos');
		
		if (!$es_admin) {
			$this->db->where('srp_documentos.estado_documento !=', "eliminado");
		}

		if ($filtros->texto_buscar!="") {
			$this->db->like("titulo", strtoupper($filtros->texto_buscar));
		//	$this->db->or_like("autor", strtoupper($filtros->texto_buscar));
		}
		
		if ($filtros->id_especialidad!=0) {
			$this->db->where('srp_documentos.id_ver_esp', $filtros->id_especialidad);
		}
		if ($filtros->id_categoria!=0) {
			$this->db->where('srp_documentos.id_categoria', $filtros->id_categoria);
		}
		if ($filtros->id_tipo_documento!=0) {
			$this->db->where('srp_documentos.id_tipo', $filtros->id_tipo_documento);
		}


		$this->db->order_by('id_archivo', 'desc');
		$this->db->stop_cache();
		$resultado["total_resultados"]=$this->db->count_all_results();

		$this->db->limit($limit,$ofset);
        $resultado["archivos"]= $this->db->get()->result(); 
		
		$this->db->flush_cache();
		return $resultado;

	}


	public function listar_documento_id(int $id_documento, bool $es_admin=false)
	{
	
		$this->db->start_cache() ;
		$this->db->select('uuid, titulo, autor, anio_creacion, resumen, usuario,categoria,version,especialidad, srp_documentos.id_categoria ,srp_documentos.id_tipo, srp_documentos.id_ver_esp, 
							anio_creacion, fecha_publicacion, lenguaje,  sede, tipo, tutor, usuarios.nombre as nombre_usuario, apellido, nombre_archivo,tamanio_archivo,nro_paginas ,  id_documento ');
		$this->db->from('srp_documentos');
		$this->db->join('ver_esp', 'ver_esp.id_ver_esp = srp_documentos.id_ver_esp', 'left');
		$this->db->join('especialidades', 'especialidades.id_especialidad = ver_esp.id_especialidad', 'left');
		$this->db->join('versiones', 'versiones.id_version = ver_esp.id_version', 'left');
		$this->db->join('categorias', 'categorias.id_categoria = srp_documentos.id_categoria', 'left');
		$this->db->join('tipos', 'tipos.id_tipo = srp_documentos.id_tipo', 'left');
		$this->db->join('usuarios', 'usuarios.id_usuario = srp_documentos.id_usuario', 'left');
		if (!$es_admin) {
			$this->db->where('srp_documentos.estado_documento !=', "eliminado");
		}
		$this->db->where('srp_documentos.id_documento', $id_documento);
		
		$resultado= $this->db->get()->row();
		
		return $resultado;

	}
	public function get_archivos_public($limit=10,$ofset=0)
	{
	

		$this->db->select('id_archivo, nombre, titulo, autor, anio_creacion, substr(resumen, 1, 250) as resumen');
		$this->db->from('archivos');
		$this->db->join('metadatos', 'metadatos.id_archivo = archivos.id_archivo', 'left');
		$this->db->limit($limit, $ofset);
		
		
		
		return $this->db->get()->result();
		
	}

	public function registrar_documento(array $datos)
	{
		$this->db->insert('srp_documentos', $datos);
		return $this->db->insert_id();
		
	}

	public function actualizar_documento(array $datos, int $id_documento)
	{
		$this->db->where('id_documento', $id_documento);
		return $this->db->update('srp_documentos', $datos);
		
	}

	public function eliminar_documento(int $id_documento)
	{
		$this->db->where('id_documento', $id_documento);
		return $this->db->update('srb_documentos', ["estado_documento"=>"eliminado"]);
	}




	//******************  categorias y tipos de  documentos***************

	public function get_categorias()
	{
		return $this->db->get('categorias')->result();
	}
	public function get_tipos()
	{
		return $this->db->get('tipos')->result();
	}

	public function get_busqueda($sql)
	{
		return $this->db->query($sql)->result();
	}


	

}

/* End of file Documento_model.php */
