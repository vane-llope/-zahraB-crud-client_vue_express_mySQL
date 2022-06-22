<template>
  <div class="container mt-3">
    <p class="h3 text-success fw-bold">
      contact manager
      <router-link to="/contacts/add" class="btn btn-success btn-sm"
        ><i class="fa fa-plus"></i>New</router-link
      >
    </p>
    <form class="d-flex">
      <input
        class="form-control me-2"
        type="search"
        v-model="id"
        placeholder="Search by ID"
        aria-label="Search"
      />
      <router-link :to="`/contacts/view/${id}`" class="btn btn-success my-2">
        Search
      </router-link>
    </form>
    <transition-group
      tag="div"
      class="row"
      name="list"
      @before-enter="beforeEnter"
      @enter="enter"
      appear
    >
      <div
        class="col-md-6 my-3"
        v-for="(contact, index) in contacts"
        :key="contact.id"
        :data-index="index"
      >
        <div class="card list-group-item-success shadow">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <img
                  :src="contact.image"
                  alt=""
                  class="contact-img rounded-circle"
                />
              </div>
              <div class="col-sm-8">
                <ul class="list-group">
                  <li class="list-group-item">
                    name : <span class="fw-bold">{{ contact.name }}</span>
                  </li>
                  <li class="list-group-item">
                    Email : <span class="fw-bold">{{ contact.email }}</span>
                  </li>
                  <li class="list-group-item">
                    phone number :
                    <span class="fw-bold">{{ contact.phone }}</span>
                  </li>
                </ul>
              </div>
              <div class="col-sm-1">
                <router-link
                  :to="`/contacts/view/${contact.id}`"
                  class="btn btn-warning btn-sm my-2"
                  ><i class="fa fa-eye"></i
                ></router-link>
                <router-link
                  :to="`/contacts/edit/${contact.id}`"
                  class="btn btn-primary btn-sm mb-2"
                  ><i class="fa fa-pen"></i
                ></router-link>
                <button class="btn btn-danger btn-sm">
                  <i class="fa fa-trash" @click="del(contact.id)"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition-group>
    <!-- <button @click="getUser(1)" class="btn">test button</button>
    <p>{{contact}}</p>
    <p>{{ contacts }}</p>-->
  </div>
</template>

<script>
import gsap from "gsap";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { ref } from "@vue/reactivity";
import axios from 'axios'
export default {
  setup() {
    const beforeEnter = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(100px)";
    };
    const enter = (el, done) => {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 1,
        onComplete: done,
        delay: el.dataset.index * 0.2,
      });
    };

    const id = ref("");
    const store = useStore();
    //GET ALL USERS
    const contacts = computed(() => store.state.contacts);
    const getAllUsers = onMounted(() => {
      store.commit("getAllUsers");
    });
    //DELETE USER
    const del = (id) => {
      axios({
        method: "get",
        url: "http://localhost:3000/contacts/delete/" + id,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => console.log(err));
      getAllUsers();
    };

    return {
      contacts,
      id,
      getAllUsers,
      del,
      enter,
      beforeEnter,
    };
  },
};
</script>


