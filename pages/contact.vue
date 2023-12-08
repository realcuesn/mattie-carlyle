<template>
    <div class="w-full">
        <div class="w-full pb-10 max-w-4xl mx-auto">
            <h2 class="mt-10 text-4xl font-semibold">Get in Touch</h2>
            <div class="w-full lg:grid grid-cols-2">
                <form class="flex flex-col gap-y-2" action="">
                    <div class="mt-10 w-full space-y-2">
                        <label class="block text-base dark:text-neutral-100" for="name">Your name</label>
                        <input id="name" class="bg-transparent px-2 w-full py-2 border rounded-md" name="name" type="text"
                            placeholder="">
                    </div>
                    <div class="mt-10 w-full space-y-2">
                        <label class="block text-base dark:text-neutral-100" for="email">Your email</label>
                        <input id="email" class="bg-transparent px-2 w-full py-2 border rounded-md" name="email" type="text"
                            placeholder="">
                    </div>
                    <div class="mt-10 w-full space-y-2">
                        <label class="block text-base dark:text-neutral-100" for="subject">Subject</label>
                        <input id="subject" class="bg-transparent px-2 w-full py-2 border rounded-md" name="subject"
                            type="text" placeholder="">
                    </div>
                    <div class="mt-10 w-full space-y-2">
                        <label class="block text-base dark:text-neutral-100" for="message">Message</label>
                        <textarea cols="30" rows="10" id="message" class="bg-transparent px-2 w-full py-2 border rounded-md"
                            name="message" placeholder=""></textarea>
                    </div>
                    <div class="mt-10 w-full space-y-2">
                        <label class="block text-base dark:text-neutral-100" for="image">Upload Image</label>
                        <input id="image" type="file" class="bg-transparent w-full py-10 pl-32 border rounded-md"
                            placeholder="" name="image" accept="image/*">
                    </div>

                    <button
                        class="px-7 rounded-md py-2.5 bg-black text-white dark:bg-white hover:brightness-75 active:brightness-125 transition-all duration-700 hover:text-[#1ad6ff] dark:text-black mt-10 w-fit">Send
                        Message</button>
                </form>
                <div class="w-full">
                    <h1 class="text-lg font-medium lg:pl-20 mt-20">
                        If you're a part of Mattie's family and wish to stay informed about the latest updates regarding
                        Mattie's estate, kindly reach out to us by completing the form.
                    </h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

useHead({
    title: 'Contact Us | The Last Will of Mattie Carlyle',
    meta: [
        {
            name: 'description',
            content: 'A blog dedicated to Mattie Carlyles last will',
        },
    ],
})

</script>
