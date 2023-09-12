<template>
  <NuxtLayout>
    <h3>Callback</h3>
  </NuxtLayout>
</template>
<script setup>
const router = useRoute();
const Alert = useAlertState();
const auth = useAuthStore();
const loading = useLoadingState()
const query = ref({});


const processCallback = async () => {

  let code = router.query.code;
  let state = router.query.state;

  if (!code || !state) {
    await Alert.triggerAlert('Callback error', 'No code or state', 'error');
    loading.stopLoading();
    return navigateTo('/');
  }
  let success = await auth.loginWithCode(code, state);
  if (success) {
    loading.stopLoading();
    return navigateTo('/admin/dashboard');
  } else {
    loading.stopLoading();
    return navigateTo('/');
  }


  // const { query } = router;
  // const { code, state } = query;
  // console.log(code, state);
  // if (code && state) {
  //   console.log("code and state");
  //   // router.push("/callback");
  // } else {
  //   console.log("no code or state");
  // }
}

onMounted(async () => {
  loading.startLoading();
  await processCallback();
});
</script>