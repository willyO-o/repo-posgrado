<?php $this->load->view('layouts/admin/header'); ?>
<!-- NAVBAR -->
<?php $this->load->view('layouts/admin/nav'); ?>
<!-- END NAVBAR -->

<!-- LEFT SIDEBAR -->
<?php $this->load->view('layouts/admin/aside'); ?>
<!-- END LEFT SIDEBAR -->

<!-- MAIN -->
<div class="main">

  <!-- MAIN CONTENT -->
  <div class="main-content">

    <div class="content-heading">
      <div class="heading-left">
        <h1 class="page-title">Administracion</h1>
        <p class="page-subtitle">Bienvenido </p>
      </div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
						<li>
                <router-link to="/"  class="breadcrumb-item">
								<i class="fa fa-home"></i> <span class="title">Inicio</span>
								</router-link>
            </li>
  
        </ol>
      </nav>
    </div>




    <div class="container-fluid pb-5 mb-5">
      <!-- your content goes here -->

      <?php
      if (isset($vista)) {
        $this->load->view($vista);
      } else {
        $this->load->view('index.php');
      }

      ?>

    </div>




  </div>
  <!-- END MAIN CONTENT -->

  <!-- RIGHT SIDEBAR -->
  <?php $this->load->view('layouts/admin/sidebar'); ?>
  <!-- END RIGHT SIDEBAR -->

</div>
<!-- END MAIN -->

<?php $this->load->view('layouts/admin/footer'); ?>
