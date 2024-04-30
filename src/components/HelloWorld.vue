<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-center fill-height mx-auto"
      max-width="70%"
    >

      <div class="text-center pb-12">
        <div class="text-body-2 font-weight-light mb-n1">Vue.js & Vuetify</div>

        <h1 class="text-h4 text-md-h2 font-weight-bold">Organograma</h1>
      </div>


      <v-row>

        <v-col cols="12">
          <router-link to="/times"><v-card
            class="py-4"
            color="indigo-darken-2"
            prepend-icon="mdi mdi-family-tree"
            rounded="lg"
            variant="flat"
          >
  
            <template #title>
              <h2 class="text-h5 font-weight-bold">Ver organograma</h2>
            </template>

            <template #subtitle>
              <div class="text-subtitle-1">
                Veja os times e seus colaboradores
              </div>
            </template>
            
          </v-card></router-link>
        </v-col>
        <v-col cols="6">
          <router-link to="/cadColaborador"><v-card
            class="py-4"
            color="indigo-darken-2"
            prepend-icon="mdi mdi-account-multiple-plus"
            rounded="lg"
            variant="flat"
          >
  
            <template #title>
              <h2 class="text-h5 font-weight-bold">Cadastrar novo colaborador</h2>
            </template>

            <template #subtitle>
              <div class="text-subtitle-1">
                Adicione um novo membro ao time
              </div>
            </template>
            
          </v-card></router-link>
        </v-col>

        <v-col cols="6">
          <router-link to="/cadTimes"><v-card
            class="py-4"
            color="indigo-darken-2"
            prepend-icon="mdi mdi-view-grid-plus"
            rounded="lg"
            variant="flat"
          >
  
            <template #title>
              <h2 class="text-h5 font-weight-bold">Cadastrar novo time</h2>
            </template>

            <template #subtitle>
              <div class="text-subtitle-1">
                Adicione um novo time
              </div>
            </template>
            
          </v-card></router-link>
        </v-col>

      </v-row> 
    </v-responsive>
  </v-container>
</template>

<script setup>

  //
</script>

<style scoped>
a {
  text-decoration: none;
}

</style>
