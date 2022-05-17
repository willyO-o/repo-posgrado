import Select2Ajax from './select2Ajax.js'
import Spinner from './spinner.js'
export default {
    template: //html
        `
<div >
	
	<button  class="btn btn-danger mb-2" @click="salir()"><i class="ti-arrow-left"></i> <span class="title">Cancelar </span></button>
	<div class="card">
		<div class="card-header">{{ asignarTitulo() }} Tesis/Monografia</div>
			<div class="card-body">
                <form id="basic-form" method="post" novalidate>
                   
				<div class="row">
					<div class="col-md-6 mb-2">
						
							<div class="form-group" v-if="!editarArchivo">
								<h4 class="h6">Tamaño maximo admitido 100Mb</h4>
								
								<input type="file" class="dropify"  data-max-file-size="100M" 
								data-allowed-file-extensions="pdf" @change="archivoSubido"  id="documento"  >
								<input type="hidden" :class="{'is-invalid':error.errorfile || error.sinfile }">

								<div class="invalid-feedback"  v-if="error.errorfile" >
									<b>Error:</b> Solo se Admiten Archivos PDF
								</div>
                                <div class="invalid-feedback"  v-if="error.sinfile" >
									<b>Error:</b> Debe adjuntar un Documento
								</div>
							</div>
							<p>Vista previa del Documento</p>
                            

							<iframe  :src="src"   width="100%" height="600rem"></iframe>

							<div class="form-group">
								<div class="row">
									<div class="col-md-6">
										<label for="campo_nro_paginas">N° Total de Paginas </label>
										<input type="number" id="campo_nro_paginas" class="form-control" required v-model="datosArchivo.nro_paginas" required @keydown="validarInputNumber" :class="{'is-invalid':error.nro_paginas }">
										<div class="invalid-feedback"  v-if="error.nro_paginas" >
											debe Ingresar la cantidad de paginas del Documento
										</div>
									</div>

									<div class="col-md-6">
										<label for="campo_codigo_documento">Codigo Documento </label>
										<input type="text" id="campo_codigo_documento" class="form-control" required v-model="datosArchivo.codigo_documento">
									</div>
								</div>
								
							</div>

					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label for="campotitulo">Titulo</label>
								
								<textarea id="campotitulo" class="form-control " :class="{'is-invalid':error.titulo }" required v-model="datosArchivo.titulo" rows="3" ></textarea>
								<div class="invalid-feedback" >
										 Debe ingresar un Titulo
								</div>
						</div>

						<div class="form-group">
							<label>Seleccione un Autor</label>
								

							<Select2Ajax :url="url_autor" v-model="id_autor"  class="form-control" :datosEditar="datosEditarAutor"   />
							<input type="hidden" :class="{'is-invalid':error.autor }" >
							<div class="invalid-feedback"  >
									 Debe seleccionar un  Autor
							</div>
						</div>
						<div class="form-group">
							<label>Seleccione una Especialidad</label>
							
							<Select2Ajax :url="url_especialidad" v-model="id_especialidad"  class="form-control" :datosEditar="datosEditarEspecialidad" />
							<input type="hidden" :class="{'is-invalid':error.id_especialidad }" >

							<div class="invalid-feedback"   >
								 Debe seleccionar una especialidad
							</div>

						</div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-6">
							        <label for="camposede">Sede/Ciudad</label>
                                   
                                    <select class="form-control" required id="camposede" v-model="datosArchivo.id_sede" placeholder="Seleccione" :class="{'is-invalid':error.sede }">
                                        <option value="" selected disabled>Seleccione </option>
                                        <option :value="sede.id_sede" v-for="sede in listaSedes">{{sede.sede_ciudad}} </option>
									</select>
									<div class="invalid-feedback"  >
											Debe Seleccionar una Sede/Ciudad
									</div>
                                </div>
                                <div class="col-md-6">
							        <label for="campotipo">Tipo</label>
                                    
                                    <select class="form-control" required id="campotipo" v-model="datosArchivo.id_tipo" :class="{'is-invalid':error.id_tipo }">
                                        <option value="" selected disabled>Seleccione </option>
                                        <option :value='tipo.id_tipo' v-for="tipo of listaTipos"> {{tipo.tipo}} </option>
                                    </select>
									<div class="invalid-feedback"   >
                                             Debe Seleccionar el tipo de documento
                                    </div>
                                </div>
                            </div>
	
						</div>
						<div class="form-group">
							<div class="row">
								<div class="col-md-6">
									<label for="categoria">Categoria</label>
									
									<select class="form-control" required id="categoria"  v-model="datosArchivo.id_categoria" :class="{'is-invalid':error.id_categoria }">
										<option value=""  selected disabled>Seleccione </option>
										<option :value="categoria.id_categoria" v-for="categoria of listaCategorias"> {{categoria.categoria}} </option>
									</select>
									<div class="invalid-feedback"  >
											 Debe seleccionar una Categoria
									</div>
								</div>
								<div class="col-md-6">
									<label for="anio_publicacion">Año de publicacion</label>
									
									<input  id="anio_publicacion" class="form-control" required v-model="datosArchivo.anio_creacion" @keydown="validarInputNumber" :class="{'is-invalid':error.anio }"> 
									<div class="invalid-feedback"  >
											 Debe ingresar un año 
									</div>
								</div>
							</div>
						</div>
						<div class="form-group">
							<label for="anio_publicacion">Permitido para Publico</label> <br>
							<div class="form-check form-check-inline">
								<input class="form-check-input" type="radio"  id="exampleRadios1" value="SI" checked v-model="datosArchivo.es_publico">
								<label class="form-check-label" for="exampleRadios1">
									SI
								</label>
							</div>
							<div class="form-check form-check-inline">
								<input class="form-check-input" type="radio"  id="exampleRadios2" value="NO" v-model="datosArchivo.es_publico">
								<label class="form-check-label" for="exampleRadios2">
									NO
								</label>
							</div>
						</div>
						
                        <div class="form-group">
                            <label for="resumen">Resumen</label>
                            
                            <textarea class="form-control"  rows="10" required v-model="datosArchivo.resumen" id="resumen" :class="{'is-invalid':error.resumen }"></textarea>
							<div class="invalid-feedback"   >
									 Debe ingresar un Resumen
							</div>
                        </div>
                    
						<div class="form-group">
							<label for="observaciones">Observaciones</label>
							
							<input class="form-control"  rows="10" required v-model="datosArchivo.observaciones" id="observaciones" >
						</div>
						
								
                    </div>
                    
                    
				</div>	
				<br>
				<button type="button" class="btn btn-primary btn-block" @click="save()">Registrar</button>
				</form>	
			</div>
		</div>
        

        <!-- Modal -->

        <!--modal-->
		<div class="modal fade" id="modalSpinner" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-sm modal-dialog-centered">
				<Spinner />
				
				<h1 class="text-white">Registrando...</h1>
			</div>
		</div>
		
	
    
</div>
	`,
    components: { Select2Ajax, Spinner },
    data() {
        return {
            dropify: null,
            select2: null,
            file: null,
            arc: null,
            src: '',
            inputDocumento: null,
            modalVistaPrevia: false,
            listaEspecialidades: [],
            listaTipos: [],
            listaCategorias: [],
            listaSedes: [],
            datosEditarEspecialidad: null,
            datosEditarAutor: null,
            error: {
                errorfile: false,
                titulo: false,
                resumen: false,
                autor: false,
                id_version: false,
                sede: false,
                id_tipo: false,
                id_categoria: false,
                sinfile: false,
                anio: false,
                id_especialidad: false,
                nro_paginas: false,
            },

            datosArchivo: {

                anio_creacion: '',
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
                id_version: '',
                lenguaje: '',
                nombre_archivo: '',
                resumen: '',
                id_sede: '',
                tamanio: '',
                tipo: '',
                titulo: '',
                uuid: '',
                version: '',
                nro_paginas: '',
                id_autor: '',
                nombre_autor: '',
                paterno_autor: '',
                materno_autor: '',
                codigo_documento: '',
                observaciones: '',
                es_publico: 'SI',
            },
            datosArchivoDefault: {
                anio_creacion: '',
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
                id_version: '',
                lenguaje: '',
                nombre_archivo: '',
                resumen: '',
                id_sede: '',
                tamanio: '',
                tipo: '',
                titulo: '',
                uuid: '',
                version: '',
                nro_paginas: '',
                id_autor: '',
                nombre_autor: '',
                paterno_autor: '',
                materno_autor: '',
                codigo_documento: '',
                es_publico: 'SI',
            },
            especialidaSeleccionada: null,
            id_especialidad: '',
            id_autor: '',

            url_especialidad: base_url + "documento/buscar_especialidad",
            url_autor: base_url + "documento/buscar_autor",

        }
    },
    created() {


        if (this.editarArchivo) {
            this.asignarEditar()
        }

        this.cargarDatosSelect();

    },

    mounted() {


        this.fileDropy()
        if (this.editarArchivo) {


            this.modalVistaPrevia = true
            this.file = true
            this.src = base_url + 'archivo/pdf/' + this.datosArchivo.nombre_archivo + '/1'
                //document.querySelector('#vistaDocumento').setAttribute('src', base_url + 'uploads/' + this.datosArchivo.nombre)



        }


        const intervalo = setInterval(() => {
            this.verificarInput()
        }, 2000);


        this.inputDocumento = document.getElementById('documento')
    },

    methods: {

        cargarDatosSelect() {
            axios.get(base_url + "documento/listar_parametros")
                .then(res => {

                    this.listaCategorias = res.data.categorias
                    this.listaTipos = res.data.tipos_documento
                    this.listaSedes = res.data.sedes

                })
                .catch(err => {
                    alert("ocurrio un error Vuelva a Intentarlo mas tarde")
                })
        },
        verificarInput() {
            try {
                if (!this.inputDocumento.value) {
                    this.src = ''
                        // this.datosArchivo.nro_paginas = ''
                }
            } catch (error) {

            }

        },
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
                this.src = urldoc + '#toolbar=0'
                    //document.querySelector('#vistaDocumento').setAttribute('src', urldoc)
                this.modalVistaPrevia = true
            }

            let input = e.target.files[0]

            this.contarPaginas(input, this.asignarNroPaginas)
        },
        contarPaginas(input, asignarPaginas) {
            let reader = new FileReader();
            reader.readAsBinaryString(input);
            reader.onloadend = function() {

                try {
                    let total = reader.result.match(/\/Type[\s*]*\/Page[^s]/g).length
                    asignarPaginas(total);
                } catch (e) {
                    asignarPaginas('');
                }
            }
        },
        asignarNroPaginas(total) {
            this.datosArchivo.nro_paginas = total;
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





        },
        save() {
            if (this.validarCampos()) {
                let fm = new FormData()

                fm.append('id_especialidad', this.datosArchivo.id_especialidad) //
                fm.append('titulo', this.datosArchivo.titulo) //
                fm.append('resumen', this.datosArchivo.resumen) //
                fm.append('id_autor', this.datosArchivo.id_autor) //
                fm.append('observaciones', this.datosArchivo.observaciones) //
                fm.append('id_version', this.datosArchivo.id_version)
                fm.append('id_sede', this.datosArchivo.id_sede) //
                fm.append('id_tipo', this.datosArchivo.id_tipo) //
                fm.append('id_categoria', this.datosArchivo.id_categoria) //
                fm.append('anio', this.datosArchivo.anio_creacion) //
                fm.append('actualizar', true)
                fm.append('id_documento', this.datosArchivo.id_documento)
                fm.append('nro_paginas', this.datosArchivo.nro_paginas) //
                fm.append('codigo_documento', this.datosArchivo.codigo_documento) //
                fm.append('es_publico', this.datosArchivo.es_publico) //



                if (!this.editarArchivo) {
                    if (this.file != null) {
                        fm.append('archivo', this.file, this.file.name) //
                    } else {
                        fm.append('archivo', ""); //

                    }


                    fm.append('actualizar', false)
                }

                $('#modalSpinner').modal('show');




                axios.post(base_url + 'documento/guardar', fm)
                    .then(res => {

                        setTimeout(() => {
                            $('#modalSpinner').modal('hide');
                        }, 500);



                        if (res.data.error == 0) {

                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Documento Publicado',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            this.datosArchivo = Object.assign({}, this.datosArchivoDefault)
                            this.id_autor = '';
                            this.id_especialidad = '';
                            this.file = null
                            if (this.editarArchivo) {
                                setTimeout(() => {
                                    this.salir()
                                }, 1000);
                            } else {
                                let drEvent = this.dropify
                                drEvent = drEvent.data('dropify')
                                drEvent.resetPreview()
                                drEvent.clearElement()
                                this.modalVistaPrevia = false
                                document.getElementById('documento').value = ''
                            }

                        } else {
                            Swal.fire({
                                position: 'center',
                                icon: 'error',
                                title: 'Ocurrio un error, Intente de nuevo',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
                    .catch(err => {
                        setTimeout(() => {
                            $('#modalSpinner').modal('hide');
                        }, 500);

                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: 'Ocurrio un error, Intente de nuevo ',
                            showConfirmButton: false,
                            timer: 1500
                        })

                    })

            }
            //

        },

        validarCampos() {



            if (this.datosArchivo.id_especialidad && this.datosArchivo.titulo && this.datosArchivo.id_categoria && this.datosArchivo.id_tipo &&
                this.datosArchivo.resumen && this.datosArchivo.id_autor && this.datosArchivo.id_sede && this.datosArchivo.anio_creacion && this.datosArchivo.nro_paginas) {
                return true;
            }

            if (!this.datosArchivo.id_especialidad || this.datosArchivo == '') {
                this.error.id_especialidad = true

            }
            if (!this.datosArchivo.titulo) {
                this.error.titulo = true
                this.errorTitulo = true

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
            if (!this.datosArchivo.id_autor) {
                this.error.autor = true

            }

            if (!this.datosArchivo.id_sede) {
                this.error.sede = true
            }
            if (!this.datosArchivo.anio_creacion) {
                this.error.anio = true
            }
            // if (!this.file) {
            //     // this.error.sinfile = true
            //     this.modalVistaPrevia = false
            // }
            if (!this.datosArchivo.nro_paginas) {
                this.error.nro_paginas = true

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
                    // this.error.sinfile = false
                this.error.anio = false
                this.error.nro_paginas = false

            }, 5000);



        },
        asignarEditar() {

            this.datosArchivo = Object.assign({}, this.stateEditarArchivo)
            this.datosEditarEspecialidad = { id: this.stateEditarArchivo.id_especialidad, text: this.stateEditarArchivo.especialidad }
            this.datosEditarAutor = { id: this.stateEditarArchivo.id_autor, text: this.stateEditarArchivo.nombre_autor + " " + this.stateEditarArchivo.paterno_autor + " " + this.stateEditarArchivo.materno_autor + ", " + this.stateEditarArchivo.ci_autor }

        },

        asignarTitulo() {
            return this.editarArchivo ? 'Editar' : 'Publicar'
        },
        salir() {
            this.setDefaultStateEditarArchivo(this.datosArchivoDefault)
            this.$router.push('/admin/documentos/listar')
        },
        ...Vuex.mapMutations(['setDefaultStateEditarArchivo']),

        //validaciones

        validarInputNumber(e) {
            if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105) && e.keyCode !== 110 && e.keyCode !== 8 && e.keyCode !== 9) {
                e.preventDefault()
            }

        },



    },
    computed: {
        ...Vuex.mapState(['stateEditarArchivo', 'editarArchivo'])

    },
    watch: {
        id_especialidad: function(val) {
            this.datosArchivo.id_especialidad = val;
        },
        id_autor: function(val) {
            this.datosArchivo.id_autor = val
        }

    }


}
