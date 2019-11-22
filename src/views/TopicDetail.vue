<template>
	<div class="container">
		<div class="row">
			<div class="col-8">
				<div class="row border">
					<div class="col-3">
						<img :src="topicVo.logo" class="avatar-lg" />
						<p class="title">{{ topicVo.topicName }}</p>
					</div>
					<div class="col-6">
						<p class="sub-title">{{ topicVo.description }}</p>
						<p>
							<span class="meta gutter">{{ topicVo.articles }}篇文章,</span>
							<span class="meta">{{ topicVo.follows }}人关注</span>
						</p>
					</div>
					<div class="col-3"><button class="btn btn-rd warning-fill">关注</button></div>
				</div>
				<h3 class="title">本专题文章</h3>
				<dir class="row">
					<div v-for="(item, index) in topicVo.articleList" :key="index" class="col-12">
						<div class="media-wraaper">
							<div class="media-left">
								<img :src="item.avatar" class="avatar-lg link" />
								<p>{{ item.nickname }}</p>
							</div>
							<div class="media-middle">
								<router-link :to="{ path: '/article/' + item.id }">
									<p>{{ item.title }}</p>
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
				</dir>
			</div>
			<div class="col-4 border">
				<div class="row">
					<div class="col-12">
						<img :src="topicVo.logo" class="thumnail-xs" />
						<p class="sub-title">{{ topicVo.topicName }}</p>
						<p class="sub-title">{{ topicVo.description }}</p>
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
			topicVo: {}
		};
	},
	created() {
		var id = this.$route.params.id;
		this.axios.get(this.GLOBAL.baseUrl + '/topic/' + id).then(res => {
			console.log(res.data.data);
			this.topicVo = res.data.data;
		});
	},
	computed: {},
	methods: {}
};
</script>

<style></style>
