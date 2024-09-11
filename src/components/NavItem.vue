<template>
    <div class="Tab" v-if="!item.children.length">
        <component class="Component" :is="item.icon" v-if="item.icon"></component>
        <span>{{ item.label }}</span>
    </div>
    <Disclosure v-else>
    <DisclosureButton class="TabHasSub">
        <div class="SubTab">
            <component class="Component" :is="item.icon" v-if="item.icon"></component>
        <span>{{ item.label }}</span>
        </div>
        <ChevronDownIcon class="IconDown"></ChevronDownIcon>
    </DisclosureButton>
    <DisclosurePanel class="SubTab">
        <NavItem class="SubItemTab" v-for="child in item.children" :key="child.label" :item="child"/>    </DisclosurePanel>
  </Disclosure>
</template>
<script>
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
  export default{
    name: 'NavItem',
    components:{
      Disclosure,
      DisclosureButton,
      DisclosurePanel,  
      ChevronDownIcon

    },
    props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
<style>
.Tab{
    display: flex;
    width: 240px;
    flex-shrink: 0;
    margin-left: 10px;
    gap: 10px;
    margin-bottom: 10px;
    
}
.Tab span{
    color: white;
    display: flex;
    align-items: center;
}
.Tab .Component{
    color: white;
    height: 30px;
    width: 30px;
    flex-shrink: 0;

}
.TabHasSub {
    display: flex;
    align-items: center; /* Canh giữa theo chiều dọc */
    gap: 10px;
    width: 240px;
    background-color: black;
    justify-content: space-between;
}

.TabHasSub .SubTab {
    display: flex; /* Đảm bảo SubTab sử dụng flexbox để canh giữa các phần tử bên trong */
    align-items: center; /* Canh giữa theo chiều dọc */
    margin-left: 0px;
}

.TabHasSub .Component {
    color: white;
    height: 30px;
    width: 30px;
    flex-shrink: 0;
}

.TabHasSub .IconDown {
    color: white;
    height: 20px;
    width: 20px;
}

.TabHasSub .SubTab span {
    color: white;
    display: flex; 
    margin-left: 12px;
    align-items: center; 
}
.SubTab{
    margin-left: 30px;
    font-size: 14px;
}
</style>