<template>
  <div class="title">
  <p>{{ titlePage }}</p>
  </div>
</template>

<script>
export default {
  props: {
    titlePage: {
      type: String,
      required: true,
    },
  },

};
</script>

<style lang="scss">
  .title{
    font-size: 22px;
    font-family: 'Roboto' sans-serif;
  }
</style>