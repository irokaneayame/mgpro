<template>
	<transition name="bounce">
		<div class="content">
			<section>
				<ul>
					<li v-for="(item,index) in list" :key="index">
						<img :src="item.ICON_URL" />
						<div>
							<h1>{{item.NAME}}</h1>
							<p><span>{{config.arr_type[item.TYPE-1].text}}</span><span>{{item.PACK_SIZE}}M</span><span>{{item.DL_NUM}}万次下载</span></p>
						</div>
						<p><em @click='download(item.DL)'>下载</em><em>礼包</em></p>
					</li>
				</ul>
			</section>
		</div>
	</transition>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>