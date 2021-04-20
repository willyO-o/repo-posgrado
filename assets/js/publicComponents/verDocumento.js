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
				<div class="col-lg-4">
					
					<div class="sidebar_section">
			
						<div class="">
							<img src="assets/img/documento.png"  width="200">
						</div>
						<ul class="sidebar_list">
							<li class="my-3 sidebar_list_item " >
								<h3>Ver el Documento</h3>
								<a :href="url+'archivo/pdf/'+documento.nombre" target="_blank"> <i class="fas fa-file-pdf fa-2x"> </i> {{documento.nombre}} ({{documento.tamanio}}Mb)  </a>
							</li>
							<li class="my-3 sidebar_list_item " >
								<h3>Año</h3>
								{{documento.anio_creacion}}
							</li>
							<li class="my-3 sidebar_list_item " >
								<h3>Autor</h3>
								{{documento.autor}}
							</li>
							<li class="my-3 sidebar_list_item " >
								<h3>Metadatos</h3>
								<router-link :to="'/document/full/'+documento.uuid"class="trans_200" >Mostrar el registro completo del item </router-link>
								
							</li>
						</ul>
					</div>
				</div>

				<div class="col-lg-8 pl-5">

					<div class="sidebar_section">
							<h3 class="">Titulo</h3>
							<p class="about_text">{{documento.titulo}}</p>
							<h3 class="">Resumen</h3>
							<p class="text-resumen" >{{documento.resumen}}</p>
	
							<ul class="sidebar_list">
								<li class="my-3  " >
									<h3>URI</h3>
									{{url}}#/document/{{documento.uuid}}
									
								</li>
								<li class="my-3  " >
									<h3>Tipo</h3>
									{{documento.tipo}}
								</li>
								<li class="my-3  " >
									<h3>Area</h3>
									{{documento.especialidad}}
								</li>

							</ul>
						</div>

				</div>

			</div>
	</div>



	`,
    data() {
        return {
            uuid: this.$route.params.name,
            url: base_url,
            documento: {}

        }
    },
    mounted() {
        this.getDocumento();

    },

    methods: {
        getDocumento() {
            axios.get(this.url + 'archivo/getArchivoName/' + this.uuid)
                .then(res => {
                    
                    this.documento = res.data.documento

                })
				.catch(err => {
                    console.error(err);
                })
        },

		



    },

}