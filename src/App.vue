<template>
    <div :class="$style.container">
        <h1 :class="$style.title">My palettes</h1>
        <div :class="$style.palettes">
            <Palette v-for="color in colors" :title="color.name" :colors="color.colors" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import Palette from "./component/Palette.vue"
import colors from "./colors"
</script>

<style module>
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0.5em;
}

.title {
    font-size: 1.5em;
    margin: 0.5em 0.25em;
}

.palettes {
    display: flex;
    flex-wrap: wrap;
}
</style>