<script setup>
    defineProps({
        handleChangeDisplay: Function
    });
</script>

<template>
    <section class="flex flex-col gap-6 sm:gap-8 sm:py-4">
        <div class="flex flex-col gap-2 sm:gap-2">
            <h2><strong>Complete this program <br />if you want...</strong></h2>
            <div>
                <p>✅ Follow a simple program with proven results.</p>
                <p>✅ Get fit, healthy, strong and absolutely shredded.</p>
                <p>✅ Learn more about gym, training and technique</p>
            </div>
            <div>
                <h3><strong>The Training Plan</strong></h3>
                <p>This training plan follows a structure known as the: <strong>Bro Split</strong></p>
                <h5><strong><i>Push &rarr; Pull &rarr; Legs &rarr; Repeat</i></strong></h5>
            </div>
            <div class="card flex flex-col gap-1">
                <h3>🔥 <strong>Your Challenge</strong></h3>
                <p>Complete all the workouts and track your progress along the way!</p>
                <p>Do you accept?</p>
                <button @click="handleChangeDisplay(2)">Begin &rarr;</button>
            </div>
        </div>
    </section>
</template>
