const Principal_publico = () =>
    import ('./publicComponents/Principal_publico.js');
const Autenticacion_programa_login = () =>
    import ('./publicComponents/Autenticacion_programa_login.js');
const Principal_publico_ver_documento = () =>
    import ('./publicComponents/Principal_publico_ver_documento.js');
const Principal_publico_ver_documento_metadato = () =>
    import ('./publicComponents/Principal_publico_ver_documento_metadato.js');
const Principal_publico_busquedas = () =>
    import ('./publicComponents/Principal_publico_busquedas.js');
const page404 = () =>
    import ('./components/page404.js');



const routes = [{
        path: '/',
        component: Principal_publico
    },
    {
        path: '/login',
        component: Autenticacion_programa_login
    },
    {
        path: '/document/:name',
        component: Principal_publico_ver_documento
    },
    {
        path: '/document/full/:name',
        component: Principal_publico_ver_documento_metadato
    },
    {
        path: '/search',
        component: Principal_publico_busquedas
    },
    {
        path: "/*",
        component: page404
    }

]

//router
const router = new VueRouter({
    //hashbang: false,
    //mode: 'history',
    routes
})

//vuex store

const store = new Vuex.Store({
    state: {
        stateDocumento: {},
        stateSearch: ''
    },
    mutations: {

        setstateDocumento(state, documento) {
            state.stateDocumento = documento
        },
        setStateSearch(state, search) {
            state.stateSearch = search
        },

    },

})

//vue
const app = new Vue({
    el: '#applicacion',
    router,
    store
})
