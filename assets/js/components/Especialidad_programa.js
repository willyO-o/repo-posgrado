export default {
    template: //html
        `
		<div class="mb-5">
		<h1>Especialidades</h1>

			<!-- Modal -->
			<div class="modal fade" id="modal" aria-hidden="true" data-backdrop="static" >
				<div class="modal-dialog">
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
										<textarea class="form-control " :class="{'is-invalid':errorEspecialidad.especialidad}"  id="especialidad" placeholder="Ingrese la Especialidad" v-model="especialidad.espec" required></textarea>
										<div class="invalid-feedback">
											Por favor rellene el campo
										</div>
									</div>
									
								  </div>
								  <div class="form-group">
								  <label for="version">Version</label>
									<select class="custom-select" :class="{'is-invalid':errorEspecialidad.version}" required id="version" v-model="especialidad.id_version">
									  <option value="0" disabled >Seleccione Version</option>
									  <option  v-for="row in listaVersiones" :value="row.id_version">{{ row.version }}</option>
									</select>
									<div class="invalid-feedback">
											Por favor seleccione una version
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
					
						<table id="tabla" class="table table-striped">
							<thead class="thead-light">
								<tr>
									<th>#</th>
									<th>especialidad</th>

									<th>Acciones</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(item,index) of listado_especialidades" :key="item.id_autor">
									<td>{{index + indicePagina()+1 }}</td>
									<td>{{item.especialidad}}</td>
			
	
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
									<th>Especialidad</th>

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

			  
			<h1>Versiones</h1>
				<div class="card mb-5">
				<div class="card-header d-flex justify-content-between">
					<h2 class="card-title mt-2">Listado de Especialidades</h2>
					<button type="button" class="btn btn-primary"   @click="mostrarModalVersion()">
						Registar Nuevo
					</button>
				</div>
				<div class="card-body">
						<div class="table-responsive">
							<table id="tabla-versiones" class="table table-striped">
								<thead class="thead-light">
									<tr>
										<th>#</th>
										<th>Version</th>
										<th>Acciones</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(item,index) of listaVersiones" :key="item.id_version">
										<td>{{index+1}}</td>
										<td>{{item.version}}</td>
										<td>
											<button type="button" class="btn btn-warning btn-sm"   
												@click="editarVersionItem(item)">
											<i class="ti-pencil"></i>
											</button>

										
										</td>
				
									</tr>
								</tbody>
							</table>
						</div>
				</div>
			</div>
			  <!-- Modal -->
			<div class="modal fade" id="modalVersion" aria-hidden="true" data-backdrop="static" >
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
					<h5 class="modal-title">{{tituloVersion()}}</h5>
					<button type="button" class="close" @click="ocultarModalVersion()">
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
									<label for="versiones">Version</label>
									<input class="form-control " :class="{'is-invalid':errorVersion}" id="versiones" placeholder="Ingrese la Version" v-model="version.version" required>
									<div  class="invalid-feedback">
                                        Por Favor rellene el campo
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
					<button type="button" class="btn btn-secondary" @click="ocultarModalVersion()">Cerrar</button>
					<button type="button" class="btn btn-primary"  @click="registrarVersion();">Registrar</button>
					</div>
				</div>
			</div>
		</div>

	
	


			  <div class="modal fade" id="modalConfimEliminar" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered modal-sm">
					<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="modalConfimEliminarLabel">Eliminar Especialidad</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						Esta Usted Seguro?
						<p>Esta accion no se puede deshacer!</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
						<button type="button" class="btn btn-danger" @click="eliminar()">confirmar</button>
					</div>
					</div>
				</div>
			  </div>
                <!-- vfin eespecialidades -->

                

				<br><br>
              
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
                id_version: 0,
                version: '',
                id_ver_esp: 0
            },
            defaulEspecialidad: {
                id: 0,
                espec: '',
                id_version: 0,
                version: '',
                id_ver_esp: 0
            },
            defaultVersion: {
                version: '',
                id_version: '',
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
        this.listarVersiones()
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
                    console.log(res)
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

                if (this.editar) {
                    axios.post(base_url + "especialidad/update", this.especialidad)
                        .then(res => {
                            if (res.data.respuesta) {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Especialidad Actualizada',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                this.listar()
                                this.ocultarModal()
                            } else {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'error',
                                    title: 'Ocurrio un error, Intente de nuevo',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }

                        }).catch(res => {
                            alert('error')
                        })
                } else {
                    axios.post(base_url + "especialidad/save", this.especialidad)
                        .then(res => {
                            if (res.data.respuesta) {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Especialidad Registrada',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                this.listar()
                                this.especialidad = Object.assign({}, this.defaulEspecialidad)
                            } else {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'error',
                                    title: 'Ocurrio un error, Intente de nuevo',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }

                        }).catch(res => {
                            alert('error')
                        })
                }



            }
        },
        validarCampos() {
            if (this.especialidad.espec && this.especialidad.id_version) {
                return true
            }

            if (!this.especialidad.espec) {
                this.errorEspecialidad.especialidad = true
            }
            if (!this.especialidad.id_version) {
                this.errorEspecialidad.version = true
            }

            setTimeout(() => {
                this.errorEspecialidad.version = false
                this.errorEspecialidad.especialidad = false
            }, 3000);

        },

		
        listar() {


        },
        datatab() {



        },
        editarEspecialidad(item) {
            this.editar = true
            this.cambiarTitulo()
            this.especialidad.id = item.id_especialidad
            this.especialidad.espec = item.especialidad
            this.especialidad.id_version = item.id_version
            this.especialidad.version = item.version
            this.especialidad.id_ver_esp = item.id_ver_esp

            this.mostrarModal()

        },
        confirm(idEs) {
            this.especialidad.id = idEs

            $('#modalConfimEliminar').modal('show')

        },
        eliminar() {

            let data = { id_especialidad: this.especialidad.id }

            axios.post(base_url + "especialidad/delete", data)
                .then(res => {
                    if (res.data.respuesta) {

                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Especialidad Eliminada',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        this.listar()
                        $('#modalConfimEliminar').modal('hide')
                    } else {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: 'Ocurrio un error, Intente de nuevo',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }

                }).catch(res => {
                    alert('error: Este item tiene archivos dependientes, no se puede eliminar')
                })
        },
        listarVersiones() {
            axios.get(this.url + 'especialidad/getVersiones')
                .then(res => {
                    this.listaVersiones = res.data.versiones
                })
                .catch(err => {
                    alert("ocurrio un error: " + err);
                })
        },
        tituloVersion() {
            return this.editarVersion ? "Editar Version" : "Crear Version"
        },
        mostrarModalVersion() {
            $('#modalVersion').modal('show')
            this.tituloVersion()
        },
        ocultarModalVersion() {
            this.editarVersion = false
            $('#modalVersion').modal('hide')
            this.especialidad = Object.assign({}, this.defaulEspecialidad)
        },
        registrarVersion() {
            if (this.validarVersion()) {
                if (this.editarVersion) {
                    axios.post(this.url + 'especialidad/updateVersion', this.version)
                        .then(res => {

                            if (!res.data.error) {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Version Actualizada...',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                this.listarVersiones()
                                this.version = Object.assign({}, this.defaultVersion)
                                this.tablaVersiones.destroy()
                                this.datatableVersion()
                                this.ocultarModalVersion()
                            } else {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'error',
                                    title: 'Ocurrio un error, intente de nuevo',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }

                        })
                        .catch(err => {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'error',
                                title: 'Ocurrio un error, intente de nuevo',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        })

                } else {
                    axios.post(this.url + 'especialidad/registrarVersion', this.version)
                        .then(res => {

                            if (!res.data.error) {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Version Registrada...',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                this.listarVersiones()
                                this.version = Object.assign({}, this.defaultVersion)
                                this.tablaVersiones.destroy()
                                this.datatableVersion()
                            } else {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'error',
                                    title: 'Ocurrio un error, intente de nuevo',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }

                        })
                        .catch(err => {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'error',
                                title: 'Ocurrio un error, intente de nuevo',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        })
                }
            }
        },
        validarVersion() {
            if (this.version.version) {
                return true
            }

            if (!this.version.version) {
                this.errorVersion = true
            }

            setTimeout(() => {
                this.errorVersion = false
            }, 3000);
        },
        editarVersionItem(item) {
            this.editarVersion = true
            this.version.version = item.version
            this.version.id_version = item.id_version
            this.mostrarModalVersion()
        },
        datatableVersion() {


        },

    },
    mounted() {
        this.datatab();
        this.datatableVersion()
    },
	watch:{
		palabra_buscar: function(val) {
            this.filtros.textoBuscar = val;
            this.buscar();
        }
	}

}
