<template>
  <el-container>
    <el-aside width="400px" :style="{height: screenHeight+'px'}">
      <info></info>
    </el-aside>
    <el-container>
      <el-main :style="{height: screenHeight-20-20-24+'px'}">
        <app-main />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'
import AppMain from './components/AppMain.vue'
import Info from '@/views/Info/Index.vue'

export default defineComponent({
  name: '',
  components: {
    AppMain,
    Info
  },
  setup () {
    const state = reactive({
      screenWidth: document.body.clientWidth,
      screenHeight: window.innerHeight
    })

    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        state.screenWidth = window.screenWidth
        state.screenHeight = window.innerHeight
      })()
    }
    return {
      ...toRefs(state)
    }
  }
})
</script>


<style>
.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  /*line-height: 24px;*/
  height: 24px!important;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  /*line-height: 160px;*/
  padding: 40px!important;
}
</style>