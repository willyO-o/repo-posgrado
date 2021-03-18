export default {
    data() {
        return {
            saludo: 'hola',
            contador: 1
        }
    },

    template: //html
        `<div>hola qu ahace{{saludo}}<br>
		<input v-model="saludo">
		<button @click="sumar()" class="btn btn-primary">presionaste {{contador}} veces</button>
	</div>`,
    methods: {
        sumar() {
            this.contador = this.contador + 2
        }
    },
}