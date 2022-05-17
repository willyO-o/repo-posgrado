<div id="applicacion">
	<div id="sidebar-nav" class="sidebar ">
		<nav>
			<ul class="nav" id="sidebar-nav-menu">

				<li class="menu-group">Mi Panel</li>

				<li>
					<router-link to="/admin"><i class="ti-home"></i> <span class="title">Inicio</span></router-link>
				</li>
				<?php if ($usuario['id_rol'] == 1) : ?>
					<li>
						<router-link to="/admin/users"><i class="ti-user"></i> <span class="title">Usuarios</span></router-link>
					</li>
				<?php endif ?>
				<li>
					<router-link to="/admin/especialidades" ><i class="ti-widget"></i> <span class="title">Programas</span></router-link>
				</li>
				<li>
					<router-link to="/admin/autores" ><i class="ti-widget"></i> <span class="title">Autores</span></router-link>
				</li>
				<li class="menu-group">Documentos</li>
				<li>
					<router-link to="/admin/documentos/registar"><i class="ti-export"></i> <span class="title">Publicar Documento</span></router-link>
				</li>
				<li>
					<router-link to="/admin/documentos/listar"><i class="ti-list-ol"></i> <span class="title">Listar Documento</span></router-link>
				</li>

				<!-- <li class="panel">
					<a href="#dashboards" data-toggle="collapse" data-parent="#sidebar-nav-menu" aria-expanded="" class=""><i class="ti-files"></i> <span class="title">Archivos</span> <i class="icon-submenu ti-angle-left"></i></a>
					<div id="dashboards" class="collapse  ">
						<ul class="submenu">

							<li>
								<router-link to="/archivos/subir"><i class="ti-export"></i> <span class="title">Publicar Archivo</span></router-link>
							</li>
							<li>
								<router-link to="/archivos/listar"><i class="ti-list-ol"></i> <span class="title">Listar</span></router-link>
							</li>

						</ul>
					</div>
				</li> -->





		</nav>
	</div>
