<nav class="navbar navbar-expand fixed-top " style="background: #023887;opacity:.9">
    <div class="navbar-brand d-none d-lg-block">
        <a href="<?=base_url()?>"><img src="<?= base_url() ?>assets/img/logo_5.png" alt="Klorofil Pro Logo" class="img-fluid logo" width="160" ></a>
    </div>
    <div class="container-fluid p-0">
        <button id="tour-fullwidth" type="button" class="btn btn-default btn-toggle-fullwidth"><i class="ti-menu"></i></button>
        <form class="form-inline search-form mr-auto d-none d-sm-block">
            <div class="input-group">
                
            </div>
        </form>
        <div id="navbar-menu">
            <ul class="nav navbar-nav align-items-center">


                <li class="dropdown">
                    <a href="#" id="tour-help" class="dropdown-toggle" data-toggle="dropdown"><i class="ti-help"></i> <span class="sr-only">Help</span></a>
                    <ul class="dropdown-menu dropdown-menu-right">
                        <li><a href="<?=base_url()?>uploads/manual.pdf" target="_blank"><i class="ti-direction"></i> Manual de uso</a></li>

                    </ul>
                </li>
                <li class="dropdown">
				
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><img src="<?=base_url()?>assets/img/user.jpg" class="user-picture" alt=" Avatar"> <span><?= $usuario['nombre']." ". $usuario['apellido']?></span></a>
                    
					<ul class="dropdown-menu dropdown-menu-right logged-user-menu">
                        <li><a ><i class="ti-user"></i> <span><?= $usuario['usuario']?></span></a></li>

                        <li><a href="<?= base_url('auth/logout') ?>"><i class="ti-power-off"></i> <span>Logout</span></a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>

