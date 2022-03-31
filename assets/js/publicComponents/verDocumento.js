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
								<a @click="abrirModal()" > <i class="fas fa-file-pdf fa-2x"> </i> {{documento.nombre}} ({{documento.tamanio}}Mb)  </a>
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
			<div id="modal3" class="modalmask"  :class="{open:modal, hide:!modal}">
				<div class="tool-bar">
				
					<div></div>
					<div class="modal-document-tittle"><i class="fas fa-file-pdf"></i> Ver Documento PDF</div>
					<a  title="Close" class="modal-close" @click="cerrarModal()" ><i class="fas fa-times"></i></a>
				</div>
					<div class="modal-btn next"><i class="fas fa-chevron-circle-right"></i></div>
					<div class="modal-btn prev"><i class="fas fa-chevron-circle-left"></i></div>
					<div class="container-zoom-bar">
						<div id="zoom-bar" class="zoom-bar">
							<div  class="paginate">
								<div class="text-paginate">Pagina</div>
								<div class="page-display"> 
									1
								</div>
								/
								<div class="page-display"> 
									99911
								</div>
							</div>
							<div  class="zoom-buttons">
								<div class="btn-search" @click="alejarPdf()"> 
									<i class="fas fa-minus"></i>
								</div>
								<div class="btn-search" @click="toggleZoom()"> 
									<i class="fas " :class="{'fa-search-minus':zoom, 'fa-search-plus':!zoom}"></i>
								</div>
								<div class="btn-search" @click="ampliarPdf()"> 
									<i class="fas fa-plus"></i>
								</div>
							</div>
						</div>
					</div>
					
					
				<div class="modalbox resize" id="resize">

					<canvas id="the-canvas"></canvas>
				</div>
			</div>
	</div>



	`,

    data() {
        return {
            uuid: this.$route.params.name,
            url: base_url,
            documento: {},
            modal: false,
            sizePdf: 800,
            maxSizePdf: 2200,
            sizePerClick: 200,
            minSizePdf: 800,
            zoom: false,
            //datos pdfjs


            pdfDoc: null,
            pageNum: 1,
            pageRendering: false,
            pageNumPending: null,
            scale: 0.8,
            canvas: null,
            ctx: null
        }
    },
    mounted() {
        this.getDocumento();
        this.canvas = document.getElementById('the-canvas');
        this.ctx = this.canvas.getContext('2d');
    },

    methods: {
        getDocumento() {
            let fm = new FormData()
            fm.append("uuid", this.uuid)
            axios.post(this.url + 'publico/documento_uuid', fm)
                .then(res => {
                    if (res.data.existe == true) {
                        this.documento = Object.assign({}, res.data.documento)
                        console.log(res.data.documento);

                    } else {
                        this.$router.push('/404')
                    }

                })
                .catch(err => {
                    console.error(err);
                })
        },
        abrirModal() {
            this.modal = true
            console.log("abrir");
            document.body.classList.add("modal-open");
            this.inicializarPdf()
        },
        cerrarModal() {
            this.modal = false
            console.log("cerrar");
            document.body.classList.remove("modal-open");
        },
        ampliarPdf() {

            if (this.sizePdf < this.maxSizePdf) {
                console.log("ampliar");
                this.sizePdf += this.sizePerClick
                document.querySelector(".modalmask.open #resize").setAttribute("style", `width:${this.sizePdf}px;`)

            }
        },
        toggleZoom() {
            if (this.sizePdf < this.maxSizePdf) {
                this.sizePdf = this.maxSizePdf
                this.zoom = true
            } else {
                this.sizePdf = this.minSizePdf
                this.zoom = false
            }
            document.querySelector(".modalmask.open #resize").setAttribute("style", `width:${this.sizePdf}px;`)
        },
        alejarPdf() {
            console.log(this.sizePdf);
            if (this.sizePdf > this.minSizePdf) {
                console.log("alejar");
                this.sizePdf -= this.sizePerClick
                document.querySelector(".modalmask.open #resize").setAttribute("style", `width:${this.sizePdf}px;`)

            }
        },

        inicializarPdf() {
            let pdf_url = base_url + 'uploads/' + this.documento.nombre;

            // Loaded via <script> tag, create shortcut to access PDF.js exports.
            let pdfjsLib = window['pdfjs-dist/build/pdf'];

            // The workerSrc property shall be specified.
            pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';

            // Asynchronous download of PDF
            let loadingTask = pdfjsLib.getDocument(pdf_url);
            loadingTask.promise.then(function(pdf) {
                console.log('PDF loaded');

                // Fetch the first page
                let pageNumber = 1;
                pdf.getPage(pageNumber).then(function(page) {
                    console.log('Page loaded');

                    let scale = 15;
                    let viewport = page.getViewport({
                        scale: scale
                    });

                    // Prepare canvas using PDF page dimensions
                    let canvas = document.getElementById('the-canvas');
                    let context = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    // Render PDF page into canvas context
                    let renderContext = {
                        canvasContext: context,
                        viewport: viewport
                    };
                    let renderTask = page.render(renderContext);
                    renderTask.promise.then(function() {
                        console.log('Page rendered');
                    });
                });
            }, function(reason) {
                // PDF loading error
                console.error(reason);
            });
        },


        inicializarPdf1() {
            let pdf_url = base_url + 'uploads/' + this.documento.nombre;
            // var url = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf';

            // Loaded via <script> tag, create shortcut to access PDF.js exports.
            var pdfjsLib = window['pdfjs-dist/build/pdf'];

            // The workerSrc property shall be specified.
            pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';


            function renderPage(num) {
                pageRendering = true;
                // Using promise to fetch the page
                this.pdfDoc.getPage(num).then(function(page) {
                    var viewport = page.getViewport({ scale: scale });
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    // Render PDF page into canvas context
                    var renderContext = {
                        canvasContext: ctx,
                        viewport: viewport
                    };
                    var renderTask = page.render(renderContext);

                    // Wait for rendering to finish
                    renderTask.promise.then(function() {
                        pageRendering = false;
                        if (pageNumPending !== null) {
                            // New page rendering is pending
                            renderPage(pageNumPending);
                            pageNumPending = null;
                        }
                    });
                });

                // Update page counters
                document.getElementById('page_num').textContent = num;
            }

            /**
             * If another page rendering in progress, waits until the rendering is
             * finised. Otherwise, executes rendering immediately.
             */
            function queueRenderPage(num) {
                if (pageRendering) {
                    pageNumPending = num;
                } else {
                    renderPage(num);
                }
            }

            /**
             * Displays previous page.
             */
            function onPrevPage() {
                if (this.pageNum <= 1) {
                    return;
                }
                this.pageNum--;
                queueRenderPage(this.pageNum);
            }
            document.getElementById('prev').addEventListener('click', onPrevPage);

            /**
             * Displays next page.
             */
            function onNextPage() {
                if (this.pageNum >= this.pdfDoc.numPages) {
                    return;
                }
                this.pageNum++;
                queueRenderPage(this.pageNum);
            }
            document.getElementById('next').addEventListener('click', onNextPage);

            /**
             * Asynchronously downloads PDF.
             */
            pdfjsLib.getDocument(pdf_url).promise.then(function(pdfDoc_) {
                this.pdfDoc = pdfDoc_;
                document.getElementById('page_count').textContent = this.pdfDoc.numPages;

                // Initial/first page rendering
                renderPage(this.pageNum);
            });
        },






    },

}
