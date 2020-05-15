<template>
  <b-container>
    <div v-if="meals.length">
      <b-row class="justify-content-center">
        <div v-bind:key="data.index" v-for="data in meals">
          <b-col >
            <router-link
        :to="{ name: 'categoryfilter', params: { name: data.strCategory } }"
        style="text-decoration: none">
        <card
            :images="data.strCategoryThumb"
            :tagss="tgs"
            :title="data.strCategory"/>
        </router-link>
          </b-col>
        </div>
      </b-row>
    </div>
    <div v-else>
      <h5>No meals available yet 😢</h5>
    </div>
  </b-container>
</template>
<script>
import axios from 'axios'
import Card from './Card.vue'
export default {
  data () {
    return {
      tgs: 'Category',
      meals: []
    }
  },
  components: {
    Card
  },
  mounted () {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => {
        this.meals = response.data.categories
      })
      .catch(error => {
        console.log(error)
      })
  },
  filters: {
    truncate (value, length, suffix) {
      if (value.length > length) {
        return value.substring(0, length) + suffix
      }
      return value
    }
  }

}
</script>
<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
}
.card{
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: 0 2px 15px 0 rgba(93, 95, 209, 0.16), 0 2px 10px 0 rgba(46, 38, 158, 0.12);
    border-color: rgb(75, 199, 199);
}
</style>
