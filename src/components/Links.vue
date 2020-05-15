<template>
    <div>
        <p class="link-ref">{{ linkref }}</p>
    </div>
</template>
<script>
export default {
  name: 'Links',
  props: {
    linkref: String
  }
}
</script>
<style scoped>
.link-ref {
    color: navy;
}
</style>
