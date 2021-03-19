export default {
    template: //html
        `
	<div class="card">
		<div class="card-header">Publicar Tesis/Monografia</div>
			<div class="card-body">
                <form id="basic-form" method="post" novalidate>
                    <div class="form-group">
                        <label>Titulo</label>
                        <input type="text" class="form-control" required>
                    </div>
				<div class="row">
					<div class="col-md-6">
						
							<div class="form-group">
								<h4 class="h6">Tamaño maximo admitido 30Mb</h4>
								<input type="file" class="dropify"  data-max-file-size="31M" data-allowed-file-extensions="pdf" @change="archivoSubido" >
							</div>

					</div>
					<div class="col-md-6">
							
                        <div class="form-group">
                            <label>Autor</label>
                            <input type="text" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label>Tutor <small>(opcional)</small></label>
                            <input type="text" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-6">
							        <label for="sede">Sede</label>
                                    <select class="custom-select" required id="sede">
                                        <option value="0" disabled selected>Seleccione </option>
                                        <option value="La Paz - El Alto">La Paz - El Alto</option>
                                        <option value="Cochabamba">Cochabamba</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
							        <label for="version">Tipo</label>
                                    <select class="custom-select" required id="version">
                                        <option value="0" disabled selected>Seleccione </option>
                                        <option >Monografia</option>
                                    </select>
                                </div>
                            </div>
	
						</div>
						

					</div>
                    <div class="col-md-6">
                        <p>Seleccione una Especialidad</p>
                        <select id="select-placeholder-single" class="form-control w-100"
                         v-model="datosArchivo.id_especialidad" @change="mostrarSelect"
                         >
                                    <option></option>
                                   
                                    <option value="AK">aa</option>
                                    <option value="HI">Hawaii</option>
                                    
                                    <optgroup label="Pacific Time Zone">
                                    <option value="CA">California</option>
                                    <option value="NV">Nevada</option>
                                    <option value="OR">Oregon</option>
                                    <option value="WA">Washington</option>
                                    </optgroup>
                                    <optgroup label="Mountain Time Zone">
                                    <option value="AZ">Arizona</option>
                                    <option value="CO">Colorado</option>
                                    <option value="ID">Idaho</option>
                                    <option value="MT">Montana</option>
                                    </optgroup>
                                    <optgroup label="Central Time Zone">
                                    <option value="AL">Alabama</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IA">Iowa</option>
                                    </optgroup>
                                    <optgroup label="Eastern Time Zone">
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="FL">Florida</option>
                                    </optgroup>
                        </select>
                    </div>

                    <div class="col-md-6">
							<label for="categoria">Categoria</label>
                            <select class="custom-select" required id="categoria">
                                <option value="0" disabled selected>Seleccione </option>
                                <option >Diplomado</option>
                            </select>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label>Resumen</label>
                            <textarea class="form-control"  rows="6" required></textarea>
                        </div>
                    </div>
                    
				</div>	
				<button type="button" class="btn btn-primary">Validate</button>
			</form>	
			</div>
		</div>
	</div>

	`,
    data() {
        return {
            dropify: null,
            file: null,
            arc:null,

            persona: {
                nombre: 'willy',
                apellido: 'chana',
                edad: 30
            },
            datosArchivo:{
                id_especialidad:''
            },



        }
    },
    created() {
        this.fileDropy()
    },


    methods: {
        archivoSubido(e) {
            this.file = e.target.files[0];

            console.log(this.file);

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

                $('#select-placeholder-single').select2({
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
        mostrarSelect(e){
            console.log(e);
        }
    },
}