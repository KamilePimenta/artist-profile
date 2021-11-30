<template>
  <ul :class="`list albuns qtd-${quantity}`">
    <li class="item" v-for="album in albuns" :key="album.id">
      <img :src="require(`@/assets/img/${album.image}`)"/>
      <div class="info">
        <span class="name">{{ album.name }}</span>
        <span class="year">{{ album.year }}</span>
        <span class="explicit" v-if="album.explicit">E</span>
      </div>
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
      quantity: '',
    };
  },
  methods: {
    calcWidth() {
      const quantity = this.albuns.length;
      this.quantity = quantity;
    }
  },
  created() {
    this.calcWidth();
  },
};
</script>
