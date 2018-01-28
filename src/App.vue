<template>
	<div id="app">
		<router-view name="header"></router-view>
		<router-view name="content"></router-view>
		<router-view name="footer"></router-view>
	</div>
</template>

<script>
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
		@include border(1px, #e0e0e2);
		header {
			@include rect(100%, 0.44rem);
			@include flexbox();
			@include justify-content(space-between);
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
			border-top: 1px solid #d4d4d4;
			@include font-size(0.12rem);
			@include text-color(#61656C);
			ul {
				@include rect(100%, 100%);
				@include flexbox();
				li {
					@include flex();
					@include flexbox();
					@include flex-direction(column);
					@include justify-content(center);
					@include align-items(center);
					.iconfont{
						@include font-size(0.18rem)
					}
				}
			}
		}
	}
</style>