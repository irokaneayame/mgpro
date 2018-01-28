<template>
	<div class="banner">
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="(item,i) in img">
				<img :src="item"/>
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>