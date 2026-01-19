<script setup>
import Grid from "../Grid.vue";
import { gymHealthFacts } from "../../utils";

const props = defineProps({
    handleSelectedWorkout: Function,
    firstIncompleteWorkoutIndex: Number
});

const randomNumber = Math.floor(Math.random() * gymHealthFacts.length);
const todaysFact = gymHealthFacts[randomNumber];
</script>

<template>
    <!-- Dashboard -->
    <section class="flex flex-col gap-8">
        <!-- card tip container -->
        <div class="card flex flex-col gap-2">
            <h2>Welcome King</h2>
            <div>
                <!-- tip -->
                <p class="flex flex-col">
                    <strong>Daily Tip</strong>
                    {{ todaysFact }}
                </p>
            </div>
            <button @click="() => handleSelectedWorkout(firstIncompleteWorkoutIndex <  0 ? 0 : firstIncompleteWorkoutIndex)" >Start Training &rarr;</button>
        </div>
        <Grid v-bind="props"/>
    </section>
</template>
