<template>
  <div>
    <h1>1</h1>
    <p>{{ data }}</p>
  </div>
</template>

<script>
  export default {
    async asyncData(context) {
      const data = await import('~/assets/1.json');

      return {
        data,
      }
    },
  }
</script>
