export default {
    template: //html
        `
	<div class="event_items">

		<div class="row">
			<div class="col-md-8">
				<h1>Realizar Busquedas</h1>
				<div class="input-group my-2">
					<div class="custom-file">
						<input type="search" class="form-control" placeholder="Buscar" v-model="texto_buscar" v-on:keyup.enter="es_filtrado=false,getDataPagina(1)" >
					</div>
					<div class="input-group-append " >
						<button class="btn btn-outline-secondary border" type="button" @click="es_filtrado=false,getDataPagina(1)"><i class="fas fa-search"></i></button>
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
									<label for="inputState">Filtrar por: </label>
										<select id="inputState" class="form-control" v-model="filtro">
											<option  value="1">Titulo</option>
											<option  value="2">Autor</option>
											<option  value="3">Año publicacion</option>
											<option  value="1">Asunto</option>
										</select>
									</div>
									<div class="form-group col-md-6">
									<label for="inputState1"> Tipo de Filtro</label>
										<select id="inputState1" class="form-control" v-model="relacion_filtro">
											<option  value="1">Contiene</option>
											<option  value="2">Es igual</option>
											<option  value="3">No contiene</option>
											<option  value="4">No es igual a</option>
											
										</select>
									</div>
								</div>
								<div class="input-group my-2">
									<div class="custom-file">
										<input type="search" class="form-control" placeholder="Texto a buscar" v-model="texto_buscar_filtro" v-on:keyup.enter="es_filtrado=true,getDataPagina(1)" >
									</div>
									<div class="input-group-append " >
										<button class="btn btn-outline-secondary border" type="button" @click="es_filtrado=true,getDataPagina(1)"><i class="fas fa-search"></i></button>
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
							mostrando {{inicio}} a {{fin}} de {{totalResultados()}} resultados para: {{etiqueta_busqueda}}
						</div>
						<h2 v-if="totalResultados()==0">No se Encontraron Documentos que coinciden con la busqueda {{etiqueta_busqueda}}  </h2>
						<div class="row event_item"  v-for="row in lista_documentos">
							<div class="col">
								<div class="row d-flex flex-row align-items-end">

									<div class="col-lg-3 order-lg-1 order-2">
										<div class="event_date d-flex flex-column align-items-center justify-content-center" >
											<div class="event_day" >
												<router-link :to="'/document/'+row.uuid"class="trans_200" >
													<img :src="img_route"  width="100">
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
							<h3>Autor</h3>
						</div>
						<ul class="sidebar_list">
							<li class="sidebar_list_item pointer" v-for="row in listado_autores" @click="consultar_autor(row.id_autor,row.autor)"><a > {{row.autor}} </a></li>
			
						</ul>
					</div>
			
					<!-- Tags -->
			
			
				</div>
			</div>

		</div>
	
	</div>

	`,

    data() {
        return {
            img_route: base_url + "assets/img/documento.png",

            listadoDocumentos: [],
            listadoDocumentosFiltrado: [],

            listadoCategorias: [],
            listado_autores: [],
            url: base_url,
            elementosPagina: 10,
            datosPaginados: [],
            paginaActual: 1,
            inicio: 1,
            fin: 10,
            variable_fin: 0,
            accordion: false,
            listaAnios: [],

            lista_documentos: [],
            totalArchivos: 0,


            filtro: 1,
            relacion_filtro: 1,
            texto_buscar_filtro: '',

            es_filtrado: false,

            texto_buscar: '',


            etiqueta_busqueda: "",
            es_filtro: false,

            search: '',
            loader: false,



        }
    },
    mounted() {


        if (this.stateSearch != '') {
            this.texto_buscar = this.stateSearch
            this.getDataPagina(1);

        }
        this.listar_autores();


    },


    methods: {
        totalPaginas() {
            return Math.ceil(this.totalArchivos / this.elementosPagina)
        },
        totalResultados() {
            return this.totalArchivos
        },
        isActive(nroPagina) {
            return this.paginaActual == nroPagina ? 'active' : ''
        },
        getDataPagina(nroPagina = 1) {
            this.loader = true
            this.paginaActual = nroPagina
            let inicio = (nroPagina * this.elementosPagina) - this.elementosPagina

            this.variable_fin = (nroPagina * this.elementosPagina)
            this.inicio = inicio + 1


            if (this.es_filtrado) {
                this.buscar_filtrado(inicio)
            } else {
                this.buscar(inicio);
            }



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


        ...Vuex.mapMutations(['setStateSearch']),



        estadoAcordeon() {
            this.accordion = !this.accordion
            if (!this.accordion) {

                this.relacion_filtro = 0
                this.filtro = 0
            }
        },

        buscar_filtrado(ofset) {

            let fm = new FormData();
            fm.append("ofset", ofset);
            fm.append("texto_buscar", this.texto_buscar_filtro);
            fm.append("filtro", this.filtro);
            fm.append("relacio_filtro", this.relacion_filtro)
            this.asignar_etiqueta_busqueda(this.texto_buscar_filtro)

            axios.post(this.url + "publico/buscar_filtrado", fm)
                .then(res => {
                    this.lista_documentos = res.data.archivos;
                    this.totalArchivos = res.data.total_resultados

                    this.fin = (this.totalResultados() < this.variable_fin) ? this.totalResultados() : this.variable_fin


                    this.loader = false;
                })
                .catch(err => {
                    console.error(err);
                    this.loader = false
                })
        },

        buscar(ofset) {
            let fm = new FormData();
            fm.append("ofset", ofset);
            fm.append("texto_buscar", this.texto_buscar);
            this.asignar_etiqueta_busqueda(this.texto_buscar)

            axios.post(this.url + "publico/buscar", fm)
                .then(res => {


                    this.lista_documentos = res.data.archivos;
                    this.totalArchivos = res.data.total_resultados
                    this.fin = (this.totalResultados() < this.variable_fin) ? this.totalResultados() : this.variable_fin

                    this.loader = false;
                })
                .catch(err => {
                    console.error(err);
                    this.loader = false;

                })
        },

        listar_autores() {
            axios.get(base_url + "publico/autores")
                .then(res => {
                    this.listado_autores = res.data.autores;


                })
                .catch(err => {
                    console.error(err);
                })
        },

        consultar_autor(id_autor, autor) {
            this.loader = true;
            this.asignar_etiqueta_busqueda(autor);
            let fm = new FormData();
            fm.append("id_autor", id_autor);
            axios.post(base_url + "publico/documentos_autor", fm)
                .then(res => {

                    this.lista_documentos = res.data.archivos;
                    this.totalArchivos = res.data.total_resultados
                    this.fin = res.data.total_resultados
                    this.loader = false;
                })
                .catch(err => {
                    console.error(err);
                    this.loader = false;

                })
        },

        asignar_etiqueta_busqueda(text) {
            this.etiqueta_busqueda = '\"' + text + '\"'
        },


    },
    computed: {
        ...Vuex.mapState(['stateSearch'])

    },

}
