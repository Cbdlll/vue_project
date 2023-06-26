<template>
  <div class="common-layout">
    <el-container>
      <el-header id="header">Header</el-header>
      <el-container>
        <el-aside width="200px" id="side">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
              </template>

              <el-menu-item index="1-1">个人信息</el-menu-item>
            </el-sub-menu>
          </el-menu></el-aside
        >
        <el-container>
          <el-main id="main">Main</el-main>
          <el-footer id="footer">Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
#header {
  height: 50px;
  background-color: #ccffcc;
}
#side {
  background-color: #ffffff;
}
#main {
  height: 600px;
  background-color: #ffffff;
}
#footer {
  height: 50px;
  background-color: #66cccc;
  padding: auto;
  text-align: center;
}
</style>
