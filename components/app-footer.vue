<template>
    <div class="w-full pt-10">
        <div class="w-full max-w-4xl mx-auto py-7">
            <h3 class="text-center font-semibold text-3xl">
                <NuxtLink to="/" class="!text-white">
                    Mattie Carlyle
                </NuxtLink>
            </h3>
            <section class="flex justify-center items-center gap-x-10 mt-5">
                <NuxtLink to="/" class="text-base">About</NuxtLink>
                <NuxtLink to="/articles" class="text-base">Articles</NuxtLink>
                <NuxtLink to="/contact" class="text-base">Contact</NuxtLink>
            </section>
            <section class="mt-10 flex justify-center w-full">
                <div class="w-full">
                    <h3 class="w-full text-center">Follow Us On</h3>
                    <div class="flex w-full items-center mt-5 justify-between">
                        <div></div>
                        <ul class="flex items-center gap-x-5  font-light">
                            <li>
                                <a href="https://www.twitter.com/">
                                    <img src="@/assets/icons/twitter.svg"
                                        class="h-6 dark:!invert hover:opacity-60 transition-opacity duration-500 active:opacity-80"
                                        alt="twitter">
                                </a>
                            </li>

                            <li>
                                <a href="https://www.instagram.com/">
                                    <img src="@/assets/icons/instagram.svg"
                                        class="h-6 dark:!invert hover:opacity-60 transition-opacity duration-500 active:opacity-80"
                                        alt="instagram">
                                </a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/">
                                    <img src="@/assets/icons/linkedin.svg"
                                        class="h-6 dark:!invert hover:opacity-60 transition-opacity duration-500 active:opacity-80"
                                        alt="linkedin">
                                </a>
                            </li>
                        </ul>

                        <div class="w-fit">
                            <button class="hover:opacity-60 transition-opacity duration-500 active:opacity-80"
                                v-if="colorMode.preference == 'dark'" @click="colorMode.preference = 'light'">
                                <img src="@/assets/icons/sun.svg" class="h-6 dark:!invert" alt="">
                            </button>
                            <button class="hover:opacity-60 transition-opacity duration-500 active:opacity-80" v-else
                                @click="colorMode.preference = 'dark'" size="icon">
                                <img src="@/assets/icons/moon.svg" class="h-6 dark:!invert" alt="">
                            </button>
                        </div>
                    </div>

                </div>

            </section>

            <section>

                <div class="w-full text-neutral-600 dark:text-neutral-400 mt-14 text-sm flex justify-between">
                    <h2>Privacy Policy</h2>
                    <p class="text-sm capitalize">© Mattie Carlyle Organization</p>
                </div>

            </section>

        </div>
    </div>
</template>

<script setup>
const colorMode = useColorMode()

</script>


<style scoped>
.router-link-exact-active {
    /*  color: #f59e0b; */
    color: #1ad6ff;
}
</style>
