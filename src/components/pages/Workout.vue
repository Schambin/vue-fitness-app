<script setup>

import Portal from "../Portal.vue";
import { workoutProgram, exerciseDescriptions } from "../../utils";
import { ref, computed } from "vue";

const { data, selectedWorkout } = defineProps({
    data: Object,
    selectedWorkout: Number
});

let selectedExercise = ref(null);
const { workout, warmup } = workoutProgram[selectedWorkout];
const exerciseDescription = computed(() => exerciseDescriptions[selectedExercise.value])
console.log(exerciseDescription);

function handleCloseModal() {
    selectedExercise.value = null;
}

</script>

<template>
    <Portal v-if="selectedExercise" :handleCloseModal="handleCloseModal">
        <div class="execise-description flex flex-col gap-4">
            <h3 class="font-bold capitalize">{{ selectedExercise }}</h3>
            <div>
                <small>Description</small>
                <p>{{ exerciseDescription }}</p>
            </div>
            <button class="flex items-center" @click="handleCloseModal">Close <i class="fa-solid fa-xmark px-2"></i></button>
        </div>
    </Portal>

    <!-- workout card -->
    <section class="flex flex-col gap-6">
        <div class="card flex flex-col">
            <!-- plan-card-header -->
            <div class="flex items-center justify-between gap-4">
                <p>
                    Day
                    {{
                        selectedWorkout < 9
                            ? "0" + selectedWorkout
                            : selectedWorkout
                    }}
                </p>
                <i class="fa-solid fa-dumbbell"></i>
            </div>
            <h2>{{ "Push" }} Workout</h2>
        </div>

        <!-- workout-grid -->
        <div class="grid grid-cols-7 gap-4">
            <!-- grid-name -->
            <h2 class="col-span-3 flex items-center gap-4">Warmup</h2>
            <h6>Sets</h6>
            <h6>Reps</h6>
            <h6 class="grid-weights">Weights</h6>

            <!-- workout-grid-row -->
            <div class="grid grid-cols-7 gap-4 col-span-7" v-for="(w, wIdx) in warmup" :key="wIdx">
                <div class="col-span-3 flex items-center gap-4 group ">
                    <p>{{ w.name }}</p>
                    <button class="p-0 border-0 shadow-none opacity-0 group-hover:opacity-100 group-hover:tranform-none hover:shadow-none group-hover:text-color-link" @click="() => { selectedExercise = w.name }">
                        <i class="fa-regular fa-circle-question"></i>
                    </button>
                </div>
                <p>{{ w.sets }}</p>
                <p>{{ w.reps }}</p>
                <input v-model="data[selectedWorkout][w.name]" class="grid-weights" placeholder="14kg" type="number" disabled />
            </div>

            <!-- workout-grid-line -->
            <div class="col-span-7 my-2 mx-0 h-[0.1875rem] rounded-[0.125rem]"></div>

            <!-- grid-name -->
            <h2 class="col-span-3 flex items-center gap-4">Workout</h2>
            <h6>Sets</h6>
            <h6>Reps</h6>
            <h6 class="grid-weights">Weights</h6>

            <!-- workout-grid-row -->
            <div class="grid grid-cols-7 gap-4 col-span-7" v-for="(w, wIdx) in workout" :key="wIdx">
                <div class="col-span-3 flex items-center gap-2">
                    <p>{{ w.name }}</p>
                    <button
                        class="p-0 border-0 shadow-none hover:tranform-none hover:shadow-none hover:text-color-link"
                        @click="() => { selectedExercise = w.name }" >
                        <i class="fa-regular fa-circle-question"></i>
                    </button>
                </div>
                <p>{{ w.sets }}</p>
                <p>{{ w.reps }}</p>
                <input class="grid-weights" placeholder="14kg" type="text" />
            </div>
        </div>

        <!-- workout-buttons -->
        <div class="card flex items-center justify-between gap-4">
            <button class="flex-1">Save & Exit<i class="fa-solid fa-save pl-2"></i></button>
            <button class="flex-1">Complete<i class="fa-solid fa-check pl-2"></i></button>
        </div>
    </section>
</template>
