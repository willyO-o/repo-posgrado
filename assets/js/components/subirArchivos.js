export default {
    template: //html
        `
	<div class="card">
		<div class="card-header">Validations by Parsleyjs</div>
			<div class="card-body">
			<form id="basic-form" method="post" novalidate>
				<div class="row">
					<div class="col-md-6">
						<h3 class="h6 mb-4">Titulo</h3>
						
							<div class="form-group">
								<label>Text Input</label>
								<input type="text" class="form-control" required>
							</div>

							<div class="form-group">
								<h4 class="h6">Tamaño maximo admitido 30Mb</h4>
								<input type="file" class="dropify"  data-max-file-size="31M" data-allowed-file-extensions="pdf" @change="archivoSubido">
							</div>
							<div class="form-group">
								<label>Email Input</label>
								<input type="email" class="form-control" required>
							</div>
							<div class="form-group">
								<label>Text Area</label>
								<textarea class="form-control" rows="5" cols="30" required></textarea>
							</div>
						
					</div>
					<div class="col-md-6">
						<h3 class="h6 mb-4">Basic Validations</h3>
						
							<div class="form-group">
								<label>Text Input</label>
								<input type="text" class="form-control" required>
							</div>
							<div class="form-group">
								<label>Email Input</label>
								<input type="email" class="form-control" required>
							</div>
							<div class="form-group">
								<label>Text Area</label>
								<textarea class="form-control" rows="5" cols="30" required></textarea>
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

            persona: {
                nombre: 'willy',
                apellido: 'chana',
                edad: 30
            }



        }
    },
    created() {
        this.fileDropy()
    },


    methods: {
        archivoSubido(e) {
            this.file = e.target.files[0];
            //console.log(this.file);
            this.save();
        },
        fileDropy() {
            setTimeout(() => {
                this.dropify = $(".dropify").dropify({
                    messages: {
                        default: 'Arrastra y suelta un archivo aquí o haz clic',
                        replace: 'Arrastra y suelta o haz clic para reemplazar',
                        remove: 'Eliminar',
                        error: 'Ooops, sucedio un error, Intenta de nuevo'
                    },
                    error: {
                        'fileSize': 'El Tamaño maximo admintido es ({{ value }} ).',
                        'imageFormat': 'El formato de archivo ({{ value }} no esta permitido).'
                    }
                });
            }, 1000);


        },
        save() {
            let fm = new FormData()
            fm.append('archivo', this.file, this.file.name)
            fm.append('nombre', this.persona.nombre)
            fm.append('apellido', this.persona.apellido)
            fm.append('edad', this.persona.edad)

            console.log(fm);
            axios.post(base_url + 'archivo/save', fm)
                .then(res => {
                    console.log('respuesta servidor');
                    console.log(res)
                })
                .catch(err => {
                    console.error(err);
                })
        }
    },
}