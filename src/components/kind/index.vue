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
            <mt-button type="default">类型：全部</mt-button>
            <mt-button type="primary">题材：全部</mt-button>
          </p>
        </div>
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