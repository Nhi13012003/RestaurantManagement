<template>
  <div class="page">
    <div class="logo">
    <img src="./assets/images/Logo.png" alt="Restaurant Logo">
    </div>
    <h1 class="mainText">ĐĂNG NHẬP</h1>
    <div class="login">
      <div class="username">
         <input  type="text" v-model="username" required>
         <div class="label">Tên đăng nhập</div>
      </div>
      <div class="password">
         <input  type="text" v-model="password" required>
         <div class="label">Mật khẩu</div>
      </div>
      <button class="field" v-on:click="signUp">Đăng nhập</button>
    </div>
  </div>

</template>

<script>


export default {
  name: 'App',
  
}
</script>
<style>
body{
  background:radial-gradient(circle,#4facfe,#00f2fe);
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  font-family: 'Roboto';
}
</style>



