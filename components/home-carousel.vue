<template>
    <div class="w-full aspect-square lg:aspect-[12/9] relative mt-10 lg:mt-20">
        <div class="h-full w-full">
            <HomeCarouselItem :index="currentSlide"></HomeCarouselItem>
        </div>
    </div>
</template>

<script setup>


const currentSlide = ref(0);
const slideInterval = ref(null);
const direction = ref("slide-out");

const next = () => {
    const index =
        currentSlide.value < slides.length - 1 ? currentSlide.value + 1 : 0;
    direction.value = "slide-out";
    currentSlide.value = index;
};
const slides = [

    "home-hero-one.webp",
    "home-hero-two.webp",
    "home-hero-two.webp",
    "home-hero-two.webp",
    "home-hero-two.webp",
];

onMounted(() => {

    slideInterval.value = setInterval(() => {
        next();
        console.log(currentSlide.value)
    }, 5000);
})

onBeforeUnmount(() => {
    clearInterval(slideInterval.value);

});

</script>