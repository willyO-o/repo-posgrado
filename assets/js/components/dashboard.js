import varChart from './barChart.js'
export default {
    template: //html
        `
	<div class="mb-5">
		<div class="alert alert-info text-center" role="alert" v-if="alerta">
			<h3>Bienvenido <br> Panel de Inicio Repositorio Institucional, Direccion de Posgrado - UPEA</h3>
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
				<span class="value">{{cantidad_archivos}}</span>
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
				<span class="title">Total de Especialidades Registradas </span>
				<span class="value">{{cantidad_especialidades}}</span>
				</div>
			</div>
			<p class="footer text-primary"><i class="fa fa-arrow-right"></i> 
			<router-link to="/especialidades">Ver mas...</router-link>
			</p>
			</div>
		</div>
		
		
		</div>
		<div style="" class="mb-5 card">
			<div class="card-header bg-white d-flex justify-content-between">
				<div>Grafica Documentos publicados por mes,  (año {{anio}}) </div>
				<div>
					<select class="form-control" v-model="anio" >
						<option v-for="row in listado_anios " :value="row.anios"> {{row.anios}} </option>
					</select>
				</div>
			</div>
			<div class="card-body">
				<varChart  :anio="anio"/>
			</div>
		</div>
  	</div>			
	`,
    components: { varChart },
    data: () => {
        return {
            cantidad_archivos: 0,
            cantidad_especialidades: 0,
            cantidadArchivoMes: 0,
            url: base_url,
            alerta: true,
            listado_anios: [],
            anio: '',

        }
    },
    created() {
        this.get_ultimo_anio()
		this.get_cantidades()

    },
    methods: {
        get_cantidades() {

            axios.get(this.url + 'estadisticas/listar_totales')
                .then(res => {
					
                    this.cantidad_archivos = res.data.total_archivos
                    this.cantidad_especialidades = res.data.total_especialidades
                    this.listado_anios = res.data.anios
                })
                .catch(err => {
                    console.error(err);
                })
        },
		get_ultimo_anio(){
			axios.get(this.url+"estadisticas/extraer_ultimo_anio")
			.then(res => {
		
				this.anio=res.data.anio

			})
			.catch(err => {
				console.error(err); 
			})
		}

    },
    mounted() {

    },

}
