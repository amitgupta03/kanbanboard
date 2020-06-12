import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {     
    idForTodo:3,
    todos: [
        {
        'id': 1,
        'title': 'First todo item',
        'editing': false,
        'comesFrom':'todos'
        },
        { 
        'id': 2,
        'title': 'Second todo item',
        'editing': false,
        'comesFrom':'todos'
        }
    ],
    inProgress:[ {
      'id': 11,
      'title': 'Process todo item',
      'editing': false,
      'comesFrom':'inProgress'
      },],
    completed:[ {
      'id': 21,
      'title': 'Completed todo item',
      'editing': false,
      'comesFrom':'completed'
      },],

},
getters:{

},


mutations: {
    NEW_TODO(state,todoVal){
      if(!todoVal){
        return
    } 
      state.todos.push({
        id:state.idForTodo,
        title:todoVal,
        editing:false,
        comesFrom:'todos'
      })
      state.idForTodo++;
  },
      EDIT_TODO(state,todo){
         todo.editing = true;
      },
      DONE_TODO(state,todo){
        todo.editing = false;
      },
      DELETE_TODO(state,todo){
        const comesFrom =todo.comesFrom;
        if(comesFrom==='todos'){
         const index=state.todos.indexOf(todo);
          state.todos.splice(index, 1);
        }else if(comesFrom==='inProgress'){
          const index=state.inProgress.indexOf(todo);
          state.inProgress.splice(index, 1);
        }else{
          const index=state.completed.indexOf(todo);
          state.completed.splice(index, 1);
        }
      },
      ASSIGN_TODO(state,todo){
        todo.comesFrom ='inProgress';
        state.inProgress.push(todo);
        const index=state.todos.indexOf(todo);
        state.todos.splice(index,1);
      },
      ASSIGN_COMP(state,todo){
        if(todo.comesFrom==='todos'){
        todo.comesFrom ='completed';
        state.completed.push(todo);
        const index=state.todos.indexOf(todo);
        state.todos.splice(index,1);
      }else{
        todo.comesFrom ='completed';
        state.completed.push(todo);
        const index=state.inProgress.indexOf(todo);
        state.inProgress.splice(index,1);
        }
      },
     
    



},
actions: {
      addNewTodo(context, todoVal){
        context.commit('NEW_TODO',todoVal);
      },
      editTodo(context,todo){
        context.commit('EDIT_TODO',todo);
      },
      doneEdit(context,todo){
        context.commit("DONE_TODO",todo);
      },
      deleteTodo(context,todo){
        context.commit("DELETE_TODO",todo);
      },
      assignTodo(context,todo){
        context.commit("ASSIGN_TODO",todo);
      },
      assignTodoComplete(context,todo){
        context.commit("ASSIGN_COMP",todo)
      },
     
  },
modules: {
    }
  })
