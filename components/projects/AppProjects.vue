<template>
  <div>
    <app-projects-header />

    <div class="columns is-multiline is-mobile is-centered">
      <div
        v-for="item in projects"
        :key="item.id"
        class="column is-12-mobile is-6-tablet is-4-desktop"
      >
        <div
          class="card"
        >
          <div class="card-content is-flex is-flex-direction-column is-justify-content-space-between">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">
                  {{ item.name }}
                </p>
                <p class="subtitle is-6">
                  {{ item.description }}
                </p>
              </div>
            </div>

            <div class="content">
              <a
                class="button is-info is-link is-outlined is-small"
                target="_blank"
                :href="item.html_url"
              >
                Перейти
              </a>

              <span class="tag is-success">
                {{ new Date(item.updated_at).toLocaleDateString() }}
              </span>

              <b-field grouped group-multiline>
                <div class="control">
                  <b-taglist attached>
                    <b-tag type="is-dark">
                      language
                    </b-tag>
                    <b-tag type="is-info">
                      {{ item.language ? item.language : 'not found' }}
                    </b-tag>
                  </b-taglist>
                </div>

                <div class="control">
                  <b-taglist attached>
                    <b-tag type="is-dark">
                      size
                    </b-tag>
                    <b-tag type="is-success">
                      {{ item.size }} KB
                    </b-tag>
                  </b-taglist>
                </div>
              </b-field>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppProjectsHeader from '@/components/Projects/AppProjectsHeader.vue'

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

<style lang="scss" scoped>
  .card, .card-content {
    height: 100%;
  }
</style>
