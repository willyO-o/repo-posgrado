export default {
    data() {
        return {
            saludo: 'dashborad',
            cotador: 1
        }
    },
    template: //html
        `<div>hola desde {{saludo}}<br>
		<button @click="cotador++" class="btn btn-success">presionaste {{cotador}} veces</button>
		
	</div>
	`
}