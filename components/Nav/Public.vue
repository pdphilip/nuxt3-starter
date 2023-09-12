<template>
  <div v-if="!isMobile" class="hidden lg:flex lg:gap-x-12">
    <a v-for="link in links" :key="link.href" :href="link.href" class="loading text-sm font-semibold leading-6 text-gray-900 rounded px-2 py-1 hover:bg-primary-100 hover:text-primary-600" :class="link.isActive ? 'bg-primary-500 text-primary-100' : ''">{{ link.name }}</a>
  </div>
  <div class="hidden lg:flex lg:flex-1 lg:justify-end">
    <NuxtLink to="/login" class="loading text-sm font-semibold leading-6 text-gray-900">Log in
      <span aria-hidden="true">&rarr;</span></NuxtLink>
  </div>
  <div v-if="isMobile" class="-my-6 divide-y divide-gray-500/10">
    <div class="space-y-2 py-6">
      <a v-for="link in links" :key="link.href" :href="link.href" class="loading -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" :class="link.isActive ? 'bg-primary-500 text-primary-100' : ''">{{ link.name }}</a>
    </div>
    <div class="py-6">
      <NuxtLink to="/login" class="loading -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</NuxtLink>
    </div>
  </div>
</template>
<script setup>
// ------- Props ------- //


const router = useRouter();

const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false,
  },
});

const links = ref([
  {
    name: 'Home',
    href: '/',
    isActive: false,
  },
  {
    name: 'About',
    href: '/about',
    isActive: false,
  },
]);

onMounted(() => {
  //if route is current set link to isActive
  links.value.forEach(link => {
    if (link.href === router.currentRoute.value.path) {
      link.isActive = true;
    }
  })
})
</script>