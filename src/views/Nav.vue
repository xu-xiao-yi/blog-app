<template>
	<div>
		<div class="nav primary-fill shadow">
			<div class="nav-bar">
				<ul class="nav-list flex-around">
					<li class="nav-item"><router-link to="/index">主页</router-link></li>
					<li class="nav-item"><router-link to="/topics">专题</router-link></li>
					<li class="nav-item"><router-link to="/articles">文章</router-link></li>
					<li class="nav-item"><router-link to="/users">作者</router-link></li>
					<li class="nav-item"><input type="text" class="input-box" placeholder="搜索" v-model="keywords" /></li>
					<li class="nav-item"><button class="btn btn-lg btn-rd dark-border" @click="search">搜索</button></li>
					<li class="nav-item" v-if="!this.user"><router-link to="/sign-in">登录</router-link></li>
					<!-- <li class="nav-item" v-if="this.user"> -->
						<router-link :to="{ path: '/user/' + user.id }" v-if="this.user"><img :src="user.avatar" @mouseenter="this.show = true" class="avatar-lg abs-center-right" /></router-link>
					<!-- </li> -->
					<li class="nav-item" v-if="this.user"><a class="link" @click="logout">退出</a></li>
				</ul>
			</div>
		</div>
		<router-view class="container" />
	</div>
</template>
<script>
export default {
	data() {
		return {
			user: JSON.parse(localStorage.getItem('user')),
			keywords: ''
		};
	},
	created() {},
	methods: {
		logout() {
			this.user = null;
			localStorage.clear();
		},
		search() {
			let currentPath = this.$route.path;
			alert(currentPath);
			if (currentPath != '/search' || currentPath != '/search/article' || currentPath != '/search/topic' || currentPath != '/search/usere') {
				this.$router.push({ path: '/search', query: { keywords: this.keywords } });
			} else {
				this.$router.push({ path: '/empty', query: { keywords: this.keywords } });
			}
		}
	}
};
</script>
<style scoped>
/* 路由激活高亮样式 */
.router-link-active {
	background-color: rgba(0, 0, 0, 0.35);
	font-weight: 700;
}
.container {
	margin-top: 80px;
}
</style>
