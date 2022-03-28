<?php
if (!defined('BASEPATH'))
   exit('No direct script access allowed');
class Error404 extends CI_Controller { 
   public function index(){
		
		$this->load->view('pagina404');
		
   }

	public function error404Iframe()
	{
		$data['is_iframe']=true;
		$this->load->view('pagina404');
		
	}
}
