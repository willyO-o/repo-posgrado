const Tablero_estadisticas = () =>
    import ('./components/Tablero_estadisticas.js');
const User = () =>
    import ('./components/user.js');
const Especialidad_programa = () =>
    import ('./components/Especialidad_programa.js');
const Documeno_programa_registrar = () =>
    import ('./components/Documeno_programa_registrar.js');
const Documeno_programa = () =>
    import ('./components/Documeno_programa.js');
const Autor_programa = () =>
    import ('./components/Autor_programa.js');
const Pagina_404 = () =>
    import ('./components/Pagina_404.js');




const routes = [{
        path: '/admin',
        component: Tablero_estadisticas
    },
    {
        path: '/admin/users',
        component: User
    },
    {
        path: '/admin/especialidades',
        component: Especialidad_programa
    },
    {
        path: '/admin/documentos/registar',
        component: Documeno_programa_registrar,

    },
    {
        path: '/admin/documentos/listar',
        component: Documeno_programa,

    },
    {
        path: '/admin/autores',
        component: Autor_programa,

    },

    {
        path: "*",
        component: Pagina_404
    }
]

//router
const router = new VueRouter({
    mode: 'history',
    routes
})

//vuex store
const store = new Vuex.Store({
    state: {
        stateEditarArchivo: {},
        editarArchivo: false,
        verDocumento: false,

    },
    mutations: {
        setStateEditarArchivo(state, datos) {
            state.stateEditarArchivo = Object.assign({}, datos)
            state.editarArchivo = true
        },
        setDefaultStateEditarArchivo(state, def) {
            state.editarArchivo = false
            state.stateEditarArchivo = Object.assign({}, def)
        },
        setStateVerDocumento(state, estado) {
            state.verDocumento = estado
        },
    }
})

//vue
const app = new Vue({
    el: '#applicacion',
    router,
    store
})
