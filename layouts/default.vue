<template>
  <v-app>
    <v-main>
      <v-container>
        <AppHeader />
        <Nuxt />
        <AppFooter />
      </v-container>
    </v-main>
  </v-app>
</template>

</template>

<script>
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: 'LayoutDefault',

  components: {
    AppFooter,
    AppHeader
  }
}
</script>
