<template>
  <section>
    <table>
      <thead class="headTable">
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Age</td>
          <td>Last_login</td>
          <td class="btn_style">Options</td>
        </tr>
      </thead>
      <tbody class="table_container">
        <tr
          v-for="item of usersStore.paginateUsers(usersStore.currentPage)"
          :key="item.id"
          class="userItem"
        >
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.last_login }}</td>
          <td class="btn_options">
            <button class="btn_style">
              <img title="Редактировать" :src="editBtn" />
            </button>
            <button class="btn_style"><img title="Удалить" :src="deleteBtn" /></button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { useUsersDataStore } from '../stores/usersData'
import { ref } from 'vue'
import editBtn from '../assets/edit.svg'
import deleteBtn from '../assets/delete.svg'
const usersStore = ref(useUsersDataStore())
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 40vw;
  height: 20vh;
  font-size: 1.8vw;
}
.headTable {
  font-weight: bold;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
.userItem {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.table_container {
  width: 40vw;
  height: 10vh;
}
.btn_style {
  background: none;
  border: none;
  width: 2vw;
}
.btn_options {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
img {
  width: 100%;
  height: 100%;
}
img:hover {
  background-color: #0d6dfd82;
  border-radius: 10px;
}
</style>
