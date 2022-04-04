export default {
    props: ['pdfUrl'],
    template: //html
        `
		<div id="modal3" class="modalmask"  :class="{open:modal, hide:!modal}">
			<div class="tool-bar">
			
				<div></div>
				<div class="modal-document-tittle"><i class="fas fa-file-pdf"></i> Ver Documento PDF</div>
				<a  title="Close" class="modal-close" @click="cerrarModal()" ><i class="fas fa-times"></i></a>
			</div>
				<div class="modal-btn prev" id="prev"><i class="fas fa-chevron-circle-left"></i></div>
				<div class="modal-btn next" id="next"><i class="fas fa-chevron-circle-right"></i></div>
				<div class="container-zoom-bar">
					<div id="zoom-bar" class="zoom-bar">
						<div  class="paginate">
							<div class="text-paginate">Pagina</div>
							<div class="page-display"  > 
								<input type="number" id="page_num">
							</div>
							/
							<div class="page-display" id="page_count"> 
								
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
				<div class="spinner" style="display:none"></div>
				<canvas id="the-canvas"></canvas>
			</div>
		</div>
	`,

    data() {
        return {
            sizePdf: 800,
            maxSizePdf: 2200,
            sizePerClick: 200,
            minSizePdf: 800,
            zoom: false,
            modal: false,
        }
    },

    methods: {

        abrirModal() {
            this.modal = true
            document.body.classList.add("modal-open");
            this.inicializarPdf();
        },
        cerrarModal() {
            this.modal = false
            document.body.classList.remove("modal-open");
        },
        ampliarPdf() {

            if (this.sizePdf < this.maxSizePdf) {
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

            if (this.sizePdf > this.minSizePdf) {
                this.sizePdf -= this.sizePerClick
                document.querySelector(".modalmask.open #resize").setAttribute("style", `width:${this.sizePdf}px;`)

            }
        },


        inicializarPdf() {

            document.querySelector("#resize .spinner").style.display = "block";
            let pdf_url = this.pdfUrl;
            var pdfjsLib = window['pdfjs-dist/build/pdf'];

            // The workerSrc property shall be specified.
            pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';

            var pdfDoc = null,
                pageNum = 1,
                pageRendering = false,
                pageNumPending = null,
                scale = 2,
                canvas = document.getElementById('the-canvas'),
                ctx = canvas.getContext('2d');

            /**
             * Get page info from document, resize canvas accordingly, and render page.
             * @param num Page number.
             */
            function renderPage(num) {
                pageRendering = true;
                // Using promise to fetch the page
                pdfDoc.getPage(num).then(function(page) {
                    var viewport = page.getViewport({ scale: scale });
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    // Render PDF page into canvas context
                    var renderContext = {
                        canvasContext: ctx,
                        viewport: viewport
                    };
                    var renderTask = page.render(renderContext);
                    document.querySelector("#resize .spinner").style.display = "none";

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
                document.getElementById('page_num').value = num;
            }

            /**
             * If another page rendering in progress, waits until the rendering is
             * finised. Otherwise, executes rendering immediately.
             */
            function goPage() {
                let input = document.getElementById('page_num').value;
                input = Number(input);
                let all_pages = document.getElementById('page_count').textContent
                all_pages = Number(all_pages);
                if (!Number.isInteger(input) || input < 1 || input > all_pages) {
                    document.getElementById('page_num').value = pageNum;
                    return
                }
                pageNum = input;
                queueRenderPage(pageNum);
            }
            document.getElementById('page_num').addEventListener('change', goPage);


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
                if (pageNum <= 1) {
                    return;
                }
                pageNum--;
                queueRenderPage(pageNum);
            }
            document.getElementById('prev').addEventListener('click', onPrevPage);

            /**
             * Displays next page.
             */
            function onNextPage() {
                if (pageNum >= pdfDoc.numPages) {
                    return;
                }
                pageNum++;
                queueRenderPage(pageNum);
            }
            document.getElementById('next').addEventListener('click', onNextPage);

            /**
             * Asynchronously downloads PDF.
             */
            pdfjsLib.getDocument(pdf_url).promise.then(function(pdfDoc_) {
                pdfDoc = pdfDoc_;
                document.getElementById('page_count').textContent = pdfDoc.numPages;

                // Initial/first page rendering
                renderPage(pageNum);
            });

        },

    }
}
