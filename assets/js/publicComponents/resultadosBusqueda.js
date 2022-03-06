export default {
    template: //html
        `
	<div class="event_items">

		<div class="row">
			<div class="col-md-8">
				<h1>Realizar Busquedas</h1>
				<div class="input-group my-2">
					<div class="custom-file">
						<input class="form-control" placeholder="Buscar" v-model="search" v-on:keyup.enter="generarBusqueda()" >
					</div>
					<div class="input-group-append " >
						<button class="btn btn-outline-secondary border" type="button" @click="generarBusqueda()"><i class="fas fa-search"></i></button>
					</div>
				</div>

				<div id="accordion" class="mb-3">
					<div class="card">
						<div class="card-header p-0" id="headingOne">
							
							<div class="  accordion d-flex flex-row align-items-center " data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" :class="{ active: accordion }" @click="estadoAcordeon()">
								Mostrar Filtros Avanzados
							</div>
						
						</div>

						<div id="collapseOne" class="collapse " aria-labelledby="headingOne" data-parent="#accordion">
							<div class="card-body ">
								<div class="form-row mt-1">
	
								<div class="form-group col-md-6">
								<label for="inputPassword4">Categoria</label>
									<select id="inputState" class="form-control" v-model="categoria">
										<option selected value="0">Todos</option>
										<option v-for="row in listadoCategorias" :value="row.id_categoria"> {{row.categoria}}</option>
									</select>
								</div>
								<div class="form-group col-md-6">
								<label for="inputPassword4">Año</label>
									<select id="inputState" class="form-control" v-model="anio">
										<option selected value="0">todos</option>
										<option v-for="anio in listaAnios" >{{anio}}</option>
									</select>
								</div>
							</div>
							</div>
						</div>
					</div>

				</div>

				<div class="resultado-busquedas" >

					<div id="loader"  :class="{'display-none':!loader,'display-block':loader}"></div>

					<div  :class="{'display-none':loader,'display-block':!loader}"  class="animate-bottom">

						<div class="mb-3" v-if="totalResultados()!=0">
							mostrando {{inicio}} a {{fin}} de {{totalResultados()}} resultados
						</div>
						<h2 v-if="totalResultados()==0">No hay Archivos que coinciden con la busqueda </h2>
						<div class="row event_item"  v-for="row in datosPaginados">
							<div class="col">
								<div class="row d-flex flex-row align-items-end">

									<div class="col-lg-3 order-lg-1 order-2">
										<div class="event_date d-flex flex-column align-items-center justify-content-center" >
											<div class="event_day" >
												<router-link :to="'/document/'+row.uuid"class="trans_200" >
													<img src="assets/img/documento.png"  width="100">
												</router-link>
					
											</div>
											
										</div>
									</div>
					
									<div class="col-lg-9 order-lg-2 order-3">
										<div class="event_content">
											<div class="event_name">
												
												<router-link :to="'/document/'+row.uuid"class="trans_200" >{{row.titulo}} </router-link>
											</div>
											<div class="event_location"> autor:  <b>{{row.autor}} </b> ({{row.anio_creacion}})</div>
											<p> {{row.resumen.slice(0, 150)}}...
											<router-link :to="'/document/'+row.uuid"class="trans_200" >Leer mas </router-link>
											</p>
										</div>
									</div>

								</div>
							</div>
							<hr>
						</div>
		

				
					
						<div class="news_page_nav"style="margin-top:50px" v-if="totalResultados()!=0">
							<ul>
								<li class="text-center trans_200" @click="getPreviusPage()" v-if="paginaActual!=1"><a><i class="fas fa-arrow-left"></i></a></li>

								<li class=" text-center trans_200" v-for="pagina in totalPaginas()" @click="getDataPagina(pagina)" :class="isActive(pagina)"><a> {{pagina}} </a></li>

								<li class="text-center trans_200" @click="getNextPage()" v-if="paginaActual!=totalPaginas()"><a><i class="fas fa-arrow-right"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<!-- sidebar -->
			<div class="col-lg-4">
				<div class="sidebar">

			
						<!-- categorias -->
					<div class="sidebar_section">
						<div class="sidebar_section_title">
							<h3>Categorias</h3>
						</div>
						<ul class="sidebar_list">
							<li class="sidebar_list_item pointer" v-for="row in listadoCategorias" @click="consultarDocumentosCategoria(row.id_categoria)"><a > {{row.categoria}} </a></li>
			
						</ul>
					</div>
			
					<!-- Tags -->
			
					<div class="sidebar_section">
						<div class="sidebar_section_title">
							<h3>Listar</h3>
						</div>
						<div class="tags d-flex flex-row flex-wrap">
							
							<div class="tag pointer" @click="listarTodo()"><a >Listar todos</a></div>
			
						</div>

					</div>
			
				</div>
			</div>

		</div>
	
	</div>

	`,

    data() {
        return {
            listadoDocumentos: [],
            listadoDocumentosFiltrado: [],

            listadoCategorias: [],

            url: base_url,
            elementosPagina: 10,
            datosPaginados: [],
            paginaActual: 1,
            inicio: 1,
            fin: 10,
            accordion: false,
            listaAnios: [],
            categoria: 0,
            anio: 0,

            search: '',
            loader: false,



        }
    },
    mounted() {

        this.cargarDocumentos()
        this.generarAnios();

    },


    methods: {
        totalPaginas() {
            return Math.ceil(this.listadoDocumentosFiltrado.length / this.elementosPagina)
        },
        totalResultados() {
            return this.listadoDocumentosFiltrado.length
        },
        isActive(nroPagina) {
            return this.paginaActual == nroPagina ? 'active' : ''
        },
        getDataPagina(nroPagina) {

            this.loader = true
            this.paginaActual = nroPagina
            this.datosPaginados = []
            let inicio = (nroPagina * this.elementosPagina) - this.elementosPagina
            let fin = (nroPagina * this.elementosPagina)
            this.inicio = inicio + 1
            this.fin = (this.totalResultados() <= fin) ? this.totalResultados() : fin
            this.datosPaginados = this.listadoDocumentosFiltrado.slice(inicio, fin)
            setTimeout(() => {
                this.loader = false
            }, 1500);

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

            let fm = new FormData()
            fm.append('search', this.stateSearch)
            fm.append('id_categoria', this.categoria)
            fm.append('anio', this.anio)

            axios.post(this.url + 'archivo/search', fm)
                .then(res => {

                    this.listadoCategorias = res.data.categorias
                    this.listadoDocumentos = res.data.archivos
                    this.listadoDocumentosFiltrado = this.listadoDocumentos
                    this.getDataPagina(this.paginaActual)
                })
                .catch(err => {
                    console.error(err);
                })


        },
        consultarDocumentosEspecialidad(id_especialidad) {
            this.listadoDocumentosFiltrado = this.listadoDocumentos.filter((documento) => documento.id_especialidad == id_especialidad)
            this.getDataPagina(1);
        },
        consultarDocumentosCategoria(id_categoria) {
            this.listadoDocumentosFiltrado = this.listadoDocumentos.filter((documento) => documento.id_categoria == id_categoria)
            this.getDataPagina(1);
        },

        consultarDocumentosTipo(id_tipo) {
            this.listadoDocumentosFiltrado = this.listadoDocumentos.filter((documento) => documento.id_tipo == id_tipo)
            this.getDataPagina(1);
        },
        listarTodo() {
            this.search = ''
            this.setStateSearch(this.search)
            this.anio = 0
            this.categoria = 0
            this.cargarDocumentos()

        },
        ...Vuex.mapMutations(['setStateSearch']),

        generarAnios() {
            let d = new Date();
            let n = d.getFullYear();
            let arr = []
            for (let i = n; i >= 2008; i--) {
                arr.push(i)
            }
            this.listaAnios = arr
        },
        generarBusqueda() {
            this.setStateSearch(this.search)
            this.cargarDocumentos()
            this.search = ''
        },
        estadoAcordeon() {
            this.accordion = !this.accordion
            if (!this.accordion) {

                this.anio = 0
                this.categoria = 0
            }
        }



    },
    computed: {
        ...Vuex.mapState(['stateSearch'])

    },
}