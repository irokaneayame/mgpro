<template>
	<transition name="bounce">
		<div class="content">
			<p><span>推荐</span><span>排行</span></p>
			<section>
				<ul>
					<li v-for="(item,index) in list" :key="index">
						<img :src="item.ICON_URL" />
						<div>
							<h1>{{item.NAME}}</h1>
							<p><span>{{item.DESCRI}}</span></p>
						</div>
						<a :href="item.DL">下载</a>
					</li>
				</ul>
				<div>查看更多</div>
			</section>
		</div>
	</transition>
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>