<template>
  <el-menu
    default-active="2"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    :router="true"
  >
    <el-menu-item index="0" style="width: 200px" disabled class="custom-disabled">
      <el-icon style="width: 50" :size="50" class="is-loading">
        <ChromeFilled />
      </el-icon>
    </el-menu-item>

    <el-menu-item index="2" route="/add">
      <el-icon>
        <Plus />
      </el-icon>
      添加
    </el-menu-item>

    <el-menu-item index="3" route="/select">
      <el-icon>
        <User />
      </el-icon>
      查询
    </el-menu-item>

    <el-menu-item index="4" route="/logs">
      <el-icon>
        <ToiletPaper />
      </el-icon>
      日志
    </el-menu-item>

    <div class="flex-grow" />

    <el-menu-item index="1" route="/about">
      <el-icon>
        <InfoFilled />
      </el-icon>
      关于
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ElMenu, ElMenuItem, ElIcon } from 'element-plus'
import { ChromeFilled, Plus, User, InfoFilled, ToiletPaper } from '@element-plus/icons-vue'
</script>

<style>
.flex-grow {
  flex-grow: 1;
}

.custom-disabled {
  color: inherit !important;
  /* 保持原有颜色 */
  cursor: pointer !important;
  /* 改变鼠标图标 */
  opacity: 1 !important;
  /* 取消透明度 */
  pointer-events: none;
  /* 禁止点击事件 */
}
</style>
