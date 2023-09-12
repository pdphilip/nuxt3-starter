<template>
  <div>
    <AppLoader size="40" v-if="loadingState.loading"/>
    <NuxtPage/>
    <AppAlert/>
    <Debug/>
  </div>
</template>
<script setup>
const nuxtApp = useNuxtApp();
const loadingState = useLoadingState();
</script>