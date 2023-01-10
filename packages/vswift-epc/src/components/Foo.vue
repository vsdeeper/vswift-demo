<script setup lang="ts">
withDefaults(defineProps<{
  name?: string
}>(), {
  name: '我是Foo组件'
})
</script>

<template>
  <div class="vs-foo">{{ name }}</div>
</template>