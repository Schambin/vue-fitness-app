<script setup>
import Welcome from "./components/pages/Welcome.vue";
import Layout from "./components/layout/Layout.vue";
import Dashboard from "./components/pages/Dashboard.vue";
import Workout from "./components/pages/Workout.vue";

import { workoutProgram } from './utils'
import { computed, onMounted, ref } from "vue";

const defaultData = {};
const selectedDisplay = ref(1);
const data = ref(defaultData);
const selectedWorkout = ref(-1);

const isWorkoutCompleted = computed(() => {
    const currWorkout = data.value?.[selectedWorkout.value]
    if(!currWorkout) {
        return false;
    }

    const isCompleteCheck = Object.values(currWorkout).every(ex => !!ex);
    return isCompleteCheck;
});

const firstIncompleteWorkoutIndex = computed(() => {
    const allWorkouts = data.value;
    if(!allWorkouts) {
        return -1;
    }

    for(const [index, workout] of Object.entries(allWorkouts)) {
        const isComplete = Object.values(workout).every(ex => !!ex);
        if(!isComplete) {
            return parseInt(index);
        }
    };

    return -1;
});

for(let workoutIdx in workoutProgram) {
    const workoutData = workoutProgram[workoutIdx];
    defaultData[workoutIdx] = {};

    for(let e of workoutData.workout) {
        defaultData[workoutIdx][e.name] = "";
    }
}

function handleChangeDisplay(idx) {
    selectedDisplay.value = idx;
    selectedWorkout.value = -1;
}

function handleSelectedWorkout(idx) {
    selectedDisplay.value = 3;
    selectedWorkout.value = idx;
}

function handleSaveWorkout() {
    localStorage.setItem('workouts',JSON.stringify(data.value));
    selectedDisplay.value = 2;
    selectedWorkout.value = -1;
}

function handleResetPlan() {
    selectedDisplay.value = 2;
    selectedWorkout = -1;
    data.value = defaultData;
    localStorage.removeItem('workouts');
}

onMounted(() => {
    console.log('pagina carregou');

    if(!localStorage) return;

    if(localStorage.getItem('workouts')) {
        const savedData = JSON.parse(localStorage.getItem('workouts'));
        data.value = savedData;
        selectedDisplay.value = 2; 
    }
});
</script>

<template>
        <Layout
            :handleChangeDisplay="handleChangeDisplay"
        >
            <!-- PAGE 1 -->
            <Welcome
                v-if="selectedDisplay == 1"
                :handleChangeDisplay="handleChangeDisplay"
            />
        
            <!-- PAGE 2 -->
            <Dashboard
                v-if="selectedDisplay == 2"             
                :firstIncompleteWorkoutIndex="firstIncompleteWorkoutIndex"   
                :handleSelectedWorkout="handleSelectedWorkout"
                :handleResetPlan="handleResetPlan"
            />
            <!-- PAGE 3 -->
            <Workout
                v-if="workoutProgram?.[selectedWorkout]"
                :data="data"
                :selectedWorkout="selectedWorkout"
                :isWorkoutCompleted="isWorkoutCompleted"
                :handleSaveWorkout="handleSaveWorkout"
            />
        </Layout>
</template>
