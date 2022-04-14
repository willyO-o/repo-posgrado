export default {
    template: //html
        `
	<div class="event_items">

		<div class="row">
			<div class="col-md-8 contenedor-listado-publico">
			<h1>Contenido de la Institucion</h1>

				<div id="loader" vi-if="loader" :class="{'display-none':!loader,'display-block':loader}"></div>

				<div v-if="!loader" :class="{'display-none':loader,'display-block':!loader}"  class="animate-bottom">
				
				<div class="mb-3" v-if="totalResultados()!=0">
					mostrando {{inicio}} a {{fin}} de {{totalResultados()}} resultados
				</div>
				<h2 v-if="totalResultados()==0">No hay Archivos relacionados disponibles</h2>
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
										<p> {{row.resumen}}...  
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

			<!-- sidebar -->
			<div class="col-lg-4">
				<div class="sidebar">

					<!-- especialidades -->
					<div class="sidebar_section">
						<Search></Search>
						<div class="sidebar_section_title mt-4">
							<h3>Areas</h3>
						</div>
						<ul class="sidebar_list">
							<li class="sidebar_list_item pointer"   v-for="row in listadoEspecialidades"  @click="consultarDocumentosEspecialidad(row.id_especialidad)"><a> {{row.especialidad}} </a></li>
			
						</ul>
					</div>
			
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
							<h3>Tipos de Documentos</h3>
						</div>
						<div class="tags d-flex flex-row flex-wrap">
							<div class="tag pointer" v-for="row in listadoTipos" @click="consultarDocumentosTipo(row.id_tipo)"><a >{{row.tipo}}</a></div>
							<div class="tag pointer" @click="listarTodo()"><a >Ver todos</a></div>
			
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
            listadoEspecialidades: [],
            listadoCategorias: [],
            listadoTipos: [],
            url: base_url,
            elementosPagina: 10,
            datosPaginados: [],
            paginaActual: 1,
            inicio: 1,
            fin: 10,
            loader: false,
            totalArchivos: 0,
            filtroCategoria: 0,
            filtroArea: 0,
            filtroTipoDocumento: 0,
            paginar: 0,
        }
    },
    mounted() {

        this.getDataPagina(1);
        this.cargarParametros();

    },
    created() {

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
        getDataPagina(nroPagina) {
            this.loader = true
            this.paginaActual = nroPagina
            this.datosPaginados = []
            let inicio = (nroPagina * this.elementosPagina) - this.elementosPagina

            let fin = (nroPagina * this.elementosPagina)
            this.inicio = inicio + 1
            this.cargarDocumentos(inicio);

            setTimeout(() => {
                this.fin = (this.totalResultados() <= fin) ? this.totalResultados() : fin
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
        cargarDocumentos(ofset) {
            let fm = new FormData();
            fm.append("elementos_pagina", this.elementosPagina)
            fm.append("ofset", ofset);
            fm.append("paginar", this.paginar);
            fm.append("filtro_area", this.filtroArea);
            fm.append("filtro_categoria", this.filtroCategoria);
            fm.append("filtro_tipo_documento", this.filtroTipoDocumento);


            axios.post(this.url + `publico/listar_documentos`, fm)
                .then(res => {

                    console.log(res);

                    this.totalArchivos = res.data.total_resultados
                    this.datosPaginados = res.data.archivos

                    if (!this.paginar) {

                        this.listadoDocumentos = res.data.archivos
                        this.listadoDocumentosFiltrado = this.listadoDocumentos

                        this.datosPaginados = res.data.archivos

                        this.paginar = 1
                    }
                    this.loader = false


                })
                .catch(err => {
                    alert("Ocrrio un error, Intente de nuevo")
                    this.loader = false

                })

        },
        cargarParametros() {
            axios.get(this.url + "publico/listar_parametros")
                .then(res => {
                    this.listadoEspecialidades = res.data.especialidades
                    this.listadoCategorias = res.data.categorias
                    this.listadoTipos = res.data.tipos
                })
                .catch(err => {
                    alert("Ocurrio un Error, pagina no disponible por el momento")
                    this.listadoEspecialidades = []
                    this.listadoCategorias = []
                    this.listadoTipos = []
                });
        },
        consultarDocumentosEspecialidad(id_especialidad) {
            this.filtroCategoria = 0;
            this.filtroTipoDocumento = 0;
            this.filtroArea = id_especialidad;
            this.getDataPagina(1);
        },
        consultarDocumentosCategoria(id_categoria) {
            this.filtroArea = 0;
            this.filtroTipoDocumento = 0;
            this.filtroCategoria = id_categoria
            this.getDataPagina(1);
        },

        consultarDocumentosTipo(id_tipo) {
            this.filtroCategoria = 0;
            this.filtroArea = 0;
            this.filtroTipoDocumento = id_tipo
            this.getDataPagina(1);
        },
        listarTodo() {
            this.filtroCategoria = 0;
            this.filtroTipoDocumento = 0;
            this.filtroArea = 0;
            this.getDataPagina(1)
        },




    },

}
