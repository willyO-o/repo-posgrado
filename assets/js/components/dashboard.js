export default {
    template: //html
    `
	<div class="">
	<div class="row">
	  <div class="col-md-6">
		<div class="widget widget-stat">
		  <div class="media">
			<div class="media-left media-middle">
			  <i class="fa fa-file-upload icon-transparent-area custom-color-purple"></i>
			</div>
			<div class="media-body">
			  <span class="title">Documentos Publicados</span>
			  <span class="value">{{cantidadArchivos}}</span>
			</div>
		  </div>
		</div>
	  </div>
	  <div class="col-md-6">
		<div class="widget widget-stat">
		  <div class="media">
			<div class="media-left media-middle">
			  <i class="fa fa-cloud-download icon-transparent-area custom-color-orange"></i>
			</div>
			<div class="media-body">
			  <span class="title">DOWNLOADS</span>
			  <span class="value">12,760</span>
			</div>
		  </div>
		  <p class="footer text-danger"><i class="fa fa-caret-down"></i> 25%
			<span>Compared to last week</span>
		  </p>
		</div>
	  </div>
	</div>
	<div class="row">
	  <div class="col-md-6">
		<div class="widget widget-stat">
		  <div class="media">
			<div class="media-left media-middle">
			  <i class="fa fa-reply icon-transparent-area custom-color-lightseagreen"></i>
			</div>
			<div class="media-body">
			  <span class="title">REFUNDS</span>
			  <span class="value">12</span>
			</div>
		  </div>
		  <p class="footer text-success"><i class="fa fa-caret-down"></i> 28%
			<span>Compared to last week</span>
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
	data:()=> {
        return {
            cantidadArchivos:0,
			cantidadEspecialidades:0,
			url:base_url,


            
        }
    },
	created() {
		
	},
	methods: {
		getCantidades(){
			axios.get(this.url+'')
			.then(res => {
				console.log(res)
			})
			.catch(err => {
				console.error(err); 
			})
		},
	},
	
}
