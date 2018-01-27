<template>
	<div class="new">
		<figure>
			<figcaption><span>今日推荐</span><span class='more'>查看全部></span></figcaption>
		</figure>
		<mt-swipe :auto="4000">
			<mt-swipe-item>
				<ul>
					<li>
						<img src="./1.jpg" />
						<div>
							<p>元气战姬少女</p>
							<img src="../../../static/img/ping.png" />
							<p>二次元手游</p>
						</div>
					</li>
					<li>
						<img src="./1.jpg" />
						<div>
							<p>元气战姬少女</p>
							<img src="../../../static/img/ping.png" />
							<p>二次元手游</p>
						</div>
					</li>
					<li>
						<img src="./1.jpg" />
						<div>
							<p>元气战姬少女</p>
							<img src="../../../static/img/ping.png" />
							<p>二次元手游</p>
						</div>
					</li>
					<li>
						<img src="./1.jpg" />
						<div>
							<p>元气战姬少女</p>
							<img src="../../../static/img/ping.png" />
							<p>二次元手游</p>
						</div>
					</li>
				</ul>
			</mt-swipe-item>
			<mt-swipe-item>
				<ul>
					<li>
						<img src="./1.jpg" />
						<div>
							<p>元气战姬少女</p>
							<img src="../../../static/img/ping.png" />
							<p>二次元手游</p>
						</div>
					</li>
					<li>
						<img src="./1.jpg" />
						<div>
							<p>元气战姬少女</p>
							<img src="../../../static/img/ping.png" />
							<p>二次元手游</p>
						</div>
					</li>
					<li>
						<img src="./1.jpg" />
						<div>
							<p>元气战姬少女</p>
							<img src="../../../static/img/ping.png" />
							<p>二次元手游</p>
						</div>
					</li>
					<li>
						<img src="./1.jpg" />
						<div>
							<p>元气战姬少女</p>
							<img src="../../../static/img/ping.png" />
							<p>二次元手游</p>
						</div>
					</li>
				</ul>
			</mt-swipe-item>
			<mt-swipe-item>
				<ul>
					<li>
						<img src="./1.jpg" />
						<div>
							<p>元气战姬少女</p>
							<img src="../../../static/img/ping.png" />
							<p>二次元手游</p>
						</div>
					</li>
					<li>
						<img src="./1.jpg" />
						<div>
							<p>元气战姬少女</p>
							<img src="../../../static/img/ping.png" />
							<p>二次元手游</p>
						</div>
					</li>
					<li>
						<img src="./1.jpg" />
						<div>
							<p>元气战姬少女</p>
							<img src="../../../static/img/ping.png" />
							<p>二次元手游</p>
						</div>
					</li>
					<li>
						<img src="./1.jpg" />
						<div>
							<p>元气战姬少女</p>
							<img src="../../../static/img/ping.png" />
							<p>二次元手游</p>
						</div>
					</li>
				</ul>
			</mt-swipe-item>
		</mt-swipe>

		<div class='game'>
			<p class='tab'><span @click="change('kai')">开服表</span><span @click="change('xin')">新游榜</span></p>
			<table v-if="tem == 'kai'">
				<thead>
					<tr>
						<td>开服名称</td>
						<td>开服时间</td>
						<td>礼包</td>
						<td>下载</td>
					</tr>
				</thead>
				<tbody>
					<tr v-for='item in list'>
						<td>{{item.TITLE}}</td>
						<td>{{item.EXT1}}</td>
						<td>礼物</td>
						<td>
							<a :href="item.EXT2">下载</a>
						</td>
					</tr>
					
				</tbody>
				<tfoot>
					<tr><td>加载更多</td></tr>
				</tfoot>
			</table>
		</div>
	</div>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>