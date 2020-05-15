<template>
<b-row class="row-area">
    <b-col class="col-md-12 mt-5 mb-4">
        <titlee :strtitle="ttl"/>
    </b-col>
    <b-col class="col-md-1" v-for="(data, index) in dataarea" :key="index">
        <router-link
        :to="{ name: 'areafilter', params: { name: data.strArea } }"
        style="text-decoration: none; color: black">
        <p class="area-text">{{ data.strArea }}</p>
        </router-link>
    </b-col>
</b-row>
</template>
<script>
import axios from 'axios'
import titlee from './Title.vue'

export default {
  data () {
    return {
      ttl: 'The Meals Countries',
      dataarea: []
    }
  },
  components: {
    titlee
  },
  async created () {
    const BASEURI = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
    axios.get(BASEURI).then((result) => {
      this.dataarea = result.data.meals
    })
  }
}
</script>
<style>
.row-area {
    padding: 50px;
}
.col-title {
    margin-bottom: 30px;
}
.area-text {
    text-align: center;
}
</style>
