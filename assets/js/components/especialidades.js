export default {
    template: //html
        `
		<div>
		<!-- Button trigger modal -->
			<button type="button" class="btn btn-primary"   @click="mostrarModal(); cambiarTitulo()">
				Registar Nuevo
			</button>
			<br/><br/>
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
										<textarea class="form-control "  id="especialidad" placeholder="Ingrese la Especialidad" v-model="especialidad.espec" required></textarea>
										<div class="invalid-feedback">
											{{especialidad.espc}}
										</div>
									</div>
									
								  </div>
								  <div class="form-group">
								  <label for="version">Version</label>
									<select class="custom-select" required id="version" v-model="especialidad.id_version">
									  <option value="0" disabled >Seleccione Version</option>
									  <option  v-for="row in listaVersiones" :value="row.id_version">{{ row.version }}</option>
									</select>
									<div class="invalid-feedback">
											{{especialidad.id_version}}
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
						<button type="button" class="btn btn-primary"  @click="registrar()">Registrar</button>
						</div>
					</div>
				</div>
			</div>

		
			<div class="card">
				<div class="card-header">
					<h3 class="card-title">Datatable with Export Features</h3>
					</div>
						<div class="card-body">
						<div class="table-responsive">
						<table id="datatable-export" class="table table-striped">
							<thead class="thead-light">
								<tr>
									<th>#</th>
									<th>Especialidad</th>
									<th>Version</th>
								</tr>
							</thead>
							<tbody>
							<tr v-for="row in listaEspecialidades" :key="row.id_especialidad">
								<td>1</td>
								<td>{{row.especialidad}}</td>
								<td>{{row.version}}</td>
		
							</tr>
						</tbody>
					</table>
				</div>
			</div>
	  </div>
	</div>
	
	`,
    data() {
        return {
            saludo: 'hola especialidad',
            contador: base_url,
            datatable: null,
            listaVersiones: null,
            listaEspecialidades: null,
            tituloEspecialidad: '',
            editar: true,
            especialidad: {
                id: 0,
                espec: '',
                id_version: 0,
                version: ''
            },
            defaulEspecialidad: {
                id: 0,
                espec: '',
                id_version: 0,
                version: ''
            },
            hasError: false,
            validar: {
                espe: ''

            }
        }
    },
    created() {

        this.listar();



    },

    methods: {
        sumar() {
            this.contador = this.contador + 2
        },
        mostrarModal() {
            $('#modal').modal('show')
        },
        ocultarModal() {
            $('#modal').modal('hide')
            this.cambiarTitulo()
        },
        cambiarTitulo() {
            if (this.editar) {
                this.tituloEspecialidad = 'Registrar Especialidad'
                this.especialidad.id = ''
                this.especialidad.espec = ''
                this.especialidad.id_version = 0
            } else {
                this.tituloEspecialidad = 'Editar Especialidad'
            }
        },
        async registrar() {

            if (this.validarCampos()) {

                const res = await axios.post(base_url + "especialidad/save", this.especialidad)
                    .then(res => {
                        if (res.data.respuesta) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Especialidad Registrada',
                                showConfirmButton: false,
                                timer: 1500
                            })
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

            } else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Ocurrio un error, Intente de nuevo',
                    showConfirmButton: false,
                    timer: 1500
                })

            }
        },
        validarCampos() {
            let especialidad = this.especialidad.espec;
            return (especialidad.length > 5 && this.especialidad.id_version != 0)
        },
        async listar() {
            const res = await axios.get(base_url + "especialidad")

            this.listaVersiones = res.data.versiones
            this.listaEspecialidades = res.data.especialidades


            //this.articulos = res.data;
        },
        datatab() {
            if (this.listaVersiones && this.listaEspecialidades) {
                this.datatable = $("#datatable-export").DataTable({ dom: "Bfrtip", buttons: ["print", "copyHtml5", "excelHtml5", "csvHtml5", "pdfHtml5"] });
            } else {
                setTimeout(() => {
                    this.datatable = $("#datatable-export").DataTable({ dom: "Bfrtip", buttons: ["print", "copyHtml5", "excelHtml5", "csvHtml5", "pdfHtml5"] });
                }, 1500);
            }
        },



    },
    mounted() {
        this.datatab();

    },

}