<template>
    <div class="w-full min-h-screen">
        <div class="w-full pb-10 max-w-4xl mx-auto">
            <HomeHero></HomeHero>
            <HomeContent></HomeContent>
            <HomeCarousel></HomeCarousel>
            <HomeFamilyTree></HomeFamilyTree>
            <HomeFaq></HomeFaq>
            <SiteComments></SiteComments>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'The Last Will of Mattie Carlyle',
    meta: [
        {
            name: 'description',
            content: 'A blog dedicated to Mattie Carlyles last will',
        },
    ],
})

useSeoMeta({
    title: 'The Last Will of Mattie Carlyle',
    description: 'A blog dedicated to Mattie Carlyles last will',
    ogDescription: 'A blog dedicated to Mattie Carlyles last will',
    ogImage: '/images/home-carousel/1.jpg',
    twitterCard: 'summary_large_image',
})
</script>