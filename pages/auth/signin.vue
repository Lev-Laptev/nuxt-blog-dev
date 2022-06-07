<template>
  <div class="columns wrapper">
    <div class="column is-12-mobile is-6-tablet is-5-desktop">
      <form>
        <div
          class="modal-card"
        >
          <header class="modal-card-head">
            <p class="modal-card-title">
              Login
            </p>
          </header>

          <section class="modal-card-body">
            <b-field label="Login">
              <b-input
                v-model="auth.email"
                type="text"
                placeholder="Login"
                required
                rounded
              />
            </b-field>

            <b-field label="Пароль">
              <b-input
                v-model="auth.password"
                type="password"
                password-reveal
                placeholder="Password"
                required
                rounded
              />
            </b-field>
          </section>
          <footer class="modal-card-foot">
            <b-button
              class="is-info"
              label="Login"
              type="submit"
              @click.prevent="login"
            />
          </footer>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingInPage',
  layout: 'auth',
  data: () => ({
    isActive: false,
    auth: {
      email: 'common.levlaptev@gmail.com',
      password: '123!!!'
    }
  }),
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

<style lang="scss">
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;
  }

  .modal-card {
    width: auto;

    &-head, &-foot {
      background-color: #ffffff;
    }
  }
</style>
