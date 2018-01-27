<template>
  <transition name="bounce">
    <div class="content">
      <div class="search-wrap">
        <div class="search-bg">
          <i></i>
          <input type="text" value="" placeholder="搜索游戏" v-model="searchOpt.name" @input="getList()" />
          <b @mousedown="clearInput()">取消</b>
        </div>
        <p>
          <mt-button type="default" @click="showType()">类型：{{typeText}}</mt-button>
          <mt-button type="primary" @click="showTheme()">题材：{{themeText}}</mt-button>
        </p>
      </div>
      <mt-popup v-model="typePop" popup-transition="popup-fade">
        <mt-radio title="选择类型" :options="typeArr" v-model="typeText"></mt-radio>
      </mt-popup>
      <mt-popup v-model="themePop" popup-transition="popup-fade">
        <mt-radio title="选择题材" :options="themeArr" v-model="themeText"></mt-radio>
      </mt-popup>
      <section>
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <img :src="item.ICON_URL" />
            <div>
              <h1>{{item.NAME}}</h1>
              <p><span>{{item.DESCRI}}</span></p>
            </div>
            <a :href="item.DL">下载</a>
          </li>
        </ul>
        <div class="more" @click="addList()" v-show="isEnd==0">查看更多</div>
        <div class="more" v-show="isEnd!=0">没有更多</div>
      </section>
    </div>
  </transition>
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>