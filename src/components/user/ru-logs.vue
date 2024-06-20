<template>
  <el-table
    :data="logs"
    max-height="600"
    style="max-width: 800px"
    class="custom-css"
    table-layout="auto"
  >
    <el-table-column fixed label="time">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          {{ scope.row.time }}
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="desc" label="desc" />
  </el-table>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { onMounted, reactive } from 'vue'
import { ElMessage, ElTable, ElTableColumn } from 'element-plus'

interface Log {
  time: Date
  desc: string
}

const logs: Log[] = reactive([])

const getLog = () => {
  axios
    .get('/api/user/log')
    .then((res) => {
      const data = res.data
      if (data.code == 0) {
        logs.splice(0, logs.length)
        const userList: Log[] = JSON.parse(data.data)
        userList.forEach((l: Log) => {
          logs.push(l)
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
  getLog()
})
</script>

<style scoped>
.custom-css {
  margin: auto;
  text-align: center;
}
</style>
