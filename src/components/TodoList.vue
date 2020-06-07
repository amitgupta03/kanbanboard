<template>
<div id="TodoList" >
    <v-container grid-list-md text-xs-center>
          <br>
          <v-text-field label="ADD TASK"  v-model="newTodo"     @keypress.enter="addTodo()" rounded solo outlined  clearable type="text"></v-text-field>
         <v-layout >
           
            <v-list class="mx-auto" >
                <h1><v-icon class="mr-1">mdi-reorder-horizontal</v-icon> | All Tasks</h1>
                <!-- <draggable> -->
                <v-card color="#15f2fd" class="mx-auto" min-width="350" min-height="100" max-width="400" max-height="200" v-for="(todo,index) in todos" :key="todo.id" :todo="todo" :index="index" style="margin:10px">
                    <v-card-text v-if="!todo.editing" class="headline font-weight-bold mx-auto" >
                    {{todo.title}}
                    </v-card-text>
                    <v-col v-else >
                    <v-text-field v-model="todo.title" solo @keypress.enter="doneEdit(todo)" label="Edit"></v-text-field>
                    </v-col>
                    <v-card-actions>
                    <v-list-item class="grow">
                        <v-row align="center" justify="end">
                        <v-icon class="mr-1" v-if="!todo.editing" @click="assignTodo(todo,'inPro')">mdi-checkbox-marked-circle-outline</v-icon>
                        <v-icon class="mr-1" v-if="!todo.editing"  @click="assignTodoComplete(todo)">mdi-check-all</v-icon>
                        <v-icon class="mr-1" v-if="!todo.editing" @click="editTodo(todo)">mdi-pencil</v-icon>
                        <v-icon class="mr-1" v-else @click="doneEdit(todo)" >save</v-icon>
                        <v-icon class="mr-1" v-if="!todo.editing" @click="deleteTodo(todo)">mdi-delete</v-icon>
                        </v-row>
                    </v-list-item>
                    </v-card-actions>
                </v-card>
                <!-- </draggable> -->
            </v-list >
         
           <v-list class="mx-auto" >
                <h1><v-icon class="mr-1">mdi-checkbox-marked-circle-outline</v-icon> | In Progress </h1>
                <v-card color="#fff852" class="mx-auto"  min-width="350" min-height="100" max-width="400" max-height="200" v-for="(todo,index) in inProgress" :key="todo.id" :todo="todo" :index="index" style="margin:10px">
                    <v-card-text v-if="!todo.editing" class="headline font-weight-bold mx-auto" >
                    {{todo.title}}
                    </v-card-text>
                    <v-col v-else >
                    <v-text-field v-model="todo.title" solo @keypress.enter="doneEdit(todo)" label="Edit"></v-text-field>
                    </v-col>
                    <v-card-actions>
                    <v-list-item class="grow">
                        <v-row align="center" justify="end">
                            <v-icon class="mr-1" v-if="!todo.editing" @click="assignTodoComplete(todo)">mdi-check-all</v-icon>
                        <v-icon class="mr-1" v-if="!todo.editing" @click="editTodo(todo)">mdi-pencil</v-icon>
                        <v-icon class="mr-1" v-else @click="doneEdit(todo)" >save</v-icon>
                        <v-icon class="mr-1" v-if="!todo.editing" @click="deleteTodo(todo , 'todos')">mdi-delete</v-icon>
                        </v-row>
                    </v-list-item>
                    </v-card-actions>
                </v-card>
            </v-list >
            <v-list class="mx-auto" >
                <h1> <v-icon class="mr-1">mdi-check-all</v-icon> | Completed</h1>
                 <v-card color="#9acd32" class="mx-auto" min-width="350" min-height="100"  max-width="400" max-height="200" v-for="(todo,index) in completed" :key="todo.id" :todo="todo" :index="index" style="margin:10px">
                    <v-card-text v-if="!todo.editing" class="headline font-weight-bold mx-auto" >
                    {{todo.title}}
                    </v-card-text>
                    <v-col v-else >
                    <v-text-field v-model="todo.title" solo @keypress.enter="doneEdit(todo)" label="Edit"></v-text-field>
                    </v-col>
                    <v-card-actions>
                    <v-list-item class="grow">
                        <v-row align="center" justify="end">
                        <v-icon class="mr-1" v-if="!todo.editing" @click="editTodo(todo)">mdi-pencil</v-icon>
                        <v-icon class="mr-1" v-else @click="doneEdit(todo)" >save</v-icon>
                        <v-icon class="mr-1" v-if="!todo.editing"  @click="deleteTodo(todo)">mdi-delete</v-icon>
                        </v-row>
                    </v-list-item>
                    </v-card-actions>
                </v-card>
            </v-list >
        </v-layout>
    </v-container>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
// import draggable from "vuedraggable";

  export default Vue.extend({
    name: 'TodoList',
    // components: {
    //      draggable
    //  },

    data(){
        return{
            newTodo: "",
        }
    },
   
    computed:{
        todos(){
            return this.$store.state.todos;
        },
        inProgress(){
            return this.$store.state.inProgress;
        },
        completed(){
            return this.$store.state.completed;
        },
    },
    methods:{
        addTodo(){
            this.$store.dispatch('addNewTodo',this.newTodo)
            this.newTodo="";
        },
        editTodo (todo: any) {
            this.$store.dispatch('editTodo', todo);
        },
        doneEdit(todo: any){
            this.$store.dispatch('doneEdit', todo);
        },
        deleteTodo(todo: any ,  arrName: any){
            this.$store.dispatch('deleteTodo',todo , arrName);
        },
        assignTodo(todo: any){
            this.$store.dispatch('assignTodo',todo);
        },
        assignTodoComplete(todo: any){
            this.$store.dispatch('assignTodoComplete',todo);
        }

      
      
    }
  })
</script>