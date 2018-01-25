<template>
	<div class="content">
		<section>
			<ul>
				<li v-for="(item,index) in list" :key="index">
					<img :src="item.ICON" />
					<div>
						<h1>{{item.GNAME}}({{item.PNAME}})</h1>
						<p>{{item.CONTENT}}</p>
						<p>剩余<span>{{item.STOCK}}</span></p>
					</div>
					<a>领取</a>
				</li>
			</ul>
			
			<div>查看更多</div>
		</section>
	</div>
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>