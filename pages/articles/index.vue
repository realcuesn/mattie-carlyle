<template>
    <div class="w-full py-3 min-h-[60vh] flex flex-col space-y-10">
        <NuxtLink to="/articles/article/my-grandma-as-i-knew-her"
            class="w-full sm:grid gap-x-10 grid-cols-2 hover:brightness-75 active:brightness-125 transition-all duration-700">
            <img src="/images/blogs/benificaries.png" class="w-full aspect-video object-cover object-top rounded-lg" alt="">
            <div class="w-full">
                <h3 class="text-3xl mt-10 lg:text-4xl font-semibold">
                    My Grandmother As I Knew Her
                </h3>
                <p class="mt-3 opacity-80 font-light"> My Grandmother As I Knew Her - <span
                        class="font-semibold underline">By Lee Carlyle</span> (
                    a.k.a
                    Jedlicka Smith)
                </p>
                <p class="mt-5  text-sm opacity-50">
                    November 22, 2023
                </p>
            </div>
        </NuxtLink>

        <div class=" w-full flex flex-col gap-y-14 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10">
            <NuxtLink to="/articles/article/the-last-will"
                class="w-full hover:brightness-75 active:brightness-125 transition-all duration-700">
                <img src="/images/blogs/Last_Will_of_Mattie_Carlyle.jpg" class="w-full aspect-video object-cover rounded-lg"
                    alt="">
                <div class="w-full">
                    <h3 class="text-3xl mt-10 font-semibold">
                        Last Will of <br> Mattie.
                    </h3>
                    <p class="mt-3 opacity-80 font-light">The last will of Mattie Carlyle extracted from the original
                        document
                    </p>
                    <p class="mt-5  text-sm opacity-50">
                        November 22, 2023
                    </p>
                </div>
            </NuxtLink>

            <NuxtLink to="/articles/article/mattie-carlyle-obituary"
                class="w-full hover:brightness-75 active:brightness-125 transition-all duration-700">
                <img src="/images/blogs/unnamed.png" class="w-full aspect-video object-cover object-top rounded-lg" alt="">
                <div class="w-full">
                    <h3 class="text-3xl mt-10 font-semibold">
                        Mattie Carlyle Obituary
                    </h3>
                    <p class="mt-3 opacity-80 font-light">Mattie Lee J. (Wiggs) Carlyle, a resident of Brown Street
                    </p>
                    <p class="mt-5  text-sm opacity-50">
                        November 24, 2023
                    </p>
                </div>
            </NuxtLink>

            <NuxtLink to="/articles/article/daughter-loving-reflection"
                class="w-full hover:brightness-75 active:brightness-125 transition-all duration-700">
                <img src="/images/blogs/unnamed.png" class="w-full aspect-video object-cover object-top rounded-lg" alt="">
                <div class="w-full">
                    <h3 class="text-3xl mt-10 font-semibold">
                        Daughter Loving Reflection
                    </h3>
                    <p class="mt-3 opacity-80 font-light">A Daughter's Loving Reflection: The Life of Mattie Carlyle
                    </p>
                    <p class="mt-5  text-sm opacity-50">
                        November 26, 2023
                    </p>
                </div>
            </NuxtLink>

        </div>
    </div>
</template>

<script setup>

useHead({
    title: 'Articles | The Last Will of Mattie Carlyle',
    meta: [
        {
            name: 'description',
            content: 'A blog dedicated to Mattie Carlyles last will',
        },
    ],
})

</script>
