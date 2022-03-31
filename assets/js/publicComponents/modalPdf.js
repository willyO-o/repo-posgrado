
export default {
    template: //html
        `
	<div id="modal3" class="modalmask">
		<div class="modalbox resize">
			<a href="#close" title="Close" class="close">X</a>
			<h2>REDIMENSIONAR</h2>
			<p>También puedes redimensionar la ventana hasta hacerla desaparecer.</p>
			<p>Las posibilidades que ofrece CSS3 son múltiples, tan solo hace falta un poco de imaginación para crear efectos realmente llamativos.</p>
		</div>
	</div>
	
	`,

    data() {
        return {
            errorPassword: false,
            errorUsuario: false,
            usuarioIncorrecto: false,
            password: '',
            usuario: '',
            url: base_url,
        }
    },

    methods: {}
}
