<template>
  <div>
    <div>{{ fullPath }}</div>
    <div>{{ String(something) }}</div>
    <pre>{{ route }}</pre>
    <pre>{{ wowwow }}</pre>
    <h1>yeah</h1>
    <nuxt-link to="/">index</nuxt-link>
  </div>
</template>

<script>
  export default {
    async asyncData(context) {
      const { route } = context;

      return {
        route: JSON.stringify(route, null, 2),
        fullPath: route.fullPath,
        something: context.something,
        wowwow: await import('~/assets' + route.fullPath + 'index.json'),
      };
    },
  }
</script>
