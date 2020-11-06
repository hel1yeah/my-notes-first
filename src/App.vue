<template>
  <div id="app">
    <title-app :titlePage="titlePage" />
    <msgEr :msg="msg"/>
    <formApp :note="note" @addNote='addNote'/>
    <notesApp :notes="notes" />
  </div>
</template>

<script>
import titleApp from "@/components/TitleApp";
import formApp from "@/components/FormApp";
import notesApp from "@/components/NotesApp";
import msgEr from "@/components/MsgEr";

export default {
  name: "App",
  components: {
    titleApp,
    formApp,
    notesApp,
    msgEr,
  },
  data() {
    return {
      titlePage: "App Vue my",
      msg: '',
      note:{
        title: '',
        description: '',
        test: '',
      },
      notes:[
        {
        title: 'Первая заметка',
        description: 'Описание заметки',
        test: 'Тест заметки',
        },
        {
        title: 'Вторая заметка',
        description: 'Описание заметки',
        test: 'Тест заметки',
        },
        {
        title: 'Третяя заметка',
        description: 'Описание заметки',
        test: 'Тест заметки',
        },
      ]
    };
  },
  methods: {
    addNote(){
      // description, test
      const {title, description, test} = this.note;
      if (!title.trim().length) {
       return this.msg = 'Не заполненно поле тайтл'
      }
      this.msg = '';
      this.notes.push({
        title, 
        description, 
        test,
      });
      this.note.title = "";
      this.note.description = "";
      this.note.test = "";
    },

  },
};
</script>

<style>
#app {
  width: 100%;
  height: 96vh;
  background-image: url("./assets/logo.png");
  background-repeat: no-repeat;
  background-size: initial;
  background-position: right bottom;
}
</style>
