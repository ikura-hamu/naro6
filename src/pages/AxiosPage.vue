<template>
  <div>
    <button @click="sendGet">GET</button>
    <button @click="sendPost">POST</button>
    <button @click="sendPut">PUT</button>
    <button @click="sendDelete">DELETE</button>
  </div>
</template>

<script setup>
import axios from "axios";
const sendGet = () => axios.get("https://enrxfzkji6zo.x.pipedream.net");
const sendPost = () =>
  axios.post("https://enrxfzkji6zo.x.pipedream.net", {
    traQID: "ikura-hamu",
    grade: 22,
  });
const sendPut = () =>
  axios.put("https://enrxfzkji6zo.x.pipedream.net", {
    testData: { string: "string", number: 1 },
  });
const sendDelete = () =>
  axios.delete("https://enrxfzkji6zo.x.pipedream.net", {
    data: { po: 1 },
  });
</script>
