export default {
    template: //html
        `
	<div >
		<h1>Autores</h1>
	
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
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" @click="ocultarModal()">Cerrar</button>
					</div>
				</div>
			</div>
		</div>
	
		<div class="card mb-0">
			<div class="card-header d-flex justify-content-between">
				<h3 class="card-title mt-2">Listado de Autores</h3>
				<router-link to="/archivos/subir" class="btn btn-primary"><i class="ti-export"></i> <span class="title">Subir Documento</span></router-link>
			</div>
			<div class="card-body">
				<!-- table-responsive-->

					<div class="caja-buscardor">
						<div class="input-group  mb-3">
							<input type="search" class="form-control" v-model="palabra_buscar" placeholder="Buscar"  aria-label="Recipient's username" aria-describedby="button-addon2">
							<div class="input-group-append">
								<button class="btn btn-primary" type="button" id="button-addon2"><i class="ti-search"></i></button>
							</div>
						</div>
					</div>
				
					<table id="tabla" class="table table-striped">
						<thead class="thead-light">
							<tr>
								<th>#</th>
								<th>Nombre</th>
								<th>Ap.Paterno</th>
								<th>Ap. Materno</th>
								<th>C.I.</th>

								<th>Acciones</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(item,index) of listadoAutores" :key="item.id_autor">
								<td>{{index + indicePagina()+1 }}</td>
								<td>{{item.nombre_autor}}</td>
								<td>{{item.paterno_autor}}</td>
								<td>{{item.materno_autor}}</td>
								<td>{{item.ci_autor}}</td>

								<td>
									<i class="icon-list ti-eye text-primary" @click="verDetallesArchivo(item.id_autor)"></i>
									<i class="icon-list ti-pencil text-warning mx-2" @click="setEditarDocumento(item.id_autor)"></i>
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
								<th>Nombre</th>
								<th>Ap.Paterno</th>
								<th>Ap. Materno</th>
								<th>C.I.</th>
								<th>Acciones</th>

							</tr>
						</thead>
					</table>
					<div class="paginador" id="paginador">
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
						<h5>{{archivoEliminar}}</h5>
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
    data() {
        return {
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

            //autores
            listadoAutores: [],
            datosAutor: {
                id_autor: 0,
                nombre_autor: '',
                paterno_autor: '',
                materno_autor: '',
                ci_autor: '',

            },
            palabra_buscar: '',
            //autores
            datosAutorDefault: {
                id_autor: 0,
                nombre_autor: '',
                paterno_autor: '',
                materno_autor: '',
                ci_autor: '',

            },
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

            url_autor: base_url + "archivo/buscar_autor",
            url_especialidad: base_url + "archivo/buscar_especialidad_filtro",


        }
    },
    created() {

        this.buscar();
        //this.cargarFiltros();

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


        verDetallesArchivo(id_documento) {

            let fm = new FormData();
            fm.append("id_documento", id_documento);
            axios.post(this.url + "archivo/archivo_id", fm)
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
            this.idArchivo = item.id_documento
            this.archivoEliminar = item.titulo
            console.log(item);
        },


        eliminarConfirmado() {

            let data = new FormData();
            data.append('id_documento', this.idArchivo)
            console.log(this.idArchivo);
            axios.post(this.url + "archivo/delete", data)
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
            this.$router.push('/archivos/subir')

        },
        totalResultados() {
            return this.totalResultadosQuery;
        },
        buscar(pagina = 0) {
            this.pagina_actual = pagina != 0 ? pagina : 1;
            pagina != 0 ? pagina = (pagina - 1) * 10 : 0;
            let fm = new FormData();
            fm.append("palabra_buscar", this.filtros.textoBuscar);
            fm.append("ofset", pagina);


            axios.post(this.url + "autor/listar", fm)
                .then(res => {
                    console.log(res)
                    this.listadoAutores = res.data.autores;
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
            axios.post(this.url + "archivo/archivo_id", fm)
                .then(res => {

                    console.log(res.data);
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
        palabra_buscar: function(val) {
            this.filtros.textoBuscar = val;
            this.buscar();
        }
    },


    computed: {
        ...Vuex.mapState(['verDocumento'])

    },


}
