<template>
    <header class="w-full">
        <div class="w-full max-w-4xl mx-auto py-14 flex justify-between  gap-x-4">
            <div class="lg:hidden">

                <DropdownMenuRoot>
                    <DropdownMenuTrigger>
                        <img src="@/assets/icons/menu.svg" class="h-6 mt-3 dark:!invert" alt="menu">
                    </DropdownMenuTrigger>

                    <DropdownMenuPortal>
                        <DropdownMenuContent>
                            <DropdownMenuLabel />
                            <div
                                class="w-fit pl-8 pr-20 rounded-md ml-2 py-6 flex flex-col gap-y-5 text-lg font-medium bg-neutral-100 dark:bg-neutral-600 dark:bg-opacity-50 bg-opacity-20 backdrop-blur-2xl shadow-xl">
                                <DropdownMenuItem>
                                    <NuxtLink to="/" class="!text-black dark:!text-white">About</NuxtLink>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <NuxtLink to="/articles" class="!text-black dark:!text-white">Articles</NuxtLink>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <NuxtLink to="/contact" class="!text-black dark:!text-white">Contact</NuxtLink>
                                </DropdownMenuItem>
                            </div>

                            <DropdownMenuArrow />
                        </DropdownMenuContent>
                    </DropdownMenuPortal>
                </DropdownMenuRoot>
            </div>
            <div class="lg:flex hidden items-center select-none text-xl gap-x-8">
                <NuxtLink to="/" class="">
                    <div class="overflow-y-clip">
                        <span ref="navAbout" class="block translate-y-[100%]">About</span>
                    </div>
                </NuxtLink>
                <NuxtLink to="/articles" class="">
                    <div class="overflow-y-clip">
                        <span ref="navArticles" class="block translate-y-[100%]">Articles</span>
                    </div>
                </NuxtLink>
                <NuxtLink to="/contact" class="">
                    <div class="overflow-y-clip">
                        <span ref="navContact" class="block translate-y-[100%]">Contact</span>
                    </div>
                </NuxtLink>
            </div>

            <h1 class="font-semibold text-2xl  lg:text-3xl">
                <NuxtLink class="!text-black dark:!text-white" to="/">
                    <div class="w-full overflow-y-clip">
                        <span ref="logo" class="translate-y-[100%] block">
                            Last Will of Mattie Carlyle
                        </span>
                    </div>
                </NuxtLink>
            </h1>
        </div>
    </header>
</template>

<script setup>
import gsap from 'gsap';

const logo = ref(null);
const navAbout = ref(null);
const navArticles = ref(null);
const navContact = ref(null);

onMounted(() => {

    gsap.to(navAbout.value, {
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
    });

    gsap.to(navArticles.value, {
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.4,
    });

    gsap.to(navContact.value, {
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6,
    });

    gsap.to(logo.value, {
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5,
    });
});
</script>


<style scoped>
.router-link-exact-active {
    /*  color: #f59e0b; */
    color: #1ad6ff;
}
</style>