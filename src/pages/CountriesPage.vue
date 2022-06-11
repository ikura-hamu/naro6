<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const countriesList = ref([]);
onMounted(async () => {
  const res = await axios.get("/api/countries"); //ここで国の羅列をもらえるはず
  countriesList.value = res.data;
});
</script>

<template>
  This is the list of countries.
  <div v-for="country in countriesList" :key="country.name">
    <router-link
      :to="{ name: 'oneCountry', params: { countryName: country } }"
      >{{ country }}</router-link
    >
  </div>
</template>
