<template>
  <div class="container">
    <AppHeader />
    <Nuxt />
    <AppFooter />
  </div>
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
