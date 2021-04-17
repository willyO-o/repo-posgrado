<!-- Header -->

<header class="header d-flex flex-row">
	<div class="header_content d-flex flex-row align-items-center">
		<!-- Logo -->
		<div class="logo_container">
			<div class="logo" style="width: 10rem;">
				<img src="<?= base_url() ?>assets/img/logo-posgrado.png" alt="" width="100%">

			</div>
		</div>

		<!-- Main Navigation -->
		<nav class="main_nav_container">
			<div class="main_nav">
				<ul class="main_nav_list d-flex justify-content-start">
					<li class="main_nav_item ">
						<router-link to="/"><i class="ti-export"></i> <span class="title">Inicio</span></router-link>
					</li>
					<li class="main_nav_item">
						<router-link to="/login"><i class="ti-export"></i> <span class="title">Login</span></router-link>
					</li>
				</ul>
			</div>
		</nav>
	</div>
	<div class="header_side d-flex flex-row justify-content-center align-items-center">
		<form class="form-inline my-2 my-lg-0">
			<input class="form-control " type="search" placeholder="Buscar" aria-label="Search">
			<button class="btn btn-outline-dark my-2 my-sm-0" type="button"><i class="fas fa-search"></i></button>
		</form>
	</div>

	<!-- Hamburger -->
	<div class="hamburger_container">
		<i class="fas fa-bars trans_200"></i>
	</div>

</header>

<!-- Menu -->
<div class="menu_container menu_mm">

	<!-- Menu Close Button -->
	<div class="menu_close_container">
		<div class="menu_close"></div>
	</div>

	<!-- Menu Items -->
	<div class="menu_inner menu_mm">
		<div class="menu menu_mm">
			<ul class="menu_list menu_mm">
				<li class="menu_item menu_mm">
					<router-link to="/"><i class="ti-export"></i> <span class="title">Inicio</span></router-link>
				</li>
				<li class="menu_item menu_mm">
					<router-link to="/login"><i class="ti-export"></i> <span class="title">Login</span></router-link>
				</li>

			</ul>

			<!-- Menu Social -->

			<div class="menu_inner menu_mm">
				<form class="form-inline my-2 my-lg-0">
					<input class="form-control " type="search" placeholder="Buscar" aria-label="Search">
					<button class="btn btn-outline-dark my-2 my-sm-0" type="button"><i class="fas fa-search"></i></button>
				</form>
			</div>


		</div>

	</div>

</div>

<!-- Home -->

<div class="home">
	<div class="home_background_container prlx_parent">
		<div class="home_background prlx" style="background-image:url(<?= base_url() ?>assets/img/news_background.jpg)"></div>
	</div>
	<div class="home_content">
		<h1>Repositorio Institucional</h1>
	</div>
</div>
