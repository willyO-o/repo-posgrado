const Index = () =>
    import ('./publicComponents/index.js');
const Login = () =>
    import ('./publicComponents/login.js');
const verDocumento = () =>
    import ('./publicComponents/verDocumento.js');
const verDocumentoFull = () =>
    import ('./publicComponents/verDocumentoFull.js');
const resultadosBusqueda = () =>
    import ('./publicComponents/resultadosBusqueda.js');
const page404 = () =>
    import ('./components/page404.js');



const routes = [{
        path: '/',
        component: Index
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/document/:name',
        component: verDocumento
    },
    {
        path: '/document/full/:name',
        component: verDocumentoFull
    },
    {
        path: '/search',
        component: resultadosBusqueda
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
