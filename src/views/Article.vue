<template>
	<div class="container">
		<div class="media-wraaper">
			<div class="media" v-for="(articel, index) in articles" :key="index">
				<div class="media-left">
					<img :src="article.avatar" class="avatar" />
					<p class="sub-title">{{ article.nickname }}</p>
				</div>
				<div class="media-middle">
					<h4>{{ article.title }}</h4>
					<p>{{ article.summary }}/p></p>
					<p>
						<span>{{ article.likes }}喜欢</span>
						<span>{{ article.comments }}评论</span>
					</p>
				</div>
				<div class="media-right"><img :src="article.thumbnail" /></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'article',
	data() {
		return {
			articles: []
		};
	},
	created() {
		this.axios.get('http://localhost:8080/api/articles/hot').then(res => {
			console.log(res.data.data);
			this.articles = res.data.data;
		});
	}
};
</script>

<style scoped="scoped">

</style>
