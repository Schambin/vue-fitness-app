<script setup>
import { workoutProgram } from "../utils";
import { ref } from "vue";

const workoutTypes = ref("Push", "Pull", "Legs");
</script>

<template>
    <!-- grid -->
    <section class="grid grid-cols-3 gap-4 sm:gridgrid-cols-4">
        <button
            :key="workoutIdx"
            v-for="(workout, workoutIdx) in Object.keys(workoutProgram)"
            class="card-button plan-card w-full flex flex-col"
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
            <h3>TYPES</h3>
        </button>
    </section>
</template>
