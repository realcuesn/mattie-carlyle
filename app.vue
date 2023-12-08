<template>
  <div class="w-full min-h-screen px-6 text-black dark:text-white dark:bg-[#0c0c0d]">
    <SiteHeader></SiteHeader>
    <NuxtPage></NuxtPage>
  </div>
  <div class="w-full px-6 text-black dark:text-white dark:bg-[#0c0c0d]">
    <AppFooter></AppFooter>
  </div>
</template>

<script setup>
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const colorModeStore = useColorMode();

onMounted(() => {
  // Set the theme preference if it's not already set
  if (!colorModeStore.preference) colorModeStore.preference = colorModeStore.value;
})
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

html,
body {
  width: 100%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.35s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>