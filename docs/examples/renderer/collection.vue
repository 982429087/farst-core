<template>
  <FarstRenderer>
    <FarstTemplateCollector :type="'aaa'">
      <template #default="{ data }">{{ data }}</template>
    </FarstTemplateCollector>
    <FarstTemplateCollector :type="'bbb'">
      <template #default="{ data }">{{ data }}bbb</template>
    </FarstTemplateCollector>
  </FarstRenderer>
</template>

<script setup lang="ts">
import { FarstRenderer, FarstTemplateCollector } from '@farst/core'
</script>

<style scoped></style>
