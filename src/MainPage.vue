<template>
  <div class="mainPage">
    <div class="menuSideBar">
    </div>
    <div class="mainScreen">
      <headerSideBar/>
      <router-view></router-view> 
    </div>
  </div>
</template>

<script>
import HeaderSideBar from './components/headerSideBar.vue';

export default {
  name: 'MainPage',
  components: {
    HeaderSideBar,

  }
}
</script>

<style scoped>
.mainPage {
  height: 100vh;
  display: flex;
  flex-direction: row;
}

.mainScreen {
  margin-left: 20px;
  margin-right: 20px;
  width: 100%;
  height: 100%;
  flex: 1;
}
</style>
