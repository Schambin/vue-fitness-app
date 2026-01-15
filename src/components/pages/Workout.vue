<script setup>

import Portal from "../Portal.vue";
import { workoutProgram, exerciseDescriptions } from "../../utils";
import { ref, computed } from "vue";

const { data, selectedWorkout } = defineProps({
    data: Object,
    selectedWorkout: Number,
    handleSaveWorkout: Function,
    isWorkoutCompleted: Boolean
});

let selectedExercise = ref(null);
const { workout, warmup } = workoutProgram[selectedWorkout];
const exerciseDescription = computed(() => exerciseDescriptions[selectedExercise.value])

function handleCloseModal() {
    selectedExercise.value = null;
}

const workoutTypes = ["Push", "Pull", "Legs"]

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
                            ? "0" + (selectedWorkout + 1)
                            : selectedWorkout
                    }}
                </p>
                <i class="fa-solid fa-dumbbell"></i>
            </div>
            <h2>{{ workoutTypes[selectedWorkout % 3] }} Workout</h2>
        </div>

        <!-- workout-grid -->
        <div class="grid grid-cols-7 gap-4 items-center">
            <!-- grid-name -->
            <h2 class="col-span-3 flex items-center gap-4">Warmup</h2>
            <h6>Sets</h6>
            <h6>Reps</h6>
            <h6 class="grid-weights">Weights</h6>

            <!-- workout-grid-row -->
            <div class="grid grid-cols-7 gap-4 col-span-7 items-center" v-for="(w, wIdx) in warmup" :key="wIdx">
                <div class="col-span-3 flex items-center gap-4 group ">
                    <p>{{ w.name }}</p>
                    <button class="p-0 border-0 shadow-none opacity-100 hover:tranform-none hover:shadow-none hover:text-color-link" @click="() => { selectedExercise = w.name }">
                        <i class="fa-regular fa-circle-question"></i>
                    </button>
                </div>
                <p>{{ w.sets }}</p>
                <p>{{ w.reps }}</p>
                <input class="grid-weights col-span-2" placeholder="14kg" type="text" disabled />
            </div>

            <!-- workout-grid-line -->
            <div class="col-span-7 my-2 mx-0 h-[0.1875rem] rounded-[0.125rem] bg-background-muted"></div>

            <!-- grid-name -->
            <h2 class="col-span-3 flex items-center gap-4">Workout</h2>
            <h6>Sets</h6>
            <h6>Reps</h6>
            <h6 class="grid-weights">Weights</h6>

            <!-- workout-grid-row -->
            <div class="grid grid-cols-7 gap-4 col-span-7 items-center" v-for="(w, wIdx) in workout" :key="wIdx">
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
                <input 
                    v-model="data[selectedWorkout][w.name]" 
                    class="grid-weights col-span-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                    placeholder="14kg" 
                    type="number" 
                    min="0"
                    max="4"
                    inputmode="numeric" 
                    pattern="[0-9]*" 
                    step="1" 
                />
            </div>
        </div>

        <!-- workout-buttons -->
        <div class="card flex items-center justify-between gap-4">
            <button @click="handleSaveWorkout" class="flex-1">Save & Exit<i class="fa-solid fa-save pl-2"></i></button>
            <button :disabled="!isWorkoutCompleted" @click="handleSaveWorkout" class="flex-1">Complete<i class="fa-solid fa-check pl-2"></i></button>
        </div>
    </section>
</template>
