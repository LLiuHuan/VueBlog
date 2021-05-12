<template>
  <div style="text-align: left;padding: 40px 40px 0 40px;">
    <div class="list-content">
      <div class="list-body">
        <a class="list-title" :underline="false">You reap what you sow!</a>
        <div class="list-text">
          那些你想追求的想拥有的，不是你一厢情愿披肝沥胆就能如愿，即便是得到了片刻，快乐了一时，却是付出了极不对等的代价——被蹉跎的是一生中最宝贵最美好的时光。人啊，终究是活在硬梆梆地现实中，有了坚实的物质基础才有资格谈论其它，尤其是在这个金钱至上的年代。
          ...
        </div>
      </div>
      <div class="list-footer">
              <span class="">
                <a :underline="false" class="" target="_blank">字</a>
              </span>
        <i class="text-primary">•</i>
        <span class=""> 2019-08-14</span>
      </div>
    </div>
  </div>
<!--  <div style="text-align: left;padding: 40px 40px 0 40px;">-->
<!--    <el-row>-->
<!--      <el-col :span="20">-->
<!--        <div class="list-content">-->
<!--          <div class="list-body">-->
<!--            <a class="list-title" :underline="false">You reap what you sow!</a>-->
<!--            <div class="list-text">-->
<!--              那些你想追求的想拥有的，不是你一厢情愿披肝沥胆就能如愿，即便是得到了片刻，快乐了一时，却是付出了极不对等的代价——被蹉跎的是一生中最宝贵最美好的时光。人啊，终究是活在硬梆梆地现实中，有了坚实的物质基础才有资格谈论其它，尤其是在这个金钱至上的年代。-->
<!--              ...-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="list-footer">-->
<!--              <span class="">-->
<!--                <a :underline="false" class="" target="_blank">字</a>-->
<!--              </span>-->
<!--            <i class="text-primary">•</i>-->
<!--            <span class=""> 2019-08-14</span>-->
<!--          </div>-->
<!--        </div>-->
<!--      </el-col>-->
<!--      <el-col :span="4">-->
<!--        <div class="list-image" style="width: 200px;height: 200px;    flex: 0 0 25%;-->
<!--    max-width: 25%;    padding-right: 0;-->
<!--    padding-left: 1rem;">-->
<!--          <div class="media shadow" style="    position: relative;-->
<!--    display: block;-->
<!--    overflow: hidden;-->
<!--    padding: 0;-->
<!--    -ms-flex-negative: 0;-->
<!--    flex-shrink: 0;-->
<!--    border-radius: .33rem;box-shadow: 0px 10px 30px -10px rgb(45 55 86 / 20%) !important;">-->
<!--            <a href="" class="media-content"-->
<!--               style="background-image:url('https://qqcdn.baipishu.net/2019/08/yingsu-1024x682.jpg');    position: absolute;-->
<!--    top: 0;-->
<!--    bottom: 0;-->
<!--    left: 0;-->
<!--    right: 0;-->
<!--    border: 0;-->
<!--    border-radius: inherit;-->
<!--    background-size: cover;-->
<!--    background-repeat: no-repeat;-->
<!--    background-position: 50% 50%;-->
<!--    background-color: rgba(120, 120, 120, 0.1);-->
<!--}">-->
<!--            </a>-->
<!--          </div>-->
<!--        </div>-->
<!--      </el-col>-->
<!--    </el-row>-->
<!--  </div>-->
  <div style="text-align: left;padding: 40px 40px 0 40px;">
    <div style="background: linear-gradient(to right, #fd6f6f 0%, #f1404b 100%);padding: 1.5rem !important;">
      <el-row :gutter="20">
        <el-col :span="1">
          <svg
              class="icon"
              aria-hidden="true"
              font-size="10px"
              style="width: 30px; height: 30px;"
          >
            <use xlink:href="#iconshuangyinhao"/>
          </svg>
        </el-col>
        <el-col :span="23">
          <div class="list-content" style="padding-left: 8px;">
            <div class="list-body">
              <div class="" style="    font-size: 1.125rem !important;    margin-bottom: 1rem!important;">
                <a class=""
                   style="text-decoration: none;    overflow: hidden;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;color: #fff!important;"
                   href="https://baipishu.net/2015/111.html">某些时刻觉得一切都很没意思，包括生活。这样的事，那样的人和如此的环境让人越发消极沉沦。
                  ...</a>
              </div>
              <div class="list-footer-thought">
                <span class="title ">消沉</span>
                <i class="text-light iconfont icon-minus-outline px-1 px-lg-2"></i>
                <span>2015-12-03</span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  name: '',
  setup() {
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

<style lang="less">
.list-text {
  margin-top: 1rem !important;
  color: #7a8b9a !important;
  font-size: 0.875rem !important;
  display: block !important;

}

.list-footer {
  margin-top: .75rem !important;
  font-size: 0.75rem !important;
  color: #7a8b9a !important;

}

a:hover {
  text-decoration: none;
  color: #f1404b;
}

.text-primary {
  color: #f1404b !important;
  padding-left: .5rem !important;
  padding-right: .5rem !important;
  font-size: 0.75rem !important;
}

.post-thought {
  //padding: 2rem 0;
  text-align: left;
  padding: 40px 40px 0 40px;
}

.rounded {
  background: linear-gradient(to right, #fd6f6f 0%, #f1404b 100%);
  padding: 1.5rem !important;
}

.list-footer-thought {
  font-size: 0.75rem !important;
  color: #fff !important;
}
</style>