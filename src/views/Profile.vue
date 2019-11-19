<template>
	<div class="box">
		<ul>
			<li><router-link to="/profile/basic">基本资料</router-link></li>
			<li><router-link to="/profile/pass">修改密码</router-link></li>
			<li><router-link to="/profile/setting">系统设置</router-link></li>
		</ul>
		<router-view class="personal" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			
		};
	},
	mounted() {},
	created() {},
	computed: {},
	methods: {}
};
</script>

<style scoped>
.box {
	background-color: #eee;
	display: flex;
	padding: 10px;
}
ul {
	list-style: none;
	flex: 0 0 20%;
}
ul li {
	display: block;
	text-align: center;
	height: 50px;
	line-height: 50px;
	background-image: linear-gradient(to right, #bf30ac 0%, #0f9d58 100%);
	opacity: 0.7;
	color: #fff;
	margin-bottom: 10px;
	margin-right: 10px;
}
a {
	color: #fff;
}
.personal {
	flex: 1;
	min-height: 100%;
	background-color: #fff;
}
</style>
