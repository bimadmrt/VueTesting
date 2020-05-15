<template>
  <div>
  <b-navbar toggleable="lg">
    <b-navbar-brand href="#">BimasaktiCooking</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#">Category</b-nav-item>
        <b-nav-item href="#">Ingredient</b-nav-item>
        <b-nav-item href="#">Area</b-nav-item>
        <b-nav-item href="#">About</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
export default {
  data () {
    return {
      meal: ''

    }
  },
  methods: {
    getMeal () {

    }
  }
}
</script>
<style  scoped>
.navbar {
  background-color:cadetblue;
  color: black;
}

</style>
