<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const props = defineProps({
  countryName: {
    type: String,
    required: true,
  },
});
const citiesList = ref([]);
onMounted(async () => {
  const res = await axios.get("/api/country/" + props.countryName); //ここで都市の羅列をもらえるように書き換える。
  citiesList.value = res.data;
});
</script>

<template>
  This is the list of cities in {{ props.countryName }}.
  <div v-for="city in citiesList" :key="city.name">
    <router-link :to="{ name: 'city', params: { cityName: city } }">{{
      city
    }}</router-link>
  </div>
</template>
