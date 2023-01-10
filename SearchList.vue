<script lang="ts" setup>
import { reactive } from 'vue';

const formdata = reactive({
  widgetList: JSON.parse(decodeURIComponent('%WIDGET_LIST%'))
})
</script>

<template>
  <div>搜索列表页</div>
</template>
