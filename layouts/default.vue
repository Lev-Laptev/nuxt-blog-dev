<template>
  <section class="w-full pb-12 antialiased">
    <div class="mx-auto max-w-8xl">
      <AppHeader />
      <Nuxt />
      <AppFooter />
    </div>
  </section>
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
