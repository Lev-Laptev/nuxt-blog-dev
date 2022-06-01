<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4" align="center">
      <v-card width="500" class="elevation-4 text-left" shaped color="yellow">
        <v-card-title>Login</v-card-title>
        <v-card-subtitle>Login to your dashboard</v-card-subtitle>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="auth.email"
              label="Login"
              name="login"
              prepend-icon="mdi-account"
              type="text"
            />

            <v-text-field
              v-model="auth.password"
              label="Password"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
            />
          </v-form>
        </v-card-text>
        <v-card-actions class="text-center">
          <v-btn
            class="login-button"
            depressed
            large
            @click="login"
          >
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'SingInPage',
  data () {
    return {
      auth: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$fire.auth.signInWithEmailAndPassword(this.auth.email, this.auth.password)
        .then(() => {
          this.$nuxt.$router.push('/')
        }).catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
