<template>
  <div class="content">
    <section>
      <mt-popup v-model="cdk.show" popup-transition="popup-fade">
        <mt-cell title="恭喜您获得礼包"></mt-cell>
        <mt-cell title="" :label="cdk.con"><a @click="copycdk">复制</a></mt-cell>
        <textarea id="copyArea" v-model="cdk.con" style="z-index: -100;position: absolute;opacity: 0;"></textarea>
      </mt-popup>
      <mt-popup v-model="cdkErr" popup-transition="popup-fade">
        <mt-cell title="领取失败"></mt-cell>
        <mt-cell title="您已经领取过该礼包" to="/user/login-in" is-link>查看记录</mt-cell>
      </mt-popup>
      <mt-popup v-model="cdkLogin" popup-transition="popup-fade">
        <mt-cell title="登录以后才能领取礼包哦"></mt-cell>
        <mt-cell title="登录" to="/login" is-link></mt-cell>
      </mt-popup>
      <ul>
        <li v-for="item in list">
          <img :src="item.ICON" />
          <div>
            <h1>{{item.GNAME}}({{item.PNAME}})</h1>
            <p>{{item.CONTENT}}</p>
            <p>剩余<span>{{item.STOCK}}</span></p>
          </div>
          <a @click="getcdk(item.GID,item.PID,item.GNAME,item.PNAME)">领取</a>
        </li>
      </ul>
      <div @click='addList' v-if='!isEnd'>查看更多</div>
    </section>
  </div>
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>