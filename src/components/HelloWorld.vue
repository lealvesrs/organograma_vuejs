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
         <RouterLink to="/cadColaborador">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            prepend-icon="mdi-text-box-outline"
            rounded="lg"
            subtitle="Learn about all things Vuetify in our documentation."
            title="Documentation"
            color="indigo-darken-2"
            variant="flat"
          >
         
          </v-card>
         </RouterLink>
        </v-col>

        <v-col cols="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
            prepend-icon="mdi-star-circle-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Explore available framework Features."
            target="_blank"
            title="Features"
            variant="text"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://vuetifyjs.com/components/all"
            prepend-icon="mdi-widgets-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Discover components in the API Explorer."
            target="_blank"
            title="Components"
            variant="text"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://discord.vuetifyjs.com"
            prepend-icon="mdi-account-group-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Connect with Vuetify developers."
            target="_blank"
            title="Community"
            variant="text"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
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
