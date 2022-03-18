<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Archivo_model extends CI_Model {

    public function get_archivos($limit=10,$ofset=0,$id_especialidad,$id_categoria,$id_tipo_documento)
    {
		$this->db->select('uuid,SUBSTRING( titulo,0,70) as titulo, autor, anio_creacion,SUBSTRING(resumen, 0,150) as resumen');
		$this->db->order_by('id_archivo', 'desc');
		if ($id_especialidad!=0) {
			$this->db->where('id_especialidad', $id_especialidad);
		}
		if ($id_categoria!=0) {
			$this->db->where('id_categoria', $id_categoria);
		}
		if ($id_tipo_documento!=0) {
			$this->db->where('id_tipo', $id_tipo_documento);
		}
		$resultado["total_resultados"]=$this->db->count_all_results('view_archivo', FALSE);
		$this->db->limit($limit,$ofset);
		
        $resultado["archivos"]= $this->db->get()->result();    

		return $resultado;
    }

	public function filtrar_datos(array $filtros,int $limit,int $ofset)
	{
		$filtros=(object)$filtros;
		$this->db->start_cache() ;
		$this->db->select('uuid,SUBSTRING( titulo,0,70) as titulo, autor, anio_creacion,SUBSTRING(resumen, 0,150) as resumen');
		$this->db->from('archivos');
		$this->db->join('metadatos', 'metadatos.id_archivo = archivos.id_archivo', 'left');

		if ($filtros->texto_buscar!="") {
			$this->db->like("titulo", strtoupper($filtros->texto_buscar));
			$this->db->or_like("autor", strtoupper($filtros->texto_buscar));

		}
		
		
		
		if ($filtros->id_especialidad!=0) {
			$this->db->where('id_especialidad', $filtros->id_especialidad);
		}
		if ($filtros->id_categoria!=0) {
			$this->db->where('id_categoria', $filtros->id_categoria);
		}
		if ($filtros->id_tipo_documento!=0) {
			$this->db->where('id_tipo', $filtros->id_tipo_documento);
		}
		$this->db->order_by('id_archivo', 'desc');
		$this->db->stop_cache();
		$resultado["total_resultados"]=$this->db->count_all_results();

		$this->db->limit($limit,$ofset);
        $resultado["archivos"]= $this->db->get()->result();    
		$this->db->flush_cache();
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
        return $this->db->delete('archivos');
        
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
