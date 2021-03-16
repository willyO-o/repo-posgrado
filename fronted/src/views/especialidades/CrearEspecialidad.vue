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
                  label="Version"
                  :options="options"
                  placeholder="Seleccione Version"
                  v-bind="versionSelecionada"
                />
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
        versionSelecionada:null,
        selected: [], // Must be an array reference!
        show: true,
        horizontal: { label: "col-3", input: "col-9" },
        options: [
            {
                key:1,
                value:"Option 1"
            },
            {
                key:2,
                value:"Option 2"
            },
            {
                key:3,
                value:"Option 3"
            },
            
        ],
        selectOptions: [
            " 1",
            " 2",
            " 3",
            {
            value: "some value",
            label: "Selected option",
            },
        ],
        selectedOption: "some value",

        formCollapsed: true,
        checkboxNames: [
            "Checkboxes",
            "Inline Checkboxes",
            "Checkboxes - custom",
            "Inline Checkboxes - custom",
        ],
        radioNames: [
            "Radios",
            "Inline Radios",
            "Radios - custom",
            "Inline Radios - custom",
        ],
        };
  },
  methods: {
    validator(val) {
      return val ? val.length >= 4 : false;
    },
    registrar(){
        console.log(this.especialidad);
        console.log(this.version);
    },

  },
};
</script>
