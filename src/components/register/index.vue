<template>
	<div class='content'>
		<mt-field placeholder="请输入账号" type="text" v-model='phone' :state="phoneState"></mt-field>
		<mt-field placeholder="请输入密码" type="password" v-model="password" :state="passwordState"></mt-field>
		<mt-field placeholder="请确认密码" type="password" v-model="aginpass" :state="aginState"></mt-field>
		<mt-field placeholder="验证码" v-model="captcha">
			<mt-button class='yanzheng' type="default" @click="changeCode()">{{code}}</mt-button>
		</mt-field>
		<mt-button class="registerBtn" @click="register()" size="large">注册</mt-button>
	</div>
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>