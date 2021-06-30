PGDMP                         y            posgrado_repositorio    13.1    13.1 Q    $           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            %           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            &           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            '           1262    33064    posgrado_repositorio    DATABASE     x   CREATE DATABASE posgrado_repositorio WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Latin America.1252';
 $   DROP DATABASE posgrado_repositorio;
                postgres    false            �            1259    41884    archivos    TABLE       CREATE TABLE public.archivos (
    id_archivo integer NOT NULL,
    descripcion character varying(100),
    tamanio numeric(5,2) NOT NULL,
    formato character varying(25) NOT NULL,
    nombre character varying(55) NOT NULL,
    uuid character varying(50)
);
    DROP TABLE public.archivos;
       public         heap    willy    false            �            1259    41866    archivos_id_archivo_seq    SEQUENCE     �   CREATE SEQUENCE public.archivos_id_archivo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 .   DROP SEQUENCE public.archivos_id_archivo_seq;
       public          willy    false    209            (           0    0    archivos_id_archivo_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.archivos_id_archivo_seq OWNED BY public.archivos.id_archivo;
          public          willy    false    200            �            1259    41888 
   categorias    TABLE     v   CREATE TABLE public.categorias (
    id_categoria smallint NOT NULL,
    categoria character varying(100) NOT NULL
);
    DROP TABLE public.categorias;
       public         heap    willy    false            �            1259    41868    categorias_id_categoria_seq    SEQUENCE     �   CREATE SEQUENCE public.categorias_id_categoria_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 32767
    CACHE 1;
 2   DROP SEQUENCE public.categorias_id_categoria_seq;
       public          willy    false    210            )           0    0    categorias_id_categoria_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.categorias_id_categoria_seq OWNED BY public.categorias.id_categoria;
          public          willy    false    201            �            1259    41892    especialidades    TABLE     �   CREATE TABLE public.especialidades (
    id_especialidad smallint NOT NULL,
    especialidad character varying(1000) NOT NULL
);
 "   DROP TABLE public.especialidades;
       public         heap    willy    false            �            1259    41870 "   especialidades_id_especialidad_seq    SEQUENCE     �   CREATE SEQUENCE public.especialidades_id_especialidad_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 32767
    CACHE 1;
 9   DROP SEQUENCE public.especialidades_id_especialidad_seq;
       public          willy    false    211            *           0    0 "   especialidades_id_especialidad_seq    SEQUENCE OWNED BY     i   ALTER SEQUENCE public.especialidades_id_especialidad_seq OWNED BY public.especialidades.id_especialidad;
          public          willy    false    202            �            1259    41899    meses    TABLE     p   CREATE TABLE public.meses (
    id_mes character varying(2) NOT NULL,
    mes character varying(20) NOT NULL
);
    DROP TABLE public.meses;
       public         heap    willy    false            �            1259    41902 	   metadatos    TABLE       CREATE TABLE public.metadatos (
    id_metadato integer NOT NULL,
    autor character varying(300) NOT NULL,
    fecha_publicacion date NOT NULL,
    anio_creacion numeric(4,0) NOT NULL,
    resumen text NOT NULL,
    lenguaje character varying(10),
    titulo character varying(1500) NOT NULL,
    id_tipo smallint NOT NULL,
    id_archivo integer NOT NULL,
    id_ver_esp integer NOT NULL,
    id_categoria integer NOT NULL,
    sede character varying(40) NOT NULL,
    tutor character varying(300),
    id_usuario integer NOT NULL
);
    DROP TABLE public.metadatos;
       public         heap    willy    false            �            1259    41872    metadatos_id_metadato_seq    SEQUENCE     �   CREATE SEQUENCE public.metadatos_id_metadato_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 0   DROP SEQUENCE public.metadatos_id_metadato_seq;
       public          willy    false    213            +           0    0    metadatos_id_metadato_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.metadatos_id_metadato_seq OWNED BY public.metadatos.id_metadato;
          public          willy    false    203            �            1259    41910    roles    TABLE     d   CREATE TABLE public.roles (
    id_rol smallint NOT NULL,
    rol character varying(20) NOT NULL
);
    DROP TABLE public.roles;
       public         heap    willy    false            �            1259    41874    roles_id_rol_seq    SEQUENCE     |   CREATE SEQUENCE public.roles_id_rol_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 32767
    CACHE 1;
 '   DROP SEQUENCE public.roles_id_rol_seq;
       public          willy    false    214            ,           0    0    roles_id_rol_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.roles_id_rol_seq OWNED BY public.roles.id_rol;
          public          willy    false    204            �            1259    41914    tipos    TABLE     f   CREATE TABLE public.tipos (
    id_tipo smallint NOT NULL,
    tipo character varying(30) NOT NULL
);
    DROP TABLE public.tipos;
       public         heap    willy    false            �            1259    41876    tipos_id_tipo_seq    SEQUENCE     }   CREATE SEQUENCE public.tipos_id_tipo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 32767
    CACHE 1;
 (   DROP SEQUENCE public.tipos_id_tipo_seq;
       public          willy    false    215            -           0    0    tipos_id_tipo_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.tipos_id_tipo_seq OWNED BY public.tipos.id_tipo;
          public          willy    false    205            �            1259    41918    usuarios    TABLE     2  CREATE TABLE public.usuarios (
    id_usuario smallint NOT NULL,
    usuario character varying(150) NOT NULL,
    password character varying(200) NOT NULL,
    nombre character varying(150) NOT NULL,
    apellido character varying(150) NOT NULL,
    estado boolean NOT NULL,
    id_rol integer NOT NULL
);
    DROP TABLE public.usuarios;
       public         heap    willy    false            �            1259    41878    usuarios_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_usuario_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 32767
    CACHE 1;
 .   DROP SEQUENCE public.usuarios_id_usuario_seq;
       public          willy    false    216            .           0    0    usuarios_id_usuario_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.usuarios_id_usuario_seq OWNED BY public.usuarios.id_usuario;
          public          willy    false    206            �            1259    41925    ver_esp    TABLE     �   CREATE TABLE public.ver_esp (
    id_ver_esp integer NOT NULL,
    id_version integer NOT NULL,
    id_especialidad integer NOT NULL
);
    DROP TABLE public.ver_esp;
       public         heap    willy    false            �            1259    41880    ver_esp_id_ver_esp_seq    SEQUENCE     �   CREATE SEQUENCE public.ver_esp_id_ver_esp_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 -   DROP SEQUENCE public.ver_esp_id_ver_esp_seq;
       public          willy    false    217            /           0    0    ver_esp_id_ver_esp_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.ver_esp_id_ver_esp_seq OWNED BY public.ver_esp.id_ver_esp;
          public          willy    false    207            �            1259    41929 	   versiones    TABLE     p   CREATE TABLE public.versiones (
    id_version smallint NOT NULL,
    version character varying(25) NOT NULL
);
    DROP TABLE public.versiones;
       public         heap    willy    false            �            1259    41882    verisiones_id_version_seq    SEQUENCE     �   CREATE SEQUENCE public.verisiones_id_version_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 32767
    CACHE 1;
 0   DROP SEQUENCE public.verisiones_id_version_seq;
       public          willy    false    218            0           0    0    verisiones_id_version_seq    SEQUENCE OWNED BY     V   ALTER SEQUENCE public.verisiones_id_version_seq OWNED BY public.versiones.id_version;
          public          willy    false    208            �            1259    41933    view_especialidades    VIEW     4  CREATE VIEW public.view_especialidades AS
 SELECT ver_esp.id_version,
    ver_esp.id_especialidad,
    especialidades.especialidad,
    ver_esp.id_ver_esp,
    versiones.version
   FROM ((public.especialidades
     JOIN public.ver_esp USING (id_especialidad))
     JOIN public.versiones USING (id_version));
 &   DROP VIEW public.view_especialidades;
       public          willy    false    218    218    217    217    217    211    211            �            1259    41937    view_archivo    VIEW       CREATE VIEW public.view_archivo AS
 SELECT metadatos.id_categoria,
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
   FROM (((((public.archivos
     JOIN public.metadatos USING (id_archivo))
     JOIN public.view_especialidades USING (id_ver_esp))
     JOIN public.tipos USING (id_tipo))
     JOIN public.categorias USING (id_categoria))
     JOIN public.usuarios USING (id_usuario));
    DROP VIEW public.view_archivo;
       public          willy    false    219    216    216    216    216    215    215    213    213    209    213    213    213    213    213    213    213    213    210    209    209    213    213    213    219    209    209    209    213    219    210    219    219            �            1259    41942    view_archivos    VIEW     t  CREATE VIEW public.view_archivos AS
 SELECT metadatos.id_categoria,
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
   FROM ((((public.archivos
     JOIN public.metadatos USING (id_archivo))
     JOIN public.view_especialidades USING (id_ver_esp))
     JOIN public.tipos USING (id_tipo))
     JOIN public.categorias USING (id_categoria));
     DROP VIEW public.view_archivos;
       public          willy    false    213    219    219    219    219    219    215    215    213    213    213    213    213    213    213    213    213    213    213    213    210    210    209    209    209    209    209    209            e           2604    41887    archivos id_archivo    DEFAULT     z   ALTER TABLE ONLY public.archivos ALTER COLUMN id_archivo SET DEFAULT nextval('public.archivos_id_archivo_seq'::regclass);
 B   ALTER TABLE public.archivos ALTER COLUMN id_archivo DROP DEFAULT;
       public          willy    false    209    200    209            f           2604    41891    categorias id_categoria    DEFAULT     �   ALTER TABLE ONLY public.categorias ALTER COLUMN id_categoria SET DEFAULT nextval('public.categorias_id_categoria_seq'::regclass);
 F   ALTER TABLE public.categorias ALTER COLUMN id_categoria DROP DEFAULT;
       public          willy    false    201    210    210            g           2604    41895    especialidades id_especialidad    DEFAULT     �   ALTER TABLE ONLY public.especialidades ALTER COLUMN id_especialidad SET DEFAULT nextval('public.especialidades_id_especialidad_seq'::regclass);
 M   ALTER TABLE public.especialidades ALTER COLUMN id_especialidad DROP DEFAULT;
       public          willy    false    202    211    211            h           2604    41905    metadatos id_metadato    DEFAULT     ~   ALTER TABLE ONLY public.metadatos ALTER COLUMN id_metadato SET DEFAULT nextval('public.metadatos_id_metadato_seq'::regclass);
 D   ALTER TABLE public.metadatos ALTER COLUMN id_metadato DROP DEFAULT;
       public          willy    false    213    203    213            i           2604    41913    roles id_rol    DEFAULT     l   ALTER TABLE ONLY public.roles ALTER COLUMN id_rol SET DEFAULT nextval('public.roles_id_rol_seq'::regclass);
 ;   ALTER TABLE public.roles ALTER COLUMN id_rol DROP DEFAULT;
       public          willy    false    204    214    214            j           2604    41917    tipos id_tipo    DEFAULT     n   ALTER TABLE ONLY public.tipos ALTER COLUMN id_tipo SET DEFAULT nextval('public.tipos_id_tipo_seq'::regclass);
 <   ALTER TABLE public.tipos ALTER COLUMN id_tipo DROP DEFAULT;
       public          willy    false    215    205    215            k           2604    41921    usuarios id_usuario    DEFAULT     z   ALTER TABLE ONLY public.usuarios ALTER COLUMN id_usuario SET DEFAULT nextval('public.usuarios_id_usuario_seq'::regclass);
 B   ALTER TABLE public.usuarios ALTER COLUMN id_usuario DROP DEFAULT;
       public          willy    false    216    206    216            l           2604    41928    ver_esp id_ver_esp    DEFAULT     x   ALTER TABLE ONLY public.ver_esp ALTER COLUMN id_ver_esp SET DEFAULT nextval('public.ver_esp_id_ver_esp_seq'::regclass);
 A   ALTER TABLE public.ver_esp ALTER COLUMN id_ver_esp DROP DEFAULT;
       public          willy    false    217    207    217            m           2604    41932    versiones id_version    DEFAULT     }   ALTER TABLE ONLY public.versiones ALTER COLUMN id_version SET DEFAULT nextval('public.verisiones_id_version_seq'::regclass);
 C   ALTER TABLE public.versiones ALTER COLUMN id_version DROP DEFAULT;
       public          willy    false    218    208    218                      0    41884    archivos 
   TABLE DATA           [   COPY public.archivos (id_archivo, descripcion, tamanio, formato, nombre, uuid) FROM stdin;
    public          willy    false    209   �g                 0    41888 
   categorias 
   TABLE DATA           =   COPY public.categorias (id_categoria, categoria) FROM stdin;
    public          willy    false    210   |i                 0    41892    especialidades 
   TABLE DATA           G   COPY public.especialidades (id_especialidad, especialidad) FROM stdin;
    public          willy    false    211   �i                 0    41899    meses 
   TABLE DATA           ,   COPY public.meses (id_mes, mes) FROM stdin;
    public          willy    false    212   �k                 0    41902 	   metadatos 
   TABLE DATA           �   COPY public.metadatos (id_metadato, autor, fecha_publicacion, anio_creacion, resumen, lenguaje, titulo, id_tipo, id_archivo, id_ver_esp, id_categoria, sede, tutor, id_usuario) FROM stdin;
    public          willy    false    213   l                 0    41910    roles 
   TABLE DATA           ,   COPY public.roles (id_rol, rol) FROM stdin;
    public          willy    false    214   /�                 0    41914    tipos 
   TABLE DATA           .   COPY public.tipos (id_tipo, tipo) FROM stdin;
    public          willy    false    215   a�                 0    41918    usuarios 
   TABLE DATA           c   COPY public.usuarios (id_usuario, usuario, password, nombre, apellido, estado, id_rol) FROM stdin;
    public          willy    false    216   ��                  0    41925    ver_esp 
   TABLE DATA           J   COPY public.ver_esp (id_ver_esp, id_version, id_especialidad) FROM stdin;
    public          willy    false    217   D�       !          0    41929 	   versiones 
   TABLE DATA           8   COPY public.versiones (id_version, version) FROM stdin;
    public          willy    false    218   ��       1           0    0    archivos_id_archivo_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.archivos_id_archivo_seq', 57, true);
          public          willy    false    200            2           0    0    categorias_id_categoria_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.categorias_id_categoria_seq', 8, true);
          public          willy    false    201            3           0    0 "   especialidades_id_especialidad_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public.especialidades_id_especialidad_seq', 29, true);
          public          willy    false    202            4           0    0    metadatos_id_metadato_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.metadatos_id_metadato_seq', 56, true);
          public          willy    false    203            5           0    0    roles_id_rol_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.roles_id_rol_seq', 5, false);
          public          willy    false    204            6           0    0    tipos_id_tipo_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.tipos_id_tipo_seq', 8, true);
          public          willy    false    205            7           0    0    usuarios_id_usuario_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.usuarios_id_usuario_seq', 12, true);
          public          willy    false    206            8           0    0    ver_esp_id_ver_esp_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.ver_esp_id_ver_esp_seq', 29, true);
          public          willy    false    207            9           0    0    verisiones_id_version_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.verisiones_id_version_seq', 19, true);
          public          willy    false    208            o           2606    41948    archivos archivos_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.archivos
    ADD CONSTRAINT archivos_pkey PRIMARY KEY (id_archivo);
 @   ALTER TABLE ONLY public.archivos DROP CONSTRAINT archivos_pkey;
       public            willy    false    209            q           2606    41950    categorias categorias_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.categorias
    ADD CONSTRAINT categorias_pkey PRIMARY KEY (id_categoria);
 D   ALTER TABLE ONLY public.categorias DROP CONSTRAINT categorias_pkey;
       public            willy    false    210            s           2606    41952 "   especialidades especialidades_pkey 
   CONSTRAINT     m   ALTER TABLE ONLY public.especialidades
    ADD CONSTRAINT especialidades_pkey PRIMARY KEY (id_especialidad);
 L   ALTER TABLE ONLY public.especialidades DROP CONSTRAINT especialidades_pkey;
       public            willy    false    211            u           2606    41954    meses meses_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.meses
    ADD CONSTRAINT meses_pkey PRIMARY KEY (id_mes);
 :   ALTER TABLE ONLY public.meses DROP CONSTRAINT meses_pkey;
       public            willy    false    212            w           2606    41956    metadatos metadatos_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.metadatos
    ADD CONSTRAINT metadatos_pkey PRIMARY KEY (id_metadato);
 B   ALTER TABLE ONLY public.metadatos DROP CONSTRAINT metadatos_pkey;
       public            willy    false    213            y           2606    41958    roles roles_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id_rol);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            willy    false    214            {           2606    41960    tipos tipos_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.tipos
    ADD CONSTRAINT tipos_pkey PRIMARY KEY (id_tipo);
 :   ALTER TABLE ONLY public.tipos DROP CONSTRAINT tipos_pkey;
       public            willy    false    215            }           2606    41962    usuarios usuarios_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id_usuario);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            willy    false    216                       2606    41964    ver_esp ver_esp_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.ver_esp
    ADD CONSTRAINT ver_esp_pkey PRIMARY KEY (id_ver_esp);
 >   ALTER TABLE ONLY public.ver_esp DROP CONSTRAINT ver_esp_pkey;
       public            willy    false    217            �           2606    41966    versiones verisiones_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.versiones
    ADD CONSTRAINT verisiones_pkey PRIMARY KEY (id_version);
 C   ALTER TABLE ONLY public.versiones DROP CONSTRAINT verisiones_pkey;
       public            willy    false    218            �           2606    41967 #   metadatos metadatos_id_archivo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.metadatos
    ADD CONSTRAINT metadatos_id_archivo_fkey FOREIGN KEY (id_archivo) REFERENCES public.archivos(id_archivo) ON UPDATE CASCADE ON DELETE CASCADE;
 M   ALTER TABLE ONLY public.metadatos DROP CONSTRAINT metadatos_id_archivo_fkey;
       public          willy    false    2927    209    213            �           2606    41972 %   metadatos metadatos_id_categoria_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.metadatos
    ADD CONSTRAINT metadatos_id_categoria_fkey FOREIGN KEY (id_categoria) REFERENCES public.categorias(id_categoria);
 O   ALTER TABLE ONLY public.metadatos DROP CONSTRAINT metadatos_id_categoria_fkey;
       public          willy    false    2929    210    213            �           2606    41977     metadatos metadatos_id_tipo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.metadatos
    ADD CONSTRAINT metadatos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);
 J   ALTER TABLE ONLY public.metadatos DROP CONSTRAINT metadatos_id_tipo_fkey;
       public          willy    false    2939    213    215            �           2606    41982 #   metadatos metadatos_id_usuario_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.metadatos
    ADD CONSTRAINT metadatos_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id_usuario);
 M   ALTER TABLE ONLY public.metadatos DROP CONSTRAINT metadatos_id_usuario_fkey;
       public          willy    false    213    2941    216            �           2606    41987 #   metadatos metadatos_id_ver_esp_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.metadatos
    ADD CONSTRAINT metadatos_id_ver_esp_fkey FOREIGN KEY (id_ver_esp) REFERENCES public.ver_esp(id_ver_esp);
 M   ALTER TABLE ONLY public.metadatos DROP CONSTRAINT metadatos_id_ver_esp_fkey;
       public          willy    false    217    213    2943            �           2606    41992    usuarios usuarios_id_rol_fkey    FK CONSTRAINT        ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_id_rol_fkey FOREIGN KEY (id_rol) REFERENCES public.roles(id_rol);
 G   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_id_rol_fkey;
       public          willy    false    2937    214    216            �           2606    41997 $   ver_esp ver_esp_id_especialidad_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.ver_esp
    ADD CONSTRAINT ver_esp_id_especialidad_fkey FOREIGN KEY (id_especialidad) REFERENCES public.especialidades(id_especialidad) ON UPDATE CASCADE ON DELETE CASCADE;
 N   ALTER TABLE ONLY public.ver_esp DROP CONSTRAINT ver_esp_id_especialidad_fkey;
       public          willy    false    211    2931    217            �           2606    42002    ver_esp ver_esp_id_version_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.ver_esp
    ADD CONSTRAINT ver_esp_id_version_fkey FOREIGN KEY (id_version) REFERENCES public.versiones(id_version);
 I   ALTER TABLE ONLY public.ver_esp DROP CONSTRAINT ver_esp_id_version_fkey;
       public          willy    false    217    218    2945               �  x�u��r!E�O�HH �㤋�"��,u޿�ϸ=3gWwɯ��o~~���B�����+bԡ���_'���Ǫ���u�B�e�l,q��4��G�e-��b'�M�+nk`2Vt藕Q��BeY� �q/�iTO#�ڱ�im,�eYiD�#[�"��X]FK�����w�[S��aL����$�zD��|�u[� ��H��5F�f�� �/�ӽ��lk<B&eO-1mk�s����ʗI�ۚ�i��fQO5ok>���*���^ۚD�	��VMs崭I@��-�Uhh����n�d�h�{*d�D�)K����r�M[��Hl�8	�-�wb.ֱ)u1�V2�c	�qt,�V��F��fa�@�T��!�A�nk|L̽Fn��#c��@8ˡ�W-�l��@ǯ�w��J�E �O�z[��)a�4�� ��R|�         7   x�3�t����ut�W�2��ut	�t�2�t�w��sYp�� �1z\\\ �.V         �  x�}R[n1��N���N�&�Do�I @��{��_9�^��lY�͗��3���YN.z�( �Š��#@Ye���\_�h�E@�v���DH2b�OT)Ƣ�v���?��Tj�m	pq�F�;�2��S�A�9���~���_QM[��L�%�� �u1:�^Ra���[���!�HTc2����̨����a��m�O���~8(�c�t���NP�a�c����T|�9�p�PY�+�s���� 󅵝Z�ӑ&'?V>@�,W���E:�=P�~4�`��Io�<@%��,� ��)X���4�f��Y���x���7��Dl��ʭ�tag�y�v��󕁯��dz���7�.T�#��5�oOHѭ�ڼ=r1�|5��R�5ݮQ�L�һ��
�<�܏�cw�#�2�-���E�d�M���oJ�?�(�         m   x�30�t�K-��20�tKM*3�9}���NǤ��.S�H%P��ӫ4/�02r@N���� ˒38��$35h
���rI)�i��_7�t�L�rb���� \%            x��}K��F���W�f��tM���%� T��/�,����@UA6@�M�]t/{ы��sZ��	�w�ҿ�gf��i�H"�y��y~���'�hxjFW��//��.���_��ɣ�G�_�=����<v2�k�M�tU��"[ū�,�ڬ�?�g9��&/k��%�fk�#��'�o]&I�:ޕ�YU�*[gi�-�>^�E���c��GU�?�!���w5�����}��0���Ԅ�ٖIi�3��G|ڬ�<�'xt��M\e0���T_\�CMM����?ݔ�"+��-�޷��ǫU
��雪H�fW4m�\U��������h�yl�49��������z���������Mo���朮7釸�W�L�B���ju�_�ϟ���
H#!����>��p����r}]�@��>.V��UQ���o�UI7M{d�G���M��^jv����4���?YQ�mӃJ��H���l���RZ[Zoad�^���iR\	����%ݦe���q+�߮��	z/H��rKz�mc��u��mb�c�s���a"���/Oo�$�Gr݌޲���e��g@����8�p�/���>�'���E��U
��x8|���Ze�2�W��7y��}�&3�Vp�/�8zZ����t0l^���(ᡋ&�e��VU�-��a���8z��ه��C�ox����0lR�؛�mAS�� �a?q����Dc����p^���nt:`/�!0IL� ΁�p�9���i�����@��|2���,I+|�bj����B�'e;��:.�;�1��9��Kog^M�� �u�JJ�'�s���;�K�y�����*�B{%�5E�����̔�#���5�h�
%H������ZL�*|'�O/�s�9�8zk��Ύ���[yD��ޗPn�۲Ȅ���jK#��f�ӏ/q���>��v���@%��z�
)
�)H%�TB����"��[�n��:6�g`�D��Z�ळ�5OHG�a�W%q���E��)9.9�:�(-�hpFW��0"�He@���l{myS�%�'y����n�*������#�5�<��"S��r}��_�I\�W�5�t���g�|�����7P�(uMd��者���4�'tb6��o�I���D���V9��������O���t����w�0��}bY��y��"4o�ߙw�"XNf8����p2M/����(������E�X�� ��ߍ�W�	�l����h����d1��2��(Z��G'_��<z|Vs�&�M�o˓f|j`J��
&f̇0�q�\fM����}����7��e(6��ꛫ���|:	Gbp}�ף��PM3YqSVk�ݡZ�?�{�RR��OP�*��+�x�U�eS@�)i�4!�0�ͩ��{fז���j�L���D�����/eT8���x�����{�QBj�n��P��'u\�}�ә�m�S���Z��I�>2�7�
N\��,h�cQ�ҔA_�aH2V�"�Q�=Z�k`Ԭ���\��x��� �@��*�g�V�d3��	��R����M��Z���b��8����Ȁ�yz��0w�wZ��ş��-�U<s��o�t_xd�n��Jǽ�S	�F�3Y�4G�!˃]�j�eզ$�\9`�Z3�69h=fk2y����dE���ʮ�j �A;�F�uSnK�#`j�1Y�
�x���P��Fq
�d���ws��>f��B�M�=ÿ�ଜђ�G6Z���ӆ��:~��iU�M;@v+�rzwv�R��I�Ȇ'�Q�C��"Oշ�KM���<� q\��	|9i�e�r>�L{�ES���D�㳓�� �zDI�W����H���Uͧ ���D��%��hr	�n�|�M�U0��������O�?��$Xm5���wX�]�=V|����f$��m��њJHk�8��������-~8 ݏ�p]n�������[öd�=|$�����=Y�l��ߵu�`Ibך��
��Ό�+��QG��^��M�g�P2��T�q@�1�,��})��� �A�%rIL}�k��#��d#���:s̑�7�i�^IO��~�ށӐPaɘ�� �*V7��e�7=x!΄�F݁8VuC¢�~��^YY���<�忴eYp���?��QC��?,�A`��Z�ue�d����@�PpII��M�"��+}kݰ�7�Kv�����H &UR�ؑY-g�¸��AP�'5E7��:����!����d��2��v�mh��#�3���$�[x*,n�"M���ܒ}�mլ��@���>�����u5h�t��#]���X��Y�&�����8o������^�l����Ђ�u����珞�"�����i*����ѳ��3X���}�E���_5���(q{�G��7��D.ZF��c �l��m��0�p:���L6U��' 3�*R���N�[�A���F��䄌��g��f�[�cДC>2�%?������רľ1�u(�֬��`Yd��!-�ے|���pI��M�>���$ �|������ٸ�8Yfԩ0��&U���'��ۢ�Dn`����Η�Ch�.Q���ߌx�nQA�!En����㩯�A	G�W��X4�,�&yz�N��<����?�C�q��C��}�
�8ߙo����T�Ԁ����m����$$q��%�ec-��/�9�,��
Lt��;���$�*2b(���;-Ble�V���: ��ः'�:{R%1uS��%BX��;R��*@���i�ƒo��9r1 ��M���d���D��^n��F���R�*"��,D��$�7�NZ[>��f:yk�Z�p����������	��&!>�z��Kj%�n�ݯ�WG�p�>{]��c�/O�7�T�*����BY�8�%����mʓ5YPl�����e��t~�̽���g/�!_�Q�6㸈oiq��`��9K�L>�Ȗ��ej��;��P�2r��c�|P9�f�9��|���>�/A{'�+莠W��i��9P�0��̀Î��M,�Iz���x"y�����ʰ�e�ŭ�1ހ=� /h����m�7��-��x@i&)�~�Rc�:?�� �c��-��-���Tg�#k��΋WB`�F�s ��8���[tH�����& �rh	g��"Q�w1ۈ�՚��NA��s�
�I�>�0�}V������QM�GmQ��9��"$�oEp��S�:˧]O$=���<��7�*m^D�`N�-���hQ�j<�c�5)�''�ώ)��$��:�L¥O'0,zh�8��sv����Uw)l>2 ����#�oA,��d�k8�����ҵ�6u�F�-�1�6[�5�;|�P���.ܣ6���q�[��8 �`�uJ�3<�����Gwͺl@g[�)����O�0��Vw&)�����(�v��P���m�N�븏)�ݘ]��ZnK0WF5(�&��,c@?�6�_^���-$��@������A<�(���,A5	롅ÿrz���EF��s�^�Q�/Q�S�&Q���t��[Jk��-`N����m*vnA>�@��iew`��87YU� ������(�EB���7���� ��U;�-*��(h���~ȶw�U��49>@'�ã�N> �Lܖ:���yq��3���[�;;ex��/�J�Q`���]�1��V���p�^*�������,�J8)ݮ�\���pl���
�wa��w��j<~g���f��,_�f6�&K��L0	��=?y��ș{$1\6�.�ӷ`���-(4��s8���bڎ��㡢�D�}�7�F��A&����I2<T�c��=�xSj������mFQ~�7[28sٶWl�q@A�\��`	&PXN����N� �c,O��H.�d]�Q�$F7��Dẍy��ˈ�8n�՞{	:�z�< >2j_XYĲV�}���;�^&�f|[58��9�H�
�"�D%�L������1���k�9M�J��4����X?    )A��t�A�*M�E;�S
}K8��Z�&���;^�6d�����yx���i+lh�?��z'D}���`�z��
�?����������Kx�,Q �T��Z��8`�����X�vt�j�D��^e`S�zdu3$5S0fS�::!4(���g�ȧ0�U:T���������R3�S�?��Ѐ(�͗_��rWt(c�&�*�=�7!��|��K���:&,f�R���F�g��2h`�s+I�-Bd����	VMZ%��Y�	[�$6�$���Џ�L�&{�f��)�,g`c��k�:�SD� �p��E;r�C�	�HØ��aָ���1�:�����|�� ƾ��?9��ɿїCyd�f�,��˃A���<�Ϯ'�#��}|V?��!8B�����n��&�[]����xe4�	�>93�]	����Ι���bf�m�ȏ�3g�_�1	�ݤ����Fn�(��h{^;��:M"���������G�����a}��U�G�࣒��=��" ��	�(w�!��xb(���
��97��	�ڟr�'zLԀ �����<�,�6�Ϟ���M�C�%,Y�<V)lH%����*�JT�ME�5��6�1Y�lVa��M�ۯdSs*��3gNmp	m�۸ �@��c_�^�IX?v�� ��_0�҄�t3��v��Q��R��T�����S��}sK~i����?\�e�M��6��؞��J� h�V4�k�SVi��V��/���)��L�3�d0�0��b��Ex�$7 ��.�f���ڼ&̐�z� H?��R4h���3�2����[e�)d���nǒw�݂���(����cr��t.��aw�zgy�B�n�<�yDL���ѼǏ����k~�pM]1����Ӱ%k�"C�����=���Nk6KI��A����"����h��+0���C�l�`SF�R�>)��X7��\}b�Io�@�+�^v�T7��F!�3b��^�4%�N�U�m����c�Ӎ�,��C��NQ����Ҍ$��B9�:����"����@m�	7f[	��5a��p^G����D|�9�i���/�7lu����pi������Y�y����d8@�ݢ��na^��,��ɬ!R���+��S�h�XldN<9;;kY'^>��O�����Ϣ�j��Y!]��$m�d�)��JW�������*�cEil"ٻ;�2�����u�y���A��vl��>�����H`1��~�Lǒ:e���'V��R��0��/@￾�邬�`1}���bsD��������Mq��'���b����&S�61���o���W�d���G_��g�lF�)|��L0�aa�:�{R�`���������Y�mذ?vlP�w ="��b���IQ�����u�K3��XJV�xp�݆�B����T�Z�3en����$y4fRp��l�Z�4�fE�V�@0�8�CKR�6#@v��B ����
���Z��t (p1i8Pk�q��8eg	O�3�Չ#J��pݤE�Fr��By�1x�y�(1�q"��g���y���4Ǘ�ړ<���U-�J"2I�X-�
�@�)B�f�Eh�5���ڔ�t�`��ӝh�6������+}p�p��4"���$&&k�� �|_k�K���द��N��r&
gC�R�Y�z�?��4�7�/7�걤�C��K���S;t%!��O�V3<jO��w�S���6
�a�
�?�s�z<d�e��2J�ۼ
�mD+����)za_�<)|(�v����
>)�^H47Z�#������KrP�"Cĭ���\�y~��aL���˘2H$#�=j�>�#� �*	ㆮ�]D�C���c�b��;�-{b�C+��;��Yv�C��%��$:ၹ0��%Zk�u�ra�#�V��زU�A-b��UAH����p��|��6�{9��=p�"�����H�`���d����M�;�t}�];~m���5QSA����Q8.�Ok��캢�U���T��V�����_��N3����E�"�q]��-t��r9��*�0D��h�[�g�mu�ߙ����l®��:�-� b
�!��ۘ��
l��uh���]đL�뎛2 �@^r�d���Is�h;�B} U q7~��f��
���䠃^T���[�����m��U�h�~��9 s]~=�.�����`������x����٭� �:����tui��Q4	�0���Q�0������@�&@-�A��Ԡz����E�6�0���w�hj�W`�3"�t�d�S���I���/��D2��&�'�h��l��9�.x.�Ϫ��Zti~۠��7iNa�!\�֥IQ�̵�����5�^(�/�F�{��%~��l�#&[�S짢����ʀ�$�P�؈ݜ�ܪ�I$"@|gU�_&,��'V8�>�ֈPPNy$@܀��J�fnܴw�V� /mь�
��ƚ�h�S)���m�!|�l�к�0���9|��I��4,�S+���Z��������M<H��Ý*U�43�o+�~!
;�hgr���=9����NE��j��t3AC	#�XC�y	�DQ�|R&Y���W�zww���Nȏ�P!���$���UV�qtl���6q�ba���!C�fVO̓�Zn6Dt�͒�$|&6�&W��vs��5`�(�r�0(r*��P�3�Y[�[�;����sRwG�I�a�(�o%ܜ�JZ1�m�)5���O��"�P�Y��:�W	9
����{�p��H�c"����������g�-�����,W�d�[X�I�}ݬ��*A��X;�T,�dZ��X�f�O��#�AaQ�-Sh� N;���-�S,���O��� a��J]��	���t�?�4���b�K*"#���Ѳ�m߃��*�:#������$���7��*-�6��j�
y0���v�`�2\,5
7�O�Ⴃo��Ր����P�O�ʙHK/��e4��g�&X���C����7o@��s)d���7~����:9��Nz�8��K,�lY�3t�rT�]f��C�>[�a}�a�ؐ,��}�*[�
����,��b߁Gh�w���$X�kcK���⬻��K;
��1T<���XW-a��B��^��A�
���D�	���E�����Z�R'�_����r>�
!��T%6�E#��ǔ�+��N��b���$@�vL�
|��'�����*��L���q-8����%秝�(��ij��뒍Y�[$��lŭ�O++���\��:7E��`���N���=��],d�U�0� G<Q�_kNy�x͐�|	�}�m|��Q�)�QM!i�+x�g�\�wg�VM�ь1bh��@U�������3�Η��	�v�I07H�[��%�e��?�܄�P q�X�^��gq����D�mxtJ;���þ8ï�չ����y+E���zJ�v���F�r"�E�^dU��2��+��翛�`�����WGz7�m#Q�\���U�2��ZD$�@�������
�ql��G6��T����z����s���Ow98�9��P2�Ɉ�,��h�>"l�l���$
�@y9F�<�2���r_�E�Ƙ�EB�K��$o1�� P:D���2�r;��V��O_m0�OwM��"�|�5���-�D�g%]w�_�F��R���P,�`;ykΥ|�\SWj��۴/�ʭ�d[H�t��m�#ᮏ9���m[%qF��r�/c��2��)�<���Ԓ]��I̛���ke� �q3��-�#X�������'d!���hb�\�͋(�y$8S���d
{>��k�6�N� ݳ雐_��S.�o�|�a�)���T��K��R��+��/[���59;�ba���0�,L
��8Ve��c;3�T���N����f���=Z��=yw���:��Q#���ni�͗��VƷz��Zd����,I�(F��O��V��W�q���_�ڇ�xFO�D    �w�T�@B���Sih?v�k�ӷBzm}4\v����S,(���ƈ�!���NY�`,����uu�e4�!��6��.�A�Ø�h�ٵ�`>w�0�:������0��#��>>׆7�w3�"BѮe=;�q݊��p� ��A�����3��5��2�@L5�	��燄���!ݽm-�9��ΐ��#ٙ�:<ں���J���^����lPL�&�L�<+�jK�����-l���ߪ�ӬH�m�U��{M��?�t��u�������G���c��N|)�dhʊ�I���r������ 8�<�7ߠ�Jt�v�hޤq���c:�-���)���R�ȖTʄ�������a*�G��ta�0΢!�)V����@�����3	��*��ϣ�e$qL s��S�6�F�Hh�����JL�����NO�|�.��9VY4���ÁB[�AQ҄l��䭎�!XM90bP�.�0]0c�(�DJ�(bWn5�S�ɉQ����#�Z��"mW��I�Ѩ��ES���6\FI��*�n�.����1okRI[���	#KG$��l�~�ۅa?Nj{�Kl�)��aۄ�ד�$�����<ZYΥN��o8���,�6S�#~*���޴Z5[�$�ނA�*����B�c���~��t[�t��5�@����4e����Ѳ��~Z�Sz��5>�z\��8sA^���B��|E���6�
�oV��p��"�>��?>�@��uuͮ:l6�^\��%O�GG����5�8�d�G86�'Ŏ8l��a�)�{��qf�l� ݆���Lb�)mF`b�L/��Mb�	`�;&o+��$��5��AV��|ˁ�J�Z��r�wI^�l���e�?.)���l���3����wUum�+��Oq�I1���-@��%��d��{%ɢ���@��}�&%e����m|EBN.�4N,�&�z�:�I���e��OW
ڲ<�$���H1����SDKF��=�ؼy����{P����1rLsɌ.�9dO���M�<<t�\a��0x`��h:	(T�FWTE���?�3"[�C�@��})a�p�s�K�P�p�����I*����r��s����!Wk��(G�j�󘾗$���ɏ+����������1H��O��y�������A��0'�ۡ }3r�dJO���-��?��h�%�[�
Y�a�ky
� �tn�#,A�E?���6�۫���!��u{�ZK�R���Bhٚ�`_�V��x�r���6�~+T�Y�v�E5�%��z�45�)f+��j-�L�����jf1�D�d-���p:��@h�	��9�s�(X���Cmg᠅���RS�W<E���&i�W9=%���J2��۽�d��	E���:9��*�{vʸ�O7�z��÷��j�B�9�t)(}C�-���F������,��u��M�~�`�k�͹�m���+��b�H\A�Me���|+�C+u^�[�$v 2��O�^]�A�������e��Q�+��4�|�ְ�[,�`8[|�}�=P�aJH�m���;M8;߶Ā�i�[�0�Uy%I� �F���l��,pF�1Υ4:Cߥ ��j:+��\��6�������������r��s!�}��?�]$i�� �v=$���2��m\|�S�$���Xek6�f$�W&x_kV�J_R�6`���Q��S{ �$IfѮ�2RDx֕#�����x3�v�,�)8���{�mr1J�x�m���n��%g�ě-�9 �ڻ���hR[-���Jv �T��0���\�?P�1�x�	(o˛���T�.Դ�����"����eh�F���ؒ%��ZPKc�C���d���/�K��wh�:�1Wzx�l�Q<��,�C|]�K5��|�*2Z�W�(�QA��t��V<r�`�^AP�u n��P
�v���l�F
P�F�t:��\Qw�������t�4��w��= XXt�6>l�L��I4|w�u�ofۧ�{��B[r���~_���Z�DP�}�W\gh3c$��l��ǖ;A·�h{)��v�Ԑ��T�8uV��P\�5�
������e��i1�a��1EgQN:�@�I'ūH<QRm�A��	}�A!`�m�{���:���
I��(:����صK�k�ԕ�kg�YP�=��)4��~w_�p�WK��[�+��7yӓ����ZE��(�0?4�M�S_}����Xe���Ξ�Dq �՛�� 鲓����A�^ob2XLA�_N����G���w�����v� �!��7�C������`������oCa���U�u�Q���>�v��m����j�t����əB�=�oC�$�[�n�����Q8��)�%�Z������v�j�O?fZ�O7�H�~�lP����H^�ڶ��7���9�������ݣ(�A4� �z!G�d��w���Mޅ�E������݀�`�`bcK�g�������ty��4<N?Ƿ�����M�8n�%f�1ݾU���^qԂ��fKe_:Rt��
�n+,Uɩ|T�� Q+��P��!Z�� �uZ�\G��.K�=��H2V�;)��s_��j�I!f���s镂 N�����a����p���_��B0I�|��>&�K�c{o�IU�K���|�@b^�D�7�c�6����� V9wJ�X�ޕ��^�Clx�n�M�J.t�����Q������m!1kP����J�&��ECh�����3O�8�{�Pr-:�	CF��.ܶ\}�QW��� o��~T�ڎ[�����U�����E�Vl	|iEĆ��d�����=�e$K9-��&`��Y��F�%"b>�M���D��{&Ɯ�nRD�-�D�ş���&;D�K��*�MR���5a�:pI\�ͪHBO�� ��J�H=tdA\{Ӿ�,Im�.�b�pg�
�Î�������E'����u�����X�;2����!,ퟚ��$Z��wp)�A9�ARp��˺���0�E�=�]��@�cvتBE8P{|b�Z�
Jp�ˢ��1v���\q��uS��ۺ��ej8��+��k�d������ա����/���NQM�O����P���]��<E��ȹJ�����c��ϝ�mJ-�/��Ԙƞ������,��˺hW��~E�kJD1xK�bi� �X��"n��ml�7��K:��H���#���qT�/�m�Q�O���y���`P��A�w=�%O�L	J��Й���(���]�UbZ�k�*�)��]���ҫ�)K������h�)���ݴ����M�k�o�ui2�P��1���e�g������Ť��U�Z�Ѱ�N�	�/�84ʗg�X�������̏2�CBe׹7L�����?�v� ��~a�V ��Gdg��t���گ����4c�-�+���e�\vBM��a�#l�X��$�]�G����"�kD���M�>̠���c#����I��o$���?�Jx��Ŝ=T��%E�`��y����o�T-������E��)�]bp^�#���a���/O?c����jC��R�9`|)�C��� �}ڽ�ĀlVQid�&
ϵ��������S���G�w�]�������p�I1����m�cM����\����0�o{wA3��˒�~��0+��.U���4l{��vi*|�i]J�A����Ć%�ͺY.�њ�v��x'^����_�w9B84��A��#���R(^���b�vr^%n�n�[ҽJd�{��kq:?����jX��/U�J��yN^��&U#+�OD(�!�U˽$��;�a<��]h���ȫ�@-���ܨp���U^��u�Ur�b�b�Ӵ�Jt�ZJJ��� �cK��.j�'��LMTcќ8�8�AM��	�Ű�k�к���d#��ҴݦH����B:�H[�_�G��_���	Y�^z=�_���6\p�\�v���Ce���w�-��t�xvi3��1��$5�kU\q�������e.s�?��e3cĶcQ����x    �'%=��3����QZ)]������b]������"O�v�%%1�V�>�Ǯ��_�-�{��[�VD��jC
�uj�Wz�����lR�Y4�":���|�k�Y�j��b�l�-	�/��B�[��`t��4��$J����';��x�\֒�2�ט���~�[�r]Ux�ɡ�6K^40��sWK�8i�(wn%��wo�P�ަ����νg�N���������1�J�5[F����'c/�UP_v�Z���Y�m=R�9�(m�Jz�k��c�IA��kt�6?I��G�[������􁐦e��]�Σ���2j>޻ƻw;���C��z�S�����nN�;ھ�VT�ԤV:��7�jgC{��cڗ iL��ژ���!e���e�r2��Il�@w�\)=���, �xM�cw�ǿzz��^�����>w��Y	�>�>Z�R'�8�,)ȩ�\95��q���-������ߊ���ƀ�'�� ����c�ų�����E{ܱR�h�!�=��7�R@�͡�"Zid,7T2�$)��"OGq5>�?~��<݊^-c���j��l���\�p�l9�_�'����%W�<�]"z��9��`��+�.�9������`T��W���W!�o����-�
���,��Qps̪����l�h:���ҫ�Z�v/�9����&'��>�0�ޖ|�� C�6��w�&�*j��ެj��%^H0q~�Lb/����++m�<<`t8\ �s�:��L@?5i0P� w������\N$nw�8��!.�¶k�N֚	�.�@[��[�17�5��f�㓱���ꃀ�4�3��ҩ��(�v��y����w�e�`�"�I�4��j��M��=�;mpj��	%[b���F@]��̝�~��`įAT�墭��~��E��ѻ�,Q!#��/�?(�U�A#���0����W�?��h��8��U$�T���\׆mJi�PF�����
U���L٢�R���Сc��rR�͖�"�����PJ%�ˉ��{,l_����4����v�\����;�[=�W�w��ByZz�{(��q��[����9^���~���5	�d�zh[�4߯��Wx��\r�J�0�T�W[���N�p0���R��L�m{5��y�`����Ϟ=�	Jm�q�n��wi�^�s�`���v��/��A�~��Ӹ�VbPW�(�ԙD��H�N��=;�����Idm��)�8�ȁ���~���������j��O��G�C*ꍂQ���w�:�-�Q$M�P�]{��O�#�H��])S�ӒP�WT3����x�����M딜j��Ȯ*J�;J<�u1 ��Z��̀���xH�d��K1�.���Z���Rh'm���{,!9cG��phQ�9\g�wS��v����<�PH�S0��&�4�Wj.��k4!��N3퐿n b��Vx��!�bIYY�ad��71�F�1ޅ��L���}���6��r�+<�f}+(�J�p�`�+�O��ωk�V7�c'��<D�ut��N���h�Bcm��]�k�z,S��
v�A�B�\6j0�=���d�;P��l��@լ�4��Dfj��0�L������\g� �DmR:s�1%��n<"VYa8~�j����D50&m� r��X�v�vˤHn���.-K��,4M��a�U�u_�!�R���x�۽>�zP͂�T���x��zy�ӐG(�-�=��w����4凤��d��>���x�B���E��e����� �Ϡ�����]������1�"�V9�E/,��}i�Z`#�TM*$}����tϟ��W��Uu󫟨��=fd����ckq�'���W;�O/�є[��R���tU�n���y8���0��9�u�`��e8�&Sn�Ets����`lp9�G��ta.�����G8?y�?R!-:��j2�0>"7���_�s��Ҧc�0���>Re�Q�O{T>���r�X������()Ym�E�5��1�m���,f2yD�:�5���o�֠��㜽�J��+rϑآ�u]�o�%��"r�9�v��<m�Z-�-9h�a��~�jHu��BzO� ����B"��S&����������&�_|}�ULq��N�+±�r��n|}�!��V�����!���nN�x��),g�d���UI����'��ҾP�',�J���ɭRD�Һp��9�~R�gP��t��i�\hUK$J�:��έ���]�L�0{i��'E(0��{f�!E���t�U������_�\xP˯��C�I��Ο?N������sj.#/@��/?�+	(�6hgX�
Ȋ's4z2���6�1ԙ��.[��.�Q^��(����I�y�k�*x 6k��*A� �q��4|�T����Y��~��,���ʮ9��J[*��o��̦;�q��z;�a��^t�'ף�~�p��
mW����B����"��i�201�S���lA���6F�O�h��z�����,�FQ�F��ל�*�1/U0�L1�_WJ��)]�5�g*n�!ֱ�u\V/iߣ��u�;���x��Hq���ܭ-��֭$�1&B�fΕ�!��08IϘ�X5��x ��M��g�NH0&ST����mm%B�.I;����o�B�����8�ȟ��"F�2���3�� 8�0�_�`nh�_p�0`"�K�C!�p�rp�~^E0m�3`�LG��(��h�|y�����ũ����wf��pZ�7�d�ia�W09l��Dڣ�p\���`���N�wحp����.��t?J���V�
��N�fo�Cs/�C&m/r�s�B��������f�69.�M�T���MA愳Bc-���x�s~��"�V�7���e�܎I�̝��V�ǖ��tJb�=Lw_R��L٣�Q/��� $Zp[�M�ml�(�Ks�����*��jX_�wV�)O�-ְ��L����_�t@���*�)z�G�����Ի̠sC\%���F�X�|w`�L���k�" 0�$��T (���45��$����U�#�#[���v
�$5ɑ�{=����,�:�N���yg�w�א$���!���Ԍr�����81��p���`b�Ӌyt9}8p���q}m����s�1�zKJ��).m�C�@~��U-+ Λua��+wq�v��|i�k��D�uc���)9��ݙ���'�-��s wYx�C�5᚝�M3��Y�/����8X��YȠ�Ӏ��Y��H�x-�{3�rTgt��8�x��v�����AJI������-#K	�#��R)�v���[�a����8��|��a�y�>w�\��#�m��Go{ū���6�7���n쒭
K��I��=^A���6�0������S/�Zw/�RO��o���8s/�9����{���B����;���%f�M~v*^�̤��H):�p��:�.�t9EX��WfJ�_t@@���[�t9h�ls�뤭k >����3W:��Kb��-|�˳)[�0θ�T��z4�F���ڟ=z��ޔ�Z�S�#�����J.��}k�W���|:`���ȡl�A�C�-̼I���N�b�n��^<ދB�7��vHZp����:�ܰvl�d/>E^�:푡�B�&o�M{i]b�������R�@f����u},�
����<4��Q$������·���xB(�'O���ޚ��R�t�_;K�Wz�����q~�Ǔd�:�8�	^yGW�j׬��/Fa0��L>7l��;Ĉ��4Y���L��8L`�������n�R�\P۪��,���� �Ñ���|C�h$a�kn�s5u\a�"2`�r?����&}-v� H}��JU�\˅����Z_�ፎcƥj�k7B����.*���X�JhkM)l�7[Rș��͕�t��� �L�~�'^8��2�Â��zFE~�5���C�3�V���g�s�x�! n����F�N�� 
  R���IjB��LLv�(NeUo�%��\��ߞ� �#<���5���ْ��\@�⳶ز�r�iy����f�mHMy�?���������D���踑�{���M,@��\A����s���ڂ6���ͷ��(|��T=��6�aCc�λ�`�+�/�������+��)��L-�&G�|�d�ca��xt�YV��rE3�d�^��a����5�[R��O���������<�� ���<*���%h(�M��Xo_p��9f�H���wKL�E��z��=;V})
h,��:C�(w�iSs�ݧ-��&�F�"m����W8|��A1��!I�.�'�)���z9g��� ��=�y��oM�� �)��>��@Z>	�\5`+�t���v���Tg�gJڦU�U�IA[�O�M��r�5IXe��8�K+K� �6pr䋸��L���H�(%D<Fk�ʈ\��y��t�J��ae����k��2u�����/��t��.6�M[�4c��jC�� �{���)v� ��BIƜ?�7�f���8dAe8�0��d��㈗*4��+�����/�o�M;@���7z�\��U���l�,��sMՔ�%����+re�Y7zAM�zZ]����P��}��t9]F�)؉�I�9G����t,��ε��O��<�b3T��c�l4�<�ʅ����L.P�F�2 ��ј�$\2~��X��;y�@�����]�*0��'lR�^���_'������~����!*         "   x�3�tL����2�,(M��LNL�/����� g7@         7   x�3�I-�,�2�����O/JL�L�2�t-.HM�L��LIL�2��K����� ���         �  x�]�I��P ���wx�Y�����T_@D��FD�����ZeMIN_R	b�h���4D`��$WN_��a���"�L�ph��{c�ķ>G?n��ߥ^GiN�*O��`` ��^w|E�K��ԥb�J�素yi�&�Q�v���^=$�)LaA����f�} ���9^$-6�=K�E'��!�f<S׏k<�5�G��p��xQ����E+�ex�j�d�j���:�:$��G�F���߸�����&eͦ�2gۡ�~K��݉���O���ȃ���x�x~�ŗ�.Oaki����
���9G�~l��Ct#�e�f$y�#�aS�T����D�	W�_��|y�k΋mg�U�@H��Ǳ����Mf��,z�@���K��g}�N��1�[�ZV��1�u�X          [   x����0B�~�T�4i�K���X> >��,T�K�&���Jh�ݸ�S�?�m�E���G��F�e��<�����x���a��滀���      !   b   x�U��	�0гSE*��O
�0�
!��$sAH��>���.o���N��ᭈ`�1}ړ+�����RA�FSS�a�\������l�T����x}7^     