<template>
  <div>
    <!-- <testView1 v-if="user.level == 1" />
    <testView2 v-else-if="user.level == 2" />
    <RouterView v-else /> -->
    <RouterView />
  </div>
  <alertdialog v-if="exception.length > 0" />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { computed, defineAsyncComponent } from 'vue'
import { useStore } from './store'
// import { storeToRefs } from 'pinia'
// import { useprojectStore } from '@/store/projectStore'

const alertdialog = defineAsyncComponent(() => import('@/components/AlertDialog.vue'))
// const testView1 = defineAsyncComponent(() => import(`@/views/TestView1.vue`))
// const testView2 = defineAsyncComponent(() => import(`@/views/TestView2.vue`))

const store = useStore()
const exception = computed(() => store.exceptionS)

// const store1 = useprojectStore()
// const user = storeToRefs(store1).userS
</script>

<style></style>
