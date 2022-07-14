<script lang="ts" setup>
import Navbar from './Navbar.vue'
import Profile from './Profile.vue'
import Features from './Features.vue'
import Partners from './Partners.vue'
import Service from './Service.vue'
import Subscribe from './Subscribe.vue'
import Footer from './Footer.vue'
import Button from './Button.vue'
import bgUrl from '~/assets/project-1/bg.png'
</script>

<template>
  <div class="container theme">
    <header>
      <div class="background" :style="{ backgroundImage: `url(${bgUrl})` }" />
      <Navbar />
      <div class="banner">
        <h1>Your strategy is only as good as you execute it</h1>
        <RouterLink to="/">
          <Button :arrow="true">
            Get Started
          </Button>
        </RouterLink>
      </div>
    </header>
    <Profile />
    <Features />
    <Partners />
    <Service />
    <Subscribe />
    <Footer />
  </div>
</template>

<style scoped>
@import './styles.css';

@media (min-width: 1920px) {
  .container {
    max-width: 1920px;
  }
}

.container {
  width: 100%;
  min-width: 400px;
  font-family: var(--ff-base);
}

header {
  position: relative;
  height: 700px;
}
.background {
  position: absolute;
  width: 100%;
  height: 700px;
  z-index: -100;
  background-size: cover;
  background-position: right;
  filter: grayscale(20%);
  opacity: .8;
}
.background::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -99;
  background: radial-gradient(farthest-side at 0% 0%, hsla(0deg, 0%, 100%, 20%), hsla(0deg, 0%, 100%, 0%)),
   radial-gradient(farthest-side at 0% 0%, hsla(200deg, 35%, 90%, 100%), hsla(200deg, 35%, 90%, 0%));
}

.banner {
  margin-top: 150px;
  margin-left: auto;
  margin-right: 36%;
  padding-left: 40px;
  width: fit-content;
}
.banner h1 {
  margin-bottom: 37px;
  max-width: 850px;
}

@media (max-width: 1280px) {
  header {
    height: 500px;
  }
  .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0 1rem;
    width: 100%;
  }
  .banner h1 {
    text-align: center;
  }
}

@media (max-width: 640px) {
  .banner h1 {
    font-size: var(--fs-h2);
    text-align: center;
  }

  .background {
    top: -180px;
    background-position: right;
  }

  header {
    height: 400px;
  }
}
</style>
