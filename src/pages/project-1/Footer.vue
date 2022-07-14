<script lang="ts" setup>
import Logo from './Logo.vue'
import gpUrl from '~/assets/project-1/gp.svg'
import asUrl from '~/assets/project-1/as.svg'
</script>

<template>
  <footer class="theme-footer">
    <div>
      <Logo class="logo" />
      <div class="contacts">
        <ul>
          <li>+1-234-567-890</li>
          <li>Rockefeller PlazaNew York, NY 10112</li>
        </ul>
      </div>
    </div>
    <div class="navigation">
      <div class="menu">
        <h4>Learn More</h4>
        <ul>
          <li><a href="#">How it work</a></li>
          <li><a href="#">Who we are</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </div>
      <div class="social  ">
        <h4>Social</h4>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Pinterest</a></li>
          <li><a href="#">Linkedin</a></li>
        </ul>
      </div>
    </div>
    <div class="downloads">
      <h4>Downloads</h4>
      <a href="#"><img :src="gpUrl" alt="Google Play Link"></a>
      <a href="#"><img :src="asUrl" alt="App Store Link"></a>
    </div>
    <div class="bottom">
      <div class="copiright">
        Copyright © 2020 Company Name All rights reserved
      </div>
      <div class="links">
        <a href="">Terms of use</a><a href="">Privacy Police</a><a href="">Cardholder Agreement</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--clr-background);
  display: grid;
  padding: 49px 54px 9px 54px;
}

footer h4 {
  color: var(--clr-text);
}

.logo {
  margin-bottom: 35px;
}

.contacts {
  margin-bottom: 45px;
}

.navigation {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 49px;
}

.downloads {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 62px;
}
.bottom {
  font-size: var(--fs-small);
  border-top: 1px solid;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 -38px;
  gap: 9px;
  padding-top: 18px;
  justify-content: space-between;
}

@media (min-width: 1024px) {
  footer {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .bottom {
    grid-column: 1 / -1;
    flex-direction: row;
  }
}
</style>
