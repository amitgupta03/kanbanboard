import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

Vue.config.productionTip = false
let app: any="";
firebase.initializeApp({
  apiKey: "AIzaSyBZ_lhDihJBhyRWVlLEhs3XxGDJ7kZw-8E",
  authDomain: "kanban-board-e514b.firebaseapp.com",
  databaseURL: "https://kanban-board-e514b.firebaseio.com",
  projectId: "kanban-board-e514b",
  storageBucket: "kanban-board-e514b.appspot.com",
  messagingSenderId: "987509021007",
  appId: "1:987509021007:web:822a9c0c74183a1425cd3a",
  measurementId: "G-M7040LMG1S"

});
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(() => {
  if(!app){
    app=new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
});
