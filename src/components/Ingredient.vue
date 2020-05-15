<template>
<b-row class="row-category">
    <div class="col-md-12 mt-5 mb-4">
        <titlee :strtitle="ttl"/>
    </div>
    <div class="col-md-3" v-for="data in results" :key="data.idIngredient">
        <router-link
        :to="{ name: 'ingredientfilter', params: { name: data.strIngredient } }"
        style="text-decoration: none">
        <card
            :title="data.strIngredient"/>
        </router-link>
    </div>
</b-row>
</template>
<script>
import axios from 'axios'
import titlee from './Title.vue'
import card from './Card.vue'

export default {
  name: 'Ingredients',
  data () {
    return {
      ttl: 'Choose Your Ingredients',
      results: []
    }
  },
  components: {
    titlee,
    card
  },
  mounted () {
    axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list').then((response) => {
      console.log(response.data.meals)
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
