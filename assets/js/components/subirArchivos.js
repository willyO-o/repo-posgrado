export default {
    template: //html
        `
<div>
	<div class="card">
		<div class="card-header">Publicar Tesis/Monografia</div>
			<div class="card-body">
                <form id="basic-form" method="post" novalidate>
                    <div class="form-group">
                        <label>Titulo</label>
                            <div class="alert alert-danger" role="alert"  v-if="error.titulo" >
									<b>Error:</b> Debe ingresar un Titulo
							</div>
                        <input type="text" class="form-control" required v-model="datosArchivo.titulo">
                    </div>
				<div class="row">
					<div class="col-md-6 mb-2">
						
							<div class="form-group">
								<h4 class="h6">Tamaño maximo admitido 30Mb</h4>
								<div class="alert alert-danger" role="alert"  v-if="error.errorfile" >
									<b>Error:</b> Solo se Admiten Archivos PDF
								</div>
                                <div class="alert alert-danger" role="alert"  v-if="error.sinfile" >
									<b>Error:</b> Debe adjuntar un Documento
								</div>
								<input type="file" class="dropify"  data-max-file-size="31M" 
								data-allowed-file-extensions="pdf" @change="archivoSubido"  id="documento">
							</div>
                            <button type="button" class="btn btn-success" data-toggle="modal"
							 data-target="#exampleModal" v-if="modalVistaPrevia">
                                Vista previa
                            </button>


					</div>
					<div class="col-md-6">
							
                        <div class="form-group">
                            <label>Autor</label>
                            <div class="alert alert-danger" role="alert"  v-if="error.autor" >
									<b>Error:</b> Debe ingresar un Autor
							</div>
                            <input type="text" class="form-control" required v-model="datosArchivo.autor">
                        </div>
                        <div class="form-group">
                            <label>Tutor <small>(opcional, si amerita)</small></label>
                            <input type="text" class="form-control" required v-model="datosArchivo.tutor">
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-6">
							        <label for="sede">Sede</label>
                                    <div class="alert alert-danger" role="alert"  v-if="error.sede" >
                                            <b>Error:</b> Debe Seleccionar una sede
                                    </div>
                                    <select class="custom-select" required id="sede" v-model="datosArchivo.sede" placeholder="Seleccione">
                                        <option value="0" selected disabled>Seleccione </option>
                                        <option value="La Paz - El Alto">La Paz - El Alto</option>
                                        <option value="Cochabamba">Cochabamba</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
							        <label for="version">Tipo</label>
                                    <div class="alert alert-danger" role="alert"  v-if="error.id_tipo" >
                                            <b>Error:</b> Debe Seleccionar el tipo de documento
                                    </div>
                                    <select class="custom-select" required id="version" v-model="datosArchivo.id_tipo">
                                        <option value="0" selected disabled>Seleccione </option>
                                        <option :value='tipo.id_tipo' v-for="tipo of listaTipos"> {{tipo.tipo}} </option>
                                    </select>
                                </div>
                            </div>
	
						</div>
						

					</div>
                    <div class="col-md-6">
                        <p>Seleccione una Especialidad</p>
                        <div class="alert alert-danger" role="alert"  v-if="error.id_especialidad" >
							<b>Error:</b> Debe seleccionar una especialidad
						</div>
                        <select id="select-especialidades" class="form-control" 
                         v-model="datosArchivo.id_especialidad" 
                         >
								<option v-for="row in listaEspecialidades" :value="row.id_ver_esp">
										{{row.especialidad}} {{row.version}} 
								</option>
                                    
                        </select>
                    </div>

                    <div class="col-md-6">
							<label for="categoria">Categoria</label>
                            <div class="alert alert-danger" role="alert"  v-if="error.id_categoria" >
									<b>Error:</b> Debe seleccionar una Categoria
							</div>
                            <select class="custom-select" required id="categoria"  v-model="datosArchivo.id_categoria">
                                <option value="0"  selected disabled>Seleccione </option>
                                <option :value="categoria.id_categoria" v-for="categoria of listaCategorias"> {{categoria.categoria}} </option>
                            </select>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label>Resumen</label>
                            <div class="alert alert-danger" role="alert"  v-if="error.resumen" >
									<b>Error:</b> Debe ingresar un Resumen
							</div>
                            <textarea class="form-control"  rows="6" required v-model="datosArchivo.resumen"></textarea>
                        </div>
                    </div>
                    
				</div>	
				<button type="button" class="btn btn-primary btn-block" @click="save()">Registrar</button>
			</form>	
			</div>
		</div>
        

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Vista Previa</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <iframe  type="aplication/pdf" id="vistaDocumento" width="100%" height="600rem"></iframe>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
        </div>
        <!--modal-->
	</div>
    
</div>
	`,
    data() {
        return {
            dropify: null,
            file: null,
            arc: null,
            modalVistaPrevia: false,
            listaEspecialidades: [],
            listaTipos: [],
            listaCategorias: [],
            error: {
                errorfile: false,
                titulo: false,
                resumen: false,
                autor: false,
                tutor: false,
                id_version: false,
                sede: false,
                id_tipo: false,
                id_categoria: false,
                sinfile: false
            },

            datosArchivo: {
                id_especialidad: '',
                titulo: '',
                resumen: '',
                autor: '',
                tutor: '',
                id_version: 0,
                sede: '',
                id_tipo: '',
                id_categoria: ''
            },
            datosArchivoDefault: {
                id_especialidad: '',
                titulo: '',
                resumen: '',
                autor: '',
                tutor: '',
                id_version: 0,
                sede: '',
                id_tipo: '',
                id_categoria: ''
            },



        }
    },
    created() {
        this.listarEspecialidades()
    },
    mounted() {
        this.fileDropy()

    },

    methods: {
        archivoSubido(e) {

            let fileInput = document.getElementById('documento');
            let filePath = fileInput.value;
            let allowedExtensions = /(.pdf)$/i;
            if (!allowedExtensions.exec(filePath)) {
                fileInput.value = '';
                this.error.errorfile = true
                this.modalVistaPrevia = false
                setTimeout(() => {
                    this.error.errorfile = false
                }, 3000);
                return false;
            } else {
                this.file = e.target.files[0];
                this.error.errorfile = false
                let doc = document.getElementById('documento').files[0]
                let urldoc = URL.createObjectURL(doc);
                document.querySelector('#vistaDocumento').setAttribute('src', urldoc)
                this.modalVistaPrevia = true
            }
        },

        fileDropy() {


            this.dropify = $(".dropify").dropify({
                messages: {
                    default: 'Arrastra y suelta el archivo PDF aquí o haz clic',
                    replace: 'Arrastra y suelta o haz clic para reemplazar',
                    remove: 'Eliminar',
                    error: 'Ooops, sucedio un error, Intenta de nuevo'
                },
                error: {
                    'fileSize': 'El Tamaño maximo admintido es ({{ value }} ).',
                    'imageFormat': 'El formato de archivo ({{ value }} no esta permitido).'
                }
            });


            $('#select-especialidades').select2({
                placeholder: 'Seleccione (puede realizar busquedas)',
                allowClear: true,
                theme: "classic"
            });

        },
        save() {
            if (this.validarCampos()) {
                let fm = new FormData()
                fm.append('archivo', this.file, this.file.name)
                fm.append('id_ver_esp', this.datosArchivo.id_especialidad)
                fm.append('titulo', this.datosArchivo.titulo)
                fm.append('resumen', this.datosArchivo.resumen)
                fm.append('autor', this.datosArchivo.autor)
                fm.append('tutor', this.datosArchivo.tutor)
                fm.append('id_version', this.datosArchivo.id_version)
                fm.append('sede', this.datosArchivo.sede)
                fm.append('id_tipo', this.datosArchivo.id_tipo)
                fm.append('id_categoria', this.datosArchivo.id_categoria)

                //console.log(fm);
                axios.post(base_url + 'archivo/save', fm)
                    .then(res => {
                        if (!res.data.error) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Documento Publicado',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            this.datosArchivo = Object.assign({}, this.datosArchivoDefault)
                            this.file = null
                            let drEvent = this.dropify
                            drEvent = drEvent.data('dropify')
                            drEvent.resetPreview()
                            drEvent.clearElement()
                            this.modalVistaPrevia = false
                            $("#select-especialidades").empty();
                            document.getElementById('documento').value = ''
                        } else {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'error',
                                title: 'Ocurrio un error, Intente de nuevo',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
                    .catch(err => {
                        console.error(err);
                    })



            } else {
                console.log("falta llenar");
            }
            //
        },

        listarEspecialidades() {
            axios.get(base_url + 'archivo/datosSelect')
                .then(res => {

                    this.listaEspecialidades = res.data.especialidades
                    this.listaCategorias = res.data.categorias
                    this.listaTipos = res.data.tipos
                })
                .catch(err => {
                    console.error(err);
                })
        },
        validarCampos() {
            //this.file = document.getElementById('documento').files[0];
            //console.log(this.file);
            this.datosArchivo.id_especialidad = $('#select-especialidades').val();
            if (this.datosArchivo.id_especialidad && this.datosArchivo.titulo && this.datosArchivo.id_categoria && this.datosArchivo.id_tipo &&
                this.datosArchivo.resumen && this.datosArchivo.autor && this.datosArchivo.sede && this.file) {
                return true;
            }

            if (!this.datosArchivo.id_especialidad) {
                this.error.id_especialidad = true

            }
            if (!this.datosArchivo.titulo) {
                this.error.titulo = true

            }
            if (!this.datosArchivo.id_categoria) {
                this.error.id_categoria = true
            }

            if (!this.datosArchivo.id_tipo) {
                this.error.id_tipo = true
            }
            if (!this.datosArchivo.resumen) {
                this.error.resumen = true
            }
            if (!this.datosArchivo.autor) {
                this.error.autor = true
            }

            if (!this.datosArchivo.sede) {
                this.error.sede = true
            }
            if (!this.file) {
                this.error.sinfile = true
                this.modalVistaPrevia = false
            }

            setTimeout(() => {
                this.error.id_especialidad = false
                this.error.titulo = false
                this.error.id_categoria = false
                this.error.id_version = false
                this.error.id_tipo = false
                this.error.resumen = false
                this.error.autor = false
                this.error.tutor = false
                this.error.sede = false
                this.error.sinfile = false
            }, 5000);



        }
    },
}