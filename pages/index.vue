<template>
  <div>
    <h1>Index</h1>
    <h2>SCD30 {{ scd30 }}</h2>
    <h2>Hello {{ hello }}</h2>
  </div>
</template>

<script setup>
const { data: scd30 } = await useFetch('/scd30');
const { data: hello } = await useFetch('/api/hello');

console.log('scd30', scd30);
console.log('hello', hello);
</script>

<style lang="scss" scoped></style>
