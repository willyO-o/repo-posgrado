<template>
  <div>

    <CRow>
        


            <CLink
            href="#/archivos/crear"
            >
                <CButton block color="primary" shape="pill" size="lg" class="m-3">Primary</CButton>
             </CLink>
             

       
        
      <CCol sm="12">
        <CTableWrapper
          :items="getShuffledUsersData()"
          hover
          striped
          border
          small
          fixed
          caption="Listado de Archivos"
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
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
    },

    getShuffledUsersData () {
      return this.shuffleArray(usersData.slice(0))
    }
  }
}
</script>
