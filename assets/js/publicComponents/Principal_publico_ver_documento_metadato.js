import modalPdf from './Modal_pdf.js'

export default {
    template: //html
        `
		<div class="event_items">
			<div class="row">
				<div class="col-12">

					<div class="card mb-5 py-4">
						<div class="card-body ">
						<p class="card-text" style="text-align : justify;">Por favor, use este identificador para citar o enlazar este ítem:<code> {{url}}#/document/{{uuid}} </code></p>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
                <div class="col-12 " >

                        <table class="table table-striped table-hover table-bordered">
                        <thead>
                        <tr>
                          <th colspan="3" class="bg-light">Registro completo de metadatos</th>
                        </tr>
                      </thead>
                      
                        <tbody>
                        <tr>
                            <th scope="col" width="200">Campo DC</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Idioma</th>
    
                      </tr>
                        <tr>
                            <td>dc.contributor.author</td>
                            <td>{{documento.autor}}</td>
                            <td>-</td>
                            
                        </tr>
                        <tr>
                            <td>dc.date.accessioned</td>
                            <td>{{documento.fecha_publicacion}}</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>dc.date.available</td>
                            <td>{{documento.fecha_publicacion}}</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>  dc.date.issued</td>
                            <td> {{documento.anio_creacion}} </td>
                            <td>  </td>
                        </tr>
                        <tr>
                            <td>dc.identifier.uri  </td>
                            <td> {{url}}#/document/{{uuid}}  </td>
                            <td> -  </td>
                        </tr>
                        <tr>
                            <td> dc.description.abstract </td>
                            <td class="text-resumen "> {{documento.resumen}} </td>
                            <td> {{documento.lenguaje}} </td>
                        </tr>
                        <tr>
                            <td> dc.language.iso </td>
                            <td> {{documento.lenguaje}}  </td>
                            <td> {{documento.lenguaje}}  </td>
                        </tr>
                        <tr>
                            <td> dc.title </td>
                            <td> {{documento.titulo}}   </td>
                            <td> {{documento.lenguaje}}  </td>
                        </tr>
                        <tr>
                            <td> dc.type </td>
                            <td> {{documento.tipo}}   </td>
                            <td> {{documento.lenguaje}}   </td>
                        </tr>
                        <tr>
                            <td> Area </td>
                            <td> {{documento.especialidad}}   </td>
                            <td> {{documento.lenguaje}}   </td>
                        </tr>
   
                        </tbody>
                    </table>

                    <table class="table table-striped table-hover table-bordered mt-5">
                    <thead>
                    <tr>
                      <th colspan="5" class="bg-light">Ficheros en este ítem: </th>
                    </tr>
                  </thead>
                  
                    <tbody>
                    <tr>
                        <th scope="col" width="200">Fichero</th>
                        <th scope="col">Tamaño</th>
                        <th scope="col">Formato</th>
                        <th scope="col">Documento</th>

                  </tr>
                    <tr>
                        <td> {{documento.nombre}} </td>
                        <td> {{documento.tamanio_archivo}}Mb</td>
                        <td> PDF </td>
                        <td>
                            <a @click="openModal()" > <i class="fas fa-file-pdf fa-2x"> </i> Ver PDF  </a>
                        </td>
                        
                    </tr>

                    </tbody>
                </table>
                </div>



			</div>

			<modalPdf :pdfUrl="pdfUrl" ref="modal"/>

	</div>



	`,
    components: { modalPdf },
    data() {
        return {
            uuid: this.$route.params.name,
            url: base_url,
            documento: {},
            pdfUrl: '',
            filesDirectory: base_url + 'uploads/',

        }
    },
    mounted() {
        this.getDocumento();

    },

    methods: {
        getDocumento() {
            let fm = new FormData()
            fm.append("uuid", this.uuid)
            axios.post(this.url + 'publico/documento_uuid', fm)
                .then(res => {
                    if (res.data.existe == true) {
                        this.documento = Object.assign({}, res.data.documento)
                        this.pdfUrl = this.filesDirectory + this.documento.nombre
                    } else {
                        alert("ocurrio un error!, No Existe el documento solicitado")

                        this.$router.push('/')

                    }
                })
                .catch(err => {
                    alert("ocurrio un error!, No Existe el documento solicitado")
                    this.$router.push('/')

                })
        },
        openModal() {
            this.$refs.modal.abrirModal();
        }



    },


}
