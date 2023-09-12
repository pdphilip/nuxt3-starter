<template>
  <NuxtLayout>
    <div class="grid grid-cols-2 pt-20">
      <div class="card">
        <div class="card-content">
          <ContentDoc path="sample-content"/>
        </div>
      </div>
      <div class="flex justify-end">
        <div>
          <button class="btn btn-secondary" @click="alertMe">Alert me</button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup>
// ------- Props ------- //
definePageMeta({
  // layout: "login",
});

const alertMe = () => {
  const Alert = useAlertState();
  Alert.triggerAlert('This is an alert', '', 'success');
}

onMounted(async () => {


});
</script>