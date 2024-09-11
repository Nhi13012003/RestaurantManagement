<template>
    <div class="MainScreen">
        <div class="Menu">
            <img src="./assets/images/Logo.png" alt="Restaurant logo">
            <NavItem :item="item" v-for="item in menuItem" :key="item.label"/>

        </div>
        <main class="RightScreen">
            <HeaderSideBar></HeaderSideBar>
            <ProductScreen/>
        </main>
    </div>
</template>
<script>
import NavItem from './components/NavItem.vue';
import { ChartPieIcon, Bars4Icon, EnvelopeIcon, FireIcon, Cog6ToothIcon } from '@heroicons/vue/24/outline'
import HeaderSideBar from './components/headerSideBar.vue';
import ProductScreen from './components/ProductScreen.vue';
export default {
  name: 'MainPageForUser',
  components:{
    NavItem,
    HeaderSideBar,
    ProductScreen
  },
  data() {
    return {
      menuItem: [
        {label: "THỐNG KÊ", children: [], icon:ChartPieIcon},
        {label: "QUẢN LÝ", children: [
            {label: "QUẢN LÝ NHÂN VIÊN", children: []},
            {label: "QUẢN LÝ KHÁCH HÀNG", children: []},
            {label: "QUẢN LÝ KHUYẾN MÃI", children: []},
        ], icon:Bars4Icon},
        {label: "PHẢN HỒI", children: [], icon:EnvelopeIcon},
        {label: "MÓN ĂN", children: [
            {label: "DANH SÁCH MÓN ĂN", children: []},
            {label: "LOẠI MÓN ĂN", children: []},
        ], icon:FireIcon},
        {label: "CÀI ĐẶT", children: [], icon:Cog6ToothIcon},
      ]
    };
  }
}
</script>

<style>
    .MainScreen{
        display: flex;
    }
    .Menu{
        gap: 20px;
        width: 240px;
        height: 100vh;
        background-color: black;
    }
    .Menu h4{
        color: white;
    }
    .RightScreen{
        width:100%;
        margin-left: 20px;
        margin-right: 20px;
    }

</style>