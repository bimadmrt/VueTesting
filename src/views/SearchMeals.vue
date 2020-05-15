<template>
    <div class="container-fluid">
        <search/>
    </div>
</template>
<script>
import search from '@/components/Search.vue'

export default {
  components: {
    search
  }
}
</script>
<style>
.row-search {
    background-color: none;
    padding: 50px;
}
</style>
