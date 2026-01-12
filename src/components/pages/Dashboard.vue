<script setup>
import Grid from "../Grid.vue";
import { gymHealthFacts } from "../../utils";

const props = defineProps({
    handleSelectedWorkout: Function
});

const randomNumber = Math.floor(Math.random() * gymHealthFacts.length);
const todaysFact = gymHealthFacts[randomNumber];

</script>

<template>
    <!-- Dashboard -->
    <section class="flex flex-col gap-8">
        <!-- card tip container -->
        <div class="card flex flex-col gap-2">
            <h2>Welcome Soldier</h2>
            <div>
                <!-- tip -->
                <p class="flex flex-col">
                    <strong>Daily Tip</strong>
                    {{ todaysFact }}
                </p>
            </div>
            <button>Start Training &rarr;</button>
        </div>
        <Grid :handleSelectedWorkout="props.handleSelectedWorkout   "/>
    </section>
</template>
