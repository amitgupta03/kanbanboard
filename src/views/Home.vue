<template>
  <div class="home">
     <Header/>
    <TodoList />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue'
import Header from '@/components/Header.vue'
// import firebase from 'firebase'
export default {
  name: 'Home',
  components: {
    TodoList,
     Header
  },
 
}
</script>
