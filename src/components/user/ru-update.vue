<template>
  <el-form
    label-position="top"
    label-width="auto"
    :model="user"
    style="max-width: 400px"
    class="custom-css"
  >
    <el-form-item label="id">
      <el-input v-model="user.id" placeholder="Please input" disabled />
    </el-form-item>
    <el-form-item label="name">
      <el-input v-model="user.name" placeholder="Please input" />
    </el-form-item>
    <el-form-item label="sex">
      <el-radio-group v-model="user.sex">
        <el-radio-button value="boy">boy</el-radio-button>
        <el-radio-button value="girl">girl</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="skill">
      <el-checkbox-group v-model="user.skill" :min="1">
        <el-checkbox label="skill A" value="skill A" border />
        <el-checkbox label="skill B" value="skill B" border />
        <el-checkbox label="skill C" value="skill C" border />
      </el-checkbox-group>
    </el-form-item>

    <el-button type="primary" @click="submit()">提交</el-button>
    <el-button type="success" @click="reset()">重置</el-button>
  </el-form>
</template>

<script lang="ts" setup>
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElRadioGroup,
  ElRadioButton,
  ElCheckboxGroup,
  ElCheckbox,
  ElMessage
} from 'element-plus'
import axios from 'axios'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const store = useUserStore()

const { user } = storeToRefs(store)
const ouser: User = {
  id: store.user.id,
  name: store.user.name,
  sex: store.user.sex,
  skill: store.user.skill
}

interface User {
  id: number
  name: string
  sex: string
  skill: string[]
}

const reset = () => {
  user.value.name = ouser.name
  user.value.sex = ouser.sex
  user.value.skill = ouser.skill
}

const submit = () => {
  axios
    .put('/api/user', user.value)
    .then((res) => {
      const data = res.data
      if (data.code == 0) {
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
</script>

<style scoped>
.custom-css {
  margin: auto;
  text-align: center;
}
</style>
