<script setup lang="ts">
import { ElButton } from 'element-plus'
import { $util } from '@vswift/common'
withDefaults(defineProps<{
  name?: string
}>(), {
  name: '我是Bar组件'
})
</script>

<template>
  <el-button type="primary">按钮</el-button>
  <div class="vs-bar">{{ name }}</div>{{ $util.capitalize('gdsafdsafsda') }}
</template>