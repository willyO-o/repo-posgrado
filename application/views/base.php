<?php $this->load->view('layouts/header'); ?>
<!-- NAVBAR -->
<?php $this->load->view('layouts/nav'); ?>
<!-- END NAVBAR -->

<!-- LEFT SIDEBAR -->
<?php $this->load->view('layouts/aside'); ?>
<!-- END LEFT SIDEBAR -->

<!-- MAIN -->
<div class="main">

  <!-- MAIN CONTENT -->
  <div class="main-content">

    <div class="content-heading">
      <div class="heading-left">
        <h1 class="page-title">Blank Page</h1>
        <p class="page-subtitle">Create your new page based on this starter page.</p>
      </div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#"><i class="fa fa-home"></i> Home</a></li>
          <li class="breadcrumb-item"><a href="#">Parent</a></li>
          <li class="breadcrumb-item active">Current</li>
        </ol>
      </nav>
    </div>




    <div class="container-fluid">
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
  <?php $this->load->view('layouts/sidebar'); ?>
  <!-- END RIGHT SIDEBAR -->

</div>
<!-- END MAIN -->

<?php $this->load->view('layouts/footer'); ?>