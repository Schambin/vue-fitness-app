<script setup>
import { workoutProgram } from "../utils";

defineProps({
    handleSelectedWorkout: Function,
    firstIncompleteWorkoutIndex: Number,
    handleResetPlan: Function,
});

const workoutTypes = ["Push", "Pull", "Legs"];


</script>

<template>
    <!-- grid -->
    <section class="grid grid-cols-3 gap-4 sm:grid-cols-4">
        <button
            :disabled="workoutIdx > 0 && workoutIdx > firstIncompleteWorkoutIndex"
            @click="handleSelectedWorkout(workoutIdx)"
            :key="workoutIdx"
            v-for="(workout, workoutIdx) in Object.keys(workoutProgram)"
            class="card-button plan-card w-full flex flex-col disabled:shadow-none disabled:cursor-not-allowed"
        >
            <div class="flex items-center justify-between gap-2 ">
                <p class="text-left">
                    Day
                    {{
                        workoutIdx < 9 ? "0" + (workoutIdx + 1) : workoutIdx + 1
                    }}
                </p>
                <i class="fa-solid fa-dumbbell" v-if="workoutIdx % 3 == 0"></i>
                <i class="fa-solid fa-weight-hanging" v-if="workoutIdx % 3 == 1"></i>
                <i class="fa-solid fa-bolt" v-if="workoutIdx % 3 == 2"></i>
            </div>
            <h3 class="text-2xl">{{workoutTypes[workoutIdx % 3]}}</h3>
        </button>
    </section>
    <button 
        :disabled="firstIncompleteWorkoutIndex != -1"
        @click="handleResetPlan"
        class="card-button plan-card flex w-full items-center justify-center gap-4">
        <p>Reset</p>
        <i class="fa-solid fa-rotate-left"></i>
    </button>
</template>
