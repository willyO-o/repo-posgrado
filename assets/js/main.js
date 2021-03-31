const Dashboard = () =>
    import ('./components/dashboard.js');
const Card = () =>
    import ('./components/card.js');
const Especialidades = () =>
    import ('./components/especialidades.js');
const subirArchivos = () =>
    import ('./components/subirArchivos.js');
const listarArchivos = () =>
    import ('./components/listarArchivos.js');



const routes = [{
        path: '/',
        component: Dashboard
    },
    {
        path: '/users',
        component: Card
    },
    {
        path: '/especialidades',
        component: Especialidades
    },
    {
        path: '/archivos/subir',
        component: subirArchivos,

    },
    {
        path: '/archivos/listar',
        component: listarArchivos,

    },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    //mode:'history',
    routes // short for `routes: routes`
})

const store = new Vuex.Store({
    state: {
        stateEditarArchivo: {
            id_archivo: 0,
            id_especialidad: '',
            titulo: '',
            resumen: '',
            autor: '',
            tutor: '',
            id_version: 0,
            sede: '',
            id_tipo: '',
            id_categoria: '',
            anio: 0,
            archivo: ''
        },
        editarArchivo: false
    },
    mutations: {
        setStateEditarArchivo(state, datos) {
            state.stateEditarArchivo.id_archivo = datos.id_archivo
            state.stateEditarArchivo.id_especialidad = datos.id_ver_esp
            state.stateEditarArchivo.titulo = datos.titulo
            state.stateEditarArchivo.resumen = datos.resumen
            state.stateEditarArchivo.autor = datos.autor
            state.stateEditarArchivo.tutor = datos.tutor
            state.stateEditarArchivo.id_version = datos.id_version
            state.stateEditarArchivo.sede = datos.sede
            state.stateEditarArchivo.id_tipo = datos.id_tipo
            state.stateEditarArchivo.id_categoria = datos.id_categoria

            state.stateEditarArchivo.anio = datos.anio
            state.stateEditarArchivo.archivo = datos.nombre
            state.editarArchivo = true
        }
    }
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
    router,
    store
}).$mount('#applicacion')