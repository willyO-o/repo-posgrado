export default {
    template: //html
        `
		<div class="sidebar">

		<!-- especialidades -->
		<div class="sidebar_section">
			<div class="sidebar_section_title">
				<h3>Especialidades</h3>
			</div>
			<ul class="sidebar_list">
				<li class="sidebar_list_item pointer"   v-for="row in especialidades" ><a> {{row.especialidad}} </a></li>

			</ul>
		</div>

			<!-- categorias -->
		<div class="sidebar_section">
			<div class="sidebar_section_title">
				<h3>Categorias</h3>
			</div>
			<ul class="sidebar_list">
				<li class="sidebar_list_item pointer" v-for="row in categorias"><a > {{row.categoria}} </a></li>

			</ul>
		</div>

		<!-- Tags -->

		<div class="sidebar_section">
			<div class="sidebar_section_title">
				<h3>Tipos de Documentos</h3>
			</div>
			<div class="tags d-flex flex-row flex-wrap">
				<div class="tag pointer" v-for="row in tipos" @click="setStateConsultaTipos(row.id_tipo)"><a >{{row.tipo}}</a></div>

			</div>
		</div>

	</div>
	
	`,
    data() {
        return {
            saludo: 'hola',
            contador: 1
        }
    },
    props: ['especialidades', 'categorias', 'tipos'],
    methods: {
        ...Vuex.mapMutations(['setStateConsultaEspecialidades']),
        ...Vuex.mapMutations(['setStateConsultaCategorias']),
        ...Vuex.mapMutations(['setStateConsultaTipos']),

    },
    computed: {
        ...Vuex.mapState(['stateConsultaEspecialidades', 'stateConsultaCategorias', 'stateConsultaTipos'])

    },
}
