<template>
  <NuxtLayout name="admin" title="Welcome">
    <h3>hello <span class="text-primary-500">{{ user.name }}</span></h3>
  </NuxtLayout>
</template>
<script setup>
const user = ref(useCurrentUser());
</script>