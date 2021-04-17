const Index = () =>
    import ('./publicComponents/index.js');
const Login = () =>
    import ('./publicComponents/login.js');
// const Especialidades = () =>
//     import ('./publicComponents/especialidades.js');
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

]

//router
const router = new VueRouter({
    //mode:'history',
    routes
})

//vuex store
/*
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
*/
//vue
const app = new Vue({
    el: '#applicacion',
    router,
    //store
})
