<?php $separador = ""; ?>
<div id="applicacion">
	<div id="sidebar-nav" class="sidebar ">
		<nav>
			<ul class="nav" id="sidebar-nav-menu">

				<?php foreach ($permisos as $p) : ?>
					<?php if($separador != $p->separador): ?>
						<li class="menu-group"><?php echo $p->separador ?></li>
						<?php $separador = $p->separador; ?>
					<?php endif ?>

				<li>
					<router-link to="<?= $p->ruta ?>"><i class="ti-home"></i> <span class="title"><?= $p->permiso ?></span></router-link>
				</li>
				<?php endforeach ?>
			</ul>
		</nav>
	</div>
