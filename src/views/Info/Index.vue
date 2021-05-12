<template>
  <div class="panel-main__inner panel-inverted">
    <div class="panel-main__content">
      <h1 class="panel-cover__title panel-title">
        <a href="/" title="link to homepage">拓跋的前端客栈</a>
      </h1>
      <hr class="panel-cover__divider">
      <p class="panel-cover__description">
        江湖的尽头是否只剩孤独
      </p>
      <hr class="panel-cover__divider panel-cover__divider--secondary">
      <div class="navigation-wrapper">
        <nav class="cover-navigation cover-navigation--primary">
          <ul class="navigation">
            <li class="navigation__item">
              <a href="/#blog" title="" class="blog-button">首页</a>
            </li>
            <li class="navigation__item">
              <a href="/about" title="" class="">关于</a>
            </li>
            <li class="navigation__item">
              <a href="/archive" title="" class="">归档</a>
            </li>
          </ul>
        </nav>


        <nav class="cover-navigation navigation--social">
          <ul class="navigation">

            <li class="navigation__item">
              <a href="https://github.com/tuobaye0711" title="GitHub" target="view_window">
                <i class="icon icon-social-github"></i>
                <span class="label">GitHub</span>
              </a>
            </li>

            <li class="navigation__item">
              <a href="mailto:tuobaye0711@163.com" title="Email" target="view_window">
                <i class="icon icon-mail"></i>
                <span class="label">mail</span>
              </a>
            </li>

            <li class="navigation__item">
              <a href="/atom.xml" title="RSS" target="view_window">
                <i class="icon icon-rss"></i>
                <span class="label">RSS</span>
              </a>
            </li>


          </ul>
        </nav>
      </div>
      <a class="panel-cover__record" href="http://www.beian.miit.gov.cn/" target="_blank">苏ICP备19069244号-1</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '',
  setup () {

    return {}
  }
})
</script>
