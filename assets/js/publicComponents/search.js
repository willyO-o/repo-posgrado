Vue.component('Search', {
    template: //html
        `
	<div class="input-group ">
		<input type="text" class="form-control" placeholder="Buscar" aria-label="Recipient's username" aria-describedby="basic-addon2" v-model="search" v-on:keyup.enter="buscar()" > 
		<div class="input-group-append">
			<button class="btn btn-outline-secondary border " type="button" @click="buscar()" ><i class="fas fa-search"></i></button>
		</div>
	</div>
	`,

    data() {
        return {
            search: ''
        }
    },
    methods: {
        ...Vuex.mapMutations(['setStateSearch']),
        buscar() {
            this.setStateSearch(this.search)
            this.$router.push('/search')
            this.search = ''
        },

    },
    computed: {
        ...Vuex.mapState(['stateSearch'])

    },

})