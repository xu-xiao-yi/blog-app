<template>
	<div>
		<div class="row">
			<div class="col-3" v-for="(item, index) in topics" :key="index">
				<div class="card link shadow">
					<img :src="item.logo" />
					<p class="title">{{item.topicName}}</p>
					<p class="title">{{item.decscription}}</p>
					
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
							<p class="sub-title link">{{ item.article.title }}</p>
							<p>{{ item.article.summary }}</p>
							<p>
								<span class="meta">{{ item.article.comments }}评论</span>
								<span class="meta">{{ item.article.likes }}喜欢</span>
							</p>
						</div>
						<div class="media-right"><img :src="item.article.thumbnail" alt="" /></div>
					</div>
				</div>
			</div>
			<div class="col-4 border">
				<h2>热门作者</h2>
				<div v-for="(item, index) in users" :key="index" class="row border">
					<img :src="item.avatar" class="avatar-lg link">
					<p class="col-6">{{ item.nickname }}</p>
					<p class="col-3">{{item.fans}}个粉丝</p>
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
		this.axios.get(this.baseURL + '/article').then(res => {
			console.log(res.data.data);
			this.articles = res.data.data;
		});
		this.axios.get(this.baseURL + '/user').then(res => {
			console.log(res.data.data);
			this.users = res.data.data;
		});
		this.axios.get(this.baseURL + '/topic').then(res => {
			console.log(res.data.data);
			this.topics = res.data.data;
		});
	}
};
</script>

<style scoped="scoped">
.media-wraaper {
	display: flex;
	height: 200px;
	margin: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	padding: 5px;
}
.media-left {
	flex: 1 1 15%;
}
.media-middle {
	flex: 1 1 65%;
}
.media-right {
	flex: 1 1 20%;
}
.media-right img {
	width: 80%;
	height: 80%;
}
.card{
	width: 90%;
	height: 200px;
	border:1px solid #eee;
	border-radius: 5px;
	margin: 5px;
}
.card img{
	width: 100%;
	height: 60%;
	border-top-left-radius: 5px;
	border-bottom-right-radius: 5px;
}
</style>
