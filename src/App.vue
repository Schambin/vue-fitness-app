<script setup>
import Welcome from "./components/pages/Welcome.vue";
import Layout from "./components/layout/Layout.vue";
import Dashboard from "./components/pages/Dashboard.vue";
import Workout from "./components/pages/Workout.vue";

import { workoutProgram } from './utils'
import { ref } from "vue";

const defaultData = {};
const selectedWorkout = ref(-1);
const data = ref(defaultData);
const selectedDisplay = ref(1);

for(let workoutIdx in workoutProgram) {
    const workoutData = workoutProgram[workoutIdx];
    defaultData[workoutIdx] = {};

    for(let e of workoutData.workout) {
        defaultData[workoutIdx][e.name] = "";
    }
}

function handleChangeDisplay(idx) {
    selectedDisplay.value = idx;
}

function handleSelectWorkout(idx) {
    selectedDisplay.value = 3;
    selectedDisplay.value = idx;
}

function handleSaveWorkout() {
    localStorage.setItem('workouts',JSON.stringify(data.value));
    selectedDisplay.value = 2;
    selectedWorkout.value = -1
}
</script>


<template>
    <Layout>
        <!-- PAGE 1 -->
        <Welcome :handleChangeDisplay="handleChangeDisplay" v-if="selectedDisplay == 1" />
        <!-- PAGE 2 -->
        <Dashboard :handleSelectWorkout="handleSelectWorkout" v-if="selectedDisplay == 2" />
        <!-- PAGE 3 -->
        <Workout :data="data" :selectedWorkout="selectedWorkout" v-if="workoutProgram?.[selectedWorkout]" />
    </Layout>
</template>
