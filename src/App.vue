<template>
  <div>
    <RouterView />
  </div>
  <alertdialog v-if="exception.length > 0" />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { computed, defineAsyncComponent } from 'vue'
import { useStore } from './store'

const alertdialog = defineAsyncComponent(() => import('@/components/AlertDialog.vue'))

const store = useStore()
const exception = computed(() => store.exceptionS)
</script>

<style>
* {
  /* border: 1px solid red; */
  font-family: NSimSun;
  font-size: large;
  font-weight: bolder;
}
</style>
