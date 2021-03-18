const Dashboard = () =>
    import ('./components/dashboard.js');
const Card = () =>
    import ('./components/card.js');
const Especialidades = () =>
    import ('./components/especialidades.js');


const Bar = {
    template: "<div>hola aaaa </div>"
}


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