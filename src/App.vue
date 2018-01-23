<template>
	<div id="app">
		<router-view name="header"></router-view>
		<router-view name="content"></router-view>
		<router-view name='footer'></router-view>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="scss">
	@import "~@/lib/reset.scss";
	html,
	body,
	#app {
		@include rect(100%, 100%);
	}
	
	#app {
		@include flexbox();
		@include flex-direction(column);
		header {
			@include rect(100%, 0.44rem);
			@include background-color(#f66);
			@include text-color(#fff);
		}
		.content {
			@include flex();
			@include rect(100%, auto);
		}
		footer {
			@include rect(100%, 0.5rem);
			@include background-color(#eee);
			@include text-color(#333);
			ul {
				@include rect(100%, 100%);
				@include flexbox();
				li {
					@include flex();
					@include flexbox();
					@include justify-content();
					@include align-items();
				}
			}
		}
	}
</style>