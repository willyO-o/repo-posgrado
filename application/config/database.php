<?php
defined('BASEPATH') OR exit('No direct script access allowed');


$active_group = 'default';
$query_builder = TRUE;

$db['default'] = array(
	'dsn'	=> 'pgsql:host=10.10.10.5;port=5432;dbname=psg_upea_rp',
	'hostname' => '10.10.10.5',
	'username' => 'us_adminrp',
	'password' => 'PsG@adminRP',
	'database' => 'psg_upea_rp',
	'dbdriver' => 'pdo',
	'dbprefix' => '',
	'pconnect' => FALSE,
	'db_debug' => (ENVIRONMENT !== 'production'),
	// 'db_debug' => (ENVIRONMENT !== 'development'),
	'cache_on' => FALSE,
	'cachedir' => '',
	'char_set' => 'utf8',
	'dbcollat' => 'utf8_general_ci',
	'swap_pre' => '',
	'encrypt' => FALSE,
	'compress' => FALSE,
	'stricton' => FALSE,
	'failover' => array(),
	'save_queries' => TRUE
);


$db['psg'] = array(
	'dsn'	=> 'pgsql:host=10.10.10.5;port=5432;dbname=psg_upea_ws',
	'hostname' => '10.10.10.5',
	'username' => 'us_adminws',
	'password' => 'PsG@adminWS',
	'database' => 'psg_upea_ws',
	'dbdriver' => 'pdo',
	'dbprefix' => 'psg_',
	'pconnect' => FALSE,
	#'db_debug' => (ENVIRONMENT !== 'production'),
	'db_debug' => (ENVIRONMENT !== 'development'),
	'cache_on' => FALSE,
	'cachedir' => '',
	'char_set' => 'utf8',
	'dbcollat' => 'utf8_general_ci',
	'swap_pre' => '',
	'encrypt' => FALSE,
	'compress' => FALSE,
	'stricton' => FALSE,
	'failover' => array(),
	'save_queries' => TRUE
);
