<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
const props = defineProps({
  cityName: {
    type: String,
    required: true,
  },
});
const cityInfo = ref();
onMounted(async () => {
  const res = await axios.get("/api/city/" + props.cityName);
  cityInfo.value = res.data;
});
</script>

<template>
  <div>
    <h1>
      {{ cityName }}
    </h1>
    <div v-if="cityInfo">
      <div>Country: {{ cityInfo.countryCode.String }}</div>
      <div>District: {{ cityInfo.district.String }}</div>
      <div>Population: {{ cityInfo.population.Int64 }}</div>
    </div>
    <div v-else>街が見つかりませんでした</div>
  </div>
</template>
