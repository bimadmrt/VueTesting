<template>
    <div class="container-fluid">
        <div class="row row-dashboard">
            <div class="col-lg-12">
                <div
                    v-if="user"
                    class="alert alert-success mt-3"
                    role="alert">
                    Welcome Back {{ user.data.displayName }} !
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: 'user'
    })
  }
}
</script>
