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
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon><document /></el-icon>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><setting /></el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
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
