import ModalArchivo from './Modal_detalles_documento.js';
import Select2Ajax from './select2Ajax.js';
export default {
    template: //html
        `
	<div >
		<h1>Documentos</h1>
	
		<!-- Modal -->
		<div class="modal fade" id="modal" aria-hidden="true" data-backdrop="static">
			<div class="modal-dialog modal-xl">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Detalles del Documento</h5>
						<button type="button" class="close" @click="ocultarModal()">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<ModalArchivo :detallesArchivo="detallesArchivo" :verDocumento="verDoc" />
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" @click="ocultarModal()">Cerrar</button>
					</div>
				</div>
			</div>
		</div>
	
		<div class="card mb-0">
			<div class="card-header d-flex justify-content-between">
				<h3 class="card-title mt-2">Listado de Documentos</h3>
				<router-link to="/admin/documentos/registar" class="btn btn-primary"><i class="ti-export"></i> <span class="title">Publicar Documento</span></router-link>
			</div>
			<div class="card-body">
				<!-- table-responsive-->
					<fieldset class=" border p-3 mb-3" id="filtros-documento">
						<legend class="w-auto px-3">Filtrar</legend>
						<div class="row">
							<div class="col-md-3 col-sm-6">
								<label class="text-center w-100"> Programa</label>
								<Select2Ajax :url="url_especialidad" v-model="filtro_id_especialidad"  class="form-control" />
							</div>
							<div class="col-md-3 col-sm-6">
								<label class="text-center w-100"> Autor</label>
								<Select2Ajax :url="url_autor" v-model="filtro_id_autor"  class="form-control" />
							</div>
							<div class="col-md-3 col-sm-6">
								<label class="text-center w-100"> Tipo Documento</label>
								<select v-model="filtro_id_tipo" class="form-control" >
									<option value="0"> Todos</option>
									<option :selected="tipo.tipo === 'Todos'" :value="tipo.id_tipo" v-for="tipo in listaTipoDocumentos" :key="tipo.id_tipo"> {{tipo.tipo}} </option>

								</select>
							</div>
							<div class="col-md-3 col-sm-6">
								<label class="text-center w-100"> Categoria </label>
								<select v-model="filtro_id_categoria" class="form-control" >
									<option selected :value="categ.id_categoria" v-for="categ in listaCategorias" :key="categ.id_categoria"> {{categ.categoria}} </option>
								</select>
							</div>

						</div>
						
					</fieldset>
					<div class="justify-content-between d-flex">
						<form  :action="action_post" method="POST" target="_blank" >
							<button class="btn btn-danger mb-2" type="submit"  name="accion" value="pdf"><i class="fa fa-file-pdf-o" ></i> PDF</button>
							<button class="btn btn-success mb-2" type="submit" name="accion" value="excel"><i class="fa fa-file-excel-o" ></i> EXCEL</button>
							<input type="hidden" name="filtro_especialidad" :value="filtros.id_especialidad">
							<input type="hidden" name="filtro_autor" :value="filtros.id_autor">
							<input type="hidden" name="filtro_tipo" :value="filtros.id_tipo">
							<input type="hidden" name="filtro_categoria" :value="filtros.id_categoria">
							<input type="hidden" name="filtro_texto_buscar" :value="filtros.textoBuscar">
						</form>
						

						<div class="caja-buscardor">
							<div class="input-group  mb-3">
								<input type="search" class="form-control" v-model="filtros.textoBuscar" placeholder="Buscar"  @input="buscar()" aria-label="Recipient's username" aria-describedby="button-addon2">
								<div class="input-group-append">
									<button class="btn btn-primary" type="button" id="button-addon2"><i class="ti-search"></i></button>
								</div>
							</div>
						</div>
					</div>
					
				
					<div class="table-responsive-md">
						<table id="tabla-documentos" class="table table-striped">
							<thead class="thead-light">
								<tr>
									<th>#</th>
									<th style="width: 30% !important;">Titulo</th>
									<th>Autor</th>
									<th> Año</th>

									<th># <br> Paginas</th>
									<th>tipo</th>
									<th>Acciones</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(item,index) of listaArchivos" :key="item.id_documento">
									<td>{{index + indicePagina()+1 }}</td>
									<td>{{item.titulo}}</td>
									<td>{{item.nombre_autor}} {{item.paterno_autor}} {{item.materno_autor}}</td>
									<td>{{item.anio_creacion}}</td>

									<td>{{item.nro_paginas}}</td>

									<td>{{item.tipo}}</td>


									<td>
										<i class="icon-list ti-eye text-primary" @click="verDetallesArchivo(item.id_documento)"></i>
										<i class="icon-list ti-pencil text-warning mx-2" @click="setEditarDocumento(item.id_documento)"></i>
										<i class="icon-list ti-trash text-danger" @click="confirm(item)"></i>
									</td>
								</tr>
								<tr v-if="totalResultadosQuery==0">
									<td colspan="4" class="text-center">No se encontraron Resultados</td>

								</tr>
							</tbody>
							<thead class="thead-light">
								<tr>
									<th>#</th>
									<th style="width: 50% !important;">Titulo</th>
									<th>Autor</th>
									<th> Año</th>

									<th># <br> Paginas</th>

									<th>tipo</th>

									<th>Acciones</th>
								</tr>
							</thead>
						</table>
					</div>
					<div class="paginador mt-3" id="paginador">
						<nav aria-label="Page navigation example" v-if="totalResultados()!=0">
							<ul class="pagination">
								<li class="page-item " :class="esDisableAnterior()" @click="botonAnterior()">
									<a class="page-link" aria-label="Previous">
										Anterior
									</a>
								</li>

								<li class="page-item"  v-if="esPrincipio()"><a class="page-link">1</a></li>
								<li class="page-item disabled" v-if="esPrincipio()"><a class="page-link">...</a></li>

								<li class="page-item"  v-for="pagina in nroPaginas()" @click="buscar(pagina)" :class="esActivo(pagina)"><a class="page-link">{{pagina}}</a></li>
								
								<li class="page-item disabled"  v-if="esPrincipio()"><a class="page-link">...</a></li>
								<li class="page-item" v-if="esPrincipio()"><a class="page-link">2</a></li>

								<li class="page-item" :class="esDisableSiguiente()" @click="botonSiguiente()">
									<a class="page-link" aria-label="Next">
										Siguiente
									</a>
								</li>
							</ul>
						</nav>
					</div>
				
			</div>
		</div>
		<br />
		<br />
	
		<div class="modal fade" id="modalConfimEliminarArchivo" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered modal-sm">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="modalConfimEliminarArchivoLabel">Eliminar Archivo</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="limpiar()">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						Esta Usted Seguro?
						<h6>Desea eliminar el documento:</h6>
						<h5>{{archivoEliminar}}...</h5>
						<p>Esta accion no se puede deshacer!</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal" @click="limpiar()">Cancelar</button>
						<button type="button" class="btn btn-danger" @click="eliminarConfirmado()">Confirmar</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	`,
    components: { ModalArchivo, Select2Ajax },
    data() {
        return {
            action_post: base_url + "documento/reporte",
            url: base_url,
            datatable: null,
            listaArchivos: [],
            modalEliminar: false,
            archivoEliminar: '',
            verDoc: false,
            totalResultadosQuery: 0,
            pagina_actual: 1,
            paginar: 0,
            elementos_pagina: 10,
            listaTipoDocumentos: [],
            listaCategorias: [],
            detallesArchivo: {

                anio_creacion: 0,
                nombre_autor: "",
                paterno_autor: "",
                materno_autor: "",
                ci_autor: "",
                categoria: "",
                descripcion: "",
                especialidad: "",
                fecha_publicacion: '',
                formato: '',
                id_archivo: '',
                id_categoria: '',
                id_especialidad: '',
                id_documento: '',
                id_tipo: '',
                id_ver_esp: '',
                id_version: '',
                lenguaje: '',
                nombre: '',
                resumen: '',
                sede: '',
                tamanio: '',
                tipo: '',
                titulo: '',
                uuid: '',
                version: '',
                observaciones: '',
                es_publico: '',

            },
            filtros: {
                id_categoria: 0,
                id_especialidad: 0,
                id_tipo: 0,
                id_autor: 0,
                textoBuscar: "",
            },

            es_filtro_especialidad: true,
            idArchivo: '',

            especialidad: {
                id: 0,
                espec: '',
                id_version: 0,
                version: '',
                id_ver_esp: 0
            },

            probando: 2,
            textoBuscar: "",
            filtro_id_especialidad: 0,
            filtro_id_autor: 0,
            filtro_id_tipo: 0,
            filtro_id_categoria: 0,
            indicePaginaSuma: 0,

            url_autor: base_url + "documento/buscar_autor_filtro",
            url_especialidad: base_url + "documento/buscar_especialidad_filtro",


        }
    },
    created() {

        this.buscar();
        this.cargarFiltros();

    },

    methods: {
        nroPaginas() {
            let total_paginas = Math.ceil(this.totalResultadosQuery / this.elementos_pagina)
            let nro_paginas = total_paginas;
            if (total_paginas > 5) {
                nro_paginas = 5;
            }
            return nro_paginas;
        },
        esActivo(pagina) {
            return this.pagina_actual == pagina ? "active" : "";
        },
        esDisableAnterior() {
            return this.pagina_actual == 1 ? "disabled" : "";
        },
        esDisableSiguiente() {
            return this.pagina_actual == this.nroPaginas() ? "disabled" : ""
        },

        esPrincipio() {
            return false;
        },
        botonAnterior() {
            if (this.pagina_actual > 1) {
                this.pagina_actual--;
                this.buscar(this.pagina_actual);

            }

        },
        botonSiguiente() {
            if (this.pagina_actual < this.nroPaginas()) {
                this.pagina_actual++;
                this.buscar(this.pagina_actual);

            }

        },
        indicePagina() {
            return this.pagina_actual != 1 ? (this.pagina_actual - 1) * 10 : 0;
        },
        mostrarModalEliminar() {
            $('#modalConfimEliminarArchivo').modal('show')

        },
        ocultarModalEliminar() {
            $('#modalConfimEliminarArchivo').modal('hide')
        },

        mostrarModal() {
            $('#modal').modal('show')

        },
        ocultarModal() {
            $('#modal').modal('hide')
            this.setStateVerDocumento(false)
        },
        limpiar() {
            this.idArchivo = 0
            this.archivoEliminar = ''
        },

        cargarFiltros() {

            axios.post(this.url + "documento/listar_filtros")
                .then(respuesta => {
                    this.listaCategorias = respuesta.data.categorias;
                    this.listaTipoDocumentos = respuesta.data.tipos_documento;

                })
                .catch(error => {
                    this.listaCategorias = [];
                    this.listaTipoDocumentos = [];
                })

        },

        verDetallesArchivo(id_documento) {

            let fm = new FormData();
            fm.append("id_documento", id_documento);
            axios.post(this.url + "documento/listar_id", fm)
                .then(res => {
                    this.detallesArchivo = Object.assign({}, res.data.documento);
                    this.mostrarModal();
                })
                .catch(err => {
                    console.error(err);
                })

        },

        confirm(item) {
            this.mostrarModalEliminar()
            this.id_documento = item.id_documento
            this.archivoEliminar = item.titulo

        },


        eliminarConfirmado() {

            let data = new FormData();
            data.append('id_documento', this.id_documento)

            axios.post(this.url + "documento/eliminar", data)
                .then(res => {
                    if (res.data.respuesta) {

                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Especialidad Eliminada',
                            showConfirmButton: false,
                            timer: 1500
                        })

                        this.ocultarModalEliminar()
                        this.limpiar()
                    } else {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: 'Ocurrio un error, Intente de nuevo',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }

                }).catch(erro => {
                    alert('error ! ' + erro)
                })
        },
        irEditar() {

            $('#modal').modal('hide')
            this.$router.push('/admin/documentos/registar')

        },
        totalResultados() {
            return this.totalResultadosQuery;
        },
        buscar(pagina = 0) {
            this.pagina_actual = pagina != 0 ? pagina : 1;
            pagina != 0 ? pagina = (pagina - 1) * 10 : 0;
            let fm = new FormData();
            fm.append("id_categoria", this.filtros.id_categoria);
            fm.append("texto_buscar", this.filtros.textoBuscar);
            fm.append("id_tipo", this.filtros.id_tipo);
            fm.append("id_especialidad", this.filtros.id_especialidad);
            fm.append("id_autor", this.filtros.id_autor);
            fm.append("ofset", pagina);


            axios.post(this.url + "documento/filtrar", fm)
                .then(res => {
                    //console.log(res)
                    this.listaArchivos = res.data.archivos;
                    this.totalResultadosQuery = res.data.total_resultados;

                })
                .catch(err => {

                    this.listaArchivos = [];
                    this.totalResultadosQuery = 0;

                })



        },
        setEditarDocumento(id_documento) {
            let fm = new FormData();
            fm.append("id_documento", id_documento);
            axios.post(this.url + "documento/listar_id", fm)
                .then(res => {

                    this.detallesArchivo = Object.assign({}, res.data.documento);
                    this.setStateEditarArchivo(this.detallesArchivo);
                    this.irEditar();
                })
                .catch(err => {
                    console.error(err);
                })


        },
        ...Vuex.mapMutations(['setStateEditarArchivo', 'setStateVerDocumento']),



    },
    watch: {
        filtro_id_especialidad: function(val) {
            this.filtros.id_especialidad = val;
            this.buscar();
        },
        filtro_id_autor: function(val) {
            this.filtros.id_autor = val;
            this.buscar();
        },
        filtro_id_categoria: function(val) {
            this.filtros.id_categoria = val;
            this.buscar();
        },
        filtro_id_tipo: function(val) {
            this.filtros.id_tipo = val;
            this.buscar();
        },

    },

    computed: {
        ...Vuex.mapState(['verDocumento'])

    },


}
