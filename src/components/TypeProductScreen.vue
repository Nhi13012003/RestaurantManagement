<template>
  <div class="TypeProduct">
    <div class="HeaderTypeProduct">
      <h3>QUẢN LÝ LOẠI MÓN ĂN</h3>
      <button @click="openAddDialog">THÊM LOẠI MÓN ĂN</button>
    </div>
    <!-- Dialog Thêm -->
    <Dialog :open="isAddDialogOpen" @close="setIsAddDialogOpen(false)">
      <div class="dialog-overlay">
        <DialogPanel class="dialog">
          <DialogTitle>Thêm loại món ăn mới</DialogTitle>
          <div>
            <p>Tên loại</p>
            <input v-model="newName" type="text" placeholder="Nhập tên loại">
          </div>
          <div class="Des">
            <p>Mô tả</p>
            <textarea v-model="newDescription" name="desType" id="desTypeProduct" placeholder="Nhập mô tả"></textarea>
          </div>
          <button class="close-button" @click="saveItem">Lưu</button>
          <button class="close-button" @click="setIsAddDialogOpen(false)">Hủy</button>
        </DialogPanel>
      </div>
    </Dialog>
    <!-- Dialog Chỉnh sửa -->
    <Dialog :open="isEditDialogOpen" @close="setIsEditDialogOpen(false)">
      <div class="dialog-overlay">
        <DialogPanel class="dialog">
          <DialogTitle>Chỉnh sửa loại món ăn</DialogTitle>
          <div>
            <p>Tên loại</p>
            <input v-model="editName" type="text" placeholder="Nhập tên loại">
          </div>
          <div class="Des">
            <p>Mô tả</p>
            <textarea v-model="editDescription" name="desType" id="desTypeProduct" placeholder="Nhập mô tả"></textarea>
          </div>
          <button class="close-button" @click="updateItem">Lưu</button>
          <button class="close-button" @click="setIsEditDialogOpen(false)">Hủy</button>
        </DialogPanel>
      </div>
    </Dialog>
    <!-- Table Container -->
    <table class="listTable">
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên loại</th>
          <th>Mô tả</th>
          <th>Tác vụ</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>
            <div class="action">
              <button @click="startEdit(index)">Chỉnh sửa</button>
              <button @click="deleteItem(index)">Xóa</button>
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
const newName = ref('')
const newDescription = ref('')
const editName = ref('')
const editDescription = ref('')
const items = ref([])
const editIndex = ref(null)

function setIsAddDialogOpen(value) {
  isAddDialogOpen.value = value
}

function setIsEditDialogOpen(value) {
  isEditDialogOpen.value = value
}

function openAddDialog() {
  setIsAddDialogOpen(true)
}

function saveItem() {
  if (newName.value && newDescription.value) {
    items.value.push({
      name: newName.value,
      description: newDescription.value
    })
    newName.value = ''
    newDescription.value = ''
    setIsAddDialogOpen(false)
  }
}

function startEdit(index) {
  editIndex.value = index
  editName.value = items.value[index].name
  editDescription.value = items.value[index].description
  setIsEditDialogOpen(true)
}

function updateItem() {
  if (editName.value && editDescription.value) {
    items.value[editIndex.value] = {
      name: editName.value,
      description: editDescription.value
    }
    editName.value = ''
    editDescription.value = ''
    editIndex.value = null
    setIsEditDialogOpen(false)
  }
}

function deleteItem(index) {
  items.value.splice(index, 1)
}
</script>

<style>
.TypeProduct {
  width: 100%;
  height: 100%;
}

.HeaderTypeProduct {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100px;
  align-items: center;
}

.HeaderTypeProduct button {
  height: 40px;
  border-radius: 10px;
  background-color: #42474A;
  color: #C4C4C4;
}

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
  height: 300px;
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
  padding: 0 10px;
  background-color: black;
  color: white;
  width: 400px;
  height: 40px;
}

.Des {
  margin-top: 70px;
}

.dialog textarea {
  background-color: black;
  color: white;
  border-radius: 5px;
  height: 60px;
  padding: 10px;
  width: 400px;
}

.dialog button {
  padding: 5px 5px;
  margin-top: 10px;
  border-radius: 5px;
  background-color: black;
  color: white;
  margin-right: 20px;
}
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
