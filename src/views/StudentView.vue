<template>
  <div class="common-layout">
    <el-container>
      <el-header id="header"
        ><img id="logo" src="../assets/logo.png" />东北林业大学-软件工程-毕设选导师系统</el-header
      >
      <el-main id="main">
        <el-table :data="teachers" style="width: 100%" :row-class-name="tableRowClassName">
          <el-table-column prop="id" label="序号" width="180" />
          <el-table-column prop="name" label="老师" width="180" />
          <el-table-column prop="count" label="已选数量" />
          <el-table-column prop="max_count" label="可选数量" />
          <el-table-column><input type="checkbox" /></el-table-column>
        </el-table>
      </el-main>
      <el-footer id="footer"><p>@ NEFU_CCEC</p></el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import type { Teacher } from '@/data/data'
import { useprojectStore } from '@/store/projectStore'
import { storeToRefs } from 'pinia'

const store = useprojectStore()
const teachers = storeToRefs(store).teachers

const tableRowClassName = ({ row }: { row: Teacher }) => {
  if (row.count == row.max_count) {
    return 'warning-row'
  } else {
    return 'success-row'
  }
}
</script>

<style scoped>
#header {
  background-image: url(../assets/login.png);
  width: 100%;
  height: 50px;
  font-family: 'Lucida Calligraphy', cursive, serif, sans-serif;
  font-size: xx-large;
  color: white;
}

#main {
  height: 625px;
}
#footer {
  background-image: url(../assets/login.png);
  width: 100%;
  height: 50px;
  padding: auto;
  text-align: center;
  color: white;
}
#logo {
  width: 40px;
  height: 40px;
}
</style>
<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
