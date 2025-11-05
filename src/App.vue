<script setup>
import Welcome from './components/pages/Welcome.vue';
import Layout from './components/layout/Layout.vue';
import Dashboard from './components/pages/Dashboard.vue'
import Workout from './components/pages/Workout.vue'

const selectedDisplay = 2;
</script>

<template>
  <Layout>
    <!-- PAGE 1 -->
    <Welcome v-if="selectedDisplay == 1"/>
    <!-- PAGE 2 -->
    <Dashboard v-if="selectedDisplay == 2"/>
    <!-- PAGE 3 -->
    <Workout v-if="selectedDisplay == 3"/>
  </Layout>
</template>