<template>
  <div class="slider">
    <ul :class="`list programs qtd-${quantity}`">
      <li class="item" v-for="program in programs" :key="program.id">
        <img :src="require(`@/assets/img/${program.image}`)"/>
        <div class="info">
          <span class="name">{{ program.name }}</span>
          <span class="year">{{ program.year }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import programs from '@/data/programs.js';
export default {
  name: 'Programs',
  props: {},
  data() {
    return {
      programs,
      quantity: '',
    };
  },
  methods: {
    calcWidth() {
      const quantity = this.programs.length;
      this.quantity = quantity;
    }
  },
  created() {
    this.calcWidth();
  },
};
</script>
