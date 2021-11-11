<template>
  <ul class="list albuns">
    <li class="item" v-for="program in programs" :key="program.id">
      <img :src="require(`@/assets/img/${program.image}`)"/>
      <span class="name">{{ program.name }}</span>
      <span class="year">{{ program.year }}</span>
    </li>
  </ul>
</template>
<script>
import programs from '@/data/programs.js';
export default {
  name: 'Programs',
  props: {},
  data() {
    return {
      programs,
    };
  },
};
</script>
