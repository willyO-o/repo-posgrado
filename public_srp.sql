/*
 Navicat Premium Data Transfer

 Source Server         : postgres13
 Source Server Type    : PostgreSQL
 Source Server Version : 130001
 Source Host           : localhost:5432
 Source Catalog        : srp
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 130001
 File Encoding         : 65001

 Date: 21/03/2022 11:46:46
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
-- Sequence structure for autor_id_autor_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."autor_id_autor_seq";
CREATE SEQUENCE "public"."autor_id_autor_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 32767
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
  "uuid" varchar(50) COLLATE "pg_catalog"."default",
  "es_publico" int2
)
;

-- ----------------------------
-- Records of archivos
-- ----------------------------
INSERT INTO "public"."archivos" VALUES (9, 'DOCUMENTO', 0.57, 'PDF', '6067f77230ef5.pdf', '6067f77230ef5', NULL);
INSERT INTO "public"."archivos" VALUES (28, 'DOCUMENTO', 5.36, 'PDF', '60c1793caa6b1.pdf', '60c1793caa6b1', NULL);
INSERT INTO "public"."archivos" VALUES (29, 'DOCUMENTO', 4.15, 'PDF', '60c1879d6efb4.pdf', '60c1879d6efb4', NULL);
INSERT INTO "public"."archivos" VALUES (30, 'DOCUMENTO', 3.45, 'PDF', '60c18fd7b08a6.pdf', '60c18fd7b08a6', NULL);
INSERT INTO "public"."archivos" VALUES (31, 'DOCUMENTO', 6.02, 'PDF', '60c19047e2b1b.pdf', '60c19047e2b1b', NULL);
INSERT INTO "public"."archivos" VALUES (33, 'DOCUMENTO', 5.77, 'PDF', '60c21f8cce0ee.pdf', '60c21f8cce0ee', NULL);
INSERT INTO "public"."archivos" VALUES (34, 'DOCUMENTO', 5.64, 'PDF', '60c2201f640ef.pdf', '60c2201f640ef', NULL);
INSERT INTO "public"."archivos" VALUES (35, 'DOCUMENTO', 16.65, 'PDF', '60c2208510cce.pdf', '60c2208510cce', NULL);
INSERT INTO "public"."archivos" VALUES (36, 'DOCUMENTO', 7.84, 'PDF', '60c22310e0082.pdf', '60c22310e0082', NULL);
INSERT INTO "public"."archivos" VALUES (37, 'DOCUMENTO', 4.89, 'PDF', '60c224126500c.pdf', '60c224126500c', NULL);
INSERT INTO "public"."archivos" VALUES (38, 'DOCUMENTO', 7.61, 'PDF', '60c224ec6641d.pdf', '60c224ec6641d', NULL);
INSERT INTO "public"."archivos" VALUES (39, 'DOCUMENTO', 7.61, 'PDF', '60c22668c18ab.pdf', '60c22668c18ab', NULL);
INSERT INTO "public"."archivos" VALUES (40, 'DOCUMENTO', 5.55, 'PDF', '60c227321d831.pdf', '60c227321d831', NULL);
INSERT INTO "public"."archivos" VALUES (41, 'DOCUMENTO', 6.38, 'PDF', '60c229a711496.pdf', '60c229a711496', NULL);
INSERT INTO "public"."archivos" VALUES (42, 'DOCUMENTO', 4.57, 'PDF', '60c22a1e86079.pdf', '60c22a1e86079', NULL);
INSERT INTO "public"."archivos" VALUES (43, 'DOCUMENTO', 3.40, 'PDF', '60c22bfb3437a.pdf', '60c22bfb3437a', NULL);
INSERT INTO "public"."archivos" VALUES (44, 'DOCUMENTO', 6.22, 'PDF', '60c22c8909c38.pdf', '60c22c8909c38', NULL);
INSERT INTO "public"."archivos" VALUES (45, 'DOCUMENTO', 4.89, 'PDF', '60c22cd9510d0.pdf', '60c22cd9510d0', NULL);
INSERT INTO "public"."archivos" VALUES (46, 'DOCUMENTO', 11.88, 'PDF', '60c22d32e8b16.pdf', '60c22d32e8b16', NULL);
INSERT INTO "public"."archivos" VALUES (47, 'DOCUMENTO', 6.16, 'PDF', '60c22d7e77a71.pdf', '60c22d7e77a71', NULL);
INSERT INTO "public"."archivos" VALUES (48, 'DOCUMENTO', 7.04, 'PDF', '60c22dc2d9532.pdf', '60c22dc2d9532', NULL);
INSERT INTO "public"."archivos" VALUES (49, 'DOCUMENTO', 2.49, 'PDF', '60c22e0d71e4b.pdf', '60c22e0d71e4b', NULL);
INSERT INTO "public"."archivos" VALUES (50, 'DOCUMENTO', 2.86, 'PDF', '60c22ea06b52d.pdf', '60c22ea06b52d', NULL);
INSERT INTO "public"."archivos" VALUES (51, 'DOCUMENTO', 3.55, 'PDF', '60c22edd12a2a.pdf', '60c22edd12a2a', NULL);
INSERT INTO "public"."archivos" VALUES (52, 'DOCUMENTO', 4.50, 'PDF', '60c22f47754f7.pdf', '60c22f47754f7', NULL);
INSERT INTO "public"."archivos" VALUES (53, 'DOCUMENTO', 2.59, 'PDF', '60c22f9d73190.pdf', '60c22f9d73190', NULL);
INSERT INTO "public"."archivos" VALUES (54, 'DOCUMENTO', 6.71, 'PDF', '60c22fd8f2330.pdf', '60c22fd8f2330', NULL);
INSERT INTO "public"."archivos" VALUES (55, 'DOCUMENTO', 5.94, 'PDF', '60c23037ea890.pdf', '60c23037ea890', NULL);
INSERT INTO "public"."archivos" VALUES (57, 'DOCUMENTO', 4.02, 'PDF', '60dce62b4b5fa.pdf', '60dce62b4b5fa', NULL);

-- ----------------------------
-- Table structure for autores
-- ----------------------------
DROP TABLE IF EXISTS "public"."autores";
CREATE TABLE "public"."autores" (
  "id_autor" int2 NOT NULL DEFAULT nextval('autor_id_autor_seq'::regclass),
  "nombre_autor" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "paterno_autor" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "materno_autor" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of autores
-- ----------------------------

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
INSERT INTO "public"."categorias" VALUES (8, 'POSTDOCTORADO');

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
INSERT INTO "public"."especialidades" VALUES (29, 'ESPECIALIDAD 10');
INSERT INTO "public"."especialidades" VALUES (6, 'MAESTRÍA EN INVESTIGACIÓN CIENTÍFICA EDITADO
');

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
  "id_usuario" int4 NOT NULL,
  "nro_paginas" int4,
  "observaciones" varchar(255) COLLATE "pg_catalog"."default",
  "estado_documento" varchar(25) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of metadatos
-- ----------------------------
INSERT INTO "public"."metadatos" VALUES (35, 'ING. FRANZ WALTER NACHO QUISPE', '2021-06-10', 2021, 'En la actualidad las empresas públicas y privadas pretenden mejorar sus niveles de
eficiencia en el manejo de su información basándose en el control de compras, ventas e
inventario y con la ayuda de los medios tecnológicos, lograr la disminución de costos y la
excelencia operacional.
El presente proyecto es un Sistema Web apoyado en las técnicas y procesos de
control de Compra, Venta e Inventario de Medicamentos y Servicios Complementarios,
con lo cual se pretende mejorar la administración del “Hospital Capitán juan Uriona”.
Para el modelado del negocio o entender cómo se trabajaba se utilizó diagramas
BPM (Business Process Management), en el desarrollo del sistema se utilizaron la
metodología ágil AUP y la metodología web UWE.
Para la implementación se utilizó como gestor de base de datos MariaDB, además,
como lenguaje de programación se utilizó las tecnologías de: Php, con su framework
Laravel, HTML, CSS, con el Framework Bootstrap, JavaScript con VueJS.
La evaluación de la calidad del software se detalla cualitativamente la calidad
mediante la aplicación de métricas de calidad, tomando como factor de calidad el estándar
ISO 9126, también se aplicó el modelo Cocomo II, para hallar el costo del sistema. Al
finalizar el proyecto se vio que se lograron todos los objetivos planteados en el presente
documento.', 'ES', 'SISTEMA WEB DE COMPRA, VENTA E INVENTARIO DE
MEDICAMENTOS Y SERVICIOS COMPLEMENTARIOS', 2, 35, 17, 1, 'La Paz - El Alto', '', 1, NULL, NULL, 'registrado');
INSERT INTO "public"."metadatos" VALUES (38, 'LIC. JHANNET MONICA CALAMANI', '2020-11-10', 2021, 'here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don''t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn''t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 'ES', 'LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING ANA', 2, 39, 25, 1, 'La Paz - El Alto', '', 1, NULL, NULL, 'registrado');
INSERT INTO "public"."metadatos" VALUES (29, 'LIC. FRANZ GROVER FLORES CALLAPA EDITADO', '2021-03-10', 2018, 'La web ha evolucionado de forma rápida en diferentes aspectos, cabe mencionar
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
TRATAMIENTOS MÉDICOS PARA ÁREA DE IMAGENEOLOGIA', 1, 29, 17, 2, 'Cochabamba', ' ING. YULY RAMIREZ LIMACHI', 1, NULL, NULL, 'eliminado');
INSERT INTO "public"."metadatos" VALUES (39, 'LIC. JORGE LUIS ARUQUIPA CORONEL', '2021-03-10', 2020, 'El mundo de la información y la comunicación está viviendo, una época de cambios
acelerados que no tiene precedentes, misma que genera multitud de discusiones
sobre el futuro que nos espera y que está provocado en su mayor parte, el desarrollo
tecnológico. El desarrollo de la tecnología de la información afecta sin duda a las
funciones tradicionales de los centros bibliotecarios, que deben afrontar nuevos
retos en la sociedad de la información.
En el ámbito de las bibliotecas, el desarrollo tecnológico que ha tenido lugar desde
los años sesenta ha supuesto un cambio en el concepto tradicional de biblioteca. La
historia de las bibliotecas muestra como la tecnología disponible en cada época,
desde la pluma y la tinta, la máquina de escribir, hasta la microfotografía, el
ordenador y las redes telemáticas, influye decisivamente no solo en la forma en que
se lleva a cabo sus trabajos técnicos, sino en los servicios que puede ofrecer a sus
usuarios.
', 'ES', 'SISTEMA WEB INTEGRADO DE ADMINISTRACIÓN Y CONTROL DE
BIBLIOTECAS', 1, 40, 14, 2, 'La Paz - El Alto', ': LIC. FREDDY SALGUEIRO TRUJILLO', 1, NULL, NULL, 'eliminado');
INSERT INTO "public"."metadatos" VALUES (28, 'ING.  ESTANISLAO YAHUASI APAZA', '2021-03-10', 2020, 'En este proyecto se desarrolló el Sistema de información Web de Control
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
ADMINISTRATIVO', 1, 28, 22, 3, 'La Paz - El Alto', 'LIC. FREDDY SALGUEIRO TRUJILLO', 1, NULL, NULL, 'registrado');
INSERT INTO "public"."metadatos" VALUES (30, 'ING. GUILLEN PAREDES CALLISAYA ', '2021-04-10', 2020, 'Hoy en día los avances tecnológicos se van expandiendo más y más, aumentando su
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
proyecto.', 'ES', 'SISTEMA WEB DE INFORMACION ACADEMICA Y CHAT ONLINE', 2, 30, 23, 3, 'La Paz - El Alto', 'LIC. MARIA MAGDALENA AGUILAR GUANTO ', 1, NULL, NULL, 'registrado');
INSERT INTO "public"."metadatos" VALUES (37, 'ING. JAVIER CALLE GUTIéRREZ', '2020-09-10', 2018, 'El presente proyecto de Grado titulado “Portal Web para el Control de Almacenes y
Activos Fijos Caso: Laboratorios ESFASA” ha sido desarrollado para la institución
que me abrió las puertas y me apoyo, con el objetivo de automatizar los procesos y
mejorar los tiempos de respuesta hacia aquellos obstáculos que se presentan en la
cadena de fabricación de medicamentos.
Para el desarrollo del proyecto se utilizó la metodología Ágil Scrum, que propone un
modelo incremental, basado en interacciones y revisiones continuas. También se
utilizó en cada una de las iteraciones la metodología UWE, que se especializa en el
diseño de aplicaciones WEB.
Para la conclusión del desarrollo del portal web se utilizó una herramienta primordial
el lenguaje de programación PHP, y el gestor de datos MYSQL.
A fin de asegurar la calidad del software, se ha basado en el estándar ISO 9126,
donde indica que se puede medir la calidad del software dependiendo del tipo del
producto, en este caso por tratarse de un sistema web de registro y control se midió
la usabilidad, funcionalidad, mantenimiento y portabilidad.', 'ES', 'PORTAL WEB PARA EL CONTROL DE ALMACENES Y ACTIVOS
FIJOS', 2, 37, 21, 1, 'Cochabamba', '', 1, NULL, NULL, 'registrado');
INSERT INTO "public"."metadatos" VALUES (53, 'ING. EDDY LAURA RAMOS', '2021-06-10', 2015, 'En la actualidad el uso de robots se ha empleado en los distintos ámbitos de trabajo, por la
cual también surge la necesidad para el equipo de rescate con la ideología de poder evitar
accidentes laborales que podría llegar a ser un riesgo de vida para los rescatistas en la
trayectoria de su misión.
El presente trabajo de investigación tiene una finalidad de realizar un prototipo de robot
para el equipo de rescate que lograra coadyuvar en la exploración, detección de gas y
removimiento de escombros.
Por medio de la presente investigación se realizara el prototipo robótico con la aplicación
de diseños electromecánicos, herramientas como: software de programación arduino, app
inventor, componentes electrónicos, materiales de plástico, metal además de usar el método
científico y la metodología de diseño de sistemas robóticos.', 'ES', 'ROBOT DE EXPLORACIÓN, RECONOCIMIENTO Y AYUDA EN EL RESCATE
HUMANO', 1, 54, 13, 2, 'La Paz - El Alto', 'M. SC. MARISOL ARGUEDAS BALLADARES', 1, NULL, NULL, 'registrado');
INSERT INTO "public"."metadatos" VALUES (43, 'ING. LUCIA SONIA CARITA CHACOLLA', '2021-06-10', 2019, 'Toda institución, es este caso la Carrera Ingeniería de Sistemas en búsqueda de
reducir tiempo y agilizar procesos en las actividades diarias que se realiza opta por
tecnologías que muchas veces no son las adecuadas ya que son de uso general y
no especifico, así pues, los sistemas desarrollados a medida se han convertido
enpiezas fundamentales en toda institución.
El presente proyecto de grado denominado “Asistente virtual mediante el uso de la
tecnología Chatbot”, permite informar al usuario a través de la página de Facebook
que esta enlazado el Messenger, desde ahí el proceso de información para los
usuarios se emiten de manera rápida e inmediata para el beneficio del usuario, en
este caso están beneficiados los estudiantes y docentes como también las personas
externas, es decir aquellos que no están en carrera y de una forma interesada ellos
también podrán acceder a la información rápida e inmediata.
El presente proyecto se desarrolló e implemento el asistente virtual para que pueda
brindar información oportuna y efectiva al usuario, en cumpliendo el objetivo del
mismo.
Para el desarrollo del asistente virtual se aplicó la metodología Addie, para evaluar
la calidad se utilizó la ISO/IEC 9126, la estimación de costo del software se realizó
con COCOMO II basándose en puntos de función.
Finalmente, mediante el análisis de resultados se determina que el asistente virtual
se desarrolló lo cual cumple con los objetivos planteados.
Palabra Clave: Datos, Chatbot, información, dialogoflow. Addie, ISO/IEC9126,
cocomo II', 'ES', 'ASISTENTE VIRTUAL MEDIANTE EL USO DE LA TECNOLOGÍA
CHATBOT (LUCIA SYSTEM)', 1, 44, 22, 3, 'Cochabamba', 'ING. ELíAS CARLOS HIDALGO MAMANI', 1, NULL, NULL, 'registrado');
INSERT INTO "public"."metadatos" VALUES (42, 'ING. JUAN CARLOS CHOQUE MAMANI', '2021-06-10', 2021, 'El presente proyecto de grado pretende automatizar los procesos más importantes que
tiene la Caja Nacional de Salud Regional sección equipos electrónicos realizando el
ingreso, salida y bajas de equipos electrónicos ya que esos procesos son vital
importancia para la institución y es necesario controlar la información que se genera
día a día además de centralizar y gestionar la información de equipos, usuarios,
proveedores, centros, ingresos y salidas así para asegurar los niveles de existencia y
disponibilidad de equipos electrónicos en caso de que un funcionario de la caja lo
requiera para desempeñar mejor su labor hacia sus asegurados. El proyecto de grado
titulado “SISTEMA WEB DE GESTIÓN DE INVENTARIOS PARA ALMACENES
CASO: CAJA NACIONAL DE SALUD REGIONAL LA PAZ – SECCIÓN DE
EQUIPOS ELECTRÓNICOS” se ha desarrollado con el objetivo de optimizar los
procesos de gestión de información de equipos electrónicos asegurando la
disponibilidad de pedidos sin dejar que falte o exceda los niveles de existencia.
Para el desarrollo del proyecto se utilizó la metodología ágil de gestión de proyecto XP
y SCRUM, que propone un modelo de proceso incremental, basado en iteraciones y
revisiones continuas con el usuario. Lo cual se utilizó en cada una de las cinco
iteraciones, la metodología UWE, que se especializa en el diseño de las aplicaciones
WEB.
En conclusión del desarrollo del sistema WEB se utilizó como herramienta el
Framework LARAVEL, VUEJS, para el gestor de base de datos se usó MariaDB y con
la ayuda del servidor APACHE para la función correcta del sistema.', 'ES', ' GESTIÓN DE INVENTARIOS PARA
ALMACENES', 1, 43, 10, 3, 'La Paz - El Alto', 'LIC. MARIO TORREZ CUPITICONA', 1, NULL, NULL, 'registrado');
INSERT INTO "public"."metadatos" VALUES (41, 'LIC. JOSE LUIS RONDO MAMANI ', '2021-06-10', 2020, 'El presente proyecto de grado tiene como objetivo desarrollar un “Sistema Web de
Gestión de inventarios para productos congelados”, para mejorar dichos procesos, el
cual permitirá obtener información veraz y oportuna para la toma de decisiones.
La implementación del sistema permite generar mecanismos de control de información
al usuario que a través de un sistema Web le facilite gestionar información, el control y
rendimiento de la empresa. Para dicha empresa se utilizaran herramientas de
desarrollo orientadas más al software libre como: PHP, HTML 5, JQuery, Framework
Smarty, Framework JeasyUI, MySql y apache 2.
La empresa de elaboración de productos congelados “HELADOS TROPIC”, se creó el
año 1990 la cual es una marca que se expandió a varios lugares de La paz.
Se observó que no cuentan con recursos tecnológicos de desarrollo como bases de
datos, sistemas de información, manejo digital de procesos de entradas y salidas de
productos, debido a que todos los procesos de información se operan de forma
totalmente manual por este hecho se presentan problemas en el inventario en
crecimiento a nivel departamental, contando con varias distribuidoras.
Posterior a ello se desarrolló un Sistema Web de Gestión de inventarios de productos
congelados, en la empresa “HELADOS TROPIC”, para administrar eficientemente los
procesos de inventario
Desde que se popularizó el uso de las computadoras y su capacidad de
almacenamiento de información, su aplicación ha repercutido de manera importante en
la sociedad en general y en las empresas.
“Los sistemas de administración son un conjunto de elementos para dirigir una
organización o procesos, que está conformado por las tareas de planeación,
organización, comunicación. La empresa “HELADOS TROPIC” es una empresa que se
dedica a la elaboración de productos congelados (helados).', 'ES', 'GESTIÓN DE INVENTARIOS PARA
PRODUCTOS CONGELADOS', 1, 42, 23, 3, 'La Paz - El Alto', 'M. SC. JUAN MARCOS MIRANDA NINA', 1, NULL, NULL, 'actualizado');
INSERT INTO "public"."metadatos" VALUES (46, 'LIC. OSCAR ALFREDO BENITO MAMAN', '2021-06-10', 2018, 'La cultura y el turismo en la actualidad ha adquirido gran importancia, atractivos
turísticos como sitios naturales, monumentos históricos, museos, iglesias y
distintas manifestaciones culturales que forman parte del atractivo cultural y
turístico de una ciudad, por lo tanto, la difusión y la manera de acceder a la
información turística de estas es importante, no solo para su difusión sino para
su preservación y apreciación.
De esta manera se propone una forma distinta de conocer y realizar una visita
a actividades culturales, así también a lugares turísticos de la ciudad de El Alto,
en este caso las actividades culturales que existe dentro de la ciudad, lugares
turísticos, iglesias que forman parte del patrimonio histórico de la ciudad de El
Alto, haciendo uso de un Portal web y aprovechando que la mayor parte de la
población cuenta con dispositivos que tienen acceso a internet. Con la
implementación de un Portal Web se pretende que los visitantes y pobladores
puedan tener una mejor experiencia al realizar sus visitas, recorridos y puedan
tener al alcance la información sobre las actividades culturales, atractivos
turísticos y servicios que ofrece la ciudad de El Alto.
El presente proyecto tiene como finalidad el desarrollo de un portal web que
permita facilitar la obtención de información y ubicación de los principales
centros turísticos y servicios que ofrece la ciudad de El Alto, facilitando el
desplazamiento de los visitantes y pobladores; además de promover las
actividades culturales y atractivos turísticos. Para su implementación se utilizó
la metodología UWE, misma que nos guiará desde la recopilación de los
requerimientos, el diseño y su posterior desarrollo e implementación.', 'ES', 'PLAN ESTRATÉGICO PARA EL ACCESO RÁPIDO
A RECURSOS Y SERVICIOS QUE BRINDA LA CIUDAD DE EL ALTO', 3, 47, 20, 1, 'Cochabamba', 'LIC. FREDDY SALGUEIRO TRUJILLO', 1, NULL, NULL, 'registrado');
INSERT INTO "public"."metadatos" VALUES (44, 'ING. LUIS FELIPE CONDORI QUISPE', '2021-06-10', 2015, 'Los sistemas de información web se han convertido en una herramienta primordial
para toda institución sea pública o privada que brinde servicios en el área de negocios,
permitiendo almacenar, procesar y acceder a la información desde cualquier lugar, y
así mejorar y automatizar los procesos que se realizan en la institución.
El colegio de arquitectos de El Alto tiene como objetivo la representación y defensa
gremial, asesoramiento, el apoyo a sus asociados mediante planes, programas y
proyectos, que sirvan al desarrollo del arquitecto.
Actualmente el colegio de arquitectos de El Alto es una institución que realiza el
control y seguimiento de sus asociados de manera presencial, tanto en los registros
como el seguimiento de los aportes que realizan los asociados en la institución, el
siguiente proyecto propone aplicar la Tecnología a Internet para un mejor servicio y
acceso a la información de sus asociados.
El presente sistema consiste en el desarrollar un sistema de información web, para
el control de asociados, El flujo de información para la institución es primordial para la
toma de decisiones, permitirá desarrollar un “Sistema de información web de control y
seguimiento de asociados”, con el fin de obtener información oportuna y confiable', 'ES', 'INFORMACIÓN WEB DE CONTROL Y SEGUIMIENTO
DE ASOCIADOS', 2, 45, 20, 1, 'La Paz - El Alto', '', 1, NULL, NULL, 'registrado');
INSERT INTO "public"."metadatos" VALUES (51, 'LIC. JAIME MARCIAL HIDALGO MAMANI', '2021-06-10', 2018, 'La presente tesis de grado plantea un modelo de predicción del índice de
crecimiento de cáncer de cuello uterino en base a algoritmos genéticos que
permite pronosticar el crecimiento de esta enfermedad en cinco años, además
este instrumento es de gran beneficio para los especialistas y mujeres. Se
considera como objeto de estudio, el índice de crecimiento de cáncer de cuello
uterino en base a datos estadísticos facilitados por SEDES El Alto. El cáncer de
cuello uterino es una de las causas principales de muerte en mujeres de nuestro
país y el mundo, que puede afectar a todas las edades, donde el riesgo de sufrir
se incrementa con la edad.
El modelo de predicción muestra la cantidad de mujeres con cáncer de cuello
uterino, clasificados en grupos etarios y gestiones del 2015 al 2020, asimismo se
visibiliza los índices históricos, selección, cruce, mutación e índices
pronosticados en números binarios, que se interpretan por medio de porcentajes.
Por otro lado, la población inicial y los índices de crecimiento visibiliza
gráficamente el comportamiento del número de pacientes con cáncer de cuello
uterino en relación a los años.
Posteriormente se realiza la simulación del modelo de predicción a través de un
prototipo desarrollado en Java con base a algoritmos genéticos. Se considera los
datos históricos recolectados como muestras de comparación.
Los datos históricos obtenidos evalúan el modelo de predicción, llegando a
concluir: que los diagnósticos obtenidos tienen un grado de confiabilidad de un
95 % respecto a los resultados reales.
Palabras claves: Índice de crecimiento, modelo de predicción, algoritmos
genéticos, cáncer de cuello uterino.', 'ES', 'MODELO DE PREDICCIÓN APLICADO AL INDICE
CRECIMIENTO DE CANCER DE CUELLO UTERINO EN LA
CIUDAD DE EL ALTO EN BASE A ALGORITMOS GENÉTICOS', 1, 52, 6, 2, 'La Paz - El Alto', 'M. SC. ING. ENRIQUE FLORES BALTAZAR', 1, NULL, NULL, 'registrado');
INSERT INTO "public"."metadatos" VALUES (50, 'SALVADOR ARUQUIPA MAQUERA', '2021-06-10', 2021, 'El siguiente proyecto “SISTEMA PARA EL SEGUIMIENTO DE LA INFORMACIÓN
RESPECTO A EXÁMENES RADIOLÓGICOS” se basa en el que se basa en la
metodología del desarrollo web por ser un enfoque ágil orientada a aplicaciones
web usando el método UWE en el Servicio Radiológico “San Salvador”, que se
encuentra en la Ciudad de El Alto. La finalidad del proyecto es desarrollar un
Sistema que pueda contribuir el crecimiento institucional de manera eficiente,
oportuna y segura en las consultas solicitadas por clientes asociadas y clientes.
La primera parte hace mención a los antecedentes de la institución, el problema de
referencia y los objetivos planteados para el desarrollo del proyecto además de otras
características importantes que justifican el presente trabajo. Así también se
destaca en este capítulo la metodología utilizada y el método que es el UWE; cuyos
elementos son: Especificación de Requerimientos, Diseño del modelo Lógico -
Conceptual, Diseño del modelo de Navegación y el Diseño del modelo de
presentación.
En la segunda parte, se menciona la parte teórica siendo imprescindible para
denotar diferentes puntos de vista de autores, que puedan evidenciar definiciones
importantes que se mencionan en todo el proyecto.
En la tercera parte se aplica la metodología que se menciona con anterioridad
mediante el cual se desarrolla toda la parte aplicativa del proyecto para cumplir
satisfactoriamente con los objetivos planteados que aseguren la calidad y el
funcionamiento de la aplicación acorde a las necesidades de la institución.
En la cuarta parte se hace hincapié a la valoración de calidad planteando la ISO
9016, también se hace aplica la ISO 17799 y la ISO 27001 para tener un sistema
de calidad y seguridad. También se realiza en el análisis de costos COCOMO.
Finalmente se desarrolla el capítulo cinco que menciona si se concretaron los
objetivos planteados, y también se hace mención a algunas recomendaciones. ', 'ES', 'SEGUIMIENTO DE LA INFORMACIÓN
RESPECTO A EXÁMENES RADIOLÓGICOS', 4, 51, 14, 2, 'La Paz - El Alto', 'ING. MARISOL ARGUEDAS BALLADARES ', 1, NULL, NULL, 'registrado');
INSERT INTO "public"."metadatos" VALUES (48, 'ING. : ROLY ROLANDO QUISPE COARITE', '2021-06-10', 2017, 'El presente proyecto de grado plasma el desarrollo del sistema de información para
la empresa COMERBA1 de la ciudad de El Alto, el cual está basado en un enfoque
de procesos que se adaptan a su realidad y necesidades actuales, con el objetivo
de mejorar la operatividad del área de créditos. Por tanto, primero es necesario
modelar detalladamente los procesos de la empresa y sobre ello diseñar y construir
el sistema de información.
El desarrolló del sistema será de importancia en el manejo de la información, es así
que tiene como objetivo el diseñar un sistema que ayude al control y seguimiento
de los créditos y control de pagos, para una mejor administración y organización de
la empresa. El resultado de este proyecto, será lograr que la empresa tenga una
evolución en el ámbito de la información.
El análisis y diseño del sistema se desarrolló con la metodología UWE (UML - Based
Web enginnering), para evaluar la calidad del software se utilizó la ISO 9126 o
ISO/IEC 9126 que permiten conocer el nivel de la calidad del software a través de
un proceso de evaluación de acuerdo con las métricas o indicadores que presenta
el modelo de calidad, en seguridad de la información se recurrió a la norma ISO
27002 y finalmente para la estimación de costos de uso COSMIC y su modelo de
estimación post arquitectura el cual es más detallado y se aplica cuando la
arquitectura del proyecto está completamente definida.
El presente proyecto tiene por objeto desarrollar un sistema de información basado
en un enfoque orientado a procesos para optimizar la operativización de los créditos
que la empresa COMERBA brinda a los trabajadores de transporte público de la
ciudad de El Alto.
', 'ES', 'ENFOQUE DE
PROCESOS, PARA LA OPTIMIZACIÓN DE LA OTORGACIÓN
DE CRÉDITOS', 1, 49, 6, 2, 'La Paz - El Alto', 'ING. MARISOL ARGUEDAS BALLADARES', 1, NULL, NULL, 'registrado');
INSERT INTO "public"."metadatos" VALUES (54, 'ING. IVAN RODRIGO HIDALGO MAMANI', '2021-06-10', 2016, 'El presente trabajo de investigación se elabora a partir de la inquietud de obtener
conocimiento sobre el índice de deserción de los alumnos de la Universidad
Pública de El Alto. Para lo cual se recurrió a la unidad de Sistemas de Información
y Estadísticas (SIE). Son en base a los Datos proporcionados por esta unidad
dependiente de la Universidad Pública de El Alto, la aplicación de Minería de
Datos, como el desarrollo del prototipo PREDESMIN.
En la primera parte corresponde a la Introducción del trabajo de investigación; se
realiza el planteamiento del problema, se fija el objetivo general y los objetivos
específicos; se formuló la hipótesis y sus variables dependientes e
independientes; se hace una referencia a justificación en aspecto científica,
técnico, económica y social; finalmente se muestra las herramientas disponibles
para la Minería de Datos y se ven los límites y alcances del proyecto.
En la segunda parte se proporciona la información y definiciones que se hacen
necesarios para la comprensión del trabajo e investigación, como ser: los
conceptos básicos, la Minería de Datos, la ingeniería de software, el lenguaje de
modelado unificado, la deserción universitaria y las métricas de calidad.
En el capítulo tercero nos muestra el modelo de predicción en base a Minería de
Datos; el lenguaje, la arquitectura que son necesarias para su implementación y
las métricas de calidad usadas en el prototipo del presente trabajo de
investigación.
En el cuarto capítulo se ven las pruebas y resultados de la aplicación del prototipo
de predicción de índices de deserción, como la interpretación del mismo.
En el capítulo quinto se arriba a las conclusiones, de acuerdo a los objetivos
planteados en la primera parte y las recomendaciones para futuros trabajos.
', 'ES', 'MODELO DE PREDICCIÓN BASADO EN MINERÍA DE DATOS
SOBRE ÍNDICES DE DESERCIÓN DE ALUMNOS', 2, 55, 21, 1, 'La Paz - El Alto', '', 1, NULL, NULL, 'registrado');
INSERT INTO "public"."metadatos" VALUES (31, 'LIC. LUIS ABDON YANAPA CHAMBI', '2021-05-10', 2017, 'Las telecomunicaciones móviles en los últimos años son de mayor crecimiento y demanda
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
TELEFONÍA MÓVIL CON TRANSMISIÓN SATELITAL', 2, 31, 24, 1, 'La Paz - El Alto', ': M. SC. JUAN MARCOS MIRANDA NINA', 1, NULL, NULL, 'registrado');
INSERT INTO "public"."metadatos" VALUES (56, 'ING. MARICEL YARARI MAMANI', '2021-06-30', 2020, 'Más de mil millones de personas viven en todo el mundo con alguna forma de
discapacidad; de ellas, casi 200 millones experimentan dificultades considerables en
su funcionamiento.
En los años futuros, la discapacidad será un motivo de preocupación aún mayor, pues
su prevalencia está aumentando. Esto se debe a que la población está envejeciendo
y el riesgo de discapacidad es superior entre los adultos mayores y también al aumento
mundial de enfermedades crónicas tales como la diabetes, las enfermedades
cardiovasculares, el cáncer y los trastornos de la salud mental (Organización Mundial
de la Salud, 2018).
Alrededor del 15% de la población mundial vive con algún tipo de discapacidad, la más
afectada por esta condición es la población vulnerable ya que vive en ambientes poco
adecuados para llevar un estilo de vida en el cual pueda desarrollarse y ser más
independiente de sus actividades diarias (Organización Mundial de la Salud, 2018). ', 'ES', 'PROTOTIPO SILLA DE RUEDAS AUTOMATIZADA CON
MONITOREO CARDIACO Y LOCALIZACIÓN GPS BAJO LA
PLATAFORMA DE INTERNET DE LAS COSAS ', 1, 57, 6, 2, 'La Paz - El Alto', 'LIC. KATYA MARICELA PéREZ MARTíNEZ ', 11, NULL, NULL, 'registrado');
INSERT INTO "public"."metadatos" VALUES (49, 'ING. RUDY DAVID CASTILLO', '2021-06-10', 2020, 'El presente Proyecto de Grado consiste en implementar un SISTEMA DE
EDUCACION VIRTUAL (E-LEARNING) COMO HERRAMIENTA DE ENSEÑANAZA
CASO: TECHSBOL, surge del gran inconveniente que sufre TECHSBOL, que no
disponen de oportunidades para publicar y promover su producción intelectual y
capacitación en el mercado. El proyecto se centró en la venta del producto intelectual
(CURSOS), desde el registro de los cursos, hasta reportes de ingresos a TECHSBOL
de la venta de los mismos, administración de cursos, creación de carrito de compras,
utilización de la pasarela de pagos incluyéndose Paypal y autenticación para controlar
acceso al sistema. En la parte introductoria se demuestra los antecedentes y
actividades que realiza la institución, también se muestra el análisis de los problemas
y los objetivos propuestos. Para el desarrollo del presente proyecto se aplicó la
metodología de desarrollo ágil SCRUM apoyándose junto a la metodología KANBAN
y la metodología de desarrollo UWE para el modelado del diseño. El Sistema es un
producto de calidad de acuerdo a la métrica de calidad Web-Site QEM. Para
funcionamiento pleno del proyecto se toma como tarea final implementar la seguridad.
Finalmente se concluye que los objetivos planteados fueron alcanzados y que el
Sistema cumple con los requerimientos establecidos por el cliente.
Palabras clave: Metodología ágil Kanban, UWE, Web-Site QEM, Sistema Web, Linux.', 'ES', 'EDUCACION VIRTUAL (E-LEARNING) COMO
HERRAMIENTA DE ENSEÑANAZA EDITADO', 1, 50, 1, 3, 'La Paz - El Alto', 'LIC. ROBERTO DAVID MAYTA ALIGA', 1, NULL, NULL, 'registrado');
INSERT INTO "public"."metadatos" VALUES (52, 'ING. CELESTINO MIRANDA CONDORI', '2021-06-10', 2016, 'La presente tesis abordo el tema denominado Modelo matemático para pruebas
de contagio en entidades de intermediación financiera en Bolivia surge de una
investigación, debido a que en Bolivia, la supervisión financiera realizada por ASFI,
tiene falencia para conocer en que cuantía las entidades de intermediación financiera
son afectadas por efecto de contagio lo que genera que el sistema financiero no pueda
cuantificar los efectos adversos que pueda ocasionar en toma de decisiones en el
sistema financiero.
El objetivo principal de la presente tesis es construir el modelo matemático para
coadyuvar de forma eficiente en la cuantificación financiera de Bolivia. Se plantea una
metodología de modelo de vectores autorregresivo para ver el fenómeno del contagio
El desarrollo de la investigación de tesis se fundamenta teóricamente a partir de
estudios realizados sobre antecedentes, Siguiendo a Demirgüç-Kunt y Huizinga (1999,
2000) y estudios similares en esta área, la calidad de los activos se mide por NPLs
para el banco i en el tiempo t (NPLi, t) y está relacionada con una serie de factores
macroeconómicos y financieros, que afectan a los bancos:
Como resultados de la presente tesis se describen con base en el cálculo de las
ratios mostrados y descritos la estimación de los parámetros de varios modelos
econométricos. Finalmente se realizan simulaciones para crear escenarios de estrés y
alcanzar los resultados que se dan a conocer en las pruebas de tensión.
VIII
Los resultados del análisis de las variables o ratios calculados se expresan en la
descripción del comportamiento y evolución de cada una de ellas, expresando la
existencia de un quiebre estructural en el intervalo de tiempo comprendido entre 1997
al 2005 y el de 2006 al 2017.
El modelo de data panel expresa que el banco con mayor tasa en mora relativa
al banco unión es el Banco Mercantil Santa Cruz.', 'ES', 'MODELO MATEMÁTICO PARA PRUEBAS DE CONTAGIO EN ENTIDADES
DE INTERMEDIACIÓN FINANCIERA EN BOLIVIA|', 1, 53, 23, 3, 'La Paz - El Alto', 'PH.D. GIMMY NARDO SANJINéS TUDELA', 1, NULL, NULL, 'registrado');
INSERT INTO "public"."metadatos" VALUES (34, 'ING. ESTHER EVA CALLE LIMACHI', '2021-06-10', 2018, 'Actualmente con el avance de la ciencia y tecnología contar con un sistema
automatizado es una necesidad en cualquier entidad, por tal motivo se ha
propuesto el sistema de información para el control de inventario de ventas para
la empresa Victory Motors.
Los sistemas de información han sido una ayuda importante en el manejo de
información, es así que tomando el caso de la empresa Victory Motors, el cual
genera datos ofreciendo los productos/vehículos a los clientes realizando las ventas.
Es así que el presente proyecto tiene como objetivo desarrollar e implementar
sistema de información para el control de inventario de ventas para la empresa
“Victory Motors Bolivia”, que le permita administrar la información de manera
eficiente, agilizando y mejorando los procesos que se realizan en la empresa.
Para el análisis y diseño de la aplicación web se utilizó la metodología UWE UML
(UML-Based Web Engineering) para la construcción y el diseño. UWE es el proceso
de desarrollo para aplicaciones web, basada en las técnicas de UML.
Para evaluar la calidad del software se utilizó la norma ISO 9126, para la seguridad
a la empresa se utilizó la norma 27000 y para la seguridad de la información se
recurrió a la norma 27002 como finalmente para la estimación de costo de producto
se usó COCOMO basado en el peso o líneas de código.
La arquitectura MVC (Modelo, Vista, Controlador) ayuda a desarrollo a mantener
ordenado los aspectos visuales de a lógica de negocio, PHP es el lenguaje de
programación elegido para crear la aplicación del lado del servidor, Laravel 5.7 es
un framework que utiliza la arquitectura MVC y MySQL como gestor de Base de
Datos.', 'ES', 'SISTEMA DE INFORMACIÓN PARA EL CONTROL DE INVENTARIO
DE VENTAS', 2, 34, 10, 1, 'La Paz - El Alto', '', 1, NULL, NULL, 'registrado');
INSERT INTO "public"."metadatos" VALUES (36, 'ING. IVAN GROVER MONZON INTIPAMPA', '2020-09-10', 2016, 'La administración de personal, requerimientos y contratos enfrenta múltiples desafíos. El
principal desafío consiste en ayudar a las empresas, organizaciones, e instituciones a mejorar su
estabilidad y su utilidad. Es por eso que, el desarrollo de sistemas para el manejo de información
del personal viene jugando un papel importante y cada vez más preponderante para poder
competir y subsistir en el medio.
El presente proyecto tiene como finalidad apoyar en las tareas y actividades que realiza el
departamento de Recursos Humanos mediante la implementación del Sistema Web de
Administración, que permitirá la automatización como la asignación de horarios de trabajo,
asistencia, permisos, control de contratos y planillas de sueldos.
Para el desarrollo del proyecto se utilizó la metodología ágil SCRUM; planificando las tareas
y Sprints en base a las historias de usuario todo eso se dividió en determinadas tareas, calculando
el tiempo y la duración que tendrán para el Product Backlog.
Luego de recabar esta información se aplicó el modelado que nace de UML, pero dirigida
específicamente para sistemas web denominada modelado UWE que toma lo más relevante a la
hora de desarrollar los sistemas web, se implementó las fases con los modelos: Modelo
Navegacional, Modelo de Presentación y Modelo de Procesos.
Para la calidad de software se implementó WebSite QEM que inicialmente se basó en la ISO
9126 pero que actualmente fue reemplazada por la ISO 25000, en cuanto a seguridad se
implementó roles de usuario, restricciones, encriptado md5, cierre de sesiones automatizados y
actividad del usuario.
Y finalmente para determinar el costo y el beneficio que puede aportar el presente
proyecto se aplicó el modelo de costos COCOMO II que es el más competente y probado', 'ES', 'SISTEMA WEB DE ADMINISTRACIÓN DE RECURSOS HUMANOS
CASO: PASTELERÍA VICTORIA’S', 2, 36, 21, 1, 'La Paz - El Alto', 'ING. ROLANDO ALARCON CHOQUEHUANCA', 1, NULL, NULL, 'registrado');
INSERT INTO "public"."metadatos" VALUES (33, 'ING. DAVID GONZALO CUSI QUISPE ', '2021-05-10', 2019, 'Las actividades escolares fueron paralizadas desde marzo en Bolivia a causa del
coronavirus; pero algunas escuelas y universidades continuaron con el avance de
forma virtual. Debido a la cuarentena, varios estudiantes han optado por las clases
virtuales como alternativa a continuar con la gestión escolar, pero la realidad es que
la mayoría de las Unidades Educativas en Bolivia no están preparadas para pasar
clases virtuales ya que no se cuenta con aplicaciones web en la nube que gestionen
los procesos que se llevan a cabo en el desarrollo de contenidos.
Los retos para la unidad educativa son que el aprendizaje continúe para los
estudiantes y que la diferencia entre las clases presenciales y virtuales no dificulte
el proceso de aprendizaje y enseñanza. También es complicado pasar de un
sistema presencial a un sistema de aulas virtuales en cuanto a la planificación y
organización, ya que no se cuenta con sistemas capaces de organizar y centralizar
las clases virtuales para tener una transición más cómoda para los estudiantes,
padres de familia y profesores.
Los administrativos y docentes en esta nueva realidad tienen como tareas las de
capacitarse en el uso de herramientas digitales para reorganizar sus contenidos en
las materias escolares, planificar sus clases y llevar un control y seguimiento a sus
estudiantes. Eso implica que un profesor tiene muchas nuevas tareas que cumplir y
tratar que los estudiantes no se perjudiquen y que las clases virtuales sean
comprensibles.
Los estudiantes tienen que enfrentar las tareas de organizar su horarios y clases
virtuales de cada una de las materias en la escuela o colegio teniendo que contar
con acceso a un dispositivo móvil como el celular o de escritorio como el computador', 'ES', 'APLICACIÓN WEB PARA LA GESTIÓN DE PROCESOS
EDUCATIVOS', 4, 33, 6, 2, 'La Paz - El Alto', 'ING. SERGIO RAMIRO ROJAS SAIRE', 1, NULL, NULL, 'registrado');
INSERT INTO "public"."metadatos" VALUES (40, 'ING. JOSE JOSSUE HILARI VEGA', '2021-06-10', 2019, 'El presente proyecto titulado “Sistema de información para el control y seguimiento de
entrega de canastas estudiantiles en la ciudad de El Alto Caso: Dirección de Educación
– GAMEA”, surge en necesidad de la institución, para realizar la entrega de canastas
que se determinó por decreto municipal, en pedido de los padres de familia, para que
puedan cubrir el equivalente al desayuno escolar, que corresponde a la gestión escolar
de cada año y que por razones de bioseguridad se determine la clausura del año
escolar, quedando pendiente la repartición del mismo.
En respuesta a la solicitud de contar con un sistema que ayude en el procesamiento
de los datos que se recolectaron sobre los beneficiarios, se realizó una serie de
procesos que permitió realizar el desarrollo e implementación de dicho sistema, para
que ayude a la institución en la repartición y entrega de canastas y así también se
pueda contemplar resultados de carácter informativo y que respalden la labor realizada
una vez sistematizada y contabilizada en el término de la labor.
Para el desarrollo del sistema se aplicó el uso de herramientas que fueron utilizadas
en distintas fases, como el uso de la metodología UWE para el desarrollo de sistema
basado en la web, también se requirió de un gestor de base de datos, como mariadb,
que es una herramienta útil en el proceso simplificado de tratamiento de datos, además
del lenguaje de PHP y framework de desarrollo como es Laravel, además cabe
mencionar el uso de Ajax jquery para el manejo de información en la parte del frontEnd.
Así mismo el sistema está basado en estándares y parámetros ideales, como las
normas de calidad ISO 25000, parámetros de seguridad basados en la ISO 27000, y
la evaluación de costos COCOMO II, todo esto permitirá brindar al sistema un mejor
producto para la institución', 'ES', 'INFORMACIóN PARA EL CONTROL Y SEGUIMIENTO
DE ENTREGA DE CANASTAS ESTUDIANTILES EN LA CIUDAD DE
EL ALTO', 1, 41, 16, 2, 'La Paz - El Alto', 'ING. MARICEL YARARI MAMANI ', 1, NULL, NULL, 'registrado');
INSERT INTO "public"."metadatos" VALUES (47, 'ING. RAQUEL AIDEE SIRPATICO', '2021-06-10', 2018, 'La información se convirtió en un factor importante para el desarrollo de las
empresas, esto se debe al constante avance de la tecnología y a la cantidad de
información que estas manejan, lo cual implica la importancia del uso de
herramientas automáticas para la generación de informes y reportes en las
empresas, las cuales permitirán realizar un control eficiente en la administración y
de esta forma lograr que las organizaciones cumplan sus objetivos.
El presente proyecto “Sistema de información web para la gestión de ventas y
control de inventarios de equipos informáticos” fue desarrollado para la Empresa
Tendencias Tecnológicas S.R.L., con el objetivo de mejorar el proceso de registro
de productos y servicio técnico que la empresa ofrece a la clientela.
El proceso de registro de las ventas, servicios técnicos, clientes, proveedores,
productos e insumos se lo realiza en el sistema, además se podrá almacenar los
registros en una base de datos. La metodología utilizada para el desarrollo del
proyecto es UWE, que permite crear un software amigable para los usuarios.
Además, su proceso de desarrollo se basa en cuatro fases principales: fase de
captura de requisitos, fase de análisis y diseño de contenido, fase de modelo
navegación y fase de implementación.
Así mismo para determinar la calidad del sistema de información web desarrollado,
se hace el uso de la norma de calidad ISO 25010. Y al culminar el proyecto se
realizó el análisis de costos utilizando COCOMO y pruebas correspondientes para
garantizar la seguridad y calidad del sistema desarrollado. ', 'ES', 'TO DE GRADO
SISTEMA DE INFORMACIÓN WEB PARA LA GESTIÓN DE VENTAS Y
CONTROL DE INVENTARIOS DE EQUIPOS INFORMÁTICOS', 2, 48, 18, 1, 'Cochabamba', '', 1, NULL, NULL, 'registrado');
INSERT INTO "public"."metadatos" VALUES (45, 'LIC. NOLIA CHAMAIRO ESPEJO', '2021-06-10', 2019, 'En la actual modernidad, la informática juega un papel muy importante en el
desarrollo de las organizaciones, en el control de las operaciones administrativas y
financieras entre otras, la obtención de una información inmediata y eficaz dentro
de la estructura organizativa, esto determina el éxito y el alcance de los objetivos
con mayor eficacia dentro de la institución. (Flores, 2009)
El presente trabajo de investigación que lleva por título “Sistema de Información
Para el Control de Inventario de Almacén” para la (E.S.F.M.T.H.E.A.) “Escuela
Superior de Formación de Maestros Tecnológico Humanístico El Alto”, aborda
una de las más triviales temáticas referente al ámbito educativo y comercial, como
es el de llevar un control sobre sus archivos de inventario lo suficientemente eficaz,
implicando con éste la automatización de la gestión académica de la institución.
El objetivo primordial del presente proyecto es desarrollar un sistema que permita
efectuar un procesamiento de datos eficiente y oportuno para la toma de decisiones
en “Escuela Superior de Formación de Maestros Tecnológico Humanístico El Alto”,
actualizando los registros que se llevan en la hoja de cálculos Excel y de forma
manual y teniendo como propósito final el evitar pérdidas de información y así
almacenar los registros de movimiento del material respecto al stock existente en
almacenes.
La institución realiza su inventario Logístico según el inventario de anticipación
previsión, los inventarios varían en razón de su consumo de cada material que los
compone en almacén, lo que da lugar al movimiento de las existencias por ingresos
de nuevas cantidades y salida de estas a solicitud de los usuarios, produciendo la
rotación de los materiales y la generación de utilidades en función de dicha rotación.', 'ES', 'SISTEMA DE INFORMACIÓN PARA EL CONTROL
DE INVENTARIO EN ALMACÉN', 2, 46, 25, 1, 'La Paz - El Alto', '', 1, NULL, NULL, 'registrado');

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
INSERT INTO "public"."usuarios" VALUES (10, 'PRUEBA1234', '$2y$10$J.7dKU0/IEZkBpIZODp2ZusXWhfvPx6xzjiMFY30eRa7LvnE99tVC', 'PRUEBA', 'PRUEBA', 't', 2);
INSERT INTO "public"."usuarios" VALUES (11, 'ADMIN1234', '$2y$10$6aG68ShEIOg74wDhnwCPU.m7dkv09/806Ok7X.dHNB4Q2iE0PW8d2', 'ADMIN', 'ADMIN', 't', 1);
INSERT INTO "public"."usuarios" VALUES (12, 'PRUEBA', '$2y$10$myNmHG9K22Furgvm8ub82ekN0ZFuLbr6b2f3ItNRREPuo5efiYXOK', 'PRUEBA', 'PRUEBA', 'f', 2);

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
INSERT INTO "public"."ver_esp" VALUES (29, 1, 29);
INSERT INTO "public"."ver_esp" VALUES (6, 14, 6);

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
INSERT INTO "public"."versiones" VALUES (19, 'VERSION XXX');

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
    usuarios.usuario,
    metadatos.id_tipo
   FROM archivos
     JOIN metadatos USING (id_archivo)
     JOIN view_especialidades USING (id_ver_esp)
     JOIN tipos USING (id_tipo)
     JOIN categorias USING (id_categoria)
     JOIN usuarios USING (id_usuario);

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
SELECT setval('"public"."archivos_id_archivo_seq"', 60, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."autor_id_autor_seq"
OWNED BY "public"."autores"."id_autor";
SELECT setval('"public"."autor_id_autor_seq"', 3, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."categorias_id_categoria_seq"
OWNED BY "public"."categorias"."id_categoria";
SELECT setval('"public"."categorias_id_categoria_seq"', 11, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."especialidades_id_especialidad_seq"
OWNED BY "public"."especialidades"."id_especialidad";
SELECT setval('"public"."especialidades_id_especialidad_seq"', 32, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."metadatos_id_metadato_seq"
OWNED BY "public"."metadatos"."id_metadato";
SELECT setval('"public"."metadatos_id_metadato_seq"', 59, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."roles_id_rol_seq"
OWNED BY "public"."roles"."id_rol";
SELECT setval('"public"."roles_id_rol_seq"', 8, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tipos_id_tipo_seq"
OWNED BY "public"."tipos"."id_tipo";
SELECT setval('"public"."tipos_id_tipo_seq"', 11, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."usuarios_id_usuario_seq"
OWNED BY "public"."usuarios"."id_usuario";
SELECT setval('"public"."usuarios_id_usuario_seq"', 15, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."ver_esp_id_ver_esp_seq"
OWNED BY "public"."ver_esp"."id_ver_esp";
SELECT setval('"public"."ver_esp_id_ver_esp_seq"', 32, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."verisiones_id_version_seq"
OWNED BY "public"."versiones"."id_version";
SELECT setval('"public"."verisiones_id_version_seq"', 22, true);

-- ----------------------------
-- Primary Key structure for table archivos
-- ----------------------------
ALTER TABLE "public"."archivos" ADD CONSTRAINT "archivos_pkey" PRIMARY KEY ("id_archivo");

-- ----------------------------
-- Primary Key structure for table autores
-- ----------------------------
ALTER TABLE "public"."autores" ADD CONSTRAINT "autor_pkey" PRIMARY KEY ("id_autor");

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
