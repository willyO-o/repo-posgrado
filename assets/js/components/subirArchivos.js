export default {
    template: //html
        `
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
					<div class="col-md-6">
						
							<div class="form-group">
								<h4 class="h6">Tamaño maximo admitido 30Mb</h4>
								<div class="alert alert-danger" role="alert"  v-if="error.errorfile" >
									<b>Error:</b> Solo se Admiten Archivos PDF
								</div>
								<input type="file" class="dropify"  data-max-file-size="31M" data-allowed-file-extensions="pdf" @change="archivoSubido"  id="documento">
							</div>

					</div>
					<div class="col-md-6">
							
                        <div class="form-group">
                            <label>Autor</label>
                            <div class="alert alert-danger" role="alert"  v-if="error.autor" >
									<b>Error:</b> Debe ingresar un Titulo
							</div>
                            <input type="text" class="form-control" required v-model="datosArchivo.autor">
                        </div>
                        <div class="form-group">
                            <label>Tutor <small>(opcional)</small></label>
                            <input type="text" class="form-control" required v-model="datosArchivo.tutor">
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-6">
							        <label for="sede">Sede</label>
                                    <div class="alert alert-danger" role="alert"  v-if="error.sede" >
                                            <b>Error:</b> Debe ingresar un Titulo
                                    </div>
                                    <select class="custom-select" required id="sede" v-model="datosArchivo.sede">
                                        <option value="0" disabled selected>Seleccione </option>
                                        <option value="La Paz - El Alto">La Paz - El Alto</option>
                                        <option value="Cochabamba">Cochabamba</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
							        <label for="version">Tipo</label>
                                    <div class="alert alert-danger" role="alert"  v-if="error.id_tipo" >
                                            <b>Error:</b> Debe ingresar un Titulo
                                    </div>
                                    <select class="custom-select" required id="version" v-model="datosArchivo.id_tipo">
                                        <option value="0" disabled selected>Seleccione </option>
                                        <option value='1'>Monografia</option>
                                    </select>
                                </div>
                            </div>
	
						</div>
						

					</div>
                    <div class="col-md-6">
                        <p>Seleccione una Especialidad</p>
                        <select id="select-especialidades" class="form-control w-100"
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
									<b>Error:</b> Debe ingresar un Titulo
							</div>
                            <select class="custom-select" required id="categoria"  v-model="datosArchivo.id_categoria">
                                <option value="0" disabled selected>Seleccione </option>
                                <option value="3">Diplomado</option>
                            </select>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label>Resumen</label>
                            <div class="alert alert-danger" role="alert"  v-if="error.resumen" >
									<b>Error:</b> Debe ingresar un Titulo
							</div>
                            <textarea class="form-control"  rows="6" required v-model="datosArchivo.resumen"></textarea>
                        </div>
                    </div>
                    
				</div>	
				<button type="button" class="btn btn-primary" @click="mostrarSelect()">Validate</button>
			</form>	
			</div>
		</div>
	</div>

	`,
    data() {
        return {
            dropify: null,
            file: null,
            arc: null,
            listaEspecialidades: [],
            error: {
                errorfile: false,
                titulo: false,
                resumen: false,
                autor: false,
                tutor: false,
                id_version: false,
                sede: false,
                id_tipo: false,
                id_categoria: false
            },
            persona: {
                nombre: 'willy',
                apellido: 'chana',
                edad: 30
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
        this.fileDropy()
        this.listarEspecialidades()
    },


    methods: {
        archivoSubido(e) {





            let fileInput = document.getElementById('documento');
            let filePath = fileInput.value;
            let allowedExtensions = /(.pdf)$/i;
            if (!allowedExtensions.exec(filePath)) {
                //alert('pro favor ingrese un archiv tipo PDF.');
                fileInput.value = '';
                this.error.errorfile = true
                setTimeout(() => {
                    this.error.errorfile = false
                }, 3000);
                return false;
            } else {
                // archivo correcto
                alert("correcto...")
                this.file = e.target.files[0];
                console.log(this.file);
                this.error.errorfile = false

            }


            this.save();
        },
        fileDropy() {
            setTimeout(() => {
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
                    placeholder: 'Select a state',
                    allowClear: true
                });
            }, 1000);


        },
        save() {
            let fm = new FormData()
            fm.append('archivo', this.file, this.file.name)
            fm.append('nombre', this.persona.nombre)
            fm.append('apellido', this.persona.apellido)
            fm.append('edad', this.persona.edad)

            // console.log(fm);
            // axios.post(base_url + 'archivo/save', fm)
            //     .then(res => {
            //         console.log('respuesta servidor');
            //         console.log(res)
            //     })
            //     .catch(err => {
            //         console.error(err);
            //     })
        },
        mostrarSelect() {
            let valor=$('#select-especialidades').val()
            if(valor){
                console.log(valor);
            }else{
                console.log('vacio');
            }
            this.validarCampos()
            

        },
        listarEspecialidades() {
            axios.get(base_url + 'especialidad')
                .then(res => {
                    console.log('respuesta servidor');
                    this.listaEspecialidades = res.data.especialidades
                })
                .catch(err => {
                    console.error(err);
                })
        },
        validarCampos(){
           
            if (this.datosArchivo.titulo && this.datosArchivo.id_categoria && this.datosArchivo.id_version && this.datosArchivo.id_tipo &&
                this.datosArchivo.resumen  && this.datosArchivo.autor  && this.datosArchivo.tutor  &&  this.datosArchivo.sede   )   {
                return true;
            }

            if (!this.datosArchivo.titulo) {
                this.error.titulo=true
                
            }
            if (!this.datosArchivo.id_categoria) {
                this.error.id_categoria=true
            }
            if (!this.datosArchivo.id_version) {
                this.error.id_version=true
            }
            if (!this.datosArchivo.id_tipo) {
                this.error.id_tipo=true
            }
            if (!this.datosArchivo.resumen) {
                this.error.resumen=true
            }
            if (!this.datosArchivo.autor) {
                this.error.autor=true
            }
            if (!this.datosArchivo.tutor) {
                this.error.tutor=true
            }
            if (!this.datosArchivo.sede) {
                this.error.sede=true
            }

            setTimeout(() => {
                this.error.titulo=false
                this.error.id_categoria=false
                this.error.id_version=false
                this.error.tipo=false
                this.error.resumen=false
                this.error.autor=false
                this.error.tutor=false
                this.error.sede=false
            }, 3000);


        }
    },
}