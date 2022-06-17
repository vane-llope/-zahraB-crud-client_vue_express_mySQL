<template>
<div>

    <div class="row mb-3">
        <div class="col-md-8">
            <div class="row">
                <div class="col-md-6 " v-if="img.length > 0">
                    <img :src="img" alt="" class="contact-img rounded-circle">
                </div>
                <div class="col-md-6">
                    <label for="validationCustom01" class="form-label h3"> Shop Name</label>
                    <input type="email" class="form-control" id="validationCustom01" required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
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
            <input type="text" class="form-control" id="validationCustom01" required>
        </div>
        <div class="col-md-6">
            <label for="validationCustom01" class="form-label">Name</label>
            <input type="text" class="form-control" id="validationCustom01" required>
            <div class="valid-feedback">
                Looks good!
            </div>
        </div>
        <div class="col-md-6">
            <label for="validationCustom01" class="form-label">Email</label>
            <input type="email" class="form-control" id="validationCustom01" required>
            <div class="valid-feedback">
                Looks good!
            </div>
        </div>
        <div class="col-md-6">
            <label for="validationCustom01" class="form-label">ID Number</label>
            <input type="email" class="form-control" id="validationCustom01" required>
            <div class="valid-feedback">
                Looks good!
            </div>
        </div>
        <div class="col-md-6">
            <label for="validationCustom01" class="form-label">Phone</label>
            <input type="email" class="form-control" id="validationCustom01" required>
            <div class="valid-feedback">
                Looks good!
            </div>
        </div>
        <div class="col-md-6">
            <label for="validationCustom04" class="form-label">state</label>
            <select class="form-select" id="validationCustom04" required>
                <option selected disabled value="">Choose...</option>
                <option>...</option>
            </select>
            <div class="invalid-feedback">
                Please select a valid state.
            </div>
        </div>
        <div class="col-md-6">
            <label for="validationCustom04" class="form-label">city</label>
            <select class="form-select" id="validationCustom04" required>
                <option selected disabled value="">Choose...</option>
                <option>...</option>
            </select>
            <div class="invalid-feedback">
                Please select a valid state.
            </div>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label mt-3">Address</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            img: 'https://www.clipartmax.com/png/small/257-2572603_user-man-social-avatar-profile-icon-man-avatar-in-circle.png'
        }
    },
    methods: {
        previewImage: function (event) {
            // Reference to the DOM input element
            var input = event.target;
            // Ensure that you have a file before attempting to read it
            if (input.files && input.files[0]) {
                // create a new FileReader to read this image and convert to base64 format
                var reader = new FileReader();
                // Define a callback function to run, when FileReader finishes its job
                reader.onload = (e) => {
                    // Note: arrow function used here, so that "this.img" refers to the img of Vue component
                    // Read image as base64 and set to img
                    this.img = e.target.result;
                }
                // Start the reader job - read file as a data url (base64 format)
                reader.readAsDataURL(input.files[0]);
            }
        }
    },

}
</script>
