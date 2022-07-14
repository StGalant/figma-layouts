<script lang="ts" setup>
import urlBehance from '~/assets/project-1/behance.png'
import urlGoogle from '~/assets/project-1/google.png'
import urlUplabs from '~/assets/project-1/uplabs.png'
import urlDribble from '~/assets/project-1/dribble.png'
import url99Designs from '~/assets/project-1/99designs.svg'
</script>

<template>
  <section class="partners">
    <div class="heading">
      <h2>Our Amazing Partners</h2>
      <h4>short introduction</h4>
    </div>
    <div class="logos">
      <img :src="urlBehance" alt="behance">
      <img :src="urlGoogle" alt="google">
      <img :src="urlUplabs" alt="uplabs">
      <img :src="urlDribble" alt="dribble">
      <img :src="urlUplabs" alt="uplabs">
      <img :src="url99Designs" alt="99designs">
      <img :src="urlBehance" alt="behance">
      <img :src="urlGoogle" alt="google">
      <img :src="urlBehance" alt="behance">
      <img :src="urlUplabs" alt="uplabs">
      <img :src="urlGoogle" alt="google">
      <img :src="urlDribble" alt="dribble">
    </div>
  </section>
</template>

<style scoped>
.partners {
  height: 755px;
  background-color: var(--clr-background-700);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.heading {
  display: grid;
  place-items: center;
  margin-top: 116px;
}

.logos {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 40px 80px;
  justify-content: space-between;
  align-content: space-between;
  margin: 86px auto;
  width: min(950px, 75%);
}

@media (max-width: 640px) {
  .logos {
    gap: 40px 0px;
  }
}
</style>
