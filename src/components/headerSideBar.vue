<template>
    <div class="container">
      <div class="searchBox">
        <input type="text" v-model="searchQuery" placeholder="Tìm kiếm..." class="searchInput" />
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="iconSearch" />
      </div>
      <div class="user">
        <div class="userAvatar"></div>
        <p>Phạm Văn Nhí</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeaderSideBar',
    data() {
      return {
        searchQuery: '',
        user: {
          name: 'John Doe',
          avatar: 'https://via.placeholder.com/50'
        }
      };
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 19px;
    box-sizing: border-box; /* Bao gồm padding trong kích thước tổng thể */
  }
  .searchBox {
    z-index: 1111;
    position: relative;
    width: 270px;
    height: 40px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
  }
  
  .iconSearch {
    z-index: 1111;
    position: absolute;
    left: 10px;
    color: #D4D7DC;
  }
  
  .searchInput {
    background-color: #42474A;
    width: 100%;
    height: 100%;
    padding: 0 10px 0 40px;
    border: none;
    outline: none;
    font-size: 14px;
    color: white;
  }
  .user{
    gap: 10px;
    display: flex;
  }
  .userAvatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
  }
  </style>
  