<template>
    <div class="CustomerScreen">
      <div class="HeaderCustomerScreen">
        <h3>QUẢN LÝ KHÁCH HÀNG</h3>
        <button @click="openAddDialog">THÊM KHÁCH HÀNG</button>
      </div>
      <!-- Dialog Thêm Khách Hàng -->
      <Dialog :open="isAddDialogOpen" @close="setIsAddDialogOpen(false)">
        <div class="dialog-overlay">
          <DialogPanel class="dialog">
            <DialogTitle>Thêm khách hàng mới</DialogTitle>
            <div>
              <p>Họ tên</p>
              <input v-model="newCustomerName" type="text" placeholder="Nhập họ tên">
            </div>
            <div class="PhoneNumber">
              <p>Số điện thoại</p>
              <input v-model="newCustomerPhone" type="text" placeholder="Nhập số điện thoại">
            </div>
            <button class="close-button" @click="saveCustomer">Lưu</button>
            <button class="close-button" @click="setIsAddDialogOpen(false)">Hủy</button>
          </DialogPanel>
        </div>
      </Dialog>
      <!-- Dialog Chỉnh Sửa Khách Hàng -->
      <Dialog :open="isEditDialogOpen" @close="setIsEditDialogOpen(false)">
        <div class="dialog-overlay">
          <DialogPanel class="dialog">
            <DialogTitle>Chỉnh sửa khách hàng</DialogTitle>
            <div>
              <p>Họ tên</p>
              <input v-model="editCustomerName" type="text" placeholder="Nhập họ tên">
            </div>
            <div class="PhoneNumber">
              <p>Số điện thoại</p>
              <input v-model="editCustomerPhone" type="text" placeholder="Nhập số điện thoại">
            </div>
            <button class="close-button" @click="updateCustomer">Lưu</button>
            <button class="close-button" @click="setIsEditDialogOpen(false)">Hủy</button>
          </DialogPanel>
        </div>
      </Dialog>
      <!-- Table Container -->
      <table class="listTable">
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ tên</th>
            <th>Số điện thoại</th>
            <th>Số điểm tích lũy</th>
            <th>Tác vụ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(customer, index) in customers" :key="customer.id">
            <td>{{ index + 1 }}</td>
            <td>{{ customer.name }}</td>
            <td>{{ customer.phone }}</td>
            <td>{{ customer.points }}</td>
            <td>
              <div class="action">
                <button @click="editCustomer(customer, index)">Chỉnh sửa</button>
                <button @click="deleteCustomer(index)">Xóa</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const isAddDialogOpen = ref(false)
const isEditDialogOpen = ref(false)
const newCustomerName = ref('')
const newCustomerPhone = ref('')
const customers = ref([])
const editingIndex = ref(null)
const editCustomerName = ref('')
const editCustomerPhone = ref('')

function setIsAddDialogOpen(value) {
  isAddDialogOpen.value = value
}

function setIsEditDialogOpen(value) {
  isEditDialogOpen.value = value
}

function openAddDialog() {
  setIsAddDialogOpen(true)
}

function saveCustomer() {
  if (newCustomerName.value && newCustomerPhone.value) {
    customers.value.push({
      id: Date.now(), // tạo ID đơn giản để dễ phân biệt
      name: newCustomerName.value,
      phone: newCustomerPhone.value,
      points: 0 // mặc định số điểm tích lũy là 0
    })
    newCustomerName.value = ''
    newCustomerPhone.value = ''
    setIsAddDialogOpen(false)
  }
}

function editCustomer(customer, index) {
  editingIndex.value = index
  editCustomerName.value = customer.name
  editCustomerPhone.value = customer.phone
  setIsEditDialogOpen(true)
}

function updateCustomer() {
  if (editCustomerName.value && editCustomerPhone.value) {
    const customer = customers.value[editingIndex.value]
    customer.name = editCustomerName.value
    customer.phone = editCustomerPhone.value
    setIsEditDialogOpen(false)
  }
}

function deleteCustomer(index) {
  customers.value.splice(index, 1)
}
</script>
<style>
.CustomerScreen {
  width: 100%;
  height: 100%;
}

.HeaderCustomerScreen {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100px;
  align-items: center;
}

.HeaderCustomerScreen button {
  height: 40px;
  border-radius: 10px;
  background-color: #42474A;
  color: #C4C4C4;
}

/* CSS cho Dialog */
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.dialog {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 500px;
  height: 250px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.close-button {
  border: none;
  background: transparent;
  font-size: 16px;
  cursor: pointer;
  color: #42474A;
}

.dialog input {
  margin-top: 10px;
  width: 400px;
}

.dialog button {
  padding: 5px 10px;
  margin-top: 10px;
  border-radius: 5px;
  background-color: black;
  color: white;
  margin-right: 10px;
}
.PhoneNumber{
    margin-top: 60px;
}

/* CSS cho bảng */
.listTable {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.listTable th, .listTable td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.listTable th {
  background-color: #f2f2f2;
}

.listTable tr:nth-child(even) {
  background-color: #f9f9f9;
}

.listTable button {
  border: none;
  background-color: #42474A;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.listTable button:hover {
  background-color: #333;
}
</style>
  