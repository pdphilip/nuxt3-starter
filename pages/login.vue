<template>
  <NuxtLayout name="login">
    <div class="flex justify-center">
      <a :href="authLink" class="btn btn-primary">Authorize login</a>
    </div>
  </NuxtLayout>
</template>
<script setup>
// ------- Props ------- //
definePageMeta({
  middleware: 'guest',
});


const authLink = ref('')


onMounted(async () => {
  const auth = useAuthStore();
  authLink.value = await auth.generateAuthRequestUrl();
});
</script>