<script setup>
import officeUrl from '~/assets/project-1/office.png'
</script>

<template>
  <section>
    <div class="heading">
      <h2>Company profile</h2>
      <h4>short introduction</h4>
    </div>
    <div class="image" :style="{ backgroundImage: `url(${officeUrl})` }" />
    <p class="details">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </section>
</template>

<style scoped>
section {
  display: grid;
  align-items: center;
  justify-content: center;
  height: 784px;
  margin: 0 36px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 314px 327px;
  grid-template-areas:
  "hd hd hd hd"
  "im im dt dt";
}

.heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: hd;
  justify-self: center;
}
.details {
  max-width: 647px;
  grid-area: dt;
  justify-self: left;
}

.image {
  width: 566px;
  aspect-ratio: 566 / 327;
  background-size: 100% 100%;
  border-radius: 24px;
  grid-area: im;
  justify-self: right;
  margin-right: 36px;;
}

@media (max-width: 1280px) {
  section {
    grid-template-columns: auto;
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
      "im"
      "hd"
      "dt";
  }

  .image {
    margin: 0;
    justify-self: center;
  }

  .details {
    text-align: center;
  }
}

@media (max-width: 640px) {
  .image {
    width: min(566px, 100%);
  }
}
</style>
