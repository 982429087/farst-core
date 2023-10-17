<template>
  <FarstCollection>
    <FarstTemplateCollector :type="'aaa'">
      <template #default="{ data }">{{ data }}</template>
    </FarstTemplateCollector>
    <FarstTemplateCollector :type="'bbb'">
      <template #default="{ data }">{{ data }}bbb</template>
    </FarstTemplateCollector>
  </FarstCollection>
</template>

<script setup lang="ts">
import { FarstCollection, FarstTemplateCollector } from '@farst/core'
</script>

<style scoped></style>
