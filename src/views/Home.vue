<template>
<div id="app">
      <AppLogo />
      <Title :strtitle="judul" />
      <h2 class="subtitle">
        Bima Demarta Aisy
      </h2>
      <category />
</div>
</template>

<script>
import AppLogo from '@/components/AppLogo.vue'
import Category from '@/components/Category.vue'
import Title from '@/components/Title.vue'

export default {
  name: 'navbar',
  data () {
    return {
      judul: 'PWA Meal Testing'
    }
  },
  components: {
    AppLogo,
    Category,
    Title

  }
}
</script>

<style>
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
