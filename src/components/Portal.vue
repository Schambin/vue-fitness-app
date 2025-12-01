<script setup>

</script>

<template>
    <Teleport to="#portal">
        <div class="portal-container">
            <div role="button" tabindex="0" @click="() => { }" class="portal-underlay"></div>
            <div class="portal-content">
                <slot />
            </div>
        </div>
    </Teleport>
</template>