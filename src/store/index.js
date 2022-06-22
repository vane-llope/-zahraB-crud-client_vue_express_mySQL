import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    contacts: [],
    contact: '',
    id:''

  },
  mutations: {
    //GET ALL USERS
    getAllUsers(state) {
      axios({
        method: "get",
        url: "http://localhost:3000/contacts",
      })
        .then((response) => {
          state.contacts = response.data;
          console.log(state.contacts)
        })
        .catch((err) => console.log(err));
    },

    //GET USER
    getUser(state, id) {
      state.id=id
      axios({
        method: "get",
        url: "http://localhost:3000/contacts/user/" + state.id,
      })
        .then((response) => {
          state.contact = response.data
          console.log(state.contact)
        })
        .catch((err) => console.log(err));
    },
    
    //ADD USER
  
       

  },
  getters: {},
  actions: {},
  modules: {}
})


