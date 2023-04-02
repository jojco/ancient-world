<template>
  <div class="container">
    <div class="flex flex-column align-items-center mt-1">
      <h2>Hello {{ hello }}</h2>
      <h2>co2Concentration: {{ scd30?.co2Concentration }}</h2>
      <Knob :model="scd30?.co2Concentration" :min="0" :max="3000" />

      <h2>temperature: {{ scd30?.temperature }}</h2>
      <Knob :model="scd30?.temperature" :min="-50" :max="100" />

      <h2>relativeHumidity: {{ scd30?.relativeHumidity }}</h2>
      <Knob :model="scd30?.relativeHumidity" :min="0" :max="100" />

      <Toast />

      <div class="mt-4">
        <form @submit.prevent="greet">
          <InputText v-model="text" type="text" />
          <Button type="submit" label="Submit" />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';

const { data: scd30 } = await useAsyncData('scd30', () => $fetch('/api/scd30'));
const { data: hello } = await useFetch('/api/hello');
const text = ref();
const toast = useToast();
const greet = () => {
  toast.add({ severity: 'info', summary: 'Hello ' + text.value });
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
