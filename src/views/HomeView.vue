<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ElContainer, ElHeader, ElMain } from 'element-plus'
import ruHeader from '@/components/user/ru-header.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <ru-header />
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>
