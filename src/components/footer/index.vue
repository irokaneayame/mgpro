<template>
  <footer>
    <ul>
      <router-link tag="li" v-for = "(item, index) in list" :to = "item.path" :key = "index">
                    {{item.name}}
      </router-link>
    </ul>
  </footer>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>