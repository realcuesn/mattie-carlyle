<template>
    <div class="w-full min-h-screen">
        <div v-if="user" class="w-full pb-10 max-w-4xl mx-auto">
            <h2 class="mt-10 text-4xl font-semibold">Dashboard</h2>
            <div class="flex flex-col w-full pt-10">
                <div v-for="comment in comments"
                    class="w-full bg-neutral-900 rounded-lg p-2 px-4 flex items-center gap-x-2">
                    <div class="w-full">
                        <span>{{ comment.comment }}</span>
                    </div>
                    <div>
                        <button @click="deleteComment(comment.uid)" class="text-red-500">Delete</button>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="h-full w-full grid grid-cols-2 max-w-4xl mx-auto items-end">
            <h2 class="mt-10 text-lg text-left w-full font-semibold">You must be logged in to view this page.</h2>
            <form @submit.prevent="handleLogin" class="w-full flex flex-col">
                <div class="mt-10 w-full space-y-2">
                    <label class="block text-base dark:text-neutral-100" for="email">Your Email</label>
                    <input v-model="email" id="name" class="bg-transparent px-2 w-full py-2 border rounded-md" name="email"
                        type="email" placeholder="">
                </div>
                <div class="mt-10 w-full space-y-2">
                    <label class="block text-base dark:text-neutral-100" for="password">Your Password</label>
                    <input v-model="password" id="password" class="bg-transparent px-2 w-full py-2 border rounded-md"
                        name="password" type="password" placeholder="">
                </div>

                <button
                    class="px-7 rounded-md py-2.5 bg-black text-white dark:bg-white hover:brightness-75 active:brightness-125 transition-all duration-700 hover:text-[#1ad6ff] dark:text-black mt-10 w-fit">Login</button>
            </form>
        </div>
    </div>
</template>

<script setup>
const comments = ref([]);
const client = useSupabaseClient();
const user = useSupabaseUser();
const email = ref('');
const password = ref('');

onMounted(async () => {
    const { data } = await client.from('comments').select('*');
    comments.value = data;
})

const handleLogin = async () => {
    const { error } = await client.auth.signInWithPassword({
        email: email.value,
        password: password.value,
    });
    if (error) {
        console.log(error);
        return;
    }
}

const deleteComment = async (uid) => {
    const { error } = await client.from('comments').delete().eq('uid', uid);
    if (error) {
        console.log(error);
        return;
    }
    comments.value = comments.value.filter(comment => comment.uid !== uid);
}
</script>
