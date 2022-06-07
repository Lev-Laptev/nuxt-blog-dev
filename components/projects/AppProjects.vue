<template>
  <div>
    <app-projects-header />
    {{ projects }}
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppProjectsHeader from '@/components/projects/AppProjectsHeader.vue'

export default {
  name: 'AppProjects',
  components: {
    AppProjectsHeader
  },
  computed: {
    ...mapState('projects', ['projects'])
  }
}
</script>
