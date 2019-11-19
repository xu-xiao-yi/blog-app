<template>
	<div>
		<div class="nav primary-fill shadow">
			<div class="nav-bar flex flex-between">
				<ul class="nav-list">
					<li class="nav-item"><router-link to="/index">主页</router-link></li>
					<li class="nav-item"><router-link to="/topic">专题</router-link></li>
					<li class="nav-item"><router-link to="/article">文章</router-link></li>
					<li class="nav-item"><router-link to="/user">作者</router-link></li>
				</ul>
				<ul v-if="!this.user" class="navnav-right">
					<li class="nav-item"><router-link to="/download">下载APP</router-link></li>
					<li class="nav-item"><router-link to="/sign-in">登录</router-link></li>
				</ul>
				<ul v-if="this.user" class="nav-right">
					<img :src="user.avatar" @mouseenter="this.show = true" class="avatar-lg abs-center-right"/>
					<li class="nav-item"><a class="link" @click="logout">退出</a></li>
				</ul>
			</div>
			<div class="dropdown shadow" v-if="show"></div>
		</div>
		<router-view class="container" />
	</div>
</template>
<script>
export default {
	data() {
		return {
			user: JSON.parse(localStorage.getItem('user')),
			dialog: false,
			show: false
		};
	},
	created: function() {},
	methods: {
		logout() {
			this.user = null;
			localStorage.clear();
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
.dropdown {
	position: absolute;
	right: 110px;
	top: 65px;
	background-color: #fff;
	width: 120px;
	height: 220px;
	border-radius: 5px;
}
</style>
