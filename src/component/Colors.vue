<template>
    <Color v-for="(item, index) in colors" :color="item" :index="index" :name="name+'-'+index" />
</template>

<script setup lang="ts">
import Color from "./Color.tsx"
defineProps<{ name: string, colors: string[] }>()
</script>