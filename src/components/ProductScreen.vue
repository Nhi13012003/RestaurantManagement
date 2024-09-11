<template>
    <div class="ProductScreen">
      <div class="HeaderProductScreen">
        <h3>QUẢN LÝ SẢN PHẨM</h3>
        <button @click="openAddDialog">THÊM SẢN PHẨM</button>
      </div>
      <!-- Dialog Thêm Sản Phẩm -->
      <Dialog :open="isAddDialogOpen" @close="setIsAddDialogOpen(false)">
        <div class="dialog-overlay">
          <DialogPanel class="dialog">
            <DialogTitle>Thêm sản phẩm mới</DialogTitle>
            <div>
              <p>Tên sản phẩm</p>
              <input v-model="newProductName" type="text" placeholder="Nhập tên sản phẩm">
            </div>
            <div class="Description">
              <p>Mô tả</p>
              <textarea v-model="newProductDescription" placeholder="Nhập mô tả"></textarea>
            </div>
            <div class="Cost">
              <p>Giá</p>
              <input v-model="newProductPrice" type="number" placeholder="Nhập giá sản phẩm">
            </div>
            <div class="buttonFooter">
                <button class="close-button" @click="saveProduct">Lưu</button>
            <button class="close-button" @click="setIsAddDialogOpen(false)">Hủy</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
      <!-- Dialog Chỉnh Sửa Sản Phẩm -->
      <Dialog :open="isEditDialogOpen" @close="setIsEditDialogOpen(false)">
        <div class="dialog-overlay">
          <DialogPanel class="dialog">
            <DialogTitle>Chỉnh sửa sản phẩm</DialogTitle>
            <div>
              <p>Tên sản phẩm</p>
              <input v-model="editProductName" type="text" placeholder="Nhập tên sản phẩm">
            </div>
            <div class="Description">
              <p>Mô tả</p>
              <textarea v-model="editProductDescription" placeholder="Nhập mô tả"></textarea>
            </div>
            <div>
              <p>Giá</p>
              <input v-model="editProductPrice" type="number" placeholder="Nhập giá sản phẩm">
            </div>
            <button class="close-button" @click="updateProduct">Lưu</button>
            <button class="close-button" @click="setIsEditDialogOpen(false)">Hủy</button>
          </DialogPanel>
        </div>
      </Dialog>
      <!-- Table Container -->
      <table class="listTable">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên sản phẩm</th>
            <th>Mô tả</th>
            <th>Giá</th>
            <th>Tác vụ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="product.id">
            <td>{{ index + 1 }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.price }}</td>
            <td>
              <div class="action">
                <button @click="editProduct(product, index)">Chỉnh sửa</button>
                <button @click="deleteProduct(index)">Xóa</button>
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
  const newProductName = ref('')
  const newProductDescription = ref('')
  const newProductPrice = ref(0)
  const products = ref([])
  const editingIndex = ref(null)
  const editProductName = ref('')
  const editProductDescription = ref('')
  const editProductPrice = ref(0)
  
  function setIsAddDialogOpen(value) {
    isAddDialogOpen.value = value
  }
  
  function setIsEditDialogOpen(value) {
    isEditDialogOpen.value = value
  }
  
  function openAddDialog() {
    setIsAddDialogOpen(true)
  }
  
  function saveProduct() {
    if (newProductName.value && newProductDescription.value && newProductPrice.value) {
      products.value.push({
        id: Date.now(), // tạo ID đơn giản để dễ phân biệt
        name: newProductName.value,
        description: newProductDescription.value,
        price: newProductPrice.value
      })
      newProductName.value = ''
      newProductDescription.value = ''
      newProductPrice.value = 0
      setIsAddDialogOpen(false)
    }
  }
  
  function editProduct(product, index) {
    editingIndex.value = index
    editProductName.value = product.name
    editProductDescription.value = product.description
    editProductPrice.value = product.price
    setIsEditDialogOpen(true)
  }
  
  function updateProduct() {
    if (editProductName.value && editProductDescription.value && editProductPrice.value) {
      const product = products.value[editingIndex.value]
      product.name = editProductName.value
      product.description = editProductDescription.value
      product.price = editProductPrice.value
      setIsEditDialogOpen(false)
    }
  }
  
  function deleteProduct(index) {
    products.value.splice(index, 1)
  }
  </script>
<style>
.ProductScreen {
  width: 100%;
  height: 100%;
}

.HeaderProductScreen {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100px;
  align-items: center;
}

.HeaderProductScreen button {
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
  height: 450px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.close-button {
  border: none;
  background: transparent;
  font-size: 16px;
  cursor: pointer;
  color: #42474A;
}

.dialog input, .dialog textarea {
  margin-top: 10px;
  width: 400px;
}

.dialog textarea {
  height: 60px;
  border-radius: 5px;
  padding: 10px;
  background-color: black;
  color: white;
}

.dialog button {
  padding: 5px 10px;
  margin-top: 10px;
  border-radius: 5px;
  background-color: black;
  color: white;
  margin-right: 10px;
}
.Description{
    margin-top: 70px;
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
  