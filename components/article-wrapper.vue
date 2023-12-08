<template>
    <div class="mx-auto max-w-3xl">

        <NuxtLink to="/articles" class="flex gap-x-2 mt-10 mb-16 border-b border-neutral-600 w-fit items-center">
            <img src="@/assets/icons/arrow-left.svg" class="h-4  dark:!invert " alt="">
            <span>Back</span>
        </NuxtLink>

        <slot></slot>

        <button @click="scrollToTop" to="/articles/article/the-last-will"
            class="flex gap-x-2 mt-10 mb-16 ml-auto border-b border-dashed  border-neutral-600 w-fit items-center">
            <span>Scroll to top</span>
            <img src="@/assets/icons/arrow-up.svg" class="h-4  dark:!invert " alt="">
        </button>

        <SiteComments></SiteComments>

    </div>
</template>

<script setup>
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

</script>
