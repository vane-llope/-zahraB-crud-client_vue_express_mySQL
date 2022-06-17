<template>
  <div class="container my-3" v-for="user in contact" :key="user.id">
    <p class="h3 text-success fw-bold">View Contant</p>
    <div class="row">
      <div class="col-md-2" >
        <img :src="user.image" alt="" class="contact-img rounded-circle mb-3" />
      </div>
      <div class="col-md-10 list-group-item-success shadow">
        <ul class="list-group">
          <li class="list-group-item list-group-item-action d-flex">
            <div class="col-1"><label class="fw-bold">ID : </label></div>
            <div class="col-11">
              <input
                type="email"
                class="form-control"
                id="validationCustom01"
                required
                v-model="user.id"
              />
            </div>
          </li>
          <li class="list-group-item list-group-item-action d-flex">
            <div class="col-1"><label class="fw-bold">Name : </label></div>
            <div class="col-11">
              <input
                type="email"
                class="form-control"
                id="validationCustom01"
                required
                v-model="user.name"
              />
            </div>
          </li>
          <li class="list-group-item list-group-item-action d-flex">
            <div class="col-1"><label class="fw-bold">Email : </label></div>
            <div class="col-11">
              <input
                type="email"
                class="form-control"
                id="validationCustom01"
                required
                v-model="user.email"
              />
            </div>
          </li>
          <li class="list-group-item list-group-item-action d-flex">
            <div class="col-1"><label class="fw-bold">Phone : </label></div>
            <div class="col-11">
              <input
                type="email"
                class="form-control"
                id="validationCustom01"
                required
                v-model="user.phone"
              />
            </div>
          </li>
          <li class="list-group-item list-group-item-action d-flex">
            <div class="col-1"><label class="fw-bold">ID Number : </label></div>
            <div class="col-11">
              <input
                type="email"
                class="form-control"
                id="validationCustom01"
                required
                v-model="user.idnumber"
              />
            </div>
          </li>
          <li class="list-group-item list-group-item-action d-flex">
            <div class="col-1"><label class="fw-bold">State : </label></div>
            <div class="col-11">
              <select
                class="form-select"
                v-model="user.state"
                id="validationCustom04"
                required
              >
                <option selected disabled>{{ user.state }}</option>
                <option>state1</option>
                <option>state2</option>
                <option>state3</option>
              </select>
            </div>
          </li>
          <li class="list-group-item list-group-item-action d-flex">
            <div class="col-1"><label class="fw-bold">City : </label></div>
            <div class="col-11">
              <select
                class="form-select"
                v-model="user.city"
                id="validationCustom04"
                required
              >
                <option selected disabled>{{ user.city }}</option>
                <option>city1</option>
                <option>city2</option>
                <option>city3</option>
              </select>
            </div>
          </li>
          <li class="list-group-item list-group-item-action d-flex">
            <div class="col-1"><label class="fw-bold">Address : </label></div>
            <div class="col-11">
              <input
                type="email"
                class="form-control"
                id="validationCustom01"
                required
                v-model="user.address"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-12 mt-3">
        <button class="btn btn-success text-light" @click="updateUser(user.id)">
          <i class="fa fa-paint-brush" aria-hidden="true"></i> 
            <router-link
                  :to="`/contacts/view/${user.id}`"
                  class="text-light navbar-brand" style="font-size : 18px " 
                  >save changes</router-link>

        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { onMounted, computed } from "@vue/runtime-core";
import axios from "axios";
export default {
  setup() {
    const store = useStore();
    const img =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxcDTPj7lHLFvEqKD4OKEz8a3Iu5EKO90yWzQaaTB0h_Oqn5m2Y-QmoS7XJW5PyQNuM3k&usqp=CAU";

    const route = useRoute();
    const id = route.params.id;
    const updateUser = (id) => {
      axios.put("http://localhost:3000/contacts/edit/" + id, contact.value)
      
    };
    const contact = computed(() => store.state.contact);
    console.log(contact);
    const getUser = onMounted(() => {
      store.commit("getUser", id);
    });
    return {
      contact,
      img,
      getUser,
      id,
      updateUser,
    };
  },
};
</script>
<style>
</style>
