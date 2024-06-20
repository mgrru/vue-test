import { defineStore } from 'pinia'

interface User {
  id: number
  name: string
  sex: string
  skill: string[]
}

interface UserDto {
  name: string
  sex: string
  skill: string[]
}

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      users: [] as User[],
      user: {
        id: 0,
        name: '',
        sex: '',
        skill: []
      } as User,
      userDto: {
        name: '',
        sex: '',
        skill: []
      } as UserDto
    }
  }
})
