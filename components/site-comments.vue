<template>
    <div class="w-full mt-20">
        <h2 class="text-4xl font-semibold pb-5">Comments</h2>
        <form @submit.prevent="submitComment" class="mt-3.5 w-full space-y-2">
            <label class="block text-base dark:text-neutral-100" for="name">Your Comment</label>
            <input v-model="commentInput" id="name" class="bg-transparent px-2 w-full py-2 border rounded-md" name="name"
                type="text" placeholder="">
            <button type="submit"
                class="px-7 rounded-md py-2.5 bg-black text-white dark:bg-white hover:brightness-75 active:brightness-125 transition-all duration-700 hover:text-[#1ad6ff] dark:text-black mt-10 w-fit">Send
                Comment</button>
        </form>
        <div class="w-full max-h-96 overflow-auto">
            <ul class="w-full flex flex-col gap-y-5 mt-10">
                <li v-for="comment in comments" :key="comment.id" class="w-full flex space-x-2">
                    <div class="w-full">
                        <div class="flex justify-between">
                            <h3 class="text-lg font-semibold">Anonymous</h3>
                            <p class="text-sm text-neutral-500">{{ comment.date }}</p>
                        </div>
                        <p class="text-base opacity-90 font-light mt-3">{{ comment.comment }}</p>
                    </div>

                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const comments = ref([]);
const client = useSupabaseClient();
const route = useRoute();
const commentInput = ref('');

const getCommentGroup = () => {
    if (route.path === '/') {
        return 'home';
    } else {
        return route.path.split('/')[route.path.split('/').length - 1];
    }
}

onMounted(async () => {
    const commentGroup = getCommentGroup();
    //gets comments based on the route/comment group.
    const { data } = await client.from('comments').select('*').eq('comment_group', commentGroup);
    comments.value = data;
})

const submitComment = async () => {
    const commentGroup = getCommentGroup();
    const { error } = await client.from('comments').insert([
        { comment: commentInput.value, comment_group: commentGroup },
    ]);
    if (error) {
        console.log(error);
        return;
    }
    comments.value = [...comments.value, { comment: commentInput.value, comment_group: commentGroup }];
    commentInput.value = '';
}


</script>
