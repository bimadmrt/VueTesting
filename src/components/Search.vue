<template>
        <b-row class="row-search">
            <div class="col-md-12 mt-5 mb-4">
                <h1>Search Foods here</h1>
                <hr/>
                <div class="form-group">
                    <input
                    type="text"
                    class="form-control"
                    placeholder="Search Foods..."
                    v-model="keywordss"/>
                    <button
                    type="submit"
                    @click="getData(keywordss)"
                    class="btn btn-success btn-block mt-3">Search</button>
                </div>
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
import card from '@/components/Card.vue'

export default {
  data () {
    return {
      results: []
    }
  },
  components: {
    card
  },
  mounted () {
    axios.get('www.themealdb.com/api/json/v1/1/search.php?', {
      params: {
        s: this.$route.params.key
      }
    })
      .then((response) => {
        this.results = response.data.meals
      })
  },
  methods: {
    getData (keywordss) {
      axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keywordss}`).then((response) => {
        console.log(response.data.meals)
        this.results = response.data.meals
      })
    }
  }
}
</script>
<style>
.row-search {
    background-color: none;
    padding: 50px;
}
</style>
