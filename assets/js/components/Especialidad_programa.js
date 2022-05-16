export default {
    template: //html
        `
		<div class="mb-5">
		<h1>Programas</h1>

			<!-- Modal -->
			<div class="modal fade" id="modal" aria-hidden="true" data-backdrop="static" >
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">{{tituloEspecialidad}}</h5>
						<button type="button" class="close" @click="ocultarModal()">
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
										<label for="especialidad">Especialidad</label>
										<textarea class="form-control " :class="{'is-invalid':errorEspecialidad.especialidad}"  id="especialidad" placeholder="Ingrese nombre de  la Especialidad" v-model="especialidad.espec" required></textarea>
										<div class="invalid-feedback">
											Por favor rellene el campo
										</div>
									</div>
									
								  </div>
		

								</form>
							  </div>

					  		</div>
					  <!-- end validation by Bootstrap -->
					  </div>

					  
						</div>
						<div class="modal-footer">
						<button type="button" class="btn btn-secondary" @click="ocultarModal()">Cerrar</button>
						<button type="button" class="btn btn-primary"  @click="registrar();">Registrar</button>
						</div>
					</div>
				</div>
			</div>

		
				<div class="card mb-5">
					<div class="card-header d-flex justify-content-between">
						<h2 class="card-title mt-2">Listado de Especialidades</h2>
                        <button type="button" class="btn btn-primary"   @click="mostrarModal()">
                            Registar Nuevo
                        </button>
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
					
						<div class="table-responsive-md">
							<table id="tabla" class="table table-striped">
								<thead class="thead-light">
									<tr>
										<th>#</th>
										<th>especialidad</th>

										<th>Acciones</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(item,index) of listado_especialidades" :key="item.id_especialidad">
										<td>{{index + indicePagina()+1 }}</td>
										<td>{{item.especialidad}}</td>
				
		
										<td>
											<i class="icon-list ti-pencil text-warning mx-2" @click="set_editar_especialidad(item)"></i>
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
										<th>Especialidad</th>

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

			  

              
		</div>
	
	`,
    data() {
        return {
            contador: base_url,
            tablaEspecialidades: null,
            listaVersiones: null,
            listado_especialidades: [],
            tituloEspecialidad: '',
            editar: false,
            tablaVersiones: null,
            url: base_url,
            editarVersion: false,
            totalResultadosQuery: 0,
            pagina_actual: 1,
            paginar: 0,
            elementos_pagina: 10,
            version: {
                version: '',
                id_version: '',
            },
            palabra_buscar: '',

            especialidad: {
                id: 0,
                espec: '',

            },
            defaulEspecialidad: {
                id: 0,
                espec: '',

            },

            errorVersion: false,
            hasError: false,
            validar: {
                espe: ''

            },
            errorEspecialidad: {
                especialidad: false,
                version: false,
            },
            filtros: {
                textoBuscar: "",
            },
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
        totalResultados() {
            return this.totalResultadosQuery;
        },

        buscar(pagina = 0) {
            this.pagina_actual = pagina != 0 ? pagina : 1;
            pagina != 0 ? pagina = (pagina - 1) * 10 : 0;
            let fm = new FormData();
            fm.append("palabra_buscar", this.filtros.textoBuscar);
            fm.append("ofset", pagina);


            axios.post(this.url + "especialidad/filtrar", fm)
                .then(res => {
                    this.listado_especialidades = res.data.especialidades;
                    this.totalResultadosQuery = res.data.total_resultados;

                })
                .catch(err => {

                    this.listaArchivos = [];
                    this.totalResultadosQuery = 0;

                })



        },
        sumar() {
            this.contador = this.contador + 2
        },
        mostrarModal() {
            $('#modal').modal('show')
            this.cambiarTitulo()
        },
        ocultarModal() {
            this.editar = false
            $('#modal').modal('hide')
            this.cambiarTitulo()
            this.especialidad = Object.assign({}, this.defaulEspecialidad)
        },
        cambiarTitulo() {
            if (this.editar) {
                this.tituloEspecialidad = 'Editar Especialidad'

            } else {
                this.tituloEspecialidad = 'Registrar Especialidad'
                this.especialidad = Object.assign({}, this.defaulEspecialidad)
            }
        },
        registrar() {

            if (this.validarCampos()) {

                let fm = new FormData();
                fm.append("especialidad", this.especialidad.espec)

                if (this.editar) {

                    fm.append("accion", "editar")
                    fm.append("id_especialidad", this.especialidad.id)


                } else {
                    fm.append("accion", "nuevo")

                }

                axios.post(base_url + "especialidad/registrar", fm)
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
                            this.buscar()
                            this.ocultarModal()
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

                    }).catch(res => {
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            text: 'Ocurrio un error, No se pudo procesar su solicitud',
                            title: "Error!.",
                            showConfirmButton: false,
                            timer: 1500,
                        })
                    })

            }
        },
        validarCampos() {
            if (this.especialidad.espec) {
                return true
            }

            if (!this.especialidad.espec) {
                this.errorEspecialidad.especialidad = true
            }


            setTimeout(() => {
                this.errorEspecialidad.especialidad = false
            }, 3000);

        },


        listar() {


        },

        set_editar_especialidad(item) {
            this.editar = true
            this.cambiarTitulo()
            this.especialidad.id = item.id_especialidad
            this.especialidad.espec = item.especialidad


            this.mostrarModal()

        },
        confirm(item) {
            this.especialidad.id = item


            Swal.fire({
                title: 'Esta Usted Seguro?',
                text: "Desea Eliminar: " + item.especialidad,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si eliminar, Programa!'
            }).then((result) => {
                if (result.value) {
                    let fm = new FormData();
                    fm.append("id_especialidad", item.id_especialidad)
                    axios.post(base_url + "especialidad/eliminar", fm)
                        .then(res => {

                            if (res.data.exito) {
                                Swal.fire(
                                    'Eliminado!',
                                    'El programo fue eliminado exitosamente.',
                                    'success'
                                )
                                this.buscar();
                            } else {
                                Swal.fire(
                                    'Error!',
                                    'Ocurrion un error, no se pudo procesar su solicitud',
                                    'success'
                                )
                            }

                        })
                        .catch(err => {
                            Swal.fire(
                                'Error!',
                                'Ocurrion un error, no se pudo procesar su solicitud',
                                'success'
                            )
                        })


                }
            })

            // $('#modalConfimEliminar').modal('show')

        },








    },
    watch: {
        palabra_buscar: function(val) {
            this.filtros.textoBuscar = val;
            this.buscar();
        }
    }

}