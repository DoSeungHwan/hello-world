<template>
  <main>
    <h1>랜덤 오리</h1>
    <div>
      <img :src="imgUrl" />
    </div>
    <button @click="shuffle">셔플</button>
  </main>
</template>
<script setup>
import { onMounted, ref } from "vue";
import http from "../utils/http";
let imgUrl = ref("");
const shuffle = async () => {
  try {
    // 통신 관련은 utils -> http.js 파일 참고

    // https://random-d.uk/api/random로 호출해야 하는 것이지만
    // CORS 에러로 인해 proxy서버를 두어 호출함.
    // proxy 설정은 vite.config.js
    const response = await http.get("/api/random");
    console.log(response);
    imgUrl.value = response.url;
  } catch (e) {
    console.log(e);
  }
};
onMounted(() => {
  shuffle();
});
</script>
<style>
div {
  max-width: 500px;
}
img {
  width: 100%;
}
</style>
