<script setup>
    defineProps({
        handleChangeDisplay: Function,
    });
</script>

<template>
    <header class="p-4 w-100 max-w-[600px] mx-auto font-bold">
        <h1 class="text-gradient">
            <button @click="handleChangeDisplay(1)" class="btn-reset">SMOLGRAM</button>
        </h1>
    </header>
    <main class="p-4 w-100 max-w-[600px] mx-auto flex-1">
        <slot />
    </main>
    <footer class="w-100 max-w-[600px] mx-auto flex flex-col gap-2 items-center p-12 pb-16">
        <small>Created By</small>
        <a href="https://github.com/Schambin" target="_blank" class="flex items-center gap-2 p-[0.3rem] pr-2 bg-background-muted rounded-[4rem] border-2 border-transparent border-solid duration-200 no-underline hover:border-color-link"> 
            <img src="https://avatars.githubusercontent.com/u/118319638?v=4" alt="pfp" class="max-w-[30px] aspect-square rounded-full">
            <p>Kauan Schamber</p>
            <i class="fa-brands fa-github"></i>
        </a>
    </footer>
</template>
