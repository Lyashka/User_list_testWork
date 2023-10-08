<template>
  <div class="main_container">
    <div class="header_container">
      <input v-model="search" type="search" placeholder="Введите имя пользователя" class="search" />
      <div class="sort_user">
        <label style="margin-right: 0.5vw">Сортировать</label>
        <select v-model="sortName" class="select">
          <option selected="selected" value="id">По порядку</option>
          <option value="name">По имени</option>
          <option value="age">По возрасту</option>
        </select>
      </div>
    </div>

    <MainTableContainer class="main_table_container" />
    <Paginate
      :page-count="usersStore.totalPages"
      :current-pages="usersStore.currentPage"
      :click-handler="changePage"
      :force-page="numberPage"
      :prev-text="'<'"
      :next-text="'>'"
      :container-class="'pagination'"
      style="font-size: 1vw"
    ></Paginate>
  </div>
</template>

<script setup>
import MainTableContainer from './MainTableContainer.vue'
import Paginate from 'vuejs-paginate-next'
import { ref, watch } from 'vue'
import { useUsersDataStore } from '../stores/usersData'

const usersStore = ref(useUsersDataStore())
let numberPage
function changePage(page_num) {
  usersStore.value.currentPage = page_num
  usersStore.value.paginateUsers(page_num)
  numberPage = usersStore.value.currentPage
}

//Sorted users
let sortName = ref('id')
const handleValueChange = (newSortName) => {
  usersStore.value.sortName = newSortName

  usersStore.value.sortedUsers()
}
watch(sortName, handleValueChange)
usersStore.value.sortName = sortName.value

//Filter by name users
let search = ref('')
const handleValueSearch = (newSearch) => {
  changePage(1)
  usersStore.value.filteredUsers(newSearch)
}
watch(search, handleValueSearch)
</script>

<style scoped lang="css">
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css';
.main_container {
  width: 50vw;
  height: 50vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 3px 3px 10px 0.5px rgba(0, 0, 0, 0.5);
  background-color: aliceblue;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.select_container {
  display: flex;
  align-items: center;
  height: 5vh;
}
.header_container {
  display: flex;
  justify-content: space-between;
  width: 40vw;
}
.main_table_container {
  max-width: 40vw;
  max-height: 60vh;
  min-height: 40vh;
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1vh;
  cursor: pointer;
}
.search {
  width: 16vw;
  height: 3vh;
  border-radius: 5px;
  background: none;
  padding-left: 0.3vw;
  cursor: pointer;
}
.sort_user {
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 16vw;
  height: 3vh;
}
.select {
  cursor: pointer;
}
@media (max-width: 1000px) {
  .sort_user {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 16vw;
    height: 5vh;
    margin-bottom: 2vh;
  }
  .search {
    width: 16vw;
    height: 3vh;
    margin-top: 2vh;
  }
}
</style>
