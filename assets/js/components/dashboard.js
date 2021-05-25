export default {
    template: //html
        `
	<div class="">
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
	<div class="row">
	  <div class="col-md-6">
		<div class="widget widget-stat">
		  <div class="media">
			<div class="media-left media-middle">
			  <i class="fa fa-sun-o icon-transparent-area custom-color-lightseagreen"></i>
			</div>
			<div class="media-body">
			  <span class="title">Especialidaes registradas</span>
			  <span class="value"> {{cantidadEspecialidades}} </span>
			</div>
		  </div>
		  <p class="footer text-primary"><i class="fa fa-arrow-right"></i>  
		  <router-link to="/especialidades">Ver mas...</router-link>
		  </p>
		</div>
	  </div>
	  <div class="col-md-6">
		<div class="widget widget-stat">
		  <div class="media">
			<div class="media-left media-middle">
			  <i class="fa fa-money icon-transparent-area custom-color-green"></i>
			</div>
			<div class="media-body">
			  <span class="title">REVENUE</span>
			  <span class="value">$12,574</span>
			</div>
		  </div>
		  <p class="footer text-success"><i class="fa fa-caret-up"></i> 5%
			<span>Compared to last week</span>
		  </p>
		</div>
	  </div>
	</div>
  </div>			
	`,
    data: () => {
        return {
            cantidadArchivos: 0,
            cantidadEspecialidades: 0,
            cantidadArchivoMes: 0,
            url: base_url,



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

}
