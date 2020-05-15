<template>
<div class="container-fluid">
  <div class="row row-login p-5">
    <div class="col-lg-12">
      <div class="card login-form">
        <div class="card-body">
          <div v-if="error">
            <b-alert show dismissible variant="danger">
              <b>{{error}}</b>
            </b-alert>
          </div>
          <form @submit.prevent="submit">
              <h1 class="text-center mb-5">Login.</h1>
              <div class="form-group mb-3" style="width:350px; margin:auto;">
                  <input
                  type="text"
                  class="form-control"
                  placeholder="Email"
                  required="required" name="email"
                  v-model="form.email">
              </div>
              <div class="form-group mb-3" style="width:350px; margin:auto;">
                  <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  required="required"
                  name="password"
                  v-model="form.password">
              </div>
              <div class="form-group mb-3" style="width:350px; margin:auto;">
                  <button type="submit" class="btn btn-success btn-block btn-login">Log in</button>
              </div>
          </form>
          <p class="text-center">
            Don't have any account ? <router-link to="/register">Register</router-link></p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      error: null
    }
  },
  methods: {
    submit () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          this.$router.replace({ name: 'Home' })
          console.log(data)
        })
        .catch((err) => {
          this.error = err.message
        })
    }
  }
}
</script>
<style scoped>
.row-login {
  text-align: center;
}
.login-form {
  margin: auto;
  max-width: 500px;
  box-shadow: 0 2px 4px 0 rgb(17, 17, 17);
}
.btn-login {
  border-radius: 50px;
}
</style>
