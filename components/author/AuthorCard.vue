<template>
  <div class="colums">
    <div class="column is-4">
      <div class="card">
        <div class="card-image">
          <b-image
            :src="require('@/assets/image/avatar.png')"
            ratio="4by4"
            alt="avatar"
          >
            <template #placeholder>
              <b-skeleton
                class="skeleton-placeholder"
                height="100%"
              />
            </template>
          </b-image>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img :src="require('@/assets/image/avatar.png')" alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">
                Lev Laptev
              </p>
              <p class="subtitle is-6">
                Frontend Develop
              </p>
            </div>
          </div>

          <div class="content">
            <Mail />
            <Glob />
            <Github />
          </div>
        </div>
      </div>
    </div>
    <div class="column is-8" />
  </div>
</template>

<script>
import Glob from '@/assets/icons/glob.svg?inline'
import Github from '@/assets/icons/github_new.svg?inline'
import Mail from '@/assets/icons/mail.svg?inline'

export default {
  components: { Mail, Glob, Github }
}
</script>

<style scoped>
.b-skeleton {
    height: 100%;
    position: absolute;
    top: 0;
}
</style>
