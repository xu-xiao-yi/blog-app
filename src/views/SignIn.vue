<template>
	<div id="bg">
		<div class="login-box">
			<form class="login-form">
				<input type="text" v-model="userDto.mobile" id="mobile" />
				<input type="password" v-model="userDto.password" />
				<div class="code-box">
					<input type="text" v-model="userDto.code" class="code" />
					<img :src="this.codeUrl" class="verify" @click="refresh" />
				</div>
				<input type="button" class="btn btn-lg warning-fill" value="登录" @click="signIn(userDto)" />
			</form>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			userDto: {
				mobile: '',
				password: '',
				code: ''
			},
			codeUrl: '',
			token: this.GLOBAL.token,
			user: this.GLOBAL
		};
	},
	created() {
		var number = Math.ceil(Math.random() * 10);
		this.codeUrl = this.baseURL + '/code?num = ' + number;
	},
	methods: {
		signIn(userDto) {
			// var Cookies = require('js-cookie')
			// let sessionId = this.Cookies.get('JSESSIONID');
			// this.axios({
			// 	method: 'post',
			// 	url: 'http://localhost:8080/api/user/sign-in',
			// 	data: JSON.stringify(this.userDto),
			// 	param: {
			// 		SessionId: sessionId
			// 	}
			// }).then(res => {
			// 	if (res.data.msg === '成功') {
			// 		alert('登录成功');
			// 		localStorage.setItem('user', JSON.stringify(res.data.data));
			// 		this.$router.push('/');
			// 	} else {
			// 		alert(res.data.msg);
			// 		this.userDto.code = '';
			// 	}
			// });
		},
		refresh() {
			this.codeUrl = '';
			var number = Math.ceil(Math.random() * 10);
			this.codeUrl = this.baseURL + '/code?num = ' + number;
		}
	}
};
</script>
<style scoped>
#bg {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url(../assets/img/40.png);
}
.login-box {
	width: 450px;
	height: 300px;
	border: 2px solid rgb(170, 208, 95);
	border-radius: 10px;
	background-color: rgb(170, 208, 95, 0.6);
	position: absolute;
	top: 200px;
	left: 30%;
}
.login-form {
	padding-top: 20px;
	width: 70%;
	margin: 0 auto;
	text-align: left;
}
.login-form input {
	width: 100%;
	height: 35px;
	outline: none;
	border: none;
	margin-bottom: 10px;
	border-radius: 5px;
}
.code-box {
	display: flex;
	margin-top: 10px;
	margin-bottom: 20px;
	justify-content: space-between;
}
.verify {
	flex: 0 0 50%;
	height: 40px;
}
.verify:hover {
	cursor: pointer;
}
.code {
	flex: 0 0 40%;
	height: 40px;
}
</style>
