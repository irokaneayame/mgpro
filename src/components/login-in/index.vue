<template>
	<div class="content">
		<div class='denglu'>
			<div><p>用户名</p>{{name}}<p></p><em @click='quit()'>退出</em></div>
			<div><p>昵称</p><input type="text" :value='name'/><em>确定</em></div>
		</div>
	</div>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>