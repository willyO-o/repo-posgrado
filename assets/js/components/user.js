export default {
    template: //html
        `
		<div class="mb-5">
		<h1>Usuarios</h1>
		<!-- Button trigger modal -->
			<!-- Modal -->
			<div class="modal fade" id="modal" aria-hidden="true" data-backdrop="static" >
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">{{ tituloUsuario() }}</h5>
						<button type="button" class="close" @click="ocultarModal()">
							<span aria-hidden="true">&times;</span>
						</button>
						</div>
						<div class="modal-body">
						
						<div class="container-fluid">
							<!-- validation by Bootstrap -->
			
							<div class="row">
							  <div class="col-12">
									<div v-if="!updatePassword">
										<label for="nombre">Usuario {{ usuarioEditar }}</label>
									</div>
                                  <div v-if="updatePassword">

									<div class="form-group">
										<label for="nombre">Nombres</label>
										<input  id="nombre" class="form-control" v-model="user.nombre" placeholder="Ingrese Nombres" :class="{'is-invalid':error.nombre }">
										<div class="invalid-feedback" v-if="error.nombre"> Por favor ingrese un nombre.</div>
									</div>
									<div class="form-group">
										<label for="apellido">Apellidos</label>
										<input  id="apellido" class="form-control" v-model="user.apellido" placeholder="Ingrese Apellidos" :class="{'is-invalid':error.apellido }">
										<div class="invalid-feedback" v-if="error.apellido"> Por favor ingrese apellidos.</div>
									</div>
									<div class="form-group">
										<label for="usuario">Usuario</label>
										<input id="usuario" class="form-control" v-model="user.usuario" placeholder="Ingrese Usuario" :class="{'is-invalid':error.usuario }">
										<div class="invalid-feedback" v-if="error.usuario"> Por favor ingrese un nombre de usuario.</div>
									</div>
                                  </div>
								  <div class="form-group">
                                        <label for="password">Password</label>
                                        <input type="password" id="password" class="form-control" v-model="user.password" placeholder="Ingrese Password" :class="{'is-invalid':error.password }">
                                        <div class="invalid-feedback" v-if="error.password"> {{error.msjPassword}}</div>
                                    </div>
                                    <div class="form-group">
                                        <label for="confirmPassword">Confirmar Password</label>
                                        <input type="password" id="confirmPassword" class="form-control" v-model="user.confirmPassword" placeholder="Confirmar password" :class="{'is-invalid':error.confirmPassword }">
                                        <div class="invalid-feedback" v-if="error.confirmPassword"> {{error.msjConfirmPassword}} </div>
                                    </div>
								  
									<div v-if="updatePassword">
										 <div class="form-group">
											<label for="customRadio">Tipo de Usuario</label>
											<div class="custom-control custom-radio">
												<input type="radio" id="customRadio1" v-model="user.rol" value="1" class="custom-control-input" checked>
												<label class="custom-control-label" for="customRadio1">Admin</label>
											</div>
											<div class="custom-control custom-radio">
												<input type="radio" id="customRadio2" v-model="user.rol" value="2" class="custom-control-input">
												<label class="custom-control-label" for="customRadio2">Publicador</label>
											</div>
										</div>
									</div>
								 
							  </div>

					  		</div>
					  		<!-- end validation by Bootstrap -->
					  </div>

					  
						</div>
						<div class="modal-footer">
						<button type="button" class="btn btn-secondary" @click="ocultarModal()">Cerrar</button>
						<button type="button" class="btn btn-primary"  @click="save()">Registrar</button>
						</div>
					</div>
				</div>
			</div>

		
			<div class="card mb-5">
					<div class="card-header d-flex justify-content-between">
						<h3 class="card-title">Listado de Usuarios</h3>
						<button type="button" class="btn btn-primary"   @click="mostrarModal()">
							Registar Nuevo
						</button>
					</div>
					<div class="card-body">
							<div class="table-responsive">
								<table id="table-users" class="table table-striped">
									<thead class="thead-light">
										<tr>
											<th>#</th>
											<th>Usuario</th>
											<th>Nombre</th>
											<th>Apellido</th>
											<th>Estado</th>
											<th>Rol</th>
											<th>Acciones</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="(usuario,index) of listadoUsuarios" :key="usuario.id_usuario">
											<td>{{index+1}}</td>
											<td>{{usuario.usuario}}</td>
											<td>{{usuario.nombre}}</td>
											<td>{{usuario.apellido}} </td>
											<td>
												<button type="button" class="btn  btn-sm " @click="cambiarEstado(usuario)" :class="{'btn-success':usuario.estado==1,'btn-warning':usuario.estado==0}" >
													{{ usuario.estado ? "activo":"inactivo" }}
												</button>
											</td>
											<td>{{usuario.id_rol==1 ? "admin": "publicador"}}</td>
											
											<td>
												<button type="button" class="btn btn-warning btn-sm"   
													@click="editarUsuario(usuario)">
												<i class="ti-pencil"></i>
												</button>
												<button type="button" class="btn btn-danger btn-sm"   @click="confirm(usuario.id_usuario)">
													<i class="ti-trash"></i>
												</button>
											
											</td>
					
										</tr>
									</tbody>
								</table>
							</div>
					</div>
	  		</div>

			  <div class="modal fade" id="modalConfimEliminar" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered modal-sm">
					<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="modalConfimEliminarLabel">{{tituloModal()}}</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">

						{{mensajeModal()}}
						
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
						<button v-if="accionEliminar" type="button" class="btn btn-danger" @click="eliminar()">Confirmar</button>
						<button v-if="!accionEliminar" type="button" class="btn btn-info" @click="cambiarEstadoUsuario()">Cambiar Estado</button>
					</div>
					</div>
				</div>
			  </div>
		</div>
	`,
    data() {
        return {
            listadoUsuarios: [],
            rol: 0,
            editar: false,
            accionEliminar: true,
            url: base_url,
            datatable: null,
            eliminar_id: 0,
            estado_id: 0,
            updatePassword: false,
            user: {
                usuario: '',
                password: '',
                nombre: '',
                apellido: '',
                rol: '2',
                confirmPassword: '',
            },
            userDefault: {
                usuario: '',
                password: '',
                nombre: '',
                apellido: '',
                rol: '2',
                confirmPassword: '',
            },
            error: {
                usuario: false,
                password: false,
                nombre: false,
                apellido: false,
                rol: false,
                confirmPassword: false,
                msjPassword: '',
                msjConfirmPassword: ''

            },
            usuarioEditar: '',
        }
    },


    methods: {

        getUsers() {
            axios.get(this.url + "user")
                .then(res => {
                    //console.log(res)
                    this.listadoUsuarios = res.data.usuarios
                    setTimeout(() => {

                        this.datatable = $("#table-users").DataTable({ language: espaniol, destroy: true, dom: "Bfrtip", buttons: ["excelHtml5", "pdfHtml5"] });
                    }, 1000);
                })
                .catch(err => {
                    console.error(err);
                })
        },
        tituloUsuario() {
            return this.editar ? "Cambiar Password de Usuario" : "Crear Nuevo Usuario"
        },
        tituloModal() {
            return this.accionEliminar ? "Eliminar Usuario" : "Cambiar Estado"
        },
        mensajeModal() {

            return this.accionEliminar ? 'Esta Usted Seguro?. Esta accion no se puede deshacer!' : 'Desea Cambiar el Estado del usuario?'
        },
        eliminar() {
            let fm = new FormData();
            fm.append('id_usuario', this.eliminar_id)
            axios.post(this.url + 'user/delete', fm)
                .then(res => {

                    if (res.data.error == 0) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Usuario Eliminado',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        this.datatable.destroy();
                        this.getUsers()
                        this.eliminar_id = 0
                        this.cerrarModaleliminar()

                    } else {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: 'Ocurrio un error',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
                .catch(err => {

                    alert('error:  El usuario no se puede eliminar porque tiene dependencias')
                })
        },
        confirm(id) {
            this.eliminar_id = id
            this.accionEliminar = true
            $('#modalConfimEliminar').modal('show')

        },
        mostrarModal() {
            $('#modal').modal('show')
            this.updatePassword = true
        },
        cerrarModaleliminar() {
            $('#modalConfimEliminar').modal('hide')
        },
        editarUsuario(usuario) {
            this.editar = true
            $('#modal').modal('show')
            this.user = Object.assign({}, usuario)
            this.user.rol = usuario.id_rol
            this.user.password = ''
            this.updatePassword = false
            this.usuarioEditar = usuario.usuario
        },
        cambiarEstadoUsuario() {
            let fm = new FormData()
            fm.append('id_usuario', this.estado_id)
            axios.post(this.url + 'user/estado', fm)
                .then(res => {
                    console.log(res)
                    if (res.data.error == 0) {
                        this.datatable.destroy();
                        this.getUsers()
                        this.estado_id = 0
                        this.accionEliminar = true
                        this.cerrarModaleliminar()
                    }
                })
                .catch(err => {
                    console.error(err);
                })
        },
        ocultarModal() {
            $('#modal').modal('hide')
            this.editar = false
            this.user = Object.assign({}, this.userDefault)
        },
        save() {
            if (this.validate()) {

                let fm = new FormData();
                for (var key in this.user) {
                    fm.append(key, this.user[key]);
                }

                if (this.editar) {
                    axios.post(this.url + 'user/update', fm)
                        .then(res => {

                            switch (res.data.error) {
                                case 0:
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Contraseña de usuario Actualizada...',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    this.user = Object.assign({}, this.userDefault)
                                    break;
                                case 1:
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'error',
                                        title: 'Ocurrio un error, intente de nuevo',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })

                                    break;

                                default:
                                    break;
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
                    axios.post(this.url + 'user/new', fm)
                        .then(res => {

                            switch (res.data.error) {
                                case 0:
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Usuario creado',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    this.user = Object.assign({}, this.userDefault)
                                    this.datatable.destroy();
                                    this.getUsers()
                                    break;
                                case 1:
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'error',
                                        title: 'El usuario ya existe!, intente con otro.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })

                                    break;
                                case 2:
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'error',
                                        title: 'Ocurrio un error, Intente de nuevo',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })

                                    break;

                                default:
                                    break;
                            }

                        })
                        .catch(err => {
                            console.error(err);
                        })
                }



            }
        },

        cambiarEstado(user) {
            this.estado_id = user.id_usuario
            this.accionEliminar = false
            $('#modalConfimEliminar').modal('show')

        },
        validate() {
            if (this.user.nombre && this.user.apellido && this.user.usuario && this.user.rol &&
                this.user.confirmPassword && this.user.password.length >= 8 && this.user.password === this.user.confirmPassword) {
                return true
            }

            if (!this.user.nombre) {
                this.error.nombre = true
            }
            if (!this.user.apellido) {
                this.error.apellido = true
            }
            if (!this.user.usuario) {
                this.error.usuario = true
            }

            if (this.user.password.length < 8) {
                this.error.password = true
                this.error.msjPassword = "El password debe tener almenos 8 caracteres."
            }

            if (!this.user.confirmPassword || this.user.password != this.user.confirmPassword) {
                this.error.confirmPassword = true
                this.error.msjConfirmPassword = "Debe confirmar Password"
            }
            if (!this.user.rol) {
                this.error.rol = true
            }
            setTimeout(() => {
                this.error.nombre = false
                this.error.apellido = false
                this.error.usuario = false
                this.error.password = false
                this.error.confirmPassword = false
                this.error.rol = false
            }, 2500);
        }


    },
    mounted() {

    },
    created() {
        this.getUsers()
    },
}
