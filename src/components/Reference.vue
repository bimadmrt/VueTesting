<template>
<b-row class="row-meals">
    <b-col class="col-md-12 mt-5 mb-4">
        <titlee :strtitle="ttl"/>
    </b-col>
    <b-col class="col-md-3" v-for="(data, index) in datafood" :key="index">
        <router-link
        :to="{ name: 'Detail', params: { id: data.idMeal } }"
        style="text-decoration: none">
        <card :images="data.strMealThumb" :tagss="tgs" :title="data.strMeal"/>
        </router-link>
    </b-col>
</b-row>
</template>
<script>
import axios from 'axios'
import titlee from './Title.vue'
import card from './Card.vue'

export default {
  name: 'Meals',
  data () {
    return {
      ttl: 'Latest Foods',
      tgs: 'Meals',
      datafood: []
    }
  },
  components: {
    titlee,
    card
  },
  async created () {
    const BASEURI = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian'
    axios.get(BASEURI).then((result) => {
      this.datafood = result.data.meals
    })
  }
}
</script>
<style>
.row-meals {
    padding: 50px;
}
.food-title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 400;
    font-size: 20px;
    color: #35495e;
    letter-spacing: 1px;
    text-align: center;
}
</style>
