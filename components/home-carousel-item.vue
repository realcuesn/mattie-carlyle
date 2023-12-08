<template>
    <transition :name="'slide-out'">
        <NuxtImg v-show="props.index === 0" class="h-full w-full rounded-xl object-cover object-center absolute overflow-x-clip"
            format="webp" src="/images/home-carousel/1.jpg" alt="slide" />
    </transition>

    <transition :name="'slide-out'">
        <NuxtImg v-show="props.index === 1" class="h-full w-full rounded-xl object-cover object-center absolute overflow-x-clip"
            format="webp" src="/images/home-carousel/2.png" alt="slide" />
    </transition>

    <transition :name="'slide-out'">
        <NuxtImg v-show="props.index === 2" class="h-full w-full rounded-xl object-cover object-center absolute overflow-x-clip"
            format="webp" src="/images/home-carousel/3.png" alt="slide" />
    </transition>

    <transition :name="'slide-out'">
        <NuxtImg v-show="props.index === 3" class="h-full w-full rounded-xl object-cover object-center absolute overflow-x-clip"
            format="webp" src="/images/home-carousel/4.jpg" alt="slide" />
    </transition>

    <transition :name="'slide-out'">
        <NuxtImg v-show="props.index === 4" class="h-full w-full rounded-xl object-cover object-center absolute overflow-x-clip"
            format="webp" src="/images/home-carousel/5.jpg" alt="slide" />
    </transition>
</template>

<script setup>
const props = defineProps(['slide', "currentSlide", 'index', 'direction'])

</script>

<style scoped>
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
    transition: all 2s linear;
}

.slide-in-enter-from {
    /*   transform: translate(-100%); */
    opacity: 100%;
}

.slide-in-leave-to {
    /* transform: translate(100%); */
    opacity: 0%;
}

.slide-out-enter-from {
    /*  transform: translate(100%); */
    opacity: 0%;
}

.slide-out-leave-to {
    /*  transform: translate(-100%); */
    opacity: 0%;
}
</style>