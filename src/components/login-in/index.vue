<template>
	<div class="content">
		<div class='denglu'>
			<p>用户名</p>
			<p>{{name}}</p>
			<em @click='quit()'>退出</em>
		</div>
		<figure>
			<figcaption>最近领取的礼包</figcaption>
			<ul>
				<li v-for='item in list'>
					<span>{{item.gname}}</span>
					<span>{{item.pname}}</span>
					<span>{{item.str}}</span>
				</li>
			</ul>
		</figure>
	</div>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>