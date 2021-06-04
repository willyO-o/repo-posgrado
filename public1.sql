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

 Date: 04/06/2021 00:08:44
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
INSERT INTO "public"."archivos" VALUES (1, 'DOCUMENTO', 11.99, 'PDF', '6062882cee16b.pdf', '6062882cee16b');
INSERT INTO "public"."archivos" VALUES (8, 'DOCUMENTO', 2.51, 'PDF', '6067edbb0639b.pdf', '6067edbb0639b');
INSERT INTO "public"."archivos" VALUES (9, 'DOCUMENTO', 0.57, 'PDF', '6067f77230ef5.pdf', '6067f77230ef5');
INSERT INTO "public"."archivos" VALUES (10, 'DOCUMENTO', 0.22, 'PDF', '6067fc0a60cef.pdf', '6067fc0a60cef');
INSERT INTO "public"."archivos" VALUES (11, 'DOCUMENTO', 0.66, 'PDF', '6067fc2e2d06d.pdf', '6067fc2e2d06d');
INSERT INTO "public"."archivos" VALUES (12, 'DOCUMENTO', 16.60, 'PDF', '6067fd186cb68.pdf', '6067fd186cb68');
INSERT INTO "public"."archivos" VALUES (13, 'DOCUMENTO', 0.71, 'PDF', '6078dedab0e33.pdf', '6078dedab0e33');
INSERT INTO "public"."archivos" VALUES (14, 'DOCUMENTO', 0.04, 'PDF', '6078dff94f5c8.pdf', '6078dff94f5c8');
INSERT INTO "public"."archivos" VALUES (15, 'DOCUMENTO', 0.04, 'PDF', '6078e0c19c0f4.pdf', '6078e0c19c0f4');
INSERT INTO "public"."archivos" VALUES (16, 'DOCUMENTO', 0.04, 'PDF', '6078e16088927.pdf', '6078e16088927');
INSERT INTO "public"."archivos" VALUES (18, 'DOCUMENTO', 0.04, 'PDF', '6078e4b4d0031.pdf', '6078e4b4d0031');
INSERT INTO "public"."archivos" VALUES (20, 'DOCUMENTO', 0.26, 'PDF', '6078e66b19b16.pdf', '6078e66b19b16');
INSERT INTO "public"."archivos" VALUES (21, 'DOCUMENTO', 0.04, 'PDF', '6078f58a917d6.pdf', '6078f58a917d6');
INSERT INTO "public"."archivos" VALUES (22, 'DOCUMENTO', 0.04, 'PDF', '607f8a0e6f5cd.pdf', '607f8a0e6f5cd');
INSERT INTO "public"."archivos" VALUES (23, 'DOCUMENTO', 0.57, 'PDF', '60aac028ebdd9.pdf', '60aac028ebdd9');
INSERT INTO "public"."archivos" VALUES (24, 'DOCUMENTO', 0.57, 'PDF', '60aac0a518fde.pdf', '60aac0a518fde');
INSERT INTO "public"."archivos" VALUES (25, 'DOCUMENTO', 1.72, 'PDF', '60aac27ddded3.pdf', '60aac27ddded3');

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
INSERT INTO "public"."especialidades" VALUES (1, 'MAESTRÍA EN INTERPRETACIÓN Y ARGUMENTACIÓN JURÍDICA GG');
INSERT INTO "public"."especialidades" VALUES (7, 'WWWWWW');
INSERT INTO "public"."especialidades" VALUES (2, 'DIPLOMADO EN DERECHO CONSTITUCIONAL Y PROCESAL CONSTITUCIONAL');
INSERT INTO "public"."especialidades" VALUES (6, 'ASDASD');
INSERT INTO "public"."especialidades" VALUES (10, 'MAESTRIA 1');

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
INSERT INTO "public"."metadatos" VALUES (13, 'COMO EDTA QUE HACED', '2021-04-16', 2012, 'Ducimus distinctio ad quasi obcaecati natus alias harum expedita quaerat debitis iste quae, ut perspiciatis corrupti voluptate omnis autem doloribus officiis consequatur commodi minus necessitatibus quos! Velit magnam officia eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.', 'ES', 'LABO5', 1, 13, 1, 1, 'La Paz - El Alto', 'WWW', 1);
INSERT INTO "public"."metadatos" VALUES (20, 'KKKK', '2021-04-16', 2010, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.', 'ES', 'HHHHHHHHHHHHHHHHHH', 2, 20, 2, 1, 'La Paz - El Alto', '', 1);
INSERT INTO "public"."metadatos" VALUES (18, '123123', '2021-04-16', 2009, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi commodi laboriosam fugit doloribus illum facilis enim quaerat cum, aspernatur minus, quod nemo. Libero animi optio accusamus eum corrupti quibusdam laudantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.', 'ES', '112231232222', 2, 18, 2, 1, 'La Paz - El Alto', '123123', 1);
INSERT INTO "public"."metadatos" VALUES (16, '2123123', '2021-04-16', 2007, 'ssssqqqqqq1111Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.', 'ES', 'ESTE SE MODIFICO', 2, 16, 1, 1, 'La Paz - El Alto', '123123', 1);
INSERT INTO "public"."metadatos" VALUES (11, 'DDDD', '2021-04-03', 2016, 'Soluta sit aspernatur illo sed excepturi doloribus, exercitationem, provident laboriosam deleniti error, itaque nulla in eum laudantium eius ducimus nihil amet distinctio omnis recusandae repellat quidem facere consectetur. Praesentium, hic.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.', 'ES', 'JSJDVDDASSDASDASD', 2, 11, 2, 2, 'La Paz - El Alto', 'XDXAASDASD', 1);
INSERT INTO "public"."metadatos" VALUES (24, 'WILLY MARCOS CHANA TITO', '2021-05-23', 2012, 'v#define EA 10
#define I1 9
#define I2 8
void setup()
{
pinMode(EA, OUTPUT);
pinMode(I1, OUTPUT);
pinMode(I2, OUTPUT);
}
void loop()
{
//Establecemos la velocidad a
200
analogWrite(EA, 200);
//Hacia delante
digitalWrite(I1, HIGH);
digitalWrite(I2, LOW);
delay(2000);
//Y para atras
digitalWrite(I1, LOW);
digitalWrite(I2, HIGH);', 'ES', 'CONTROL DE MOTORES CON L298N', 1, 24, 1, 2, 'La Paz - El Alto', 'ING. ELIAS ALI ALVAREZ', 1);
INSERT INTO "public"."metadatos" VALUES (15, '123123', '2021-04-16', 2010, 'Nihil id quo, ipsam repellat blanditiis sequi? Ad, cumque repellendus. Nostrum incidunt quasi eligendi cupiditate! Quidem, temporibus quo nisi dolorem facilis at quae, ea suscipit dolor sapiente saepe quos explicabo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.', 'ES', '123123', 2, 15, 2, 2, 'La Paz - El Alto', '', 1);
INSERT INTO "public"."metadatos" VALUES (22, 'WILLY CHANA', '2021-04-21', 2018, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda. Lorem ipsum dolor sit amet consectetur
adipisicing elit. Eligendi commodi laboriosam fugit doloribus illum facilis enim quaerat cum, aspernatur minus, quod nemo. Libero animi optio accusamus eum corrupti quibusdam laudantium. Ducimus distinctio ad quasi obcaecati natus alias harum expedita
quaerat debitis iste quae, ut perspiciatis corrupti voluptate omnis autem doloribus officiis consequatur commodi minus necessitatibus quos! Velit magnam officia eius. Nihil id quo, ipsam repellat blanditiis sequi? Ad, cumque repellendus. Nostrum incidunt
quasi eligendi cupiditate! Quidem, temporibus quo nisi dolorem facilis at quae, ea suscipit dolor sapiente saepe quos explicabo? Quas dolorum adipisci veritatis blanditiis nulla explicabo nam nisi totam error, laboriosam maxime sint velit minima suscipit
similique ducimus ullam nihil repudiandae reprehenderit magnam voluptatem necessitatibus dicta aliquam! Minima, quas! Soluta sit aspernatur illo sed excepturi doloribus, exercitationem, provident laboriosam deleniti error, itaque nulla in eum laudantium
eius ducimus nihil amet distinctio omnis recusandae repellat quidem facere consectetur. Praesentium, hic. Impedit, accusamus praesentium distinctio quia reiciendis illo, facere odio inventore ullam, repellendus deleniti nulla cupiditate sapiente optio?
Magni consectetur aspernatur fugiat ipsa atque dolore nam aliquid distinctio, vero a optio. Delectus atque qui, eligendi, officia veritatis repellat illo totam consectetur voluptatem molestiae, optio architecto deleniti excepturi dolores aliquid. Fugiat
maiores iure tempora vero explicabo aliquam non necessitatibus molestiae ex expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus
quibusdam velit facere quod laboriosam assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi commodi laboriosam fugit doloribus illum facilis enim quaerat cum, aspernatur minus, quod nemo. Libero animi optio accusamus eum corrupti', 'ES', 'MI ARCHIVO', 4, 22, 6, 2, 'La Paz - El Alto', '', 1);
INSERT INTO "public"."metadatos" VALUES (23, 'WILLY MARCOS CHANA TITO', '2021-05-23', 2019, '#define EA 10
#define I1 9
#define I2 8
void setup()
{
pinMode(EA, OUTPUT);
pinMode(I1, OUTPUT);
pinMode(I2, OUTPUT);
}
void loop()
{
//Establecemos la velocidad a
200
analogWrite(EA, 200);
//Hacia delante
digitalWrite(I1, HIGH);
digitalWrite(I2, LOW);
delay(2000);
//Y para atras
digitalWrite(I1, LOW);
digitalWrite(I2, HIGH);
delay(2000);
}', 'ES', 'CONTROL DE MOTORES CON L298N', 2, 23, 1, 1, 'Cochabamba', ' ING. ELIAS ALI ALVAREZ', 1);
INSERT INTO "public"."metadatos" VALUES (21, '1111111111111111111', '2021-04-16', 2006, 'a1111111111111111111111111111111Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.', 'ES', '1111111111111111111111', 2, 21, 1, 1, 'La Paz - El Alto', '', 1);
INSERT INTO "public"."metadatos" VALUES (8, 'WILLY CHANA  SSS', '2021-04-03', 2017, 'Delectus atque qui, eligendi, officia veritatis repellat illo totam consectetur voluptatem molestiae, optio architecto deleniti excepturi dolores aliquid. Fugiat maiores iure tempora vero explicabo aliquam non necessitatibus molestiae ex expedita?Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.', 'ES', 'PROGRAMAXION ORIENTADA A OBJETOS ES ESTE ARCHI DE PUREBA PROGRAMAXION ORIENTADA A OBJETOS ES ESTE ARCHI DE PUREBAPROGRAMAXION ORIENTADA A OBJETOS ES ESTE ARCHI DE PUREBA', 2, 8, 1, 2, 'La Paz - El Alto', 'JOSé  COLCQUE', 1);
INSERT INTO "public"."metadatos" VALUES (25, 'GILDA ALCON MAURICIO', '2021-05-23', 2021, 'En las últimas tres décadas, se ha producido el gran progreso en el transporte,
influenciado por las nuevas tecnologías y el desarrollo de diferentes herramientas
informáticas y de automatización que aparecen a lo largo de los años.
Las cintas transportadoras fueron uno de los inventos más importantes en 1795,
debido a que estos ayudaron a facilitar el transporte de las materias primas y otros
objetos que al transportarlos en vehículos o con máquinas resultan poco eficientes
y muy costosos en combustible, y esto impulso el crecimiento de la industria.
En este proyecto se aplicará todo el conocimiento adquirido hasta el momento en la
materia de Robótica Industrial.
Aplicaremos el uso de Arduino, sensores y motores en el funcionamiento de una
pequeña cinta transportadora con contador de objetos y control a distancia por
infrarrojo', 'ES', 'CINTA TRANSPORTADORA', 2, 25, 1, 1, 'La Paz - El Alto', 'ING. ELIAS ALI ALVAREZ', 1);
INSERT INTO "public"."metadatos" VALUES (14, 'ASDASDASDASD', '2021-04-16', 2020, 'Quas dolorum adipisci veritatis blanditiis nulla explicabo nam nisi totam error, laboriosam maxime sint velit minima suscipit similique ducimus ullam nihil repudiandae reprehenderit magnam voluptatem necessitatibus dicta aliquam! Minima, quas!Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.', 'ES', 'AAAAASDASD123123', 2, 14, 2, 1, 'La Paz - El Alto', 'ASD', 1);
INSERT INTO "public"."metadatos" VALUES (1, 'WILLY CHANA', '2021-03-30', 2021, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laLorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.boriosam assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.', 'ES', 'REDES NEURONALES PYTHON', 2, 1, 2, 3, 'Cochabamba', 'JOSE COLQUE', 1);
INSERT INTO "public"."metadatos" VALUES (12, 'AJDJDBBASDASDASD', '2021-02-02', 2015, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi commodi laboriosam fugit doloribus illum facilis enim quaerat cum, aspernatur minus, quod nemo. Libero animi optio accusamus eum corrupti quibusdam laudantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.', 'ES', 'ARCHIVO REDES  EEE', 2, 12, 6, 2, 'La Paz - El Alto', 'KKKKKAAAAAAAAAAAAA', 1);
INSERT INTO "public"."metadatos" VALUES (10, 'JUAN LIMACHI', '2020-04-03', 2020, 'Impedit, accusamus praesentium distinctio quia reiciendis illo, facere odio inventore ullam, repellendus deleniti nulla cupiditate sapiente optio? Magni consectetur aspernatur fugiat ipsa atque dolore nam aliquid distinctio, vero a optio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur qui blanditiis modi beatae nihil quisquam tempore facilis, eius tempora maxime odit sed voluptatibus quibusdam velit facere quod laboriosam assumenda.', 'ES', 'CSS QUE MAMADA', 2, 10, 2, 1, 'La Paz - El Alto', '', 1);

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
INSERT INTO "public"."ver_esp" VALUES (1, 2, 1);
INSERT INTO "public"."ver_esp" VALUES (7, 4, 7);
INSERT INTO "public"."ver_esp" VALUES (2, 3, 2);
INSERT INTO "public"."ver_esp" VALUES (6, 1, 6);
INSERT INTO "public"."ver_esp" VALUES (10, 1, 10);

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
INSERT INTO "public"."versiones" VALUES (6, 'SASD');
INSERT INTO "public"."versiones" VALUES (8, 'GFFFF');
INSERT INTO "public"."versiones" VALUES (9, 'ASDASD');
INSERT INTO "public"."versiones" VALUES (10, 'ASSSSSSS');
INSERT INTO "public"."versiones" VALUES (14, 'VERSION X');
INSERT INTO "public"."versiones" VALUES (13, 'VERSION XI');
INSERT INTO "public"."versiones" VALUES (7, 'VERSION IX');
INSERT INTO "public"."versiones" VALUES (12, 'VERSION XXX');
INSERT INTO "public"."versiones" VALUES (11, 'VERSION XXV');

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
SELECT setval('"public"."archivos_id_archivo_seq"', 28, true);

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
SELECT setval('"public"."especialidades_id_especialidad_seq"', 13, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."metadatos_id_metadato_seq"
OWNED BY "public"."metadatos"."id_metadato";
SELECT setval('"public"."metadatos_id_metadato_seq"', 28, true);

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
SELECT setval('"public"."ver_esp_id_ver_esp_seq"', 13, true);

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
