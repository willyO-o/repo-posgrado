<?php
defined('BASEPATH') OR exit('No direct script access allowed');


$active_group = 'default';
$query_builder = TRUE;

$db['default'] = array(
	'dsn'	=> 'pgsql:host=localhost;port=5432;dbname=psg_upea_rp',
	'hostname' => 'localhost',
	'username' => 'postgres',
	'password' => 'root',
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
	'dsn'	=> 'pgsql:host=localhost;port=5432;dbname=proposgrado_d',
	'hostname' => 'localhost',
	'username' => 'postgres',
	'password' => 'root',
	'database' => 'proposgrado_d',
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
