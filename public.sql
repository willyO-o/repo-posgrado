/*
 Navicat Premium Data Transfer

 Source Server         : postgres13
 Source Server Type    : PostgreSQL
 Source Server Version : 130001
 Source Host           : localhost:5432
 Source Catalog        : repositorio
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 130001
 File Encoding         : 65001

 Date: 18/03/2021 00:14:39
*/


-- ----------------------------
-- Sequence structure for archivos_id_archivo_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."archivos_id_archivo_seq";
CREATE SEQUENCE "public"."archivos_id_archivo_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for categorias_id_categoria_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."categorias_id_categoria_seq";
CREATE SEQUENCE "public"."categorias_id_categoria_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 1000
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
-- Sequence structure for roles_id_rol_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."roles_id_rol_seq";
CREATE SEQUENCE "public"."roles_id_rol_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 1000
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for tipos_id_tipo_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tipos_id_tipo_seq";
CREATE SEQUENCE "public"."tipos_id_tipo_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for usuarios_id_usuarios_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."usuarios_id_usuarios_seq";
CREATE SEQUENCE "public"."usuarios_id_usuarios_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 32767
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for verisiones_id_version_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."verisiones_id_version_seq";
CREATE SEQUENCE "public"."verisiones_id_version_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2000
START 1
CACHE 1;

-- ----------------------------
-- Table structure for archivos
-- ----------------------------
DROP TABLE IF EXISTS "public"."archivos";
CREATE TABLE "public"."archivos" (
  "id_archivo" int8 NOT NULL DEFAULT nextval('archivos_id_archivo_seq'::regclass),
  "titulo" char(1000) COLLATE "pg_catalog"."default" NOT NULL,
  "ruta" varchar(300) COLLATE "pg_catalog"."default" NOT NULL,
  "autor" varchar(300) COLLATE "pg_catalog"."default" NOT NULL,
  "tutor" varchar(300) COLLATE "pg_catalog"."default",
  "fecha_publicacion" date NOT NULL,
  "uuid" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "resumen" text COLLATE "pg_catalog"."default" NOT NULL,
  "id_categoria" int4 NOT NULL,
  "id_tipo" int4 NOT NULL,
  "id_especialidad" int4 NOT NULL,
  "sede" varchar(50) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of archivos
-- ----------------------------

-- ----------------------------
-- Table structure for categorias
-- ----------------------------
DROP TABLE IF EXISTS "public"."categorias";
CREATE TABLE "public"."categorias" (
  "id_categoria" int4 NOT NULL DEFAULT nextval('categorias_id_categoria_seq'::regclass),
  "categoria" varchar(100) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of categorias
-- ----------------------------

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
INSERT INTO "public"."especialidades" VALUES (3, 'metodologia de la investigacion');
INSERT INTO "public"."especialidades" VALUES (4, 'MAESTRÍA EN DIRECCIÓN Y GESTIÓN ESTRATÉGICA DE INSTITUCIONES EDUCATIVAS');
INSERT INTO "public"."especialidades" VALUES (5, 'MAESTRíA EN COMUNICACIóN ESTRATéGICA DIGITAL, MARKETING POLíTICO Y EMPRESARIAL');
INSERT INTO "public"."especialidades" VALUES (6, 'MAESTRíA EN COMUNICACIóN ESTRATéGICA DIGITAL, MARKETING POLíTICO Y EMPRESARIAL');

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS "public"."roles";
CREATE TABLE "public"."roles" (
  "id_rol" int2 NOT NULL DEFAULT nextval('roles_id_rol_seq'::regclass),
  "rol" varchar(25) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO "public"."roles" VALUES (1, '{"admin                  ');
INSERT INTO "public"."roles" VALUES (2, 'Super Usuario');
INSERT INTO "public"."roles" VALUES (3, 'Super Usuario');
INSERT INTO "public"."roles" VALUES (4, 'Super Usuario');

-- ----------------------------
-- Table structure for tipos
-- ----------------------------
DROP TABLE IF EXISTS "public"."tipos";
CREATE TABLE "public"."tipos" (
  "id_tipo" int4 NOT NULL DEFAULT nextval('tipos_id_tipo_seq'::regclass),
  "tipo" varchar(50) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of tipos
-- ----------------------------

-- ----------------------------
-- Table structure for usuarios
-- ----------------------------
DROP TABLE IF EXISTS "public"."usuarios";
CREATE TABLE "public"."usuarios" (
  "id_usuarios" int2 NOT NULL DEFAULT nextval('usuarios_id_usuarios_seq'::regclass),
  "usuario" varchar(150) COLLATE "pg_catalog"."default" NOT NULL,
  "password" varchar(200) COLLATE "pg_catalog"."default" NOT NULL,
  "nombre" varchar(150) COLLATE "pg_catalog"."default",
  "apellido" varchar(200) COLLATE "pg_catalog"."default",
  "estado" bool NOT NULL,
  "id_rol" int4 NOT NULL DEFAULT 1
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
  "id_version" int4 NOT NULL,
  "id_especialidad" int4 NOT NULL
)
;

-- ----------------------------
-- Records of ver_esp
-- ----------------------------
INSERT INTO "public"."ver_esp" VALUES (2, 3);
INSERT INTO "public"."ver_esp" VALUES (1, 4);
INSERT INTO "public"."ver_esp" VALUES (1, 5);
INSERT INTO "public"."ver_esp" VALUES (3, 6);

-- ----------------------------
-- Table structure for verisiones
-- ----------------------------
DROP TABLE IF EXISTS "public"."verisiones";
CREATE TABLE "public"."verisiones" (
  "id_version" int2 NOT NULL DEFAULT nextval('verisiones_id_version_seq'::regclass),
  "version" varchar(50) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of verisiones
-- ----------------------------
INSERT INTO "public"."verisiones" VALUES (1, 'VERSION I');
INSERT INTO "public"."verisiones" VALUES (2, 'VERSION II');
INSERT INTO "public"."verisiones" VALUES (3, 'VERSION III');

-- ----------------------------
-- View structure for view_especialidades
-- ----------------------------
DROP VIEW IF EXISTS "public"."view_especialidades";
CREATE VIEW "public"."view_especialidades" AS  SELECT ver_esp.id_version,
    ver_esp.id_especialidad,
    especialidades.especialidad,
    verisiones.version
   FROM especialidades
     JOIN ver_esp USING (id_especialidad)
     JOIN verisiones USING (id_version);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."archivos_id_archivo_seq"
OWNED BY "public"."archivos"."id_archivo";
SELECT setval('"public"."archivos_id_archivo_seq"', 3, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."categorias_id_categoria_seq"
OWNED BY "public"."categorias"."id_categoria";
SELECT setval('"public"."categorias_id_categoria_seq"', 3, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."especialidades_id_especialidad_seq"
OWNED BY "public"."especialidades"."id_especialidad";
SELECT setval('"public"."especialidades_id_especialidad_seq"', 7, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."roles_id_rol_seq"
OWNED BY "public"."roles"."id_rol";
SELECT setval('"public"."roles_id_rol_seq"', 6, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tipos_id_tipo_seq"
OWNED BY "public"."tipos"."id_tipo";
SELECT setval('"public"."tipos_id_tipo_seq"', 3, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."usuarios_id_usuarios_seq"
OWNED BY "public"."usuarios"."id_usuarios";
SELECT setval('"public"."usuarios_id_usuarios_seq"', 3, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."verisiones_id_version_seq"
OWNED BY "public"."verisiones"."id_version";
SELECT setval('"public"."verisiones_id_version_seq"', 4, true);

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
ALTER TABLE "public"."usuarios" ADD CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id_usuarios");

-- ----------------------------
-- Primary Key structure for table verisiones
-- ----------------------------
ALTER TABLE "public"."verisiones" ADD CONSTRAINT "verisiones_pkey" PRIMARY KEY ("id_version");

-- ----------------------------
-- Foreign Keys structure for table archivos
-- ----------------------------
ALTER TABLE "public"."archivos" ADD CONSTRAINT "archivos_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "public"."categorias" ("id_categoria") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."archivos" ADD CONSTRAINT "archivos_id_especialidad_fkey" FOREIGN KEY ("id_especialidad") REFERENCES "public"."especialidades" ("id_especialidad") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."archivos" ADD CONSTRAINT "archivos_id_tipo_fkey" FOREIGN KEY ("id_tipo") REFERENCES "public"."tipos" ("id_tipo") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table usuarios
-- ----------------------------
ALTER TABLE "public"."usuarios" ADD CONSTRAINT "usuarios_id_rol_fkey" FOREIGN KEY ("id_rol") REFERENCES "public"."roles" ("id_rol") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table ver_esp
-- ----------------------------
ALTER TABLE "public"."ver_esp" ADD CONSTRAINT "ver_esp_id_especialidad_fkey" FOREIGN KEY ("id_especialidad") REFERENCES "public"."especialidades" ("id_especialidad") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."ver_esp" ADD CONSTRAINT "ver_esp_id_version_fkey" FOREIGN KEY ("id_version") REFERENCES "public"."verisiones" ("id_version") ON DELETE CASCADE ON UPDATE CASCADE;
