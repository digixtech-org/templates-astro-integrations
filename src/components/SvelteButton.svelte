<script>
    export let text;
</script>

<button class="svelte-btn bg-blue-500 hover:bg-blue-700">{text}</button>

<style>
    .svelte-btn {
        @apply  text-white font-bold py-2 px-4 rounded;
    }
</style>
