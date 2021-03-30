import Card from './modalDetallesArchivo.js';

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
						<h5 class="modal-title" id="exampleModalLabel">Detalles de Archivo</h5>
						<button type="button" class="close" @click="ocultarModal()">
							<span aria-hidden="true">&times;</span>
						</button>
						</div>
						<div class="modal-body">

							<Card :detallesArchivo="detallesArchivo"></Card>
							
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
    components: { Card },
    data() {
        return {
            datatable: null,
            listaArchivos: [],

            detallesArchivo: {
                titulo: '',
                autor: '',
                tutor: '',
                resumen: '',
                fecha_publicacion: '',
                categoria: '',
                especialidad: '',
                tipo: '',
                nombre: '',
                sede: '',
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

        mostrarModal() {
            $('#modal').modal('show')

        },
        ocultarModal() {
            $('#modal').modal('hide')
        },

        async listarArchivos() {
            const res = await axios.get(base_url + "archivo/getArchivo")
            this.listaArchivos = res.data.archivos
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
            this.detallesArchivo.nombre = item.nombre
            this.detallesArchivo.sede = item.sede
            this.detallesArchivo.tipo = item.tipo
            this.detallesArchivo.version = item.version

            this.mostrarModal()

        },

        confirm(id_arch) {
            this.idArchivo = id_arch
            this.eliminar()
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

                    console.log(this.idArchivo);
                    this.eliminar()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })


        },

        eliminar() {
            console.log(this.idArchivo);
            let data = new FormData();
            data.append('id_archivo', this.idArchivo)

            // axios.post(base_url + "archivo/delete", data)
            //     .then(res => {
            //         if (res.data.respuesta) {
            //             console.log(res);
            //             Swal.fire({
            //                 position: 'top-end',
            //                 icon: 'success',
            //                 title: 'Especialidad Eliminada',
            //                 showConfirmButton: false,
            //                 timer: 1500
            //             })
            //             this.listar()
            //         } else {
            //             Swal.fire({
            //                 position: 'top-end',
            //                 icon: 'error',
            //                 title: 'Ocurrio un error, Intente de nuevo',
            //                 showConfirmButton: false,
            //                 timer: 1500
            //             })
            //         }

            //     }).catch(res => {
            //         alert('error')
            //     })
        },



    },
    mounted() {
        this.datatab();

    },

}
