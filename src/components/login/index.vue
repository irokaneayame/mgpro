<template>
	<div class='content'>
		<mt-field placeholder="请输入账号" type="tel" v-model='phone' :state="phoneState"></mt-field>
		<mt-field placeholder="请输入密码" type="password" v-model="password" :state="passwordState"></mt-field>
		<mt-button class="registerBtn" @click="login()" size="large">登&nbsp;&nbsp;&nbsp;&nbsp;录</mt-button>
		<a class='tiao' href="/#/register">注&nbsp;册</a>
	</div>
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>