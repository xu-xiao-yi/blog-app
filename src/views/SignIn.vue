<template>
	<div id="bg">
		<router-link to="/">首页</router-link>
		<div class="login-box">
			<form class="login-form">
				<input type="text" v-model="userDto.mobile" id="mobile" />
				<input type="password" v-model="userDto.password" />
				<div class="code-box">
					<input type="text" v-model="userDto.code" class="code" />
					<img :src="this.codeUrl" class="verify" @click="refresh" />
				</div>
				<input type="button" class="btn btn-lg dark-fill" value="登录" @click="signIn(userDto)" />
				<router-link to="/sign-up">没有账号？去注册</router-link>
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
			sessionId:''
		};
	},
	created() {
		var number = Math.ceil(Math.random() * 10);
		this.codeUrl = this.GLOBAL.baseUrl + '/code?num = ' + number;
		this.sessionId = this.$VueCookies.get('JSESSIONID') 
		console.log(this.sessionId)
	},
	methods: {
		signIn(userDto) {
			var d = this.$document.cookie
			console.log(JSON.stringify(d))
			// const token = this.getCookie('JSESSIONID');
			// console.log(token);
			this.axios({
				method: 'post',
				url: this.GLOBAL.baseUrl + '/user/sign-in',
				data: JSON.stringify(this.userDto),
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				params: {
					token: '123'
				}
			}).then(res => {
				if (res.data.msg === '成功') {
					alert('登录成功');
					localStorage.setItem('user', JSON.stringify(res.data.data));
					this.$router.push('/');
				} else {
					alert(res.data.msg);
					this.userDto.code = '';
				}
			});
		},
		refresh() {
			this.codeUrl = '';
			var number = Math.ceil(Math.random() * 10);
			this.codeUrl = this.GLOBAL.baseUrl + '/code?num = ' + number;
		},
		//  setCookie(name,value){
		//     var Days = 1;
		//     var exp = new Date();
		//     exp.setTime(exp.getTime() + Days*24*60*60*1000);
		//     document.cookie = name + "="+ encodeURI (value) + ";expires=" + exp.toGMTString()+";path=/leasingCalculator";
		// },
		getCookie(name) {
			//获取指定名称的cookie的值
			console.log(document.cookie)
			let arrStr = document.cookie.split(',');
			console.log(arrStr)
			for (var i = 0; i < arrStr.length; i++) {
				var temp = arrStr[i].split('=');
				if (temp[0] == name) {
					return decodeURI(temp[1]);
				}
			}
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
