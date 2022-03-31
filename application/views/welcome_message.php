<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #the-canvas {
            border: 1px solid black;
            direction: ltr;
			max-width: 1200px;
			max-height: 1500px;

			z-index: 1;
        }
		.tool-bar{

			z-index: 5;
		}
    </style>
	<script>
		const base_url="<?= base_url() ?>"
	</script>

</head>

<body>

	
    <h1>PDF.js 'Hello, base64!' example</h1>
	<div class="tool-bar">
			barra de herramientoas
		</div>
    <canvas id="the-canvas"></canvas>

    <script src="//mozilla.github.io/pdf.js/build/pdf.js"></script>

    <script>
        // If absolute URL from the remote server is provided, configure the CORS
        // header on that server.
        // var url = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf';
        var url = base_url+'uploads/60c18fd7b08a6.pdf';

        // Loaded via <script> tag, create shortcut to access PDF.js exports.
        var pdfjsLib = window['pdfjs-dist/build/pdf'];

        // The workerSrc property shall be specified.
        pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';

        // Asynchronous download of PDF
        var loadingTask = pdfjsLib.getDocument(url);
        loadingTask.promise.then(function(pdf) {
            console.log('PDF loaded');

            // Fetch the first page
            var pageNumber = 1;
            pdf.getPage(pageNumber).then(function(page) {
                console.log('Page loaded');

                var scale = 2;
                var viewport = page.getViewport({
                    scale: scale
                });

                // Prepare canvas using PDF page dimensions
                var canvas = document.getElementById('the-canvas');
                var context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                // Render PDF page into canvas context
                var renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                var renderTask = page.render(renderContext);
                renderTask.promise.then(function() {
                    console.log('Page rendered');
                });
            });
        }, function(reason) {
            // PDF loading error
            console.error(reason);
        });
    </script>




</body>

</html>
