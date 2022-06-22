<template>
  <div class="container mt-3">
    <p class="h3 text-success fw-bold">add contant</p>

    <form class="g-3 needs-validation" @submit.prevent="register" novalidate>
      <div class="row mb-3">
        <div class="col-md-8">
          <div class="row">


              <div v-if="test" class="col-md-6 addPhoto"></div>
            <div v-else class="col-md-6 " >
              <img
                :src="contact.image"
                alt=""
                class="contact-img rounded-circle"
              />
            </div>


            <div class="col-md-6">
              <label for="validationCustom01" class="form-label h3">
                Shop Name</label
              >
              <input
                type="text"
                v-model="contact.shopname"
                class="form-control"
                id="validationCustom01"
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <!-- <div class="col-4 d-flex justify-content-end" >
                <input type="file"  class="form-control"  @change="previewImage" accept="image/*">
            </div>-->
          </div>
        </div>
      </div>

      <div class="list-group-item-success shadow row">
        <div class="col-12 mb-3">
          <label for="validationCustom01" class="form-label">image</label>
          <input
            type="text"
            class="form-control"
            v-model="contact.image"
            id="validationCustom01"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="validationCustom01" class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            v-model="contact.name"
            id="validationCustom01"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-6">
          <label for="validationCustom01" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            v-model="contact.email"
            id="validationCustom01"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-6">
          <label for="validationCustom01" class="form-label">ID Number</label>
          <input
            type="text"
            class="form-control"
            v-model="contact.idnumber"
            id="validationCustom01"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-6">
          <label for="validationCustom01" class="form-label">Phone</label>
          <input
            type="text"
            class="form-control"
            v-model="contact.phone"
            id="validationCustom01"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-6">
          <label for="validationCustom04" class="form-label">state</label>
          <select
            class="form-select"
            v-model="contact.state"
            id="validationCustom04"
            required
          >
            <option selected disabled>Choose...</option>
            <option>state1</option>
            <option>state2</option>
            <option>state3</option>
          </select>
          <div class="invalid-feedback">Please select a valid state.</div>
        </div>
        <div class="col-md-6">
          <label for="validationCustom04" class="form-label">city</label>
          <select
            class="form-select"
            v-model="contact.city"
            id="validationCustom04"
            required
          >
            <option selected disabled>Choose...</option>
            <option>city1</option>
            <option>city2</option>
            <option>city3</option>
          </select>
          <div class="invalid-feedback">Please select a valid state.</div>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label mt-3"
            >Address</label
          >
          <textarea
            class="form-control"
            v-model="contact.address"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>

      <div>
        <button class="btn btn-success col-12 mb-5" type="submit" >
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      contact: {
        shopname: "",
        image: "",
        name: "",
        phone: "",
        email: "",
        idnumber: "",
        state: "",
        city: "",
        address: "",
      },
    };
  },
  methods: {
    register() {
      if(this.contact.image.length == 0 ) 
      this.contact.image = "https://cdn-icons-png.flaticon.com/512/147/147140.png"

       if (
        this.contact.name == "" ||
        this.contact.phone == "" ||
        this.contact.email == "" ||
        this.contact.idnumber == "" ||
        this.contact.state == "" ||
        this.contact.city == "" ||
        this.contact.address == ""
      )
       this.$emit("badValue" , "please fill all boxes", "danger");
      else{
    axios.post('http://localhost:3000/contacts/create',  {  contact : this.contact} )
    .then((res) => console.log(res))
    .then( () => {return this.$router.push('/')} )
    .catch((err) => console.error(err));
    this.$emit("badValue" , "User added" , "info")}
  },
  },
   computed: {
    // a computed getter
    test() {
      if(this.contact.image.length == 0)
      return true
      else
      return false
    }
  }
};
</script>
