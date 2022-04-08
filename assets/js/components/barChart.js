export default {
	extends: VueChartJs.Bar,
	props: ['anio'],
	data: function () {
		return {
			url: base_url,
			datacollection: {
				labels: [],
				datasets: [{
					label: 'Data One',
					backgroundColor: '#f87979',
					pointBackgroundColor: 'white',
					borderWidth: 1,
					pointBorderColor: '#249EBF',
					data: []
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						},
						gridLines: {
							display: true
						}
					}],
					xAxes: [{
						ticks: {
							beginAtZero: true
						},
						gridLines: {
							display: false
						}
					}]
				},
				legend: {
					display: false
				},
				tooltips: {
					enabled: true,
					mode: 'single',
					callbacks: {
						label: function (tooltipItems, data) {
							return '#' + tooltipItems.yLabel;
						}
					}
				},
				responsive: true,
				maintainAspectRatio: false,
				height: 200
			}
		}
	},

	created() {

		this.getData(this.anio)
	},
	watch: {
		anio: function () {
			this.getData(this.anio)
		}
	},
	methods: {
		getData(anio) {
			this.datacollection.labels = []
			this.datacollection.datasets[0].data = []
			if (this.anio != '') {
				axios.get(this.url + 'archivo/barras/' + anio)
					.then(res => {
						res.data.barras.map((datos) => {
							this.datacollection.labels.push(datos.mes)
							this.datacollection.datasets[0].data.push(datos.publicados)
						})

						this.renderChart(this.datacollection, this.options)

					})
					.catch(err => {
						alert("Ocurrio un Error con la grafica, no disponible por el momento");
					})
			}

		}
	},
}
