<template>
  <Collection :data="data" />
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import Collection from './collection.vue'

const data = reactive([
  {
    type: 'aaa',
  },
  {
    type: 'bbb',
  },
])
</script>

<style lang="scss" scoped></style>
