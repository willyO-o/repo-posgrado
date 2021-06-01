import varChart from './barChart.js'
export default {
    template: //html
        `
	<div class="mb-5">
		<div class="alert alert-info text-center" role="alert" v-if="alerta">
			<h3>Bienvenio <br> Panel de Inicio Repositorio Institucional, Direccion de Posgrado - UPEA</h3>
		</div>
		<div class="row">
		<div class="col-md-6">
			<div class="widget widget-stat">
			<div class="media">
				<div class="media-left media-middle">
				<i class="fa fa-upload icon-transparent-area custom-color-purple"></i>
				</div>
				<div class="media-body">
				<span class="title">Total Documentos Publicados</span>
				<span class="value">{{cantidadArchivos}}</span>
				</div>
			</div>
			<p class="footer text-primary"><i class="fa fa-arrow-right"></i> 
			
				<router-link to="/archivos/listar">Ver mas...</router-link>
			</p>
			</div>
		</div>
		<div class="col-md-6">
			<div class="widget widget-stat">
			<div class="media">
				<div class="media-left media-middle">
				<i class="fa fa-calendar icon-transparent-area custom-color-lightseagreen"></i>
				</div>
				<div class="media-body">
				<span class="title">Documentos publicados este Mes ({{getMesActual()}}) </span>
				<span class="value">{{cantidadArchivoMes}}</span>
				</div>
			</div>
			<p class="footer text-primary"><i class="fa fa-arrow-right"></i> 
			<router-link to="/archivos/listar">Ver mas...</router-link>
			</p>
			</div>
		</div>
		
		
		</div>
		<div style="" class="mb-5 card">
			<div class="card-body">
				<varChart/>
			</div>
		</div>
  	</div>			
	`,
    components: { varChart },
    data: () => {
        return {
            cantidadArchivos: 0,
            cantidadEspecialidades: 0,
            cantidadArchivoMes: 0,
            url: base_url,
            alerta: true,


        }
    },
    created() {
        this.getCantidades()
    },
    methods: {
        getCantidades() {
            axios.get(this.url + 'archivo/getEstadisticas')
                .then(res => {
                    console.log(res)
                    this.cantidadArchivos = res.data.nroArchivos
                    this.cantidadArchivoMes = res.data.nroArchivosMes
                    this.cantidadEspecialidades = res.data.nroEspecialidades
                })
                .catch(err => {
                    console.error(err);
                })
        },
        getMesActual() {
            let mesActual = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(new Date());
            return mesActual.toUpperCase()
        },
    },
    mounted() {
        setTimeout(() => {
            this.alerta = false
        }, 5000);
    },

}