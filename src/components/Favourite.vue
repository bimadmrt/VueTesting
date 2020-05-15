<template>
<b-row class="row-category">
    <div class="col-md-12 mt-5 mb-4">
        <h1 class="text-secondary">Your Favourite Foods</h1>
        <hr/>
        <titlee :strtitle="this.$route.params.name"/>
    </div>
    <div class="col-md-3" v-for="result in fav" :key="result.id">
        <router-link
        :to="{ name: 'Detail', params: { id: result.id } }"
        style="text-decoration: none">
        <card
            :images="result.picture"
            :title="result.name"/>
        </router-link>
    </div>
</b-row>
</template>
<script>
import titlee from './Title.vue'
import card from './Card.vue'

const STORAGE_KEY = 'FAVOURITESDATA'

export default {
  name: 'Favourites',
  data () {
    return {
      ttl: 'Favourites',
      tgs: 'Meals',
      result: '',
      fav: []
    }
  },
  components: {
    titlee,
    card
  },
  async created () {
    this.fav = JSON.parse(localStorage.getItem(STORAGE_KEY) || [])
    console.log(this.fav)
  }
}
</script>
<style>
.row-category {
    background-color: none;
    padding: 50px;
}
.category-text {
    text-align: center;
}
</style>
