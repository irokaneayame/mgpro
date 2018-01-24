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
		@include border(1px,#e0e0e2)
		header {
			@include rect(100%, 0.44rem);
			@include background-color(#f66);
			@include text-color(#fff);
			@include flexbox();
			@include justify-content(center);
			@include align-items(center);
		}
		.content {
			@include flex();
			@include rect(100%, auto);
			@include background-color(#f4f4f4);
		}
		footer {
			@include rect(100%, 0.5rem);
			@include background-color(#f4f4f4);
			@include text-color(#333);
			/*@include border(1px 0 0 0,#d4d4d4);*/
			 border-top: 1px solid #d4d4d4;
			ul {
				@include rect(100%, 100%);
				@include flexbox();
				li {
					@include flex();
					@include flexbox();
					@include flex-direction(column);
					@include justify-content();
					@include align-items();
					svg {
						@include font-size(0.2rem);
					}
				}
			}
		}
	}
</style>