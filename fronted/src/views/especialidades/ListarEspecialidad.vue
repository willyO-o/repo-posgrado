<template>
  <div>

    <CRow>
        <router-link to="/especialidades/crear">
            <CButton block color="primary" shape="pill" size="lg" class="m-3">Registrar Nuevo</CButton>
        </router-link>

      <CCol sm="12">
        <CTableWrapper
          :items="getShuffledUsersData()"
          hover
          striped
          border
          small
          fixed
          caption="Listado de Especialidades"
        />
      </CCol>
    </CRow>

  </div>
</template>

<script>
import CTableWrapper from '../base/Table.vue'
import usersData from '../users/UsersData'

export default {
  name: 'Tables',
  components: { CTableWrapper },
  methods: {
    shuffleArray (array) {

      return array
    },

    getShuffledUsersData () {
      return this.shuffleArray(usersData.slice(0))
    }
  }
}
</script>
