<template>
  <ul class="list albuns">
    <li class="item" v-for="music in musics" :key="music.id">
      <img :src="require(`@/assets/img/${music.image}`)"/>
      <span class="name">{{ music.name }}</span>
      <span class="year">{{ music.album }}</span>
      <span class="explicit" v-if="music.explicit"></span>
    </li>
  </ul>
</template>
<script>
import musics from '@/data/musics.js';
export default {
  name: 'Musics',
  props: {},
  data() {
    return {
      musics,
    };
  },
};
</script>
