<template>
	<div>
		<div class="row">
			<div v-for="(item, index) in topics" :key="index" class="col-12">
				<div class="media-wraaper">
					<div class="media-left tx-center gutter">
						<img :src="item.logo" class="thumnail-xs" />
						<p>{{ item.topicName }}</p>
					</div>
					<div class="media-middle">
						<p class="sub-title">{{ item.description }}</p>
						<p>
							<span class="meta gutter">{{ item.articles }}篇文章</span>
							<span class="meta gutter">{{ item.follows }}人关注</span>
						</p>
					</div>
					<div class="media-right"><button class="btn btn-rd warning-fill">关注</button></div>
				</div>
			</div>
		</div>
		<div class="row">
			<button class="btn btn-lg btn-rd dark-fill" @click="loadMore">点击加载更多</button>
		</div>
	</div>
	
</template>

<script>
export default {
	data() {
		return {
			topics: [],
			currentPage: 1,
			count: 5
		};
	},
	created() {
		this.axios
			.get(this.GLOBAL.baseUrl + '/topic', {
				params: {
					page: this.currentPage,
					count:this.count
				}
			})
			.then(res => {
				console.log(res.data.data.length);
				this.topics = res.data.data;
			});
	},
	methods: {
		loadMore() {
			this.currentPage = this.currentPage + 1;
			this.axios
				.get(this.GLOBAL.baseUrl + '/topic', {
					params: {
						page: this.currentPage,
						count: this.count
					}
				})
				.then(res => {
					console.log(res.data.data.length);
					let temp = [];
					temp = res.data.data;
					for (var i = 0; i < temp.length; i++) {
						this.topics.splice(this.currentPage * this.count, 0, temp[i]);
					}
					console.log(this.topics.length);
				});
		}
	}
};
</script>
<style></style>
