export default {

    template: //html
        `
<div>
	<div class="container-fluid" v-if="verDocumento">
		<div class="card card-profile">
			<iframe  type="aplication/pdf" :src="srcDocumento"  id="vistaDocumento" width="100%" height="600rem"></iframe>
			
		</div>
		<div class="text-center">
			<button class="btn btn-info" @click="ocultarDocumento()">Ver detalles</button>
		</div>
	
	</div>

	<div class="container-fluid" v-if="!verDocumento">
		<div class="card card-profile">
			<div class="row ">
				<!-- left column -->
				<div class="col-md-4">
					<div class="profile-left">
						<!-- profile header -->
						<div class="profile-header" >
						<div class="overlay"   style="width:100%"></div>
						<div class="profile-main">
							<img :src="imagenArchivo" class="" alt="Avatar" width="100%">
							
						</div>
						
						</div>
						<!-- end profile header -->

						<!-- profile detail -->
						<div class="profile-detail">
						<div class="profile-info">
							<h4 class="heading">Informacion</h4>
							<dl class="row">
							<dt class="col-sm-4">Autor:</dt>
							<dd class="col-sm-8 text-right">{{detallesArchivo.nombre_autor}} {{detallesArchivo.paterno_autor}} {{detallesArchivo.materno_autor}}</dd>

							<dt class="col-sm-8" v-if="detallesArchivo.tutor!='' ">Nro de Paginas:</dt>
							<dd class="col-sm-4 text-right"  v-if="detallesArchivo.tutor!='' ">{{detallesArchivo.nro_paginas}}</dd>

							<dt class="col-sm-4">Sede:</dt>
							<dd class="col-sm-8 text-right"> {{detallesArchivo.sede}} </dd>
							<dt class="col-sm-8">Tiene permiso Publico:</dt>
							<dd class="col-sm-4 text-right"> {{detallesArchivo.es_publico}} </dd>

							</dl>
						</div>
						<div class="profile-info">

						</div>
						<div class="profile-info">

						</div>
						<div class="text-center">
							
								<button class="btn btn-warning" @click="irEditar(); setStateEditarArchivo(detallesArchivo)">Editar Documento</button>
							
						
						</div>
						</div>
						<!-- end profile detail -->
					</div>
				</div>
				<!-- end left column -->

				<!-- right column -->
				<div class="col-md-8">
				<div class="profile-right">
					<h4 class="heading"> {{detallesArchivo.titulo}} </h4>

					

					<!-- tabbed content -->
					<div class="custom-tabs-line tabs-line-bottom left-aligned">
						<ul class="nav" role="tablist">
							<li class="nav-item"><a href="#tab-bottom-left1" class="nav-link active" role="tab" data-toggle="tab">Detalles</a></li>
							<li class="nav-item"><a href="#tab-bottom-left2" class="nav-link" role="tab" data-toggle="tab">Resumen </span></a></li>
						</ul>
					</div>
					<div class="tab-content">
						<div class="tab-pane fade show active" id="tab-bottom-left1">
							<ul class="list-unstyled activity-timeline">
							<li>
								<i class="fa fa-bookmark activity-icon"></i>
								<p> {{detallesArchivo.especialidad}} {{detallesArchivo.version}} <span class="timestamp">Especialidad</span></p>
							</li>
							
							<li>
								<i class="fa fa-book activity-icon"></i>
								<p>{{ detallesArchivo.tipo }} <span class="timestamp">Tipo de Documento</span></p>
							</li>
							<li>
							
								<i class="fa fa-graduation-cap activity-icon"></i>
								<p> {{detallesArchivo.categoria}} <span class="timestamp"> Categoria </span></p>
							</li>
							<li>
								<i class="fa fa-calendar-o activity-icon"></i>
								<p>{{detallesArchivo.anio_creacion}} <span class="timestamp">Año de creacion</span></p>
							</li>
							<li>
								<i class="fa fa-calendar activity-icon"></i>
								<p>{{detallesArchivo.fecha_publicacion}} <span class="timestamp">Fecha de Publicacion</span></p>
							</li>
							<li>
								<i class="fa fa-user activity-icon"></i>
								<p>{{detallesArchivo.nombre_usuario+' '+detallesArchivo.apellido}} <span class="timestamp">Usuario publicador</span></p>
							</li>
							<li>
								<i class="fa fa-eye activity-icon"></i>
								<p>{{detallesArchivo.observaciones}} <span class="timestamp">Observaciones</span></p>
							</li>
							<li>
								<button class="btn btn-info" @click="mostrarDocumento()"  :disabled="estado_boton()">{{detallesArchivo.nombre_archivo != "" &&  detallesArchivo.nombre_archivo != null ? "Ver Documento en PDF" : "Sin Archivo Digital"}}  <i class="fa fa-file-pdf-o" ></i></button>
							</li>
							</ul>
							
						</div>
						<div class="tab-pane fade" id="tab-bottom-left2">
							<div class="table-responsive">
							<p>{{detallesArchivo.resumen}}</p>
							</div>
						</div>
						
						<!-- end tabbed content -->
					</div>
				</div>
				<!-- end right column -->
				</div>
			</div>
		</div>
	</div>
</div>
	`,

    data() {
        return {

            imagenArchivo: base_url + 'assets/img/documento.png',
        }
    },
    props: ['detallesArchivo'],
    methods: {
        mostrarDocumento() {

            //this.verDocumento = true;
            this.setStateVerDocumento(true)
            this.srcDocumento = base_url + 'uploads/' + this.detallesArchivo.nombre_archivo
        },
        ocultarDocumento() {
            //this.verDocumento = false;
            this.setStateVerDocumento(false)
        },
        irEditar() {

            $('#modal').modal('hide')

            this.$router.push('/admin/documentos/registar')

        },
        estado_boton() {
            return (this.detallesArchivo.nombre_archivo != '' && this.detallesArchivo.nombre_archivo != null) ? false : true
        },
        ...Vuex.mapMutations(['setStateEditarArchivo', 'setStateVerDocumento']),
    },
    computed: {
        ...Vuex.mapState(['verDocumento'])

    },

}
