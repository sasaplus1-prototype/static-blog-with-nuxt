<template>
  <div>
    <div>{{ fullPath }}</div>
    <div>{{ String(something) }}</div>
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
