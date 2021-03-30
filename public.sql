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

 Date: 30/03/2021 00:02:50
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
INSERT INTO "public"."especialidades" VALUES (2, 'DIPLOMADO EN DERECHO CONSTITUCIONAL Y PROCESAL CONSTITUCIONAL');
INSERT INTO "public"."especialidades" VALUES (1, 'MAESTRÍA EN INTERPRETACIÓN Y ARGUMENTACIÓN JURÍDICA GG');

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
  "tutor" varchar(300) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of metadatos
-- ----------------------------
INSERT INTO "public"."metadatos" VALUES (1, 'AAAA', '2021-03-30', 2019, 'asdas dasdasdddddddddddddddd', 'ES', 'ASDASDASD', 1, 1, 1, 1, 'La Paz - El Alto', '2WWWW');

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
INSERT INTO "public"."ver_esp" VALUES (2, 3, 2);
INSERT INTO "public"."ver_esp" VALUES (1, 2, 1);

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
SELECT setval('"public"."archivos_id_archivo_seq"', 2, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."categorias_id_categoria_seq"
OWNED BY "public"."categorias"."id_categoria";
SELECT setval('"public"."categorias_id_categoria_seq"', 4, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."especialidades_id_especialidad_seq"
OWNED BY "public"."especialidades"."id_especialidad";
SELECT setval('"public"."especialidades_id_especialidad_seq"', 6, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."metadatos_id_metadato_seq"
OWNED BY "public"."metadatos"."id_metadato";
SELECT setval('"public"."metadatos_id_metadato_seq"', 2, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."roles_id_rol_seq"
OWNED BY "public"."roles"."id_rol";
SELECT setval('"public"."roles_id_rol_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tipos_id_tipo_seq"
OWNED BY "public"."tipos"."id_tipo";
SELECT setval('"public"."tipos_id_tipo_seq"', 5, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."usuarios_id_usuario_seq"
OWNED BY "public"."usuarios"."id_usuario";
SELECT setval('"public"."usuarios_id_usuario_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."ver_esp_id_ver_esp_seq"
OWNED BY "public"."ver_esp"."id_ver_esp";
SELECT setval('"public"."ver_esp_id_ver_esp_seq"', 6, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."verisiones_id_version_seq"
OWNED BY "public"."versiones"."id_version";
SELECT setval('"public"."verisiones_id_version_seq"', 5, true);

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
ALTER TABLE "public"."metadatos" ADD CONSTRAINT "metadatos_id_archivo_fkey" FOREIGN KEY ("id_archivo") REFERENCES "public"."archivos" ("id_archivo") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."metadatos" ADD CONSTRAINT "metadatos_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "public"."categorias" ("id_categoria") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."metadatos" ADD CONSTRAINT "metadatos_id_tipo_fkey" FOREIGN KEY ("id_tipo") REFERENCES "public"."tipos" ("id_tipo") ON DELETE NO ACTION ON UPDATE NO ACTION;
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
