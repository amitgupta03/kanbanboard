<template>
  <v-app>
    <v-app-bar
      app
      color="#000"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>
      <v-spacer></v-spacer>
      <h1>KANBAN BOARD</h1>
    </v-app-bar>

    <v-content>
     
      <TodoList/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoList from './components/TodoList.vue';


export default Vue.extend({
  name: 'App',

  components: {
    TodoList
  },

  data: () => ({
    //
  }),
});
</script>
