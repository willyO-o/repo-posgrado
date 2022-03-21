<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Archivo_model extends CI_Model {

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
							anio_creacion, fecha_publicacion,   sede, tutor,  id_metadato ');
		$this->db->from('metadatos');
		
		if (!$es_admin) {
			$this->db->where('metadatos.estado_documento !=', "eliminado");
			
		}

		if ($filtros->texto_buscar!="") {
			$this->db->like("titulo", strtoupper($filtros->texto_buscar));
		//	$this->db->or_like("autor", strtoupper($filtros->texto_buscar));

		}
		
		if ($filtros->id_especialidad!=0) {
			$this->db->where('metadatos.id_ver_esp', $filtros->id_especialidad);
		}
		if ($filtros->id_categoria!=0) {
			$this->db->where('metadatos.id_categoria', $filtros->id_categoria);
		}
		if ($filtros->id_tipo_documento!=0) {
			$this->db->where('metadatos.id_tipo', $filtros->id_tipo_documento);
		}


		$this->db->order_by('id_archivo', 'desc');
		$this->db->stop_cache();
		$resultado["total_resultados"]=$this->db->count_all_results();

		$this->db->limit($limit,$ofset);
        $resultado["archivos"]= $this->db->get()->result(); 
		$resultado["q"]=$this->db->last_query();
		$this->db->flush_cache();
		return $resultado;

	}


	public function listar_documento_id(int $id_documento, bool $es_admin=false)
	{
	
		$this->db->start_cache() ;
		$this->db->select('uuid, titulo, autor, anio_creacion, resumen, usuario,categoria,version,especialidad, metadatos.id_categoria ,metadatos.id_tipo, metadatos.id_ver_esp, 
							anio_creacion, fecha_publicacion, formato, lenguaje,  sede, tipo, tutor, usuarios.nombre as nombre_usuario, apellido, archivos.nombre, id_metadato ');
		$this->db->from('archivos');
		$this->db->join('metadatos', 'metadatos.id_archivo = archivos.id_archivo', 'left');
		$this->db->join('ver_esp', 'ver_esp.id_ver_esp = metadatos.id_ver_esp', 'left');
		$this->db->join('especialidades', 'especialidades.id_especialidad = ver_esp.id_especialidad', 'left');
		$this->db->join('versiones', 'versiones.id_version = ver_esp.id_version', 'left');
		$this->db->join('categorias', 'categorias.id_categoria = metadatos.id_categoria', 'left');
		$this->db->join('tipos', 'tipos.id_tipo = metadatos.id_tipo', 'left');
		$this->db->join('usuarios', 'usuarios.id_usuario = metadatos.id_usuario', 'left');
		if (!$es_admin) {
			$this->db->where('metadatos.estado_documento !=', "eliminado");
		}
		$this->db->where('metadatos.id_metadato', $id_documento);
		
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

    public function get_archivo_id(int $id_archivo)
    {
        $this->db->where('id_archivo', $id_archivo);
        return $this->db->get('archivos')->row();
        
    }
	public function get_view_archivo_uuid($uuid)
	{
		$this->db->where('uuid', $uuid);
		return $this->db->get('view_archivo')->row();
	}

    public function set_archivos($datos)
    {
        $this->db->insert('archivos', $datos);
		return $this->db->insert_id();
		 
        
    }
	public function set_metadatos($datos)
    {
        $this->db->insert('metadatos', $datos);
		return $this->db->insert_id();
		 
        
    }
    public function update_metadatos($datos,int $id_archivo)
    {
        $this->db->where('id_archivo', $id_archivo);
        return $this->db->update('metadatos', $datos);
        
    }

    public function delete_archivo(int $id_archivo)
    {
        $this->db->where('id_archivo', $id_archivo);
		return $this->db->update('archivos', ["estado_documento"=>"eliminado"]);
		
    }

	public function delete_documento(int $id_documento)
    {
        $this->db->where('id_metadato', $id_documento);
		return $this->db->update('metadatos', ["estado_documento"=>"eliminado"]);
		
    }

	public function get_ver_est_id(int $id_ver_esp)
    {
        $this->db->where('id_ver_esp', $id_ver_esp);
        return $this->db->get('ver_esp')->row();
        
    }

	public function get_total_archivos()
	{
		return $this->db->count_all('view_archivo');
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

/* End of file archivo_model.php */
