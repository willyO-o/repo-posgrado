<template>
  <div>
    <CRow>
      <CCol sm="10">
        <CCard>
          <CCardHeader>
            <strong>Subir Tesis/Monografia </strong><small></small>
          </CCardHeader>
          <CCardBody>
            <CInput
              label="Titulo"
              placeholder="Ingrese el titulo de la Tesis/Monografia"
            />
            <CInput label="Autor" placeholder="Nombre completo del autor" />
            <CInput label="Tutor" placeholder="Nombre completo del tutor" />
            <CRow>
              <CCol sm="6">
                <CSelect
                  label="Categoria"
                  :options="options"
                  placeholder="Seleccione Categoria"
                />
              </CCol>
              <CCol sm="6">
                <CSelect
                  label=" Tipo (Tesis/Monografia)"
                  :options="options"
                  placeholder="Seleccione"
                />
              </CCol>
            </CRow>
						<CRow>
              <CCol sm="6">
                <CSelect
                  label="Especialidad/Curso"
                  :options="options"
                  placeholder="Seleccione Especialidad"
                />
              </CCol>
              <CCol sm="6">
                <CSelect
                  label="Sede"
                  :options="options"
                  placeholder="Seleccione"
									v-model="sede"
                />
								{{sede}}
              </CCol>
            </CRow>

						

            <CInputFile label="Subir Archivo pdf" @change="fileselect"/>
						

            <CTextarea label="Resumen" placeholder="Resumen..." rows="9" />
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary"
              ><CIcon name="cil-check-circle"  /> Submit</CButton
            >
            <CButton type="reset" size="sm" color="danger"
              ><CIcon name="cil-ban" /> Reset</CButton
            >
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
		

    <CRow>
      <CCol sm="12" md="6">
        <CCard>
          <CCardHeader> <strong>Custom Validation</strong> Form </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                label="Input is valid"
                valid-feedback="Input is valid."
                invalid-feedback="Please provide at least 4 characters."
                value="Valid value"
                :is-valid="validator"
              />
              <CInput
                label="Input is invalid"
                valid-feedback="Thank you :)"
                invalid-feedback="Please provide at least 4 characters."
                :is-valid="validator"
              />
            </CForm>
          </CCardBody>
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
			sede:null,
			archivo:null,
      selected: [], // Must be an array reference!
      show: true,
      horizontal: { label: "col-3", input: "col-9" },
      options: ["Option 1", "Option 2", "Option 3"],
      selectOptions: [
        "Option 1",
        "Option 2",
        "Option 3",
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
		fileselect(event){
			console.log(event);
		}
  },
};
</script>
