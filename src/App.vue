<script setup lang="ts">
import { RouterView } from 'vue-router'
import router from './router'
import { onMounted } from 'vue'

const goHome = () => {
  router.push('/add')
}

onMounted(() => {
  goHome()
})
</script>

<template>
  <RouterView />
</template>
