import ModalArchivo from './modalDetallesArchivo.js';

export default {
    template: //html
        `
		<div class="mb-5">
		<h1>Archivos</h1>
		<!-- Button trigger modal -->
			<!-- Modal -->
			<div class="modal fade" id="modal" aria-hidden="true" data-backdrop="static" >
				<div class="modal-dialog modal-xl">
					<div class="modal-content">
						<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Detalles de Archivo</h5>
						<button type="button" class="close" @click="ocultarModal()">
							<span aria-hidden="true">&times;</span>
						</button>
						</div>
						<div class="modal-body">

							<ModalArchivo :detallesArchivo="detallesArchivo" :verDocumento="verDoc"/>
							
						</div>
						<div class="modal-footer">
						<button type="button" class="btn btn-secondary" @click="ocultarModal()">Cerrar</button>
						
						</div>
					</div>
				</div>
			</div>

		
			<div class="card mb-5">
				<div class="card-header d-flex justify-content-between">
					<h3 class="card-title mt-2">Listado de Especialidades</h3>
					<router-link to="/archivos/subir"  class="btn btn-primary"><i class="ti-export"></i> <span class="title">Subir Archivo</span></router-link>
				</div>
						<div class="card-body">
						<!-- table-responsive-->
						<div class="">
						<table id="datatable-export" class="table table-striped">
							<thead class="thead-light">
								<tr>
									<th>#</th>
									<th style="width:50%!important">Titulo</th>
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
                                        @click="irEditar(); setStateEditarArchivo(item)">
                                    	<i class="ti-pencil"></i>
                                    </button>
                                    <button type="button" class="btn btn-danger btn-sm"   @click="confirm(item)">
                                        <i class="ti-trash"></i>
                                    </button>
                                   
                                </td>
		
							</tr>
						</tbody>
					</table>
				</div>
			</div>
	  </div>
	  <br><br>

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
						<h6> Desea eliminar el documento: </h6>
						<h5> {{archivoEliminar}} </h5>
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
            datatable: null,
            listaArchivos: [],
            modalEliminar: false,
            archivoEliminar: '',
            verDoc: false,
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


            idArchivo: '',

            especialidad: {
                id: 0,
                espec: '',
                id_version: 0,
                version: '',
                id_ver_esp: 0
            },

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

        async listarArchivos() {
            const res = await axios.get(base_url + "archivo/getArchivo")
            this.listaArchivos = res.data.archivos

        },

        datatab() {

            setTimeout(() => {
                this.datatable = $("#datatable-export").DataTable({ language: espaniol, destroy: true, mdom: "Bfrtip", buttons: ["print", "pdfHtml5"] });
            }, 1000);

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

            axios.post(base_url + "archivo/delete", data)
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
        ...Vuex.mapMutations(['setStateEditarArchivo', 'setStateVerDocumento']),



    },
    mounted() {
        this.datatab();

    },
    computed: {
        ...Vuex.mapState(['verDocumento'])

    },


}