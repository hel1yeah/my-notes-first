<template>
  <div class="form">
    <label for="form-id">Заметка</label>
    <div id="form-id">
      <label> Загловок заметки </label>
      <input type="text" v-model="note.title" />
      <label> Описание заметки </label>
      <input type="text" v-model="note.description"/>
      <label> Test заметки </label>
      <input type="text" v-model="note.test" />
      <button @click="addNote">Записать заметку</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addNote(){

      this.$emit('addNote', this.note)
    }
  },
};
</script>
<style lang="scss">
#form-id {
  width: 200px;
  display: flex;
  flex-direction: column;
}
</style>