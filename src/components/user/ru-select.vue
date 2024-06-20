<template>
  <el-table
    :data="users"
    max-height="600"
    style="max-width: 800px"
    class="custom-css"
    table-layout="auto"
  >
    <el-table-column fixed label="ID">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          {{ scope.row.id }}
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="name" label="name" />
    <el-table-column prop="sex" label="sex" />
    <el-table-column prop="skill" label="skill" />

    <el-table-column fixed="right" width="165" label="operations">
      <template #default="scope">
        <el-button size="small" type="primary" @click="handleEdit(scope.$index, scope.row)">
          <el-icon style="width: 1em; height: 1em">
            <Edit />
          </el-icon>
          Edit
        </el-button>
        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
          <el-icon style="width: 1em; height: 1em">
            <Delete />
          </el-icon>
          Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import router from '@/router'
import axios from 'axios'
import { onMounted } from 'vue'
import { ElMessage, ElTable, ElTableColumn, ElButton, ElIcon } from 'element-plus'
import { Edit, Delete } from '@element-plus/icons-vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const store = useUserStore()

const { users, user } = storeToRefs(store)

interface User {
  id: number
  name: string
  sex: string
  skill: string[]
}

const handleEdit = (index: number, row: User) => {
  user.value = row
  router.push('/update')
}
const handleDelete = (index: number, row: User) => {
  axios
    .delete('/api/user/' + row.id)
    .then((res) => {
      const data = res.data
      if (data.code == 0) {
        selectUser()
        ElMessage({
          message: data.msg,
          type: 'success'
        })
      } else {
        ElMessage({
          message: data.msg,
          type: 'warning'
        })
      }
    })
    .catch((err) => {
      ElMessage.error('err!!!')
    })
}

const selectUser = () => {
  axios
    .get('/api/user')
    .then((res) => {
      const data = res.data
      if (data.code == 0) {
        users.value.splice(0, users.value.length)
        const userList: User[] = JSON.parse(data.data)
        userList.forEach((u: User) => {
          users.value.push(u)
        })
      } else {
        ElMessage({
          message: data.msg,
          type: 'warning'
        })
      }
    })
    .catch((err) => {
      ElMessage.error('err!!!')
    })
}

onMounted(() => {
  selectUser()
})
</script>

<style scoped>
.custom-css {
  margin: auto;
  text-align: center;
}
</style>
