<template>
  <div class="notes">
    <div class="notes__item" v-for="(note, index) in notes" :key="index">
      <div class="notes__title">
        <h2>{{ note.title }}</h2>
      </div>
      <div class="notes__descr">
        <p>{{ note.description }}</p>
      </div>
      <div class="notes__test">
        <p>{{ note.test }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notes: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>