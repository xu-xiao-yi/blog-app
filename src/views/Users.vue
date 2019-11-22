<template>
	<div>
		<div class="row">
			<div v-for="(item, index) in users" :key="index" class="col-4">
				<div class="card shadow">
					<div class="card-head">
						<p class="title">{{ item.nickname }}</p>
						<img :src="item.avatar" />
					</div>
					<div class="card-body">
						<p class="sub-title">{{ item.introduction }}</p>
						<p class="sub-title">
							<strong>来自：{{ item.address }}</strong>
						</p>
						<p class="meta">{{ item.articles }}篇文章，{{ item.fans }}个粉丝</p>
						<a :href="item.homepage" class="link" @click="go(item.homepage)">个人主页</a>
					</div>
				</div>
			</div>
		</div>
		<div class="row"><button class="btn btn-lg btn-rd dark-fill" @click="loadMore">点击加载更多</button></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			users: [],
			currentPage: 1,
			count: 6
		};
	},
	created() {
		this.axios
			.get(this.GLOBAL.baseUrl + '/user', {
				params: {
					page: this.currentPage,
					count: this.count
				}
			})
			.then(res => {
				console.log(res.data.data.length);
				this.users = res.data.data;
			});
	},
	methods: {
		loadMore() {
			this.currentPage = this.currentPage + 1;
			this.axios
				.get(this.GLOBAL.baseUrl + '/user', {
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
						this.users.splice(this.currentPage * this.count, 0, temp[i]);
					}
					console.log(this.users.length);
				});
		},
		go(page){
			window.location.href = page
		}
	}
};
</script>
<style scoped>
.card {
	width: 90%;
	height: 300px;
	background-image: url(../assets/img/44.png);
	background-size: 100%, 100%;
	margin-bottom: 50px;
}
.card-head {
	height: 30%;
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.card-head img {
	width: 80px;
	height: 80px;
	border-radius: 50%;
	margin-left: 20px;
}
.card-body {
	width: 80%;
	margin: 0 auto;
	/* display: flex; */
	/* flex-direction: column; */
	/* justify-content: flex-end; */
	/* align-items: center; */
}
.card-body > p {
	line-height: 30px;
}
</style>
