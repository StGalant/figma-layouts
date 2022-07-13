<script lang="ts" setup>

</script>

<template>
  <div class="container flex">
    <RouterLink :to="{ name: 'Project-1' }">
      <div class="card">
        Project 1
      </div>
    </RouterLink>
    <RouterLink :to="{ name: 'Project-1' }">
      <div class="card">
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
  width: 150px;
  height: 150px;
  border-radius: 5px;
  border: 1px solid gray;
  padding: .25rem;
}
</style>
