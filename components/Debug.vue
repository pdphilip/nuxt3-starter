<template>
  <div v-if="show" class="absolute bottom-0 right-0 bg-primary-200 text-primary-800 p-8 rounded overflow-x-scroll w-full">
    <pre>{{ show }}</pre>
    <pre>{{ user }}</pre>
    <button @click="reset" class="btn btn-primary">Reset</button>
  </div>
</template>
<script setup>
const user = ref({})
const auth = useAuthStore();
const show = ref(false);
const router = useRouter();
const config = useRuntimeConfig();


const reset = async () => {
  await auth.logout();
  router.go(0);

}

onMounted(async () => {
  user.value = auth.returnUser;
  show.value = config.public.debug;
});
</script>