<template>
  <div class="columns">
    <div class="column is-4">
      <AuthorCard />
    </div>
    <div class="column is-8">
      <AuthorContent />

      <AuthorStepHistory />
    </div>
  </div>
</template>

<script>
import { AuthorCard, AuthorContent, AuthorStepHistory } from '@/components/Author'

export default {
  name: 'DefaultPage',
  components: {
    AuthorCard,
    AuthorContent,
    AuthorStepHistory
  }
}
</script>
