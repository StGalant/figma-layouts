<script lang="ts" setup>
import Button from './Button.vue'
</script>

<template>
  <div class="subscribe">
    <div class="heading">
      <h2>Get In Touch</h2>
      <h4>Short introduction</h4>
    </div>
    <form @submit.prevent="">
      <fieldset class="email">
        <label>Type your Email Address</label>
        <input type="text" aria-label="Type your Email Address">
      </fieldset>
      <Button>Send Now</Button>
    </form>
  </div>
</template>

<style scoped>
.subscribe {
  background-color: var(--clr-background-700);
  padding-top: 80px;
  padding-bottom: 162px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.heading {
  margin-bottom: 77px;
}

.subscribe form {
  display: flex;
  flex-direction: column;
  background-color: var(--clr-background);
  border-radius: 8px;
  padding: 28px;
  gap: 29px;
}
.subscribe form .email {
  display: flex;
  gap: 6px;
  flex-direction: column;
}

.subscribe form label {
  font-size: var(--fs-small);
  opacity: .2;
}
.subscribe form input {
  border: 1px solid var(--clr-text-200);
  font-weight: bold;
  padding: 0 .15rem;
  width: 270px;
}

.subscribe form input:focus {
  outline: none;
  border: 1px solid var(--clr-text);
}

@media (min-width: 640px) {
  .subscribe form {
    flex-direction: row;
    align-items: center;
    padding: 26px 30px;
  }
}
</style>
