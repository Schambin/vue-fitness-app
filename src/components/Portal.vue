<script setup>
    const props = defineProps({
        hello: String,
        handleCloseModal: Function,
    });

</script>

<template>
    <Teleport to="#portal">
        <div class="portal-container fixed top-0 left-0 w-screen h-screen z-[1001]">
            <div
                role="button"
                tabindex="0"
                @click="props.handleCloseModal"
                class="portal-underlay absolute inset-0 bg-background-primary z-[999] opacity-70 border-none p-0"
            ></div>
            <div class="portal-content absolute z-[1000] top-1/2 left-1/2 w-[600px] max-w-[90vw] max-h-[80vh] workout-grid-row items-center bg-background-primary rounded-sm translate-x-[-50%] translate-y-[-50%]">
                <slot />
            </div>
        </div>
    </Teleport>
</template>