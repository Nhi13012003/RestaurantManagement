import { ref, computed } from 'vue' 
export const collapsed = ref(false)
export const toggleMenuSideBar = () => (collapsed.value = !collapsed.value)
export const menuSideBar_width = 180
export const menuSideBar_width_collapsed = 38
export const menuSideBarWidth = computed(
    () => '${collapsed.value ? menuSideBar_width_collapsed : menuSideBar_width}px'
);
