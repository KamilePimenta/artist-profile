<template>
  <main id="home" :class="`container ${isMobileScreen}`">
    <div :class="`profile ${isMobileScreen}`">
      <img :src="require(`@/assets/img/${isMobileScreen}-photo-ariana-grande.png`)" alt="Ariana Grande">
    </div>
    <pre>{{ isMobileScreen }}</pre>
  </main>
</template>
<script>
export default {
  name: 'Home',
};
</script>