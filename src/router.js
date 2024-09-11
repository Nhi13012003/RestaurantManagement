import { createRouter, createWebHistory } from 'vue-router';
import StatisticScreen from './components/StatisticScreen.vue';
import ManagementScreen from './components/ManagementScreen.vue';
import ResponseScreen from './components/ResponseScreen.vue';
import ProductScreen from './components/ProductScreen.vue';
import SettingScreen from './components/SettingScreen.vue';
import TypeProductScreen from './components/TypeProductScreen.vue';
// import EmployeeManagementScreen from './components/EmployeeManagementScreen.vue';
// import CustomerManagementScreen from './components/CustomerManagementScreen.vue';
// import PromotionManagementScreen from './components/PromotionManagementScreen.vue';

const routes = [
  { path: '/statistic', component: StatisticScreen },
  { path: '/management', component: ManagementScreen },
  { path: '/response', component: ResponseScreen },
  { path: '/product', component: ProductScreen },
  { path: '/setting', component: SettingScreen },
  { path: '/type-product', component: TypeProductScreen },
  { path: '/employee-management', component: ProductScreen},
  { path: '/customer-management', component: ProductScreen },
  { path: '/promotion-management', component: ProductScreen },
  { path: '/:catchAll(.*)', redirect: '/product' } // Catches all undefined routes
];

// Tạo một instance của router
const router = createRouter({
  history: createWebHistory(), // Sử dụng chế độ history để không có hash trong URL
  routes
});

export default router;
