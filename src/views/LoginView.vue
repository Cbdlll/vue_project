<template>
  <div>
    <div>
      <h2>Login</h2>
      <div>
        <div><el-input v-model="tempUser.account" placeholder="Please input" clearable /></div>
        <div>
          <el-input
            v-model="tempUser.password"
            type="password"
            placeholder="Please input password"
            show-password
          />
        </div>
        <button @click="login">Login</button>
      </div>
    </div>
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

<style></style>
