<template>
  <ul class="list albuns">
    <li class="item" v-for="album in albuns" :key="album.id">
      <img :src="require(`@/assets/img/${album.image}`)"/>
      <span class="name">{{ album.name }}</span>
      <span class="year">{{ album.year }}</span>
      <span class="explicit" v-if="album.explicit"></span>
    </li>
  </ul>
</template>
<script>
import albuns from '@/data/albuns.js';
export default {
  name: 'Albuns',
  props: {},
  data() {
    return {
      albuns,
    };
  },
};
</script>
