<template>
<div>
    <div class="row row-about p-5" v-for="data in results" :key="data.idMeal">
        <div class="col-md-6 p-4">
            <img :src="data.strMealThumb" class="img-fluid"/>
        </div>
        <div class="col-md-6 p-4">
            <titlee :strtitle="data.strMeal"/>
            <cbadge :strvariant="variant1" :text="data.strCategory"/>
            <cbadge :strvariant="variant2" :text="data.strArea"/>
            <div v-if="user.loggedIn">
              <button
              @click="addFav(data.idMeal,data.strMealThumb,data.strMeal,data.strCategory)"
              class="btn btn-info mt-4">Add To Favourites</button>
            </div>
            <p class="text-justify mt-4">
                {{ data.strInstructions }}
            </p>
        </div>
        <div class="col-md-12">
            <div class="embed-responsive embed-responsive-16by9 mt-4">
                <iframe class="embed-responsive-item"
                    :src="data.strYoutube.replace('watch?v=','embed/')"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope;picture-in-picture"
                    allowfullscreen>
                    </iframe>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import titlee from './Title.vue'
import cbadge from './Badge.vue'

const STORAGE_KEY = 'FAVOURITESDATA'

export default {
  name: 'Meals Detail',
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: 'user'
    })
  },
  data () {
    return {
      variant1: 'success',
      variant2: 'info',
      results: '',
      fav: []
    }
  },
  components: {
    titlee,
    cbadge
  },
  mounted () {
    axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php', {
      params: {
        i: this.$route.params.id
      }
    })
      .then((response) => {
        this.results = response.data.meals
      })
  },
  methods: {
    addFav (favId, favPict, favName, favCategory) {
      this.fav.push({
        id: favId, picture: favPict, name: favName, category: favCategory
      })
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.fav))
      this.$toast.success('Added to favorites !', {
        theme: 'bubble',
        position: 'top-center',
        duration: '1500'
      })
    }
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
