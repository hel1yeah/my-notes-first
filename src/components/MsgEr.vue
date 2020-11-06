<template>
  <div class="msg">
  {{ msg }}
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>