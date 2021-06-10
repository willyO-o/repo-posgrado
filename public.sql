/*
 Navicat Premium Data Transfer

 Source Server         : postgres13
 Source Server Type    : PostgreSQL
 Source Server Version : 130001
 Source Host           : localhost:5432
 Source Catalog        : posgrado_repositorio
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 130001
 File Encoding         : 65001

 Date: 10/06/2021 00:12:06
*/


-- ----------------------------
-- Sequence structure for archivos_id_archivo_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."archivos_id_archivo_seq";
CREATE SEQUENCE "public"."archivos_id_archivo_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for categorias_id_categoria_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."categorias_id_categoria_seq";
CREATE SEQUENCE "public"."categorias_id_categoria_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 32767
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for especialidades_id_especialidad_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."especialidades_id_especialidad_seq";
CREATE SEQUENCE "public"."especialidades_id_especialidad_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 32767
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for metadatos_id_metadato_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."metadatos_id_metadato_seq";
CREATE SEQUENCE "public"."metadatos_id_metadato_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for roles_id_rol_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."roles_id_rol_seq";
CREATE SEQUENCE "public"."roles_id_rol_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 32767
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for tipos_id_tipo_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tipos_id_tipo_seq";
CREATE SEQUENCE "public"."tipos_id_tipo_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 32767
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for usuarios_id_usuario_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."usuarios_id_usuario_seq";
CREATE SEQUENCE "public"."usuarios_id_usuario_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 32767
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for ver_esp_id_ver_esp_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."ver_esp_id_ver_esp_seq";
CREATE SEQUENCE "public"."ver_esp_id_ver_esp_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for verisiones_id_version_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."verisiones_id_version_seq";
CREATE SEQUENCE "public"."verisiones_id_version_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 32767
START 1
CACHE 1;

-- ----------------------------
-- Table structure for archivos
-- ----------------------------
DROP TABLE IF EXISTS "public"."archivos";
CREATE TABLE "public"."archivos" (
  "id_archivo" int4 NOT NULL DEFAULT nextval('archivos_id_archivo_seq'::regclass),
  "descripcion" varchar(100) COLLATE "pg_catalog"."default",
  "tamanio" numeric(5,2) NOT NULL,
  "formato" varchar(25) COLLATE "pg_catalog"."default" NOT NULL,
  "nombre" varchar(55) COLLATE "pg_catalog"."default" NOT NULL,
  "uuid" varchar(50) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of archivos
-- ----------------------------
INSERT INTO "public"."archivos" VALUES (9, 'DOCUMENTO', 0.57, 'PDF', '6067f77230ef5.pdf', '6067f77230ef5');
INSERT INTO "public"."archivos" VALUES (28, 'DOCUMENTO', 5.36, 'PDF', '60c1793caa6b1.pdf', '60c1793caa6b1');
INSERT INTO "public"."archivos" VALUES (29, 'DOCUMENTO', 4.15, 'PDF', '60c1879d6efb4.pdf', '60c1879d6efb4');
INSERT INTO "public"."archivos" VALUES (30, 'DOCUMENTO', 3.45, 'PDF', '60c18fd7b08a6.pdf', '60c18fd7b08a6');
INSERT INTO "public"."archivos" VALUES (31, 'DOCUMENTO', 6.02, 'PDF', '60c19047e2b1b.pdf', '60c19047e2b1b');

-- ----------------------------
-- Table structure for categorias
-- ----------------------------
DROP TABLE IF EXISTS "public"."categorias";
CREATE TABLE "public"."categorias" (
  "id_categoria" int2 NOT NULL DEFAULT nextval('categorias_id_categoria_seq'::regclass),
  "categoria" varchar(100) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of categorias
-- ----------------------------
INSERT INTO "public"."categorias" VALUES (1, 'DIPLOMADO ');
INSERT INTO "public"."categorias" VALUES (2, 'MAESTRIA');
INSERT INTO "public"."categorias" VALUES (3, 'DOCTORADO');

-- ----------------------------
-- Table structure for especialidades
-- ----------------------------
DROP TABLE IF EXISTS "public"."especialidades";
CREATE TABLE "public"."especialidades" (
  "id_especialidad" int2 NOT NULL DEFAULT nextval('especialidades_id_especialidad_seq'::regclass),
  "especialidad" varchar(1000) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of especialidades
-- ----------------------------
INSERT INTO "public"."especialidades" VALUES (10, 'DIPLOMADO EN EDUCACIÓN SUPERIOR BASADO EN EL MODELO ACADÉMICO POR COMPETENCIAS');
INSERT INTO "public"."especialidades" VALUES (6, 'MAESTRÍA EN INVESTIGACIÓN CIENTÍFICA');
INSERT INTO "public"."especialidades" VALUES (7, 'DIPLOMADO EN DOCENCIA EN EDUCACIÓN FÍSICA Y DEPORTES');
INSERT INTO "public"."especialidades" VALUES (1, 'DIPLOMADO EN DOCENCIA Y GESTIÓN DE AULA EN EDUCACIÓN SUPERIOR');
INSERT INTO "public"."especialidades" VALUES (13, 'MAESTRÍA EN ADMINISTRACIÓN Y GESTIÓN EDUCATIVA');
INSERT INTO "public"."especialidades" VALUES (2, 'MAESTRÍA EN DERECHO CONSTITUCIONAL Y DERECHO PROCESAL');
INSERT INTO "public"."especialidades" VALUES (14, 'MAESTRÍA EN CIENCIAS PENALES Y CRIMINOLOGIA');
INSERT INTO "public"."especialidades" VALUES (15, 'DIPLOMADO EN DERECHO PROCESAL PENAL MENCIÓN: LEY 1173');
INSERT INTO "public"."especialidades" VALUES (16, 'MAESTRÍA EN EDUCACIÓN SUPERIOR POR COMPETENCIAS ');
INSERT INTO "public"."especialidades" VALUES (17, 'DIPLOMADO EN DIRECCIÓN Y GESTIÓN DE CENTROS INFANTILES');
INSERT INTO "public"."especialidades" VALUES (18, 'DIPLOMADO EN INVESTIGACIÓN CIENTÍFICA APLICADA A LA ADMINISTRACIÓN');
INSERT INTO "public"."especialidades" VALUES (19, 'DIPLOMADO EN INVESTIGACIÓN CUALITATIVA ');
INSERT INTO "public"."especialidades" VALUES (20, 'DIPLOMADO EN DESARROLLO DEL ESPÍRITU EMPRENDEDOR');
INSERT INTO "public"."especialidades" VALUES (21, 'DIPLOMADO EN COMPETENCIAS DIGITALES Y HERRAMIENTAS DE LAS TIC S EN ADMINISTRACIÓN EMPRESARIAL');
INSERT INTO "public"."especialidades" VALUES (22, 'DOCTORADO EN CIENCIA Y TECNOLOGÍA');
INSERT INTO "public"."especialidades" VALUES (23, 'DOCTORADO EN CIENCIAS DE LA EDUCACIÓN E INVESTIGACIÓN');
INSERT INTO "public"."especialidades" VALUES (24, 'DIPLOMADO EN POLÍTICA FISCAL Y TRIBUTARIA');
INSERT INTO "public"."especialidades" VALUES (25, 'DIPLOMADO EN DERECHOS REALES, DERECHO NOTARIAL Y REGISTRAL');

-- ----------------------------
-- Table structure for meses
-- ----------------------------
DROP TABLE IF EXISTS "public"."meses";
CREATE TABLE "public"."meses" (
  "id_mes" varchar(2) COLLATE "pg_catalog"."default" NOT NULL,
  "mes" varchar(20) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of meses
-- ----------------------------
INSERT INTO "public"."meses" VALUES ('01', 'Enero');
INSERT INTO "public"."meses" VALUES ('02', 'Febrero');
INSERT INTO "public"."meses" VALUES ('03', 'Marzo');
INSERT INTO "public"."meses" VALUES ('04', 'Abril');
INSERT INTO "public"."meses" VALUES ('05', 'Mayo');
INSERT INTO "public"."meses" VALUES ('06', 'Junio');
INSERT INTO "public"."meses" VALUES ('07', 'Julio');
INSERT INTO "public"."meses" VALUES ('08', 'Agosto');
INSERT INTO "public"."meses" VALUES ('09', 'Septiembre');
INSERT INTO "public"."meses" VALUES ('10', 'Octubre');
INSERT INTO "public"."meses" VALUES ('11', 'Noviembre');
INSERT INTO "public"."meses" VALUES ('12', 'Diciembre');

-- ----------------------------
-- Table structure for metadatos
-- ----------------------------
DROP TABLE IF EXISTS "public"."metadatos";
CREATE TABLE "public"."metadatos" (
  "id_metadato" int4 NOT NULL DEFAULT nextval('metadatos_id_metadato_seq'::regclass),
  "autor" varchar(300) COLLATE "pg_catalog"."default" NOT NULL,
  "fecha_publicacion" date NOT NULL,
  "anio_creacion" numeric(4,0) NOT NULL,
  "resumen" text COLLATE "pg_catalog"."default" NOT NULL,
  "lenguaje" varchar(10) COLLATE "pg_catalog"."default",
  "titulo" varchar(1500) COLLATE "pg_catalog"."default" NOT NULL,
  "id_tipo" int2 NOT NULL,
  "id_archivo" int4 NOT NULL,
  "id_ver_esp" int4 NOT NULL,
  "id_categoria" int4 NOT NULL,
  "sede" varchar(40) COLLATE "pg_catalog"."default" NOT NULL,
  "tutor" varchar(300) COLLATE "pg_catalog"."default",
  "id_usuario" int4 NOT NULL
)
;

-- ----------------------------
-- Records of metadatos
-- ----------------------------
INSERT INTO "public"."metadatos" VALUES (28, 'ING.  ESTANISLAO YAHUASI APAZA', '2021-06-10', 2020, 'En este proyecto se desarrolló el Sistema de información Web de Control
Administrativo. Todo el sistema se desarrolla bajo el sistema de Software Libre
utilizando como entorno de desarrollo Phalcon y el lenguaje de programación de Php
para el Sistema Web.
El objetivo principal fue desarrollar un Sistema Web para la Administración del
Gimnasio Winner, para poder reducir el tiempo de registro e información, así mismo
poder brindar una mejor información de todos los servicios, productos, rutinas que
ofrece el gimnasio y dar una buena información a los clientes inscritos para poder
brindar una buena atención al cliente. También se habilitará un formulario de reservas
para que el cliente pueda realizar toda su duda que tenga sobres los servicios que
ofrece el Gimnasio y poder mandar sus consultas.
Empleamos la metodología UWE (UML-Based Web Engineering), porque es una
herramienta para modelar aplicaciones web y es utilizada en la ingeniería web.
Además, UWE, es especializada en la especificación de aplicaciones adaptativas que
hace hincapié en las características de personalización. UWE, se basa en el proceso
unificado (UML) pero adaptados al desarrollo web.', 'ES', 'SISTEMA DE INFORMACIÓN WEB DE CONTROL
ADMINISTRATIVO', 1, 28, 22, 3, 'La Paz - El Alto', 'LIC. FREDDY SALGUEIRO TRUJILLO', 1);
INSERT INTO "public"."metadatos" VALUES (29, 'LIC. FRANZ GROVER FLORES CALLAPA', '2021-06-10', 2018, 'La web ha evolucionado de forma rápida en diferentes aspectos, cabe mencionar
que los sistemas de información transforman las instituciones y cambia su estructura
por lo que permiten administrar, procesar datos en cualquier parte del mundo sin
importar su plataforma para el procesamiento.
El presente proyecto se desarrolló para el centro de imageneologia IMEDICA
“imagen y vida”, dependiente del grupo radiológico cima, en donde se identificó
problemas en distintas áreas como ser secretaría, laboratorio médico y laboratorio
técnico, por lo tanto se implementó el presente proyecto titulado “SISTEMA DE
REGISTRO Y CONTROL DE EXÁMENES Y TRATAMIENTOS MÉDICOS PARA
ÁREA DE IMAGENEOLOGIA” con el cual se permite optimizar el tiempo y
automatizar los procesos de la institución como ser: controlar las citas médicas,
gestionar los diagnósticos emitidos por los médicos, controlar los pagos de los
exámenes y verificar los estudios médicos mediante un visor DICOM 1y otros.
La metodología empleada en el presente proyecto es la metodología META, que
está dividida en Planteamiento, Acuerdos, Preparación, Análisis diseño,
Construcción, Implantación y Retroalimentación. La evaluación de calidad de
software se realizó con la norma ISO IEC 9126 que se basa en los parámetros de
usabilidad, funcionabilidad, confiabilidad, mantenibilidad y portabilidad, en cuanto a
seguridad de la información se recurrió a la norma ISO 227002 y finalmente para la
estimación del costo del producto se usó COCOMO 3
II con el modelo orgánico ya
que las líneas de código no superan a los 50 KLDC4
.
Para el desarrollo del software las herramientas que se usaron fueron: el lenguaje
de programación PHP, servidor de Base de Datos MariaDB, y en la parte del diseño
HTML, JavaScript, Boostrap, Ajax y Css.', 'ES', 'SISTEMA DE REGISTRO Y CONTROL DE EXÁMENES Y
TRATAMIENTOS MÉDICOS PARA ÁREA DE IMAGENEOLOGIA', 1, 29, 17, 2, 'Cochabamba', ' ING. YULY RAMIREZ LIMACHI', 1);
INSERT INTO "public"."metadatos" VALUES (30, 'ING. GUILLEN PAREDES CALLISAYA ', '2021-06-10', 2020, 'Hoy en día los avances tecnológicos se van expandiendo más y más, aumentando su
uso y generando una revolución muy importante en el mundo de la comunicación, a
causa de esto las instituciones han optado en la implementación de sistemas e
información vía web, con el objetivo de difundir y promocionar los servicios que
ofrecen.
Por esta razón que la Unidad Educativa Sergio Almaraz Paz vio la opción de contar
con un sistema de información web, para automatizar en la recopilación de información
y procesamiento de datos, de esta manera poder mejorar la Gestión Académica y
brindar una mejor atención.
Por esta razón el proyecto titulado “Sistema Web de Información Académica y Chat
online” caso: Unidad Educativa Sergio Almaraz Paz, cumplirá con las necesidades,
requerimientos y los objetivos deseados a realizar.
Para su desarrollo se aplicó la metodología de Ingeniería Web, que permite un
desarrollo de la aplicación en iteraciones, sucesivamente el sistema se desarrolló con
el lenguaje de programación PHP, con la ayuda del framework Bootstrap y con el
gestor de bases de datos MariaDB - MYSQL.
Además que, para el análisis de calidad se utilizó el modelo de Métricas de Calidad el
método de WebQEM
Finalmente se aplicó el método COSMIC, para la determinación estimada del costo del
proyecto.', 'ES', 'SISTEMA WEB DE INFORMACION ACADEMICA Y CHAT ONLINE', 2, 30, 23, 3, 'La Paz - El Alto', 'LIC. MARIA MAGDALENA AGUILAR GUANTO ', 1);
INSERT INTO "public"."metadatos" VALUES (31, 'LIC. LUIS ABDON YANAPA CHAMBI', '2021-06-10', 2017, 'Las telecomunicaciones móviles en los últimos años son de mayor crecimiento y demanda
dentro de los sistemas de comunicaciones a nivel mundial. En todo el mundo existe millones
de usuarios que demandan el uso de teléfonos inteligentes con acceso a internet para
comunicarse a través de la red.
En sistemas de transmisión vía satélite empezaron a poner en marcha en 1960 gracias a su
relación con el hombre y avance tecnológico para una comunicación rápida, accesible en el
mínino tiempo posible. Los precursores de esta ciencia fueron los satélites meteorológicos
gracias a los cuales se han predicho y evitado multitud de catástrofes naturales.
Gracias a la llegada del sistema de comunicaciones móviles a Bolivia, creció la demanda del
servicio en las áreas rurales de difícil acceso y se implementaron sistema de Micro RBS1
en
distintas localidades de nuestro territorio nacional utilizando el sistema VSAT2
dependientes
del uso de un satélite, prestando así el servicio de telefonía móvil integrando Bolivia. Las
empresas legalmente establecidas de telefonía móvil en Bolivia avanzaron considerablemente
en la cobertura en áreas urbanas y rurales con sistemas de transmisión MW3
y FO4
, cubriendo
las necesidades de la sociedad garantizando así el derecho fundamental a la comunicación del
ser humano.
En Bolivia en el año 2015 a 2016 , se implementó Micro Radio Bases en áreas rurales con
transmisión Satelital para brindar cobertura de voz y datos, en el departamento de La Paz fueron
implementados 162 estaciones, de los cuales la mayoría serán migradas a otras tecnologías de
transmisión por la gran demanda de servicio, el incremento continuo de usuarios UE y el avance
del sistema de comunicaciones en servicios de cobertura de tercera y cuarta generación siendo
que el sistema de telefonía móvil con transmisión satelital es cada vez más remplazado con
sistemas transmisión Microondas o Fibra Óptica alcanzando mayor ancho de banda y
throughput5
,pero existen estaciones que no es posible migrarlas a mencionados sistemas de ', 'ES', 'OPTIMIZACIÓN EN TRÁFICO DE VOZ Y DATOS CON
TECNOLOGÍA XIPLINK EN UN SISTEMA DE
TELEFONÍA MÓVIL CON TRANSMISIÓN SATELITAL', 2, 31, 24, 1, 'La Paz - El Alto', ': M. SC. JUAN MARCOS MIRANDA NINA', 1);

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS "public"."roles";
CREATE TABLE "public"."roles" (
  "id_rol" int2 NOT NULL DEFAULT nextval('roles_id_rol_seq'::regclass),
  "rol" varchar(20) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO "public"."roles" VALUES (1, 'Admin');
INSERT INTO "public"."roles" VALUES (2, 'publicador');

-- ----------------------------
-- Table structure for tipos
-- ----------------------------
DROP TABLE IF EXISTS "public"."tipos";
CREATE TABLE "public"."tipos" (
  "id_tipo" int2 NOT NULL DEFAULT nextval('tipos_id_tipo_seq'::regclass),
  "tipo" varchar(30) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of tipos
-- ----------------------------
INSERT INTO "public"."tipos" VALUES (1, 'Tesis');
INSERT INTO "public"."tipos" VALUES (2, 'Monografia');
INSERT INTO "public"."tipos" VALUES (3, 'Especialidad');
INSERT INTO "public"."tipos" VALUES (4, 'Tesina');

-- ----------------------------
-- Table structure for usuarios
-- ----------------------------
DROP TABLE IF EXISTS "public"."usuarios";
CREATE TABLE "public"."usuarios" (
  "id_usuario" int2 NOT NULL DEFAULT nextval('usuarios_id_usuario_seq'::regclass),
  "usuario" varchar(150) COLLATE "pg_catalog"."default" NOT NULL,
  "password" varchar(200) COLLATE "pg_catalog"."default" NOT NULL,
  "nombre" varchar(150) COLLATE "pg_catalog"."default" NOT NULL,
  "apellido" varchar(150) COLLATE "pg_catalog"."default" NOT NULL,
  "estado" bool NOT NULL,
  "id_rol" int4 NOT NULL
)
;

-- ----------------------------
-- Records of usuarios
-- ----------------------------
INSERT INTO "public"."usuarios" VALUES (1, 'CTWILLY1412', '$2y$10$Ord5It5.KxtUcS/WULHLS.1KTVC1rKYGVsra2oPapJldJhUXa3NH2', 'WILLY', 'CHANA', 't', 1);
INSERT INTO "public"."usuarios" VALUES (4, 'CHJORGE1111', '$2y$10$XP3V0q4FjXb49EyxxCkGwO4V0NfJdKcHeWALAxTb/KvnhpyXsM2cS', 'JORGE', 'CHOQUE', 't', 2);
INSERT INTO "public"."usuarios" VALUES (2, 'CQMARCOS1111', '$2y$10$197Z96hhwqVyLh7QmgM6p.HMQ9CCvOjH.RbmFTdTgTmfDGZ/HMs2q', 'MARCOS', 'CHOQUE', 't', 2);

-- ----------------------------
-- Table structure for ver_esp
-- ----------------------------
DROP TABLE IF EXISTS "public"."ver_esp";
CREATE TABLE "public"."ver_esp" (
  "id_ver_esp" int4 NOT NULL DEFAULT nextval('ver_esp_id_ver_esp_seq'::regclass),
  "id_version" int4 NOT NULL,
  "id_especialidad" int4 NOT NULL
)
;

-- ----------------------------
-- Records of ver_esp
-- ----------------------------
INSERT INTO "public"."ver_esp" VALUES (10, 13, 10);
INSERT INTO "public"."ver_esp" VALUES (6, 14, 6);
INSERT INTO "public"."ver_esp" VALUES (7, 2, 7);
INSERT INTO "public"."ver_esp" VALUES (1, 14, 1);
INSERT INTO "public"."ver_esp" VALUES (13, 4, 13);
INSERT INTO "public"."ver_esp" VALUES (2, 2, 2);
INSERT INTO "public"."ver_esp" VALUES (14, 2, 14);
INSERT INTO "public"."ver_esp" VALUES (15, 3, 15);
INSERT INTO "public"."ver_esp" VALUES (16, 3, 16);
INSERT INTO "public"."ver_esp" VALUES (17, 1, 17);
INSERT INTO "public"."ver_esp" VALUES (18, 2, 18);
INSERT INTO "public"."ver_esp" VALUES (19, 3, 19);
INSERT INTO "public"."ver_esp" VALUES (20, 2, 20);
INSERT INTO "public"."ver_esp" VALUES (21, 2, 21);
INSERT INTO "public"."ver_esp" VALUES (22, 1, 22);
INSERT INTO "public"."ver_esp" VALUES (23, 2, 23);
INSERT INTO "public"."ver_esp" VALUES (24, 2, 24);
INSERT INTO "public"."ver_esp" VALUES (25, 4, 25);

-- ----------------------------
-- Table structure for versiones
-- ----------------------------
DROP TABLE IF EXISTS "public"."versiones";
CREATE TABLE "public"."versiones" (
  "id_version" int2 NOT NULL DEFAULT nextval('verisiones_id_version_seq'::regclass),
  "version" varchar(25) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of versiones
-- ----------------------------
INSERT INTO "public"."versiones" VALUES (1, 'VERSIÓN I ');
INSERT INTO "public"."versiones" VALUES (2, 'VERSIÓN II');
INSERT INTO "public"."versiones" VALUES (3, 'VERSIÓN III');
INSERT INTO "public"."versiones" VALUES (4, 'VERSIÓN IV');
INSERT INTO "public"."versiones" VALUES (5, 'VERSION XXI');
INSERT INTO "public"."versiones" VALUES (14, 'VERSION X');
INSERT INTO "public"."versiones" VALUES (13, 'VERSION XI');
INSERT INTO "public"."versiones" VALUES (7, 'VERSION IX');
INSERT INTO "public"."versiones" VALUES (12, 'VERSION XXX');
INSERT INTO "public"."versiones" VALUES (11, 'VERSION XXV');
INSERT INTO "public"."versiones" VALUES (6, 'VERSION V');
INSERT INTO "public"."versiones" VALUES (8, 'VERSION VI');
INSERT INTO "public"."versiones" VALUES (9, 'VERSION VII');
INSERT INTO "public"."versiones" VALUES (10, 'VERSION VIII');

-- ----------------------------
-- View structure for view_archivo
-- ----------------------------
DROP VIEW IF EXISTS "public"."view_archivo";
CREATE VIEW "public"."view_archivo" AS  SELECT metadatos.id_categoria,
    metadatos.id_ver_esp,
    archivos.id_archivo,
    archivos.descripcion,
    archivos.tamanio,
    archivos.formato,
    archivos.nombre,
    archivos.uuid,
    metadatos.id_metadato,
    metadatos.autor,
    metadatos.fecha_publicacion,
    metadatos.anio_creacion,
    metadatos.resumen,
    metadatos.lenguaje,
    metadatos.titulo,
    metadatos.sede,
    metadatos.tutor,
    view_especialidades.id_version,
    view_especialidades.id_especialidad,
    view_especialidades.especialidad,
    view_especialidades.version,
    tipos.tipo,
    categorias.categoria,
    usuarios.id_usuario,
    usuarios.nombre AS nombre_usuario,
    usuarios.apellido,
    usuarios.usuario
   FROM archivos
     JOIN metadatos USING (id_archivo)
     JOIN view_especialidades USING (id_ver_esp)
     JOIN tipos USING (id_tipo)
     JOIN categorias USING (id_categoria)
     JOIN usuarios USING (id_usuario);

-- ----------------------------
-- View structure for view_especialidades
-- ----------------------------
DROP VIEW IF EXISTS "public"."view_especialidades";
CREATE VIEW "public"."view_especialidades" AS  SELECT ver_esp.id_version,
    ver_esp.id_especialidad,
    especialidades.especialidad,
    ver_esp.id_ver_esp,
    versiones.version
   FROM especialidades
     JOIN ver_esp USING (id_especialidad)
     JOIN versiones USING (id_version);

-- ----------------------------
-- View structure for view_archivos
-- ----------------------------
DROP VIEW IF EXISTS "public"."view_archivos";
CREATE VIEW "public"."view_archivos" AS  SELECT metadatos.id_categoria,
    metadatos.id_tipo,
    metadatos.id_ver_esp,
    archivos.id_archivo,
    archivos.descripcion,
    archivos.tamanio,
    archivos.formato,
    archivos.nombre,
    archivos.uuid,
    metadatos.id_metadato,
    metadatos.autor,
    metadatos.fecha_publicacion,
    metadatos.anio_creacion,
    metadatos.resumen,
    metadatos.lenguaje,
    metadatos.titulo,
    metadatos.sede,
    metadatos.tutor,
    view_especialidades.id_version,
    view_especialidades.id_especialidad,
    view_especialidades.especialidad,
    view_especialidades.version,
    tipos.tipo,
    categorias.categoria
   FROM archivos
     JOIN metadatos USING (id_archivo)
     JOIN view_especialidades USING (id_ver_esp)
     JOIN tipos USING (id_tipo)
     JOIN categorias USING (id_categoria);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."archivos_id_archivo_seq"
OWNED BY "public"."archivos"."id_archivo";
SELECT setval('"public"."archivos_id_archivo_seq"', 32, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."categorias_id_categoria_seq"
OWNED BY "public"."categorias"."id_categoria";
SELECT setval('"public"."categorias_id_categoria_seq"', 6, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."especialidades_id_especialidad_seq"
OWNED BY "public"."especialidades"."id_especialidad";
SELECT setval('"public"."especialidades_id_especialidad_seq"', 26, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."metadatos_id_metadato_seq"
OWNED BY "public"."metadatos"."id_metadato";
SELECT setval('"public"."metadatos_id_metadato_seq"', 32, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."roles_id_rol_seq"
OWNED BY "public"."roles"."id_rol";
SELECT setval('"public"."roles_id_rol_seq"', 4, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tipos_id_tipo_seq"
OWNED BY "public"."tipos"."id_tipo";
SELECT setval('"public"."tipos_id_tipo_seq"', 7, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."usuarios_id_usuario_seq"
OWNED BY "public"."usuarios"."id_usuario";
SELECT setval('"public"."usuarios_id_usuario_seq"', 8, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."ver_esp_id_ver_esp_seq"
OWNED BY "public"."ver_esp"."id_ver_esp";
SELECT setval('"public"."ver_esp_id_ver_esp_seq"', 26, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."verisiones_id_version_seq"
OWNED BY "public"."versiones"."id_version";
SELECT setval('"public"."verisiones_id_version_seq"', 17, true);

-- ----------------------------
-- Primary Key structure for table archivos
-- ----------------------------
ALTER TABLE "public"."archivos" ADD CONSTRAINT "archivos_pkey" PRIMARY KEY ("id_archivo");

-- ----------------------------
-- Primary Key structure for table categorias
-- ----------------------------
ALTER TABLE "public"."categorias" ADD CONSTRAINT "categorias_pkey" PRIMARY KEY ("id_categoria");

-- ----------------------------
-- Primary Key structure for table especialidades
-- ----------------------------
ALTER TABLE "public"."especialidades" ADD CONSTRAINT "especialidades_pkey" PRIMARY KEY ("id_especialidad");

-- ----------------------------
-- Primary Key structure for table meses
-- ----------------------------
ALTER TABLE "public"."meses" ADD CONSTRAINT "meses_pkey" PRIMARY KEY ("id_mes");

-- ----------------------------
-- Primary Key structure for table metadatos
-- ----------------------------
ALTER TABLE "public"."metadatos" ADD CONSTRAINT "metadatos_pkey" PRIMARY KEY ("id_metadato");

-- ----------------------------
-- Primary Key structure for table roles
-- ----------------------------
ALTER TABLE "public"."roles" ADD CONSTRAINT "roles_pkey" PRIMARY KEY ("id_rol");

-- ----------------------------
-- Primary Key structure for table tipos
-- ----------------------------
ALTER TABLE "public"."tipos" ADD CONSTRAINT "tipos_pkey" PRIMARY KEY ("id_tipo");

-- ----------------------------
-- Primary Key structure for table usuarios
-- ----------------------------
ALTER TABLE "public"."usuarios" ADD CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id_usuario");

-- ----------------------------
-- Primary Key structure for table ver_esp
-- ----------------------------
ALTER TABLE "public"."ver_esp" ADD CONSTRAINT "ver_esp_pkey" PRIMARY KEY ("id_ver_esp");

-- ----------------------------
-- Primary Key structure for table versiones
-- ----------------------------
ALTER TABLE "public"."versiones" ADD CONSTRAINT "verisiones_pkey" PRIMARY KEY ("id_version");

-- ----------------------------
-- Foreign Keys structure for table metadatos
-- ----------------------------
ALTER TABLE "public"."metadatos" ADD CONSTRAINT "metadatos_id_archivo_fkey" FOREIGN KEY ("id_archivo") REFERENCES "public"."archivos" ("id_archivo") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."metadatos" ADD CONSTRAINT "metadatos_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "public"."categorias" ("id_categoria") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."metadatos" ADD CONSTRAINT "metadatos_id_tipo_fkey" FOREIGN KEY ("id_tipo") REFERENCES "public"."tipos" ("id_tipo") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."metadatos" ADD CONSTRAINT "metadatos_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "public"."usuarios" ("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."metadatos" ADD CONSTRAINT "metadatos_id_ver_esp_fkey" FOREIGN KEY ("id_ver_esp") REFERENCES "public"."ver_esp" ("id_ver_esp") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table usuarios
-- ----------------------------
ALTER TABLE "public"."usuarios" ADD CONSTRAINT "usuarios_id_rol_fkey" FOREIGN KEY ("id_rol") REFERENCES "public"."roles" ("id_rol") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table ver_esp
-- ----------------------------
ALTER TABLE "public"."ver_esp" ADD CONSTRAINT "ver_esp_id_especialidad_fkey" FOREIGN KEY ("id_especialidad") REFERENCES "public"."especialidades" ("id_especialidad") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."ver_esp" ADD CONSTRAINT "ver_esp_id_version_fkey" FOREIGN KEY ("id_version") REFERENCES "public"."versiones" ("id_version") ON DELETE NO ACTION ON UPDATE NO ACTION;
