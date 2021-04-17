<?php $this->load->view('layouts/publico/header_publico'); ?>

<?php $this->load->view('layouts/publico/nav_publico') ?>



<div class="events page_section  " style="min-height: 70vh;">
	<div class="container ">

		<?php
		$vista = isset($vista) ? $vista : 'index_publico';
		$this->load->view($vista)
		?>


	</div>
</div>


<?php $this->load->view('layouts/publico/footer_publico') ?>
