<template>
  <v-fade-transition mode="out-in">
    <router-view />
  </v-fade-transition>
</template>

<script>
  // Styles
  import '@/styles/overrides.sass'

  export default {
    name: 'App',
    metaInfo: {
      title: 'CRUD iCertus - Projeto com Vuetify',
      titleTemplate: '%s | Material Dashboard Free',
      htmlAttrs: { lang: 'pt-br' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  }
</script>
