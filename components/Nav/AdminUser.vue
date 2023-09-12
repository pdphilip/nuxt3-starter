<template>
  <MenuItem v-if="!isMobile" v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
    <button type="button" @click="item.action" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 w-full text-left']">{{ item.name }}</button>
  </MenuItem>
  <DisclosureButton v-if="isMobile" v-for="item in userNavigation" :key="item.name" as="a" @click="item.action" class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75">{{ item.name }}</DisclosureButton>
</template>
<script setup>
import { DisclosureButton, MenuItem } from "@headlessui/vue";


const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false,
  },
});

const route = useRoute();
const user = useAuthStore();
const Alert = useAlertState();

const goToSettings = () => {
  return navigateTo('/admin/settings');
}

const logOut = () => {
  user.logout();
  Alert.triggerAlert('Logged out', '', 'success');
  return navigateTo('/');
}

const userNavigation = [
  { name: 'Settings', action: goToSettings },
  { name: 'Sign out', action: logOut },
]
</script>