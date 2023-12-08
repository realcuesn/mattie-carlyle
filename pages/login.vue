<template>
    <!--         loading  -->
    <div class="w-full h-[80vh] flex justify-center items-center">
        <div class="w-20 h-20 border-4 border-t-4 border-gray-200 border-dashed rounded-full animate-spin duration-1000">
        </div>
    </div>
</template>

<script setup>

const client = useSupabaseClient();
const route = useRoute();
const router = useRouter();

onMounted(async () => {
    const { error } = await client.auth.verifyOtp({
        type: 'email',
        otp: route.query.otp,
    })
    if (error) {
        console.log(error);
        return;
    } else {
        router.push('/dashboard');
    }
})


</script>
