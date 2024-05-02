<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height mx-auto" max-width="70%">

      <div class="text-center pb-5 mt-5">
        <div class="text-body-2 font-weight-light mb-n1">Vue.js & Vuetify</div>

        <h1 class="text-h4 text-md-h2 font-weight-bold">Organograma</h1>
      </div>


      <v-row>

        <v-col cols="12">
          <CardHome path="/times" title="Ver organograma" subtitle="Ver organograma" icon="mdi mdi-family-tree">
          </CardHome>

        </v-col>
        <v-col :cols="cols()">
          <CardHome path="/cadColaborador" title="Cadastrar novo colaborador" subtitle="Adicione um novo membro ao time"
            icon="mdi mdi-account-multiple-plus">
          </CardHome>
        </v-col>

        <v-col :cols="cols()">
          <CardHome path="/cadTimes" title="Cadastrar novo time" subtitle="Adicione um novo time"
            icon="mdi mdi-view-grid-plus">
          </CardHome>
        </v-col>

      </v-row>
    </v-responsive>
  </v-container>
</template>


<script>
export default {
  methods: {
    cols() {
      if (this.$vuetify.display.mobile) {
        return '12'
      } else {
        return '6'
      }
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
