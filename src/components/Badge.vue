<template>
    <div>
        <b-badge pill :variant="strvariant">{{ text }}</b-badge>
    </div>
</template>
<script>
export default {
  name: 'Badge',
  props: {
    strvariant: String,
    text: String
  }
}
</script>
