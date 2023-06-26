<template>
  <el-calendar v-model="value" />
  <el-row class="mb-4">
    <el-button type="danger" @click="Logout()">Logout</el-button>
    <el-button type="primary" @click="change()">change</el-button>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useprojectStore } from '@/store/projectStore'
import { storeToRefs } from 'pinia'

const value = ref(new Date())

const Logout = () => {
  const store = useprojectStore()
  const user = storeToRefs(store).userS
  user.value.level = 0
}

const change = () => {
  const store = useprojectStore()
  const user = storeToRefs(store).userS
  user.value.level = 2
}
</script>
