<template>
  <div>
    <app-projects />
  </div>
</template>

<script>
import AppProjects from '@/components/projects/AppProjects.vue'

export default {
  name: 'ProjectsPage',
  components: {
    AppProjects
  },
  async fetch ({ store }) {
    try {
      await store.dispatch('projects/getProjects')
    } catch (e) {}
  }
}
</script>
