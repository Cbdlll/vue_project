<template>
  <div id="page">
    <el-container id="box">
      <el-header style="margin: auto; padding: 30px">登录</el-header>
      <el-main>
        <div>
          <div>
            <el-text size="large">账号：</el-text>
            <el-input v-model="tempUser.account" placeholder="Please input" clearable />
          </div>
          <div>
            <el-text size="large">密码：</el-text>
            <el-input
              v-model="tempUser.password"
              type="password"
              placeholder="Please input password"
              show-password
            />
          </div>
          <div><el-button type="primary" @click="login">Login</el-button></div>
        </div>
      </el-main>
      <el-footer style="margin: auto; padding: 30px">东北林业大学-软件工程</el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useprojectStore } from '@/store/projectStore'

interface User {
  account: string
  password: string
}

const store = useprojectStore()

const tempUser = ref<User>({ account: '', password: '' })
const login = () => {
  const user: User = {
    account: tempUser.value.account,
    password: tempUser.value.password
  }
  store.loginA(user)

  //点击提交按钮之后，清空输入框
  tempUser.value.account = ''
  tempUser.value.password = ''
}
</script>

<style scoped>
div {
  /* border: 1px solid red; */
  padding: 10px;
}
#page {
  width: 100%;
  height: 100vh;
  background-image: url(../assets/login.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
#box {
  width: 500px;
  margin: auto;
  margin-top: 100px;
  border: 1px solid grey;
  background-color: white;
}
</style>
