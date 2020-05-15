<template>
    <div>
        <b-button
            :type="types"
            :class="classes"
        >
        {{ value }}
        </b-button>
    </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    types: String,
    classes: String,
    value: String
  }
}
</script>
