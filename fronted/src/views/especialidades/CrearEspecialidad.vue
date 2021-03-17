<template>
  <div>
    <CRow>
      <CCol sm="10">
				
				
        <CCard>
          <CCardHeader>
            <strong>Registrar Especialidad </strong><small></small>
          </CCardHeader>
          <CCardBody>
            <CInput
              label="Especialidad"
              placeholder="Ingrese la especialidad"
              valid-feedback="correcto."
              invalid-feedback="La especialidad debe tener almenos 6 caracteres."
              value="Valid value"
              :is-valid="validator"
              v-model="especialidad"
            />

            <CRow>
              <CCol sm="6">
                <CSelect
								attrs="options.value"
                  label="Version"
                  :options="[ { value: 'js', label: 'JavaScript' }, { value: 'html', label: 'HTML' } , { value: 'css', label: 'HTML' }]"
                  placeholder="Seleccione Version"
                  @change="ad"
                />
              </CCol>
							<CCol sm=" 6">
								<select  v-model="versionSelecionada">
									 <option v-for="option in options" v-bind:value="option.value">
										{{ option.label }}
									</option>
								</select>
								{{versionSelecionada}}
							</CCol>
            </CRow>

          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary" @click="registrar()"
              ><CIcon name="cil-check-circle" /> Registrar
            </CButton >
          </CCardFooter>
        </CCard>
				
      </CCol>
    </CRow>
		
  </div>
</template>

<script>

export default {
  name: "Forms",
  data() {
    return {
        especialidad:'',
        versionSelecionada: null,
				version:0,
        show: true,
        options: [
            {
                value:1,
								label: "option 1",
            },
            {
								value:2,
                label:"Option 2",
            },
            {
								value:3,
                label:"Option 3",
            },
            
        ],

    };
  },
  methods: {
    validator(val) {
      return val ? val.length >= 4 : false;
    },
    registrar(){
        console.log(this.especialidad);
        console.log(this.versionSelecionada);
    },
		ad(at){
			console.log(at);
			this.versionSelecionada=at.target.name;
		}

  },
};
</script>
