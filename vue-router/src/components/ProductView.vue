<template>
  <p>RouteName: {{ $route.name }}</p>
  <div>
    Product: {{ route.params.id }}
    Lang: {{ route.query.lang }}
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();

console.log(route.params)
console.log(route.query)

</script>