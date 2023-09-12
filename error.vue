<template class="hello">
  <main class="relative isolate min-h-full">
    <img src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-top">
    <div class="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
      <p class="text-8xl mb-12 font-light leading-8 text-white">{{ error.statusCode }}</p>
      <h1 class="mt-4 text-xl font-bold tracking-tight text-white sm:text-xl">{{ error.statusMessage }}</h1>
      <div class="mt-10 flex justify-center">
        <button type="button" @click="goHome" class="text-sm font-semibold leading-7 text-white">
          <span aria-hidden="true">&larr;</span> Back to home
        </button>
      </div>
    </div>
  </main>
</template>
<script setup>
const error = useError();
useHead({
  bodyAttrs: {
    class: 'h-full'
  },
  htmlAttrs: {
    class: 'h-full'
  },

});


const goHome = () => {
  clearError({
    redirect: '/'
  });
}
</script>