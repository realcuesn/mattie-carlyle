<template>
    <div class="w-full lg:grid gap-x-2 grid-cols-2">
        <div>
            <h2 class="text-4xl font-semibold">Welcome to Mattie <br> Carlyle Blog Page</h2>
            <ol class="list-disc px-4 flex flex-col w-full gap-y-4 mt-10 text-xl font-light">
                <li>
                    <NuxtLink class="hover:text-[#1ad6ff] transition-all duration-700" to="/articles/article/the-last-will">
                        The last will of
                        <span class="font-semibold underline">Mattie Carlyle</span>
                        extracted from the original document
                    </NuxtLink>
                </li>

                <li>
                    <NuxtLink class="hover:text-[#1ad6ff] transition-all duration-700"
                        to="/articles/article/my-grandma-as-i-knew-her">
                        My Grandmother As I Knew Her - <span class="font-semibold underline">By Lee Carlyle</span> (
                        a.k.a
                        Jedlicka Smith)
                    </NuxtLink>
                </li>


            </ol>
        </div>
        <div class="w-full mt-10 lg:mt-0">
            <div class="w-full aspect-video">
                <NuxtImg format="webp" quality="80" height="444" width="800" src="/images/home-carousel/Mattie_Carlye_1.jpg" alt="Lee Carlyle"
                    class="w-full h-full  object-contain rounded-xl" />
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
