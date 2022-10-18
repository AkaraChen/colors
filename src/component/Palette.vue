<template>
    <div :class="$style.palette">
        <div :class="$style.container">
            <h2 class="palette-title">{{title}}</h2>
            <div class="colors">
                <Colors :name="title" :colors="colors" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Colors from "./Colors.vue"
defineProps<{ title: string, colors: string[] }>()
</script>

<style module>
.palette {
    padding: 0.5em;
    width: 25%;
}

@media (max-width: 800px) {
    .palette {
        width: 50%;
    }
}

@media (max-width: 500px) {
    .palette {
        width: 100%;
    }
}

.container {
    border-radius: 0.5em;
}

.palette-title {
    font-size: 1.15em;
    font-weight: normal;
    text-align: center;
}
</style>