<template>
  <div class="flex flex-column align-start align-self-start justify-start">
    <h1>Welcome to your dashboard</h1>
    <p>You are now logged in {{ $fire.auth.currentUser.email }}</p>
    <v-btn @click.prevent="logout">
      Logout
    </v-btn>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  methods: {
    logout () {
      this.$fire.auth.signOut()
    }
  }
}
</script>
