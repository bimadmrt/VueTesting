<template>
    <div>
        <b-card
            v-bind:img-src="images"
            img-alt="Image"
            img-top
            v-bind:tag="tagss"
            style="max-width: 20rem;"
            class="mb-2 aisy"
        >
            <h4 class="card-title">{{ title }}</h4>
            <p class="card-text">{{ text }}</p>
        </b-card>
    </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    images: String,
    tagss: String,
    title: String,
    text: String
  }
}
</script>
<style scoped>
.card-title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 400;
    font-size: 20px;
    color: #35495e;
    letter-spacing: 1px;
    text-align: center;
}
.aisy{
box-sizing: border-box;
    border-radius: 5px;
    box-shadow: 0 2px 15px 0 rgba(93, 95, 209, 0.16), 0 2px 10px 0 rgba(46, 38, 158, 0.12);
    border-color: rgb(75, 199, 199);
}
</style>
