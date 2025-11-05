<script setup>
import Grid from '../Grid.vue'
import  { gymHealthFacts } from '../../utils'

const randomNumber = Math.floor(Math.random() * gymHealthFacts.length);
const todaysFact = gymHealthFacts[randomNumber];
</script>

<template>
    <!-- Dashboard -->
    <section>
        <!-- card tip container -->
        <div class="card">
            <h2>Bem-Vindo Soldado(a)</h2>
            <div>
                <!-- tip -->
                <p><strong>Dica Diária</strong><br> {{ todaysFact }}</p>
            </div>
            <button>Começar Treino &rarr;</button>
        </div>
        <Grid />
    </section>
</template>
