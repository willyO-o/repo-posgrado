import ModalArchivo from './modalDetallesArchivo.js';

export default {
	template: //html
		`
	<div class="mb-5">
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
	
		<div class="card mb-5">
			<div class="card-header d-flex justify-content-between">
				<h3 class="card-title mt-2">Listado de Documentos</h3>
				<router-link to="/archivos/subir" class="btn btn-primary"><i class="ti-export"></i> <span class="title">Subir Documento</span></router-link>
			</div>
			<div class="card-body">
				<!-- table-responsive-->
					<div class="caja-buscardor">
						<div class="input-group  mb-3">
							<input type="search" class="form-control" v-model="filtros.textoBuscar" placeholder="Buscar"  @input="buscar()" aria-label="Recipient's username" aria-describedby="button-addon2">
							<div class="input-group-append">
								<button class="btn btn-primary" type="button" id="button-addon2"><i class="ti-search"></i></button>
							</div>
						</div>
					</div>
				
					<table id="datatable-export" class="table table-striped">
						<thead class="thead-light">
							<tr>
								<th>#</th>
								<th style="width: 50% !important;">Titulo</th>
								<th>Autor</th>
								<th>Acciones</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(item,index) of listaArchivos" :key="item.id_archivo">
								<td>{{index+1}}</td>
								<td>{{item.titulo}}...</td>
								<td>{{item.autor}}</td>
								<td>
									<i class="icon-list ti-eye text-primary" @click="verDetallesArchivo(item)"></i>
									<i class="icon-list ti-pencil text-warning mx-2" @click="irEditar(); setStateEditarArchivo(item)"></i>
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
								<th>Acciones</th>
							</tr>
						</thead>
					</table>
					<div class="paginador">
						<nav aria-label="Page navigation example" v-if="totalResultados()!=0">
							<ul class="pagination">
								<li class="page-item disabled">
									<a class="page-link" href="#" aria-label="Previous">
										Anterior
									</a>
								</li>
								<li class="page-item active"><a class="page-link" href="#">1</a></li>
								<li class="page-item"><a class="page-link" href="#">2</a></li>
								<li class="page-item"><a class="page-link" href="#">3</a></li>
								<li class="page-item disabled"><a class="page-link" href="#">...</a></li>
								<li class="page-item"><a class="page-link" href="#">5</a></li>
								<li class="page-item">
									<a class="page-link" href="#" aria-label="Next">
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
	components: { ModalArchivo },
	data() {
		return {
			url: base_url,
			datatable: null,
			listaArchivos: [],
			modalEliminar: false,
			archivoEliminar: '',
			verDoc: false,
			totalResultadosQuery: 0,
			detallesArchivo: {

				anio_creacion: 0,
				autor: "",
				categoria: "",
				descripcion: "",
				especialidad: "",
				fecha_publicacion: '',
				formato: '',
				id_archivo: '',
				id_categoria: '',
				id_especialidad: '',
				id_metadato: '',
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
				tutor: '',
				uuid: '',
				version: '',

			},
			filtros: {
				id_categoria: 0,
				id_especialidad: 0,
				id_tipo: 0,
				id_autor: 0,
				textoBuscar: "",
			},


			idArchivo: '',

			especialidad: {
				id: 0,
				espec: '',
				id_version: 0,
				version: '',
				id_ver_esp: 0
			},
			textoBuscar: "",

		}
	},
	created() {

		this.listarArchivos();


	},

	methods: {
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

		listarArchivos() {

			axios.post(this.url + "archivo/getArchivo")
				.then(respuesta => {

					this.listaArchivos = respuesta.data.archivos
					this.totalResultadosQuery = respuesta.data.total_resultados
					console.log(respuesta);

				})
				.catch(error => {
					console.log(error);
				})
			//this.listaArchivos = res.data.archivos

		},

		datatab() {
			//console.log(this.listaArchivos);

		},
		verDetallesArchivo(item) {

			this.detallesArchivo = Object.assign({}, item)

			this.mostrarModal()

		},

		confirm(item) {
			this.mostrarModalEliminar()
			this.idArchivo = item.id_archivo
			this.archivoEliminar = item.titulo
		},


		eliminarConfirmado() {

			let data = new FormData();
			data.append('id_archivo', this.idArchivo)

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
						this.listarArchivos()
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
		}
		,
		buscar() {

			let fm = new FormData();
			fm.append("id_categoria", this.filtros.id_categoria);
			fm.append("texto_buscar", this.filtros.textoBuscar);
			fm.append("id_tipo", this.filtros.id_tipo);
			fm.append("id_especialidad", this.filtros.id_especialidad);
			fm.append("id_autor", this.filtros.id_autor);

			axios.post(this.url + "archivo/filtrar_datos", fm)
				.then(res => {
					console.log(res)
					this.listaArchivos = res.data.archivos;
					this.totalResultadosQuery=res.data.total_resultados;
				})
				.catch(err => {
					console.error(err);
				})



		},
		...Vuex.mapMutations(['setStateEditarArchivo', 'setStateVerDocumento']),



	},
	mounted() {
		this.datatab();

	},
	computed: {
		...Vuex.mapState(['verDocumento'])

	},


}
