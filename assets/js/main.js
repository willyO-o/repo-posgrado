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

//router
const router = new VueRouter({
    //mode:'history',
    routes
})

//vuex store
const store = new Vuex.Store({
    state: {
        stateEditarArchivo: {},
        editarArchivo: false,

    },
    mutations: {
        setStateEditarArchivo(state, datos) {
            state.stateEditarArchivo = Object.assign({}, datos)
            state.editarArchivo = true
        },
        setDefaultStateEditarArchivo(state, def) {
            state.editarArchivo = false
            state.stateEditarArchivo = Object.assign({}, def)
        }
    }
})

//vue
const app = new Vue({
    el: '#applicacion',
    router,
    store
})