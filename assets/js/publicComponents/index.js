import Sidebar from './sidebar.js';
export default {
    template: //html
        `
	<div class="event_items">

		<div class="row">
			<div class="col-md-8">
				<div class="mb-3">
					mostrando {{inicio}} a {{fin}} de {{totalResultados()}} resultados
				</div>
			
				<div class="row event_item"  v-for="row in datosPaginados">
					<div class="col">
						<div class="row d-flex flex-row align-items-end">

							<div class="col-lg-3 order-lg-1 order-2">
								<div class="event_date d-flex flex-column align-items-center justify-content-center" >
									<div class="event_day" >
										<a href="#">
											<img src="assets/img/documento.png"  width="100">
										</a>
									</div>
									
								</div>
							</div>
			
							<div class="col-lg-9 order-lg-2 order-3">
								<div class="event_content">
									<div class="event_name"><a class="trans_200" href="#">{{row.titulo}}</a></div>
									<div class="event_location"> autor:  <b>{{row.autor}} </b> ({{row.anio_creacion}})</div>
									<p> {{row.resumen}}...</p>
								</div>
							</div>

						</div>
					</div>
					<hr>
				</div>
		

				
				
					<div class="news_page_nav"style="margin-top:50px">
						<ul>
							<li class="text-center trans_200" @click="getPreviusPage()"><a><i class="fas fa-arrow-left"></i></a></li>
							<li class=" text-center trans_200" v-for="pagina in totalPaginas()" @click="getDataPagina(pagina)" :class="isActive(pagina)"><a> {{pagina}} </a></li>

							<li class="text-center trans_200" @click="getNextPage()"><a><i class="fas fa-arrow-right"></i></a></li>
						</ul>
					</div>

			</div>

			<!-- sidebar -->
			<div class="col-lg-4">
				<Sidebar/>
			</div>

		</div>
	
	</div>

	`,
    components: { Sidebar },

    data() {
        return {
            listadoDocumentos: [],
            url: base_url,
            elementosPagina: 10,
            datosPaginados: [],
            paginaActual: 1,
            inicio: 1,
            fin: 10,


        }
    },
    mounted() {
        console.log(this.listadoDocumentos)
        this.cargarDocumentos()

    },


    methods: {
        totalPaginas() {
            return Math.ceil(this.listadoDocumentos.length / this.elementosPagina)
        },
        totalResultados() {
            return this.listadoDocumentos.length
        },
        isActive(nroPagina) {
            return this.paginaActual == nroPagina ? 'active' : ''
        },
        getDataPagina(nroPagina) {
            this.paginaActual = nroPagina
            this.datosPaginados = []
            let inicio = (nroPagina * this.elementosPagina) - this.elementosPagina
            let fin = (nroPagina * this.elementosPagina)
            this.inicio = inicio + 1
            this.fin = (this.totalResultados() <= fin) ? this.totalResultados() : fin
            this.datosPaginados = this.listadoDocumentos.slice(inicio, fin)

        },
        getPreviusPage() {
            if (this.paginaActual > 1) {
                this.paginaActual--
            }
            this.getDataPagina(this.paginaActual)
        },
        getNextPage() {
            if (this.paginaActual < this.totalPaginas()) {
                this.paginaActual++
            }
            this.getDataPagina(this.paginaActual)
        },
        cargarDocumentos() {

            axios.get(this.url + 'archivo/listar')
                .then(res => {

                    this.listadoDocumentos = res.data.archivos
                    this.getDataPagina(this.paginaActual)
                })
                .catch(err => {
                    console.error(err);
                })

        },
    },
}
