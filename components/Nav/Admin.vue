<template>
  <a v-if="!isMobile" v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-primary-700 text-white' : 'text-white hover:bg-primary-500 hover:bg-opacity-75', 'rounded-md py-2 px-3 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
  <DisclosureButton v-if="isMobile" v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-primary-700 text-white' : 'text-white hover:bg-primary-500 hover:bg-opacity-75', 'block rounded-md py-2 px-3 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
</template>
<script setup>
import { DisclosureButton } from "@headlessui/vue";

// ------- Props ------- //
const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false,
  },
});

const route = useRoute();

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', current: route.path === '/admin/dashboard' },
  { name: 'Profile', href: '/admin/profile', current: route.path === '/admin/profile' },
]

// ------- Refs ------- //

// ------- Methods ------- //

// ------- Callbacks ------- //

onMounted(() => {

});
</script>