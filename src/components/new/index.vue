<template>
	<div class="new">
		<figure>
			<figcaption><span>今日推荐</span><span class='more' @click='chan("more")'>查看全部></span></figcaption>
		</figure>
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for='(a,b) in lenth' :key='b'>
				<ul>
					<li v-for='(item,index) in gamelist' :key='index' v-if='index>=b*4&&index<b*4+4' @click='chan(index)'>
						<img :src="item.ICON_URL" />
						<div>
							<p>{{item.NAME}}</p>
							<img src="../../../static/img/ping.png" />
							<p>{{item.DESCRI}}</p>
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
						<td>下载</td>
					</tr>
				</thead>
				<tbody>
					<tr v-for='item in giftlist'>
						<td>{{item.TITLE}}</td>
						<td>{{item.EXT1}}</td>
						<td>
							<a :href="item.EXT2">下载</a>
						</td>
					</tr>
				</tbody>
				<tfoot v-if='!isEnd'>
					<tr>
						<td @click="load">加载更多</td>
					</tr>
				</tfoot>
			</table>
			<ul v-if="tem == 'xin'">
				<li v-for='(item,index) in gamelist' :key='index' v-if='index<10'>
					<p class='lag' :style="'background-color:'+bianse(index)">
						<span :style="'color:'+textcolor(index)">{{index+1}}</span>
						<i></i>
					</p>
					<img :src="item.ICON_URL" />
					<div>
						<p>{{item.NAME}}</p>
						<img src="../../../static/img/ping.png" />
						<p>{{item.DESCRI}}</p>
					</div>
					<a :href='item.DL'>下载</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>