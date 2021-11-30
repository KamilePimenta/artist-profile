<template>
  <div class="slider no-scrollbar">
    <ul :class="`list musics qtd-${quantity}`">
      <li class="item" v-for="music in musics" :key="music.id">
        <img :src="require(`@/assets/img/${music.image}`)"/>
        <div class="info">
          <span class="name">{{ music.name }}</span>
          <span class="year">{{ music.album }}</span>
          <span class="explicit" v-if="music.explicit">E</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import musics from '@/data/musics.js';
export default {
  name: 'Musics',
  props: {},
  data() {
    return {
      musics,
      quantity: '',
    };
  },
  methods: {
    calcWidth() {
      const quantity = this.musics.length;
      this.quantity = quantity;
    }
  },
  created() {
    this.calcWidth();
  },
};
</script>
