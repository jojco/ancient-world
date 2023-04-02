<template>
  <div>
    <h1>Index</h1>
    <h2>co2Concentration: {{ scd30.co2Concentration }}</h2>
    <h2>temperature: {{ scd30.temperature }}</h2>
    <h2>relativeHumidity: {{ scd30.relativeHumidity }}</h2>
    <h2>Hello {{ hello }}</h2>
  </div>
</template>

<script setup>
const { data: scd30 } = await useAsyncData('scd30', () => $fetch('/api/scd30'));
const { data: hello } = await useFetch('/api/hello');
</script>

<style lang="scss" scoped></style>
