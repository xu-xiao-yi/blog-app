<template>
	<div>
		<div class="row">
			<div class="col-3" v-for="(item, index) in topics" :key="index">
				<div class="card link shadow">
					<router-link :to="{ path: '/topic/' + item.id }"><img :src="item.logo" class="logo" /></router-link>
					<p class="title">{{ item.topicName }}</p>
					<p class="sub-title">{{ item.description.slice(0, 20) }}...</p>
					<p class="meta">
						<span class="gutter">{{ item.articles }}篇文章,</span>
						<span>{{ item.follows }}人关注</span>
					</p>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-8">
				<h3>热门文章</h3>
				<div v-for="(item, index) in articles" :key="index" class="col-12">
					<div class="media-wraaper border">
						<div class="media-left">
							<img :src="item.avatar" class="avatar-lg link" />
							<p>{{ item.nickname }}</p>
							<strong>来自</strong>
							<p>{{ item.topicName }}</p>
						</div>
						<div class="media-middle flex flex-around flex-left">
							<router-link :to="{ path: '/article/' + item.id }" class="subtitle">
								 {{ item.title }} 
							</router-link>
							<p class="sub-title link">{{ item.summary }}</p>
							<p>
								<span class="meta gutter">{{ item.comments }}评论</span>
								<span class="meta">{{ item.likes }}喜欢</span>
							</p>
						</div>
						<div class="media-right"><img :src="item.thumbnail" alt="" /></div>
					</div>
				</div>
			</div>
			<div class="col-4">
				<h3>热门作者</h3>
				<div v-for="(item, index) in users" :key="index" class="row">
					<div class="col-12 border box">
						<div class="flex-center-y">
							<img :src="item.avatar" class="avatar-xs link" />
							<p class="sub-title">{{ item.nickname }}</p>
						</div>
						<div class="flex-center-y">
							<p class="meta">{{ item.fans }}个粉丝</p>
							<p class="meta">写了{{ item.articles }}篇文章</p>
						</div>
						<div class="flex-center-y"><button class="btn btn-follow">关注</button></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			articles: [],
			users: [],
			topics: []
		};
	},
	created() {
		this.axios.get(this.GLOBAL.baseUrl + '/article').then(res => {
			// console.log(res.data.data);
			this.articles = res.data.data;
		});
		this.axios.get(this.GLOBAL.baseUrl + '/user').then(res => {
			// console.log(res.data.data);
			this.users = res.data.data;
		});
		this.axios.get(this.GLOBAL.baseUrl + '/topic').then(res => {
			// console.log(res.data.data);
			this.topics = res.data.data;
		});
	}
};
</script>

<style scoped="scoped">
.logo {
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
}
.logo:hover {
	opacity: 0.6;
}
.box {
	display: flex;
	justify-content: space-around;
	height: 70px;
	padding: 10px;
}
.btn-follow {
	background-color: #42c02e;
	font-weight: 400;
	font-size: 15px;
	color: #fff;
	padding: 5px 0;
	width: 80px;
	height: 30px;
	border-radius: 40px;
	display: inline-block;
	text-align: center;
}
</style>
