<template>
  <div class="common-layout">
    <el-container>
      <el-header id="header"
        ><img id="logo" src="../assets/logo.png" />东北林业大学-软件工程-毕设选导师系统</el-header
      >
      <el-container>
        <el-container>
          <el-main id="main">Main</el-main>
          <el-footer id="footer"><p>@ NEFU_CCEC</p></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup></script>

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
  background-color: #ffffff;
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
