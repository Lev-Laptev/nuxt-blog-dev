<template>
  <div class="container">
    <div class="wrapper">
      <AppHeader />
      <Nuxt />
      <AppFooter />
    </div>
  </div>
</template>

<script>
import { AppFooter } from '@/components/Footer'
import { AppHeader } from '@/components/Header'

export default {
  name: 'LayoutDefault',
  components: {
    AppFooter,
    AppHeader
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    display: grid;
    grid-template-rows: auto 1fr auto;

    height: 100vh;
  }
</style>
