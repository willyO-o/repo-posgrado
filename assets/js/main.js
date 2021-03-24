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

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
    router
}).$mount('#applicacion')