<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">HelloWorld</h1>

    <h3>Vite + Vue 3</h3>
  </div>
</template>

<style lang="scss" scoped>
.greetings {
  .green {
    color: green;
  }
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
