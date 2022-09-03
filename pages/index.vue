<template>
  <div class="columns">
    <div class="column is-4">
      <AppAuthorCard />
    </div>
    <div class="column is-8">
      <AppAuthorContent />

      <AppAuthorStepHistory />
    </div>
  </div>
</template>

<script>
import { AppAuthorCard, AppAuthorContent, AppAuthorStepHistory } from '@/components/Author'

export default {
  name: 'DefaultPage',
  components: {
    AppAuthorCard,
    AppAuthorContent,
    AppAuthorStepHistory
  }
}
</script>
