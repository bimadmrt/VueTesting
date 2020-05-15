<template>
    <div class="container-fluid">
        <ingredient />
    </div>
</template>

<script>
import Ingredient from '@/components/Ingredient.vue'

export default {
  name: 'Foods',
  components: {
    Ingredient
  }
}
</script>

<style>
.container-fluid {
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: none;
}
</style>
