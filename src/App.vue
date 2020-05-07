<template>
<div id="app">
      <Navbar />
      <Logo />
      <Title :strtitle="judul" />
      <h2 class="subtitle">
        Bima Demarta Aisy
      </h2>
      <category />
</div>
</template>

<script>
import Logo from './components/Logo.vue'
import Navbar from './components/Navbar.vue'
import Category from './components/Category.vue'
import Title from './components/Title.vue'

export default {
  name: 'navbar',
  data () {
    return {
      judul: 'PWA'
    }
  },
  components: {
    Logo,
    Navbar,
    Category,
    Title

  }
}
</script>

<style>
body{
  margin: 0;
  padding-top: 4.5rem;
  margin-bottom: 30px;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
  text-align: center;
}

.links {
  padding-top: 15px;
}
</style>
