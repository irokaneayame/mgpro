<template>
	<footer>
		<ul>
			<router-link tag="li" v-for="(item, index) in list" :to="item.path" :key="index">
				<svg class="icon" aria-hidden="true">
					<use :xlink:href="item.icon"></use>
				</svg>
				<p>{{item.name}}</p>
			</router-link>
		</ul>
	</footer>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>