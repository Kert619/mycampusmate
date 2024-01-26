<template>
  <!-- HEADER -->
  <StudentHeader></StudentHeader>
  <div class="container my-5">
    <div>
      <img
        src="/profile.png"
        ref="imgRef"
        width="100"
        height="100"
        class="border rounded-circle"
      />
      <div class="input-group my-3">
        <input type="file" class="form-control" @change="fileSelected" />
      </div>
    </div>

    <!-- WE ADD .PREVENT TO AVOID RELOADING THE PAGE WHEN THE FORM SUBMITS -->
    <form class="row g-3" @submit.prevent="submitForm">
      <div class="col-md-4">
        <label class="form-label">First Name</label>
        <input type="text" class="form-control" v-model="form.first_name" />
      </div>
      <div class="col-md-4">
        <label class="form-label">Last Name</label>
        <input type="text" class="form-control" v-model="form.last_name" />
      </div>
      <div class="col-md-4">
        <label class="form-label">Middle Name</label>
        <input type="text" class="form-control" v-model="form.middle_name" />
      </div>
      <div class="col-md-4">
        <label class="form-label">Sex</label>
        <select class="form-select" v-model="form.sex">
          <option selected disabled value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div class="col-md-4">
        <label class="form-label">Contact</label>
        <input type="text" class="form-control" v-model="form.contact_num" />
      </div>
      <div class="col-md-4">
        <label class="form-label">Birth Date</label>
        <input
          type="date"
          class="form-control"
          required
          v-model="form.birthdate"
        />
      </div>
      <div class="col-12">
        <label class="form-label">Address</label>
        <input type="text" class="form-control" v-model="form.address" />
      </div>
      <div class="col-md-4">
        <label class="form-label">Academic Year</label>
        <input
          type="number"
          min="1999"
          max="2024"
          class="form-control"
          v-model="form.acad_year"
        />
      </div>
      <div class="col-md-4">
        <label class="form-label">School Year</label>
        <input
          type="number"
          min="1999"
          max="2024"
          class="form-control"
          v-model="form.school_year"
        />
      </div>
      <div class="col-md-4">
        <label class="form-label">Current Year</label>
        <select class="form-select" v-model="form.current_year">
          <option selected disabled value="">Select</option>
          <option value="Freshmen">Freshmen</option>
          <option value="Sophomore">Sophomore</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
        </select>
      </div>
      <div class="col-12">
        <label class="form-label">Program</label>
        <input type="text" class="form-control" v-model="form.program" />
      </div>
      <div class="col-12">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            :value="true"
            v-model="form.is_regular"
          />
          <label class="form-check-label"> Regular Student </label>
        </div>
      </div>

      <div class="col-12">
        <button type="submit" class="btn btn-primary me-2">Sign in</button>
        <RouterLink to="/student/newsfeed" class="btn btn-secondary"
          >Back to Newsfeed</RouterLink
        >
      </div>
    </form>
  </div>
</template>

<script setup>
import StudentHeader from "@/components/student-header.vue";
import api from "@/http/api";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { onMounted } from "vue";

const imgRef = ref(null);

const route = useRoute();

const form = ref({
  first_name: "",
  last_name: "",
  middle_name: "",
  birthdate: "",
  sex: "",
  address: "",
  contact_num: "",
  program: "",
  acad_year: "",
  school_year: "",
  is_regular: true,
  current_year: "",
  file: "",
});

// onMounted(() => {
//   api.get('/')
// })

const fileSelected = (e) => {
  const input = e.target;

  if (!input.files || input.files.length === 0) {
    return;
  }

  const file = input.files[0];
  form.value.file = file;
  const reader = new FileReader();

  reader.onload = (e) => {
    imgRef.value.src = e.target.result;
  };

  reader.readAsDataURL(file);
};

const submitForm = async () => {
  console.log(form.value);
  const response = await api.put(
    `/student/update/?id=${route.params.id}`,
    form.value,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
};
</script>
