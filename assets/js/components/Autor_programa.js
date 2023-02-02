export default {
    template: //html
        `
	<div >
		<h1>Autores</h1>
	
		<!-- Modal -->
		<div class="modal fade" id="modalAutor" aria-hidden="true" data-backdrop="static" >
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">{{titulo_autor}} Autor</h5>
					<button type="button" class="close" @click="ocultar_modal_formulario()">
						<span aria-hidden="true">&times;</span>
					</button>
					</div>
					<div class="modal-body">
					


					<div class="container-fluid">
					<!-- validation by Bootstrap -->
		
						<div class="row">
						<div class="col-12">
							<form class="needs-validation">
							<div class="form-group">
								<div class="mb-3">
									<label for="ci_autor">C.I. Autor *</label>
									<input class="form-control"  v-model="datos_autor.ci_autor" id="ci_autor"   :class="{'is-invalid':error_autor.ci_autor}" >
									<div class="invalid-feedback">
										Por favor rellene el campo
									</div>
								</div>
								
							</div>
							<div class="form-group">
								<div class="mb-3">
									<label for="nombre_autor">Nombres Autor *</label>
									<input class="form-control"  v-model="datos_autor.nombre_autor" id="nombre_autor"   :class="{'is-invalid':error_autor.nombre_autor}" >
									<div class="invalid-feedback">
										Por favor rellene el campo
									</div>
								</div>
							</div>
							<div class="form-group">
								<div class="mb-3">
									<label for="paterno_autor">Apellido Paterno Autor *</label>
									<input class="form-control"  v-model="datos_autor.paterno_autor" id="paterno_autor"   :class="{'is-invalid':error_autor.paterno_autor}" >
									<div class="invalid-feedback">
										Por favor rellene el campo
									</div>
								</div>
							</div>
							<div class="form-group">
								<div class="mb-3">
									<label for="materno_autor">Apellido Materno Autor *</label>
									<input class="form-control"  v-model="datos_autor.materno_autor" id="materno_autor"   :class="{'is-invalid':error_autor.materno_autor}" >
									<div class="invalid-feedback">
										Por favor rellene el campo
									</div>
								</div>
							</div>
							<div class="form-group">
								<div class="mb-3">
									<label for="grado_academico">Grado Academico/Ocupacion <small>(opcional) </small> </label>
									<input class="form-control"  v-model="datos_autor.grado_academico" id="grado_academico"  placeholder="Lic. Dr.  Ing." >
								</div>
							</div>

							</form>
						</div>

						</div>
				<!-- end validation by Bootstrap -->
				</div>

				
					</div>
					<div class="modal-footer">
					<button type="button" class="btn btn-secondary"  @click="ocultar_modal_formulario()" >Cerrar</button>
					<button type="button" class="btn btn-primary"  @click="registrar_autor();">Registrar</button>
					</div>
				</div>
			</div>
		</div>
	
		<div class="card mb-0">
			<div class="card-header d-flex justify-content-between">
				<h3 class="card-title mt-2">Listado de Autores</h3>
				<!--<button  class="btn btn-primary" @click="mostrar_modal_formulario()"><i class="ti-plus"></i> <span class="title">Registrar Nuevo</span></button>-->
			</div>
			<div class="card-body">
				<!-- table-responsive-->

					<div class="justify-content-between d-flex">
						<form  :action="action_post" method="POST" target="_blank" >
							<button class="btn btn-danger mb-2" type="submit"  name="accion" value="pdf"><i class="fa fa-file-pdf-o" ></i> PDF</button>
							<button class="btn btn-success mb-2" type="submit" name="accion" value="excel"><i class="fa fa-file-excel-o" ></i> EXCEL</button>
							<input type="hidden" name="filtro_texto_buscar" :value="palabra_buscar">
						</form>
						<div class="caja-buscardor">
							<div class="input-group  mb-3">
								<input type="search" class="form-control" v-model="palabra_buscar" placeholder="Buscar"  aria-label="Recipient's username" aria-describedby="button-addon2">
								<div class="input-group-append">
									<button class="btn btn-primary" type="button" id="button-addon2"><i class="ti-search"></i></button>
								</div>
							</div>
						</div>
					</div>
				
					<div class="table-responsive-md">
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
										<i class="icon-list ti-pencil text-warning mx-2" @click="mostrar_modal_formulario(item)"></i>
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
					</div>
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
	

	</div>
	
	`,
    data() {
        return {
            action_post: base_url + "autor/reporte",
            url: base_url,
            modalEliminar: false,
            autor_eliminar: '',
            totalResultadosQuery: 0,
            pagina_actual: 1,
            paginar: 0,
            elementos_pagina: 10,


            es_editar: false,
            default_autor: {
                ci_autor: '',
                grado_academico: '',
                id_autor: '',
                nombre_autor: '',
                paterno_autor: '',
                materno_autor: '',
            },
            datos_autor: {
                ci_autor: '',
                grado_academico: '',
                id_autor: '',
                nombre_autor: '',
                paterno_autor: '',
                materno_autor: '',
            },
            error_autor: {
                ci_autor: false,
                id_autor: false,
                nombre_autor: false,
                paterno_autor: false,
                materno_autor: false,
            },

            titulo_autor: "Registrar",
            //autores
            listadoAutores: [],


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
            textoBuscar: "",
            palabra_buscar: '',

        }
    },
    created() {

        this.buscar();


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

        },
        limpiar() {
            this.idArchivo = 0
            this.autor_eliminar = ''
        },



        confirm(item) {

            Swal.fire({
                title: 'Esta Usted Seguro?',
                text: "Desea Eliminar el autor: " + item.nombre_autor + " " + item.paterno_autor + " " + item.materno_autor,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si eliminar, Persona!'
            }).then((result) => {
                if (result.value) {
                    let fm = new FormData();
                    fm.append("id_autor", item.id_autor)
                    axios.post(base_url + "autor/eliminar", fm)
                        .then(res => {

                            if (res.data.exito) {
                                Swal.fire(
                                    'Eliminado!',
                                    'El Autor fue eliminado exitosamente.',
                                    'success'
                                )
                                this.buscar();
                            } else {
                                Swal.fire(
                                    'Error!',
                                    'Ocurrion un error, no se pudo procesar su solicitud',
                                    'error'
                                )
                            }

                        })
                        .catch(err => {
                            Swal.fire(
                                'Error!',
                                'Ocurrion un error, no se pudo procesar su solicitud',
                                'error'
                            )
                        })


                }
            })

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
                    this.listadoAutores = res.data.autores;
                    this.totalResultadosQuery = res.data.total_resultados;

                })
                .catch(err => {

                    this.listadoAutores = [];
                    this.totalResultadosQuery = 0;

                })



        },

        ocultar_modal_formulario() {
            $("#modalAutor").modal("hide")
            this.datos_autor = Object.assign({}, this.default_autor);
        },
        mostrar_modal_formulario(item = false) {


            if (item) {
                this.titulo_autor = "Editar";
                this.es_editar = true;
                this.datos_autor = Object.assign({}, item);
            } else {
                this.es_editar = false;

                this.datos_autor = Object.assign({}, this.default_autor);

                this.titulo_autor = "Registrar";
            }
            $("#modalAutor").modal("show");

        },
        registrar_autor() {

            if (this.validar_autor()) {
                let fm = new FormData();
                fm.append("ci_autor", this.datos_autor.ci_autor);
                fm.append("nombre_autor", this.datos_autor.nombre_autor);
                fm.append("paterno_autor", this.datos_autor.paterno_autor);
                fm.append("materno_autor", this.datos_autor.materno_autor);
                fm.append("grado_academico", this.datos_autor.grado_academico);


                if (this.es_editar) {
                    fm.append("id_autor", this.datos_autor.id_autor);
                    fm.append("accion", "actualizar");


                } else {
                    fm.append("accion", "nuevo");

                }



                axios.post(this.url + "autor/registrar", fm)
                    .then(res => {
                        if (res.data.exito) {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: "Registrado.",
                                html: res.data.mensaje,
                                showConfirmButton: false,
                                timer: 1500
                            })
                            this.ocultar_modal_formulario();
                            this.buscar();
                        } else {
                            Swal.fire({
                                position: 'center',
                                icon: 'error',
                                html: res.data.mensaje ? res.data.mensaje : 'Ocurrio un error, Intente de nuevo',
                                title: "Error!.",
                                showConfirmButton: false,
                                timer: 1500,
                            })
                        }



                    })
                    .catch(err => {
                        Swal.fire(
                            'Error!',
                            'Ocurrion un error, no se pudo procesar su solicitud',
                            'error'
                        )
                    })

            }


        },

        validar_autor() {

            if (this.datos_autor.ci_autor && this.datos_autor.nombre_autor && this.datos_autor.paterno_autor && this.datos_autor.materno_autor) {
                return true;
            }

            if (!this.datos_autor.ci_autor) {
                this.error_autor.ci_autor = true;
            }
            if (!this.datos_autor.nombre_autor) {
                this.error_autor.nombre_autor = true;
            }
            if (!this.datos_autor.paterno_autor) {
                this.error_autor.paterno_autor = true;
            }
            if (!this.datos_autor.materno_autor) {
                this.error_autor.materno_autor = true;
            }

            setTimeout(() => {
                this.error_autor.ci_autor = false;
                this.error_autor.nombre_autor = false;
                this.error_autor.paterno_autor = false;
                this.error_autor.materno_autor = false;

            }, 5000);
        },



    },
    watch: {
        palabra_buscar: function(val) {
            this.filtros.textoBuscar = val;
            this.buscar();
        }
    },




}
