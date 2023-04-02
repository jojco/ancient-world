<template>
  <div>
    <h1>Index</h1>
    <h2>SCD30 {{ scd30 }}</h2>
  </div>
</template>

<script setup>
const { data: scd30 } = await useFetch('/scd30');
</script>

<style lang="scss" scoped></style>
