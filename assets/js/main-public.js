const Index = () =>
    import ('./publicComponents/index.js');
const Login = () =>
    import ('./publicComponents/login.js');
const verDocumento = () =>
    import ('./publicComponents/verDocumento.js');
// const subirArchivos = () =>
//     import ('./publicComponents/subirArchivos.js');
// const listarArchivos = () =>
//     import ('./publicComponents/listarArchivos.js');



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

]

//router
const router = new VueRouter({
    hashbang: false,
    //mode: 'history',
    routes
})

//vuex store

const store = new Vuex.Store({
    state: {
        listadoDocumentos: [],
    },
    mutations: {

        setListadoDocumentos(state, documentos) {
            state.listadoDocumentos = documentos
        },

    }
})

//vue
const app = new Vue({
    el: '#applicacion',
    router,
    //store
})
