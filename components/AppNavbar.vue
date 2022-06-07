<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          class="navbar__icon"
          src="~/assets/icons/icons.svg"
          alt="to-do"
        >
      </b-navbar-item>
    </template>

    <template #start>
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/' }"
      >
        Home
      </b-navbar-item>

      <b-navbar-item
        tag="router-link"
        :to="{ path: '/projects' }"
      >
        Projects
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a
            class="button is-info"
            @click.prevent="logout"
          >
            <strong>Logout</strong>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'AppNavbar',
  methods: {
    logout () {
      this.$fire.auth.signOut()
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar__icon {
  width: 50px;
  height: 50px;
}
</style>
