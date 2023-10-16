<template>
  <FarstButton :type="'primary'" :wait="400" @click="handleClick"
    >连续点我开始</FarstButton
  >
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { FarstButton } from '@farst/core'

function handleClick() {
  ElMessage.info('点击了按钮')
}
</script>

<style lang="scss" scoped></style>
