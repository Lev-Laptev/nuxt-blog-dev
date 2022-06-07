<template>
  <div>
    <app-projects />

    {{ projects }}
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppProjects from '@/components/AppProjects.vue'

export default {
  name: 'ProjectsPage',
  components: {
    AppProjects
  },
  async fetch ({ store }) {
    try {
      await store.dispatch('projects/getProjects')
    } catch (e) {}
  },
  computed: {
    ...mapState('projects', ['projects'])
  }
}
</script>
