<template>
  <div class="container">
    <div class="row row-register p-5">
      <div class="col-lg-12">
        <div class="card register-form">
          <div class="card-body">
            <h1 class="text-center mb-5">Register.</h1>
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                <div class="col-md-6">
                  <input
                    id="name"
                    type="name"
                    class="form-control"
                    name="name"
                    value
                    required
                    autofocus
                    v-model="form.name"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="form.password"
                  />
                </div>
              </div>

              <div class="form-group row m-4">
                <div class="col-md-12">
                  <button type="submit"
                  class="btn btn-success btn-register btn-block">
                  Register</button>
                </div>
              </div>
            </form>
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
        name: '',
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
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {})
          this.$router.replace({ name: 'Login' })
        })
        .catch((err) => {
          this.error = err.message
        })
    }
  }
}
</script>
<style scoped>
.row-register {
  text-align: center;
}
.register-form {
  margin: auto;
  max-width: 600px;
  box-shadow: 0 2px 4px 0 rgb(17, 17, 17);
}
</style>
