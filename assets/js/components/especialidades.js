export default {
    template: //html
        `
		<div class="mb-5">
		<h1>Especialidades</h1>
		<!-- Button trigger modal -->
			<button type="button" class="btn btn-primary"   @click="mostrarModal()">
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
						<button type="button" class="btn btn-primary"  @click="registrar();">Registrar</button>
						</div>
					</div>
				</div>
			</div>

		
			<div class="card mb-5">
				<div class="card-header">
					<h3 class="card-title">Listado de Especialidades</h3>
					</div>
						<div class="card-body">
						<div class="table-responsive">
						<table id="datatable-export" class="table table-striped">
							<thead class="thead-light">
								<tr>
									<th>#</th>
									<th>Especialidad</th>
									<th>Version</th>
                                    <th>Acciones</th>
								</tr>
							</thead>
							<tbody>
							<tr v-for="(item,index) of listaEspecialidades" :key="item.id_especialidad">
								<td>{{index+1}}</td>
								<td>{{item.especialidad}}</td>
								<td>{{item.version}}</td>
                                <td>
                                    <button type="button" class="btn btn-warning btn-sm"   
                                        @click="editarEspecialidad(item)">
                                    <i class="ti-pencil"></i>
                                    </button>
                                    <button type="button" class="btn btn-danger btn-sm"   @click="confirm(item.id_especialidad)">
                                        <i class="ti-trash"></i>
                                    </button>
                                   
                                </td>
		
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
            editar: false,

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
        async registrar() {

            if (this.validarCampos()) {

                if (this.editar) {
                    const res = await axios.post(base_url + "especialidad/update", this.especialidad)
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



            } else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Error: Por favor rellene los campos',
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
                this.datatable = $("#datatable-export").DataTable({ destroy: true, dom: "Bfrtip", buttons: ["print", "copyHtml5", "excelHtml5", "csvHtml5", "pdfHtml5"] });
            } else {
                setTimeout(() => {
                    this.datatable = $("#datatable-export").DataTable({ destroy: true, dom: "Bfrtip", buttons: ["print", "copyHtml5", "excelHtml5", "csvHtml5", "pdfHtml5"] });
                }, 1000);
            }
        },
        editarEspecialidad(item) {
            this.editar = true
            this.cambiarTitulo()
            this.especialidad.id = item.id_especialidad
            this.especialidad.espec = item.especialidad
            this.especialidad.id_version = item.id_version
            this.especialidad.version = item.version
            this.especialidad.id_ver_esp = item.id_ver_esp

            //console.log(this.especialidad)
            this.mostrarModal()

        },
        confirm(idEs) {
            this.especialidad.id = idEs
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.eliminar(idEs)
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })
        },
        async eliminar(idEs) {

            let data = { id_especialidad: idEs }

            const res = await axios.post(base_url + "especialidad/delete", data)
                .then(res => {
                    if (res.data.respuesta) {
                        console.log(res);
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Especialidad Eliminada',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        this.listar()
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
        },



    },
    mounted() {
        this.datatab();

    },

}