<template>
  <div class="main">
    <div class="mark" :style="{height: screenHeight}">
      <div class="mark-img">
        <img class="cover" crossorigin="anonymous" src="@/assets/images/wallhaven.png" :width="screenWidth"
             :height="screenHeight" style="left: -7.5px; top: 0;">
      </div>
    </div>
    <div class="vibrant" :style="{width: screenWidth+'px', height: screenHeight+'px'}">
      <svg viewBox="0 0 2880 1620" height="100%" preserveAspectRatio="xMaxYMax slice">
        <polygon opacity="0.7" points="2000,1620 0,1620 0,0 600,0 " style="fill: rgb(56,53,53);"></polygon>
      </svg>
      <div style="background-color: rgb(176, 14, 37);"></div>
    </div>
    <div class="header">
      <div>
        <a class="icon-logo" href="/">
          hahaha
        </a>
      </div>
    </div>
    <div class="post0">
      <p>11月 24, 2018</p>
      <h2><a data-id="6643" class="posttitle" href="https://isujin.com/6643">你走了真好，不然总担心你要走</a></h2>
      <p>最近一次苏晴产生离婚的想法，是两个月以前，天桥下买煎饼的时候。

        老公掏零钱，不小心从裤兜里掉落一...</p>
    </div>
    <div class="post1">
      <ul class="navigation">
        <li class="navigation__item">
          <a href="/blog" title="" class="blog-button">首页</a>
        </li>
        <li class="navigation__item">
          <a href="/about" title="" class="">关于</a>
        </li>
        <li class="navigation__item">
          <a href="/archive" title="" class="">归档</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  name: '',
  setup() {
    const state = reactive({
      src: 'https://isujin.com/wp-content/uploads/2018/11/wallhaven-672007-1.png',
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
body {
  overflow: hidden;
}

//.vibrant {
//  position: absolute;
//  top: 0;
//  opacity: 0.5;
//  background: #000;
//  -moz-opacity: 0.5;
//}

//  .inner {
//    display: table;
//    width: 100%;
//    height: 100%;
//
//    //display: block;
//    position: fixed;
//    top: 0;
//    //z-index: 900;
//    //width: 100%;
//    //max-width: none;
//    //height: 100%;
//  }
//
//
//.inner-main {
//  font-weight: 100;
//  //text-align: center;
//  text-align: -webkit-center;
//  color: #fff;
//  text-shadow: 0 1px 1px rgb(0 0 0 / 40%);
//
//  display: table-cell;
//  vertical-align: middle;
//  //position: relative;
//  z-index: 800;
//  padding: 0 60px;
//}
//
//.inner-content {
//  max-width: 620px;
//  margin: 0 auto;
//  font-weight: 100;
//  text-align: center;
//  color: #fff;
//  text-shadow: 0 1px 1px rgb(0 0 0 / 40%);
//
//  display: table-cell;
//  vertical-align: middle;
//  position: relative;
//  z-index: 800;
//  padding: 0 60px;
//}
//
//.navigation {
//  display: inline-block;
//  position: relative;
//  margin: 0;
//  list-style-type: none;
//  padding: 0;
//  border: 0;
//  //font-size: 100%;
//  //font: inherit;
//  vertical-align: baseline;
//  text-align: center;
//  color: #fff;
//  text-shadow: 0 1px 1px rgb(0 0 0 / 40%);
//}
//
//.inner-divider {
//  width: 100%;
//  margin: 20px auto;
//  border-top: 0px solid rgba(255,255,255,0);
//}
//
//.navigation__item {
//  display: inline-block;
//  margin: 3px;
//  line-height: 1em;
//}
//
//.navigation__item a {
//  text-decoration: none;
//  display: block;
//  position: relative;
//  border: 1px solid #fff;
//  color: #fff;
//  opacity: .8;
//
//  padding: 10px 20px;
//  border-radius: 20px;
//  font-size: .9em;
//  font-weight: 700;
//  letter-spacing: 1px;
//  text-shadow: none;
//  -webkit-font-smoothing: antialiased;
//}

.vibrant {
  position: absolute;
  top: 0;
  left: 0;
  //width: 100%;
  //height: 100%;
}

.vibrant div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: #000;
}

.header {
  position: absolute;
  top: 70px;
  width: 100%;
}

.header > div {
  margin: 0 60px;
  position: relative;
}

.header > .icon-logo {
  display: inline-block;
  color: #fff;
  font-size: 26px;
  position: relative;
  z-index: 4;
}

.post0 {
  width: 28%;
  position: absolute;
  top: 38%;
  left: 10%;
}

.post0 p:first-child {
  color: #fff;
  font-size: 12px;
}

.post0 h2 {
  font-size: 28px;
  margin-top: 15px;
}

.post0 h2 a {
  color: #fff;
}

.post0 h2 + p {
  color: #fff;
  font-size: 14px;
  margin-top: 30px;
}

.post1 {
  width: 28%;
  position: absolute;
  top: 72%;
  left: 20%;
}
.navigation {
  display: inline-block;
  position: relative;
  margin: 0;
  list-style-type: none;
}

.navigation__item {
  display: inline-block;
  margin: 3px;
  line-height: 1em;
}

.navigation__item a:hover {
  color: #fff;
  border-color: #fff;
  opacity: 1;
}

.navigation__item a {
  padding: 10px 20px;
  border: 1px solid #fff;
  border-radius: 20px;
  font-size: .9em;
  font-weight: 700;
  letter-spacing: 1px;
  text-shadow: none;
  color: #fff;
  -webkit-font-smoothing: antialiased;
}

a {
  text-decoration: none;
}
</style>
