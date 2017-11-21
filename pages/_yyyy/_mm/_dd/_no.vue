<template>
  <div>
    <div>{{ fullPath }}</div>
    <div>{{ String(something) }}</div>
    <h1>yeah</h1>
    <nuxt-link to="/">index</nuxt-link>
  </div>
</template>

<script>
  export default {
    /*await*/ asyncData(context) {
      const { route } = context;

      return {
        fullPath: route.fullPath,
        something: context.something,
      };
    },
  }
</script>
