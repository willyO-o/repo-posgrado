export default {
    template: //html
        `
		<div class="mb-5">
		<h1>Archivos</h1>
		<!-- Button trigger modal -->
        <router-link to="/archivos/subir"  class="btn btn-primary"><i class="ti-export"></i> <span class="title">Subir Archivo</span></router-link>

			<br/><br/>
			<!-- Modal -->
			<div class="modal fade" id="modal" aria-hidden="true" data-backdrop="static" >
				<div class="modal-dialog modal-xl">
					<div class="modal-content">
						<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">{{tituloEspecialidad}}</h5>
						<button type="button" class="close" @click="ocultarModal()">
							<span aria-hidden="true">&times;</span>
						</button>
						</div>
						<div class="modal-body">
						

							<div class="container-fluid">
								<div class="card card-profile">
								<div class="row ">
									<!-- left column -->
									<div class="col-md-4">
									<div class="profile-left">
										<!-- profile header -->
										<div class="profile-header" >
										<div class="overlay"   style="width:100%"></div>
										<div class="profile-main">
											<img :src="imagenArchivo" class="" alt="Avatar" width="100%">
											
										</div>
										
										</div>
										<!-- end profile header -->
					
										<!-- profile detail -->
										<div class="profile-detail">
										<div class="profile-info">
											<h4 class="heading">Informacion</h4>
											<dl class="row">
											<dt class="col-sm-4">Autor:</dt>
											<dd class="col-sm-8 text-right">{{detallesArchivo.autor}}</dd>
					
											<dt class="col-sm-4" v-if="detallesArchivo.tutor!='' ">Tutor:</dt>
											<dd class="col-sm-8 text-right"  v-if="detallesArchivo.tutor!='' ">{{detallesArchivo.tutor}}</dd>
					
											<dt class="col-sm-4">Email</dt>
											<dd class="col-sm-8 text-right">samuel@mydomain.com</dd>
					
											<dt class="col-sm-4">Website</dt>
											<dd class="col-sm-8 text-right">aaa</dd>
											</dl>
										</div>
										<div class="profile-info">
	
										</div>
										<div class="profile-info">
											<h4 class="heading">About</h4>
											<p>Interactively fashion excellent information after distinctive outsourcing.</p>
										</div>
										<div class="text-center"><a href="#" class="btn btn-primary">Edit Profile</a></div>
										</div>
										<!-- end profile detail -->
									</div>
									</div>
									<!-- end left column -->
					
									<!-- right column -->
									<div class="col-md-8">
									<div class="profile-right">
										<h4 class="heading"> {{detallesArchivo.titulo}} </h4>
					
										<!-- awards -->
										<div class="awards">
										<div class="row">
											<div class="col-md-3 col-sm-6">
											<div class="award-item">
												<div class="hexagon">
												<span class="ti-light-bulb award-icon"></span>
												</div>
												<span>Most Bright Idea</span>
											</div>
											</div>
											<div class="col-md-3 col-sm-6">
											<div class="award-item">
												<div class="hexagon">
												<span class="ti-alarm-clock award-icon"></span>
												</div>
												<span>Most On-Time</span>
											</div>
											</div>
											<div class="col-md-3 col-sm-6">
											<div class="award-item">
												<div class="hexagon">
												<span class="ti-hummer award-icon"></span>
												</div>
												<span>Problem Solver</span>
											</div>
											</div>
											<div class="col-md-3 col-sm-6">
											<div class="award-item">
												<div class="hexagon">
												<span class="ti-heart award-icon"></span>
												</div>
												<span>Most Loved</span>
											</div>
											</div>
										</div>
										<div class="text-center"><a href="#" class="btn btn-outline-light">See all awards</a></div>
										</div>
										<!-- end awards -->
					
										<!-- tabbed content -->
										<div class="custom-tabs-line tabs-line-bottom left-aligned">
										<ul class="nav" role="tablist">
											<li class="nav-item"><a href="#tab-bottom-left1" class="nav-link active" role="tab" data-toggle="tab">Recent Activity</a></li>
											<li class="nav-item"><a href="#tab-bottom-left2" class="nav-link" role="tab" data-toggle="tab">Resumen </span></a></li>
										</ul>
										</div>
										<div class="tab-content">
										<div class="tab-pane fade show active" id="tab-bottom-left1">
											<ul class="list-unstyled activity-timeline">
											<li>
												<i class="fa fa-calendar activity-icon"></i>
												<p>{{detallesArchivo.fecha_publicacion}} <span class="timestamp">Fecha de Publicacion</span></p>
											</li>
											<li>
												<i class="fa fa-cloud-upload activity-icon"></i>
												<p>{{ detallesArchivo.tipo }} <span class="timestamp">Tipo de Documento</span></p>
											</li>
											<li>
												<i class="fa fa-plus activity-icon"></i>
												<p> {{detallesArchivo.categoria}} <span class="timestamp"> Categoria </span></p>
											</li>
											<li>
												<i class="fa fa-check activity-icon"></i>
												<p> {{detallesArchivo.especialidad}} {{detallesArchivo.version}} <span class="timestamp">Especialidad</span></p>
											</li>
											</ul>
											<div class="text-center"><a href="#" class="btn btn-outline-light">See all activity</a></div>
										</div>
										<div class="tab-pane fade" id="tab-bottom-left2">
											<div class="table-responsive">
											<p>{{detallesArchivo.resumen}}</p>
											</div>
										</div>
										<!-- end tabbed content -->
									</div>
									</div>
									<!-- end right column -->
								</div>
								</div>
							</div>
							</div>

					  
						</div>
						<div class="modal-footer">
						<button type="button" class="btn btn-secondary" @click="ocultarModal()">Cerrar</button>
						
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
									<th style="width:5rem!important">Titulo</th>
									<th>Autor</th>
                                    <th>Acciones</th>
								</tr>
							</thead>
							<tbody>
							<tr v-for="(item,index) of listaArchivos" :key="item.id_archivo">
								<td>{{index+1}}</td>
								<td >{{item.titulo}}</td>
								<td>{{item.autor}}</td>
                                <td>
									<button type="button" class="btn btn-info btn-sm"   
                                        @click="verDetallesArchivo(item)">
                                    	<i class="ti-eye"></i>
                                    </button>
                                    <button type="button" class="btn btn-warning btn-sm"   
                                        @click="verDetallesArchivo(item)">
                                    	<i class="ti-pencil"></i>
                                    </button>
                                    <button type="button" class="btn btn-danger btn-sm"   @click="confirm(item.id_archivo)">
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
            datatable: null,
            listaArchivos: [],
            imagenArchivo: base_url + 'assets/img/documento.png',
            detallesArchivo: {
                titulo: '',
                autor: '',
                tutor: '',
                resumen: '',
                fecha_publicacion: '',
                categoria: '',
                especialidad: '',
                tipo: '',
                ruta: '',
                sede: '',
            },


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

        this.listarArchivos();



    },

    methods: {

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
        async listarArchivos() {
            const res = await axios.get(base_url + "archivo/getArchivo")


            this.listaArchivos = res.data.archivos

            console.log(this.listaArchivos);


            //this.articulos = res.data;
        },
        datatab() {

            setTimeout(() => {
                this.datatable = $("#datatable-export").DataTable({ destroy: true, mdom: "Bfrtip", buttons: ["print", "pdfHtml5"] });
            }, 1000);

        },
        verDetallesArchivo(item) {
            this.detallesArchivo.titulo = item.titulo
            this.detallesArchivo.autor = item.autor
            this.detallesArchivo.tutor = item.tutor
            this.detallesArchivo.categoria = item.categoria
            this.detallesArchivo.fecha_publicacion = item.fecha_publicacion
            this.detallesArchivo.especialidad = item.especialidad
            this.detallesArchivo.resumen = item.resumen
            this.detallesArchivo.ruta = item.ruta
            this.detallesArchivo.sede = item.sede
            this.detallesArchivo.tipo = item.tipo
            this.detallesArchivo.version = item.version

            console.log(item)
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