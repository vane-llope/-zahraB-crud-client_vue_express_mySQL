<template>
<div>
<div v-if="contact.length == 0"><p class="h1 container m-auto">user not found</p>
 <div class="container">
           <router-link to="/" class="btn btn-success mt-3"><i class="fa fa-arrow-alt-circle-left"></i> Back</router-link>  
        </div></div>
<div v-else>
<div class="container my-3"  v-for="user in contact" :key="user.id">
    <p class="h3 text-success fw-bold">View Contant</p>
    <div class="row">
        <div class="col-md-2">
            <img :src="user.image" alt="" class="contact-img rounded-circle mb-3" />
        </div>
        <div class="col-md-10 list-group-item-success shadow">
            <ul class="list-group">
                <li class="list-group-item list-group-item-action">
                    <span class="fw-bold">ID : </span> {{ user.id }}
                </li>
                <li class="list-group-item list-group-item-action">
                    <span class="fw-bold">Name : </span> {{ user.name }}
                </li>
                <li class="list-group-item list-group-item-action">
                    <span class="fw-bold">Email : </span>{{ user.email }}
                </li>
                <li class="list-group-item list-group-item-action">
                    <span class="fw-bold">Phone : </span>{{ user.phone }}
                </li>
                <li class="list-group-item list-group-item-action">
                    <span class="fw-bold">ID Number : </span>{{ user.idnumber }}
                </li>
                <li class="list-group-item list-group-item-action">
                    <span class="fw-bold">State : </span>{{ user.state }}
                </li>
                <li class="list-group-item list-group-item-action">
                    <span class="fw-bold">City : </span>{{ user.city }}
                </li>
                <li class="list-group-item list-group-item-action">
                    <span class="fw-bold">Address : </span>{{ user.address }}
                </li>
            </ul>
        </div>
    </div>
     <div class="row">
        <div class="col-12">
           <router-link to="/" class="btn btn-success mt-3"><i class="fa fa-arrow-alt-circle-left"></i> Back</router-link>  
        </div>
        <div class="col-12 mt-3">
           <router-link :to="`/contacts/edit/${id}`" class="btn btn-primary btn-sm mb-2"><i class="fa fa-pen"></i
                >Edit User</router-link> 
        </div>
    </div>
    </div>
    
   
    </div>   
        
   
</div>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { onMounted, computed } from "@vue/runtime-core";
export default {
  setup() {
    const store = useStore();
    
    const route = useRoute();
    const id = route.params.id;

    const contact = computed(() => store.state.contact);
    const getUser = onMounted(() => {
      store.commit("getUser", id);
    });
    return {
      contact,
      getUser,
      id,
    };
  },
};
/*import axios from 'axios'
export default {
    data() {
        return {
            contact: '',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxcDTPj7lHLFvEqKD4OKEz8a3Iu5EKO90yWzQaaTB0h_Oqn5m2Y-QmoS7XJW5PyQNuM3k&usqp=CAU'
        }
    },
    mounted() {
        this.getContact()
    },
    methods: {
          getContact() {
              axios({
                method: "get",
                url: "http://localhost:3000/contacts/user/" + this.$route.params.id,
            })
            .then((response) => {
                this.contact = response.data
            })
            .catch((err) => console.log(err));

          }
    },
}*/
</script>

<style>
</style>
