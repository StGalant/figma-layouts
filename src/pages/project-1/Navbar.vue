<script lang="ts" setup>
import Logo from './Logo.vue'
import Button from './Button.vue'
</script>

<template>
  <div class="navbar">
    <Logo class="logo" />
    <nav>
      <div class="hamburger" />
      <div class="main-menu">
        <RouterLink :to="{ name: 'Project-1' }">
          Home
        </RouterLink>
        <RouterLink to="/">
          Explore
        </RouterLink>
      </div>
    </nav>
    <RouterLink to="/" class="get-started">
      <Button :arrow="true">
        <span>Get Started</span>
      </Button>
    </RouterLink>
  </div>
</template>

<style>
nav {
  font-family: var(--ff-btn);
  font-size: var(--fs-btn);
  font-weight: var(--fw-btn);
  display: flex;
  margin-left: auto;
}

.main-menu {
  display: flex;
  gap: 56px;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
}

.hamburger {
  height: 24px;
  width: 24px;
  margin: 0 20px;
  display: none;
  background: linear-gradient(
      to bottom,
      var(--clr-accent-500), var(--clr-accent-500) 20%,
      transparent 20%, transparent 40%,
      var(--clr-accent-500) 40%, var(--clr-accent-500) 60%,
      transparent 60%, transparent 80%,
      var(--clr-accent-500) 80%, var(--clr-accent-500) 100%
    );
}

.get-started {
  margin-left: 56px;
}

.router-link-exact-active:not(.btn)  {
  color: var(--clr-accent-500);
  font-weight: bold;
}

@media (max-width: 640px) {
  nav {
    order: -1;
    margin: 0;
  }

  .get-started {
    margin-left: auto;
  }

  .main-menu {
    display: none;
  }

  .hamburger {
    display: block;
  }

  .navbar {
  justify-content: start;
  }
}
</style>
