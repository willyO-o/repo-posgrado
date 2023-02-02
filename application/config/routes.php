<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller'] = 'principal';
$route['404_override'] = 'error404';
$route['translate_uri_dashes'] = FALSE;



//admin for vue router
$route['admin'] = 'principal/admin';
$route['admin/users'] = 'principal/admin';
$route['admin/especialidades'] = 'principal/admin';
$route['admin/autores'] = 'principal/admin';
$route['admin/documentos/registar'] = 'principal/admin';
$route['admin/documentos/listar'] = 'principal/admin';


// publico for vue router 
$route['login'] = 'principal';
$route['search'] = 'principal';
$route['document/(:any)'] = 'principal';
$route['document/full/(:any)'] = 'principal';






// admin ajax

$route['autor/listar'] = 'Autor/Autor_programa/autor_programa_listar_ajax';


$route['autor/registrar'] = 'Autor/Autor_programa/autor_programa_registrar';
$route['autor/eliminar'] = 'Autor/Autor_programa/autor_programa_eliminar';
$route['autor/reporte'] = 'Autor/Reportes_autor/reportes_autor_generar_reporte';







$route['estadisticas/listar_totales'] = 'Tablero/Tablero_estadisticas/tablero_estadisticas_listar_totales';
$route['estadisticas/listar_barras/(:any)'] = 'Tablero/Tablero_estadisticas/tablero_estadisticas_listar_barras/$1';
$route['estadisticas/extraer_ultimo_anio'] = 'Tablero/Tablero_estadisticas/tablero_estadisticas_ultimo_anio/$1';


$route['documento/filtrar'] = 'Documento/Documento_programa/documento_programa_filtrar_datos_ajax';
$route['documento/listar_filtros'] = 'Documento/Documento_programa/documento_programa_listar_filtros';
$route['documento/buscar_especialidad_filtro'] = 'Documento/Documento_programa/documento_programa_buscar_especialidad_filtro';
$route['documento/buscar_autor_filtro'] = 'Documento/Documento_programa/documento_programa_buscar_autor_filtro';
$route['documento/buscar_especialidad'] = 'Documento/Documento_programa/documento_programa_buscar_especialidad';
$route['documento/buscar_autor'] = 'Documento/Documento_programa/documento_programa_buscar_autor';
$route['documento/listar_parametros'] = 'Documento/Documento_programa/documento_programa_listar_parametros';
$route['documento/guardar'] = 'Documento/Documento_programa/documento_programa_registrar_documento';
$route['documento/listar_id'] = 'Documento/Documento_programa/documento_programa_lista_id_ajax';
$route['documento/eliminar'] = 'Documento/Documento_programa/documento_programa_eliminar';
$route['documento/reporte'] = 'Documento/Reportes_documento/reportes_documento_generar_reporte';
$route['archivo/pdf/(:any)/(:any)'] = 'Documento/Documento_programa/documento_programa_ver_archivo_pdf/$1/$2';


$route['especialidad/registrar'] = 'Especialidad/Especialidad_programa/especialidad_programa_registrar';
$route['especialidad/eliminar'] = 'Especialidad/Especialidad_programa/especialidad_programa_eliminar';
$route['especialidad/filtrar'] = 'Especialidad/Especialidad_programa/especialidad_programa_listar_especialidades_ajax';


$route['user/roles'] = 'User/roles';






//  publico ajax

$route['publico/listar_parametros'] = 'Publico/Principal_publico/principal_publico_listar_parametros_ajax';
$route['publico/listar_documentos'] = 'Publico/Principal_publico/principal_publico_listar_documentos_ajax';
$route['publico/documento_uuid'] = 'Publico/Principal_publico/principal_publico_listar_documento_uuid_ajax';

$route['publico/buscar_filtrado'] = 'Publico/Principal_publico/principal_publico_filtrar_busqueda_ajax';
$route['publico/buscar'] = 'Publico/Principal_publico/principal_publico_buscar_ajax';

$route['publico/autores'] = 'Publico/Principal_publico/principal_publico_listar_autores_ajax';

$route['publico/documentos_autor'] = 'Publico/Principal_publico/principal_publico_listar_documentos_autor_ajax';




$route["ver/pdf/(:any)"] ="Publico/Principal_publico/principal_publico_visualizar_pdf/$1";
