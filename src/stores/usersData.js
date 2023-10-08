import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsersDataStore = defineStore('usersData', () => {
  let users = ref([
    {
      id: 1,
      name: 'ilya',
      age: 22,
      last_login: '04.10.23'
    },
    {
      id: 2,
      name: 'Liza',
      age: 12,
      last_login: '01.10.23'
    },
    {
      id: 3,
      name: 'Denis',
      age: 15,
      last_login: '04.09.23'
    },
    {
      id: 4,
      name: 'Nikita',
      age: 56,
      last_login: '11.09.23'
    },
    {
      id: 5,
      name: 'Anna',
      age: 99,
      last_login: '17.10.22'
    },
    {
      id: 6,
      name: 'Andrey',
      age: 22,
      last_login: '27.10.23'
    },
    {
      id: 7,
      name: 'Tatyana',
      age: 66,
      last_login: '17.09.23'
    },
    {
      id: 8,
      name: 'Vladlen',
      age: 22,
      last_login: '27.08.23'
    },
    {
      id: 9,
      name: 'Vadim',
      age: 9,
      last_login: '02.10.23'
    },
    {
      id: 10,
      name: 'Dmitry',
      age: 90,
      last_login: '03.10.23'
    },
    {
      id: 11,
      name: 'Ilya',
      age: 22,
      last_login: '08.10.23'
    },
    {
      id: 12,
      name: 'Nastya',
      age: 22,
      last_login: '14.08.23'
    },
    {
      id: 13,
      name: 'Max',
      age: 22,
      last_login: '12.10.23'
    },
    {
      id: 14,
      name: 'Sergey',
      age: 22,
      last_login: '11.10.23'
    },
    {
      id: 15,
      name: 'Anatoliy',
      age: 22,
      last_login: '11.10.23'
    },
    {
      id: 16,
      name: 'Alisa',
      age: 22,
      last_login: '22.10.23'
    },
    {
      id: 17,
      name: 'Rashid',
      age: 22,
      last_login: '12.10.23'
    },
    {
      id: 18,
      name: 'Il1a',
      age: 22,
      last_login: '13.10.23'
    },
    {
      id: 19,
      name: 'Daria',
      age: 22,
      last_login: '04.10.23'
    },
    {
      id: 20,
      name: 'Liza lub',
      age: 22,
      last_login: '01.10.23'
    },
    {
      id: 21,
      name: 'Pasha',
      age: 22,
      last_login: '02.10.23'
    },
    {
      id: 22,
      name: 'Ilya',
      age: 22,
      last_login: '04.10.23'
    },
    {
      id: 23,
      name: 'Oleg',
      age: 26,
      last_login: '17.10.23'
    },
    {
      id: 24,
      name: 'Olga',
      age: 22,
      last_login: '27.10.23'
    },
    {
      id: 25,
      name: 'Natasha',
      age: 21,
      last_login: '17.10.23'
    }
  ])

  //Paginate
  const usersLength = computed(() => {
    return users.value.length
  })

  let currentPage = ref(1)
  const perPage = 5

  function paginateUsers(countPage) {
    const start = (countPage - 1) * perPage
    const end = start + perPage
    return users.value.slice(start, end)
  }
  paginateUsers(currentPage.value)

  const totalPages = computed(() => {
    return Math.ceil(users.value.length / perPage)
  })

  //Sort users by id, name, age
  let sortName = ref('id')
  function sortedUsers() {
    users.value = users.value.slice().sort((prev, next) => {
      if (sortName.value === 'name') {
        return prev.name.localeCompare(next.name)
      } else if (sortName.value === 'age') {
        return prev.age - next.age
      } else {
        return prev.id - next.id
      }
    })
  }
  sortedUsers()

  //Filter by name
  const cloneUsers = users.value
  function filteredUsers(search) {
    if (search == '') {
      users.value = cloneUsers
    } else {
      // currentPage.value = 1
      // paginateUsers(currentPage.value)
      users.value = cloneUsers
      const searchLover = search.toLowerCase()
      users.value = users.value.filter((user) => user.name.toLowerCase().includes(searchLover))
    }
  }

  return {
    users,
    totalPages,
    paginateUsers,
    usersLength,
    currentPage,
    sortedUsers,
    sortName,
    filteredUsers
  }
})
