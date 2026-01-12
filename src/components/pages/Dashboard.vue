<script setup>
import Grid from "../Grid.vue";
import { gymHealthFacts } from "../../utils";

const props = defineProps({
    handleSelectedWorkout: props
});

const randomNumber = Math.floor(Math.random() * gymHealthFacts.length);
const todaysFact = gymHealthFacts[randomNumber];
</script>

<template>
    <!-- Dashboard -->
    <section class="flex flex-col gap-8">
        <!-- card tip container -->
        <div class="card flex flex-col gap-2">
            <h2>Bem-Vindo Soldado(a)</h2>
            <div>
                <!-- tip -->
                <p class="flex flex-col">
                    <strong>Dica Diária</strong>
                    {{ todaysFact }}
                </p>
            </div>
            <button>Começar Treino &rarr;</button>
        </div>
        <Grid />
    </section>
</template>
