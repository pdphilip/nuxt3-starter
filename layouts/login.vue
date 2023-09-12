<template>
  <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <NuxtLink to="/">
        <AppLogo class="mx-auto h-12 w-auto hover:text-primary-500"/>
      </NuxtLink>
      <h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
      <slot/>
      <div class="flex">
        <NuxtLink to="/" class="flex gap-2 items-center hover:text-primary-400">
          <ArrowLeftIcon class="w-4 h-5"/>
          Home
        </NuxtLink>
      </div>
    </div>
  </div>
  <div>
  </div>
</template>
<script setup>
import { ArrowLeftIcon } from "@heroicons/vue/20/solid";
</script>