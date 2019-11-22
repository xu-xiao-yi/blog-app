<template>
	<div class="row">
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
						<p>
							<span>{{ item.id }}</span>
							{{ item.title }}
						</p>
					</router-link>
					<p class="sub-title link">{{ item.summary }}</p>
					<p>
						<span class="meta">{{ item.comments }}评论</span>
						<span class="meta">{{ item.likes }}喜欢</span>
					</p>
				</div>
				<div class="media-right"><img :src="item.thumbnail" /></div>
			</div>
		</div>

		<div class="col-12"><button class="btn btn-lg warning-fill" @click="getMore">点击加载更多</button></div>
	</div>
</template>

<script>
export default {
	name:'my-articles',
	data() {
		return {
			articles: [],
			keywords: '',
			currentPage: 1,
			count: 5
		};
	},
	created() {
		this.keywords = this.$route.query.keywords
		console.log(this.keywords)
		if (this.keywords != '') {
			this.articles = [];
			this.axios
				.get(this.GLOBAL.baseUrl + '/article', {
					params: {
						keywords: this.keywords
					}
				})
				.then(res => {
					console.log(res.data.data.length);
					this.articles = res.data.data;
				});
		} else {
			this.axios
				.get(this.GLOBAL.baseUrl + '/article', {
					params: {
						page: this.currentPage,
						count: this.count
					}
				})
				.then(res => {
					console.log(res.data.data);
					this.articles = res.data.data;
				});
		}
	},
	methods: {
		getMore() {
			this.currentPage++;
			console.log(this.currentPage);
			this.axios
				.get(this.GLOBAL.baseUrl + '/article', {
					params: {
						page: this.currentPage,
						count: this.count
					}
				})
				.then(res => {
					this.articles.splice(this.articles.length, 0, res.data.data);
				});
		}
	}
};
</script>

<style scoped="scoped"></style>
