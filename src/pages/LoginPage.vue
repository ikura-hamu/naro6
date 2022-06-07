<template>
  <div>
    Username
    <input v-model="username" type="text" />
  </div>
  <div>
    Password
    <input v-model="password" type="text" />
  </div>
  <button @click="login">Click to Login</button>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
const username = ref("");
const password = ref("");

const login = () =>
  axios.post("/api/login", {
    username: username.value,
    password: password.value,
  });
</script>
