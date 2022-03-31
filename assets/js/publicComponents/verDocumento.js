
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

				<div class="modalbox resize">
					<a  title="Close" class="close" @click="cerrarModal()" >X</a>
					<div class="tool-bar">
						barra de herramientoas
					</div>
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
			modal: false


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
			this.inicializarPdf() 
		},
		cerrarModal() {
			this.modal = false
			console.log("cerrar");
		},

		inicializarPdf() {
			let pdf_url = base_url + 'uploads/'+this.documento.nombre;

			// Loaded via <script> tag, create shortcut to access PDF.js exports.
			let pdfjsLib = window['pdfjs-dist/build/pdf'];

			// The workerSrc property shall be specified.
			pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';

			// Asynchronous download of PDF
			let loadingTask = pdfjsLib.getDocument(pdf_url);
			loadingTask.promise.then(function (pdf) {
				console.log('PDF loaded');

				// Fetch the first page
				let pageNumber = 1;
				pdf.getPage(pageNumber).then(function (page) {
					console.log('Page loaded');

					let scale = 1;
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
					renderTask.promise.then(function () {
						console.log('Page rendered');
					});
				});
			}, function (reason) {
				// PDF loading error
				console.error(reason);
			});
		},







	},

}
