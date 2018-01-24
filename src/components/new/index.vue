<template>
	<div class="new">
		<figure>
			<figcaption><span>今日推荐</span><span class='more'>查看全部></span></figcaption>
			<ul>
				<li>
					<img src="./1.jpg" />
					<div>
						<p>元气战姬少女</p>
						<p>二次元手游</p>
					</div>
				</li>
				<li>
					<img src="./1.jpg" />
					<div>
						<p>元气战姬少女</p>
						<p>二次元手游</p>
					</div>
				</li>
				<li>
					<img src="./1.jpg" />
					<div>
						<p>元气战姬少女</p>
						<p>二次元手游</p>
					</div>
				</li>
				<li>
					<img src="./1.jpg" />
					<div>
						<p>元气战姬少女</p>
						<p>二次元手游</p>
					</div>
				</li>
			</ul>
		</figure>
		<div class='game'>
			<p class='tab'><span @click="change('kai')">开服表</span><span @click="change('xin')">新游榜</span></p>
			<table v-if="tem == 'kai'">
				<th>
					<td>开服名称</td>
					<td>开服时间</td>
					<td>礼包</td>
					<td>下载</td>
				</th>
				<tr>
					<td>《大天使之剑》经典390服</td>
					<td>1月22日</td>
					<td>礼物</td>
					<td>下载</td>
				</tr>
			</table>
		</div>
	</div>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>