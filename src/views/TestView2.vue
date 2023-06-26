<template>
  <div class="example-basic">
    <el-time-picker v-model="value1" placeholder="Arbitrary time" />
    <el-time-picker v-model="value2" arrow-control placeholder="Arbitrary time" />
  </div>
  <el-row class="mb-4">
    <el-button type="danger" @click="Logout()">Logout</el-button>
    <el-button type="primary" @click="change()">change</el-button>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useprojectStore } from '@/store/projectStore'
import { storeToRefs } from 'pinia'
const value1 = ref()
const value2 = ref()

const Logout = () => {
  const store = useprojectStore()
  const user = storeToRefs(store).userS
  user.value.level = 0
}

const change = () => {
  const store = useprojectStore()
  const user = storeToRefs(store).userS
  user.value.level = 1
}
</script>

<style>
.example-basic .el-date-editor {
  margin: 8px;
}
</style>
