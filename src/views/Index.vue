<template>
	<div>
		<div class="row">
			<div class="col-3" v-for="(item, index) in topics" :key="index">
				<div class="card link shadow">
					<router-link :to="{ path: '/topic/' + item.id }"><img :src="item.logo" class="logo" /></router-link>
					<p class="sub-title">{{ item.topicName }}</p>
					<p class="meta">{{ item.description }}</p>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-8 border">
				<div v-for="(item, index) in articles" :key="index" class="col-12">
					<div class="media-wraaper">
						<div class="media-left">
							<img :src="item.avatar" class="avatar-lg link" />
							<p>{{ item.nickname }}</p>
							<strong>来自</strong>
							<p>{{ item.topicName }}</p>
						</div>
						<div class="media-middle">
							<router-link :to="{ path: '/article/' + item.id }">
								<p>{{ item.title }}</p>
							</router-link>
							<p class="sub-title link">{{ item.summary }}</p>
							<p>
								<span class="meta">{{ item.comments }}评论</span>
								<span class="meta">{{ item.likes }}喜欢</span>
							</p>
						</div>
						<div class="media-right"><img :src="item.thumbnail" alt="" /></div>
					</div>
				</div>
			</div>
			<div class="col-4 border">
				<h2>热门作者</h2>
				<div v-for="(item, index) in users" :key="index" class="row border">
					<img :src="item.avatar" class="avatar-lg link" />
					<p class="col-6">{{ item.nickname }}</p>
					<p class="col-3">{{ item.fans }}个粉丝</p>
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
			console.log(res.data.data);
			this.articles = res.data.data;
		});
		this.axios.get(this.GLOBAL.baseUrl + '/user').then(res => {
			console.log(res.data.data);
			this.users = res.data.data;
		});
		this.axios.get(this.GLOBAL.baseUrl + '/topic').then(res => {
			console.log(res.data.data);
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
.logo:hover{
	opacity: 0.6;
}
</style>
