<script lang="ts" setup>
import bgProject1 from '~/assets/project-1/bg.png'
</script>

<template>
  <div class="container flex">
    <RouterLink :to="{ name: 'Project-1' }">
      <div class="card" :style="{ backgroundImage: `url(${bgProject1})` }">
        Project 1
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
.container {
  margin: 1rem auto;
  width: min-content;
}

.flex {
  display: flex;
  gap: 1rem;
}

.card {
  display: flex;
  justify-content: center;
  width: 300px;
  height: 200px;
  border-radius: 5px;
  border: 1px solid gray;
  padding: .25rem;
  background-size: 100% 100%;
}
</style>
