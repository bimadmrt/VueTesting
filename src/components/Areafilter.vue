<template>
<b-row class="row-category">
    <div class="col-md-12 mt-5 mb-4">
        <h1 class="text-secondary">Foods by Area</h1>
        <hr/>
        <titlee :strtitle="this.$route.params.name"/>
    </div>
    <div class="col-md-3" v-for="data in results" :key="data.idMeal">
        <router-link
        :to="{ name: 'Detail', params: { id: data.idMeal } }"
        style="text-decoration: none">
        <card
            :images="data.strMealThumb"
            :title="data.strMeal"/>
        </router-link>
    </div>
    <div class="col-md-12 mt-4" v-if="results == null">
      <h4 class="text-center text-secondary">No Foods</h4>
    </div>
</b-row>
</template>
<script>
import axios from 'axios'
import titlee from './Title.vue'
import card from './Card.vue'

export default {
  name: 'Area',
  data () {
    return {
      ttl: 'Meals by Area',
      tgs: 'Meals',
      results: []
    }
  },
  components: {
    titlee,
    card
  },
  mounted () {
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?', {
      params: {
        a: this.$route.params.name
      }
    })
      .then((response) => {
        this.results = response.data.meals
      })
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
