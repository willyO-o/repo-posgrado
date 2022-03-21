export default {
    props: ['options', 'value', 'url'],
    template: //html
        ` 
	<select style="width:100%">
		<slot></slot>
	</select>
  	`,
    mounted: function() {
        var vm = this
        $(this.$el)
            // init select2
            .select2({

                language: {
                    noResults: function() {

                        return "No se encontraron Coincidencias";
                    },
                    searching: function() {

                        return "Buscando..";
                    },
                    inputTooShort: function() {
                        return "Escriba almenos 1 caracter para comenzar busqueda";
                    }
                },
                minimumInputLength: 1,
                placeholder: {
                    id: -1,
                    text: "Buscar"
                },
                ajax: {
                    url: this.url,
                    dataType: 'json',
                    type: "POST",
                    data: function(term) {
                        return {
                            term: term.term
                        };
                    },
                    processResults: function(data) {
                        return {
                            results: $.map(data, function(respuesta) {
                                //console.log(respuesta);
                                return {
                                    text: respuesta.text,
                                    id: respuesta.id,
                                }
                            })
                        };
                    }

                }
            })
            .val(this.value)
            .trigger('change')
            // emit event on change.
            .on('change', function() {
                vm.$emit('input', this.value)
            })
    },
    watch: {
        value: function(value) {
            // update value
            $(this.$el)
                .val(value)
                .trigger('change')
        },
        options: function(options) {
            // update options
            $(this.$el).empty().select2({ data: options })
        }
    },
    destroyed: function() {
        $(this.$el).off().select2('destroy')
    }
}