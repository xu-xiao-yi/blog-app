<template>
	<div class="container border">
		<h2 class="title">{{ articleVo.title }}</h2>
		<div class="box">
			<img :src="articleVo.avatar" class="avatar-xs" />
			<span class="meta gutter">{{ articleVo.nickname }}</span>
			<span class="meta gutter">
				{{ articleVo.createTime.date.year }}年{{ articleVo.createTime.date.month }}月{{ articleVo.createTime.date.day }}日 {{ articleVo.createTime.time.hour }}:{{
					articleVo.createTime.time.minute
				}}:{{ articleVo.createTime.time.second }}
			</span>
		</div>
		<div v-html="articleVo.content"></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			articleVo: {}
		};
	},
	created() {
		var id = this.$route.params.id;
		this.axios.get(this.GLOBAL.baseUrl + '/article/' + id).then(res => {
			console.log(res.data.data);
			this.articleVo = res.data.data;
		});
	},
	computed: {},
	methods: {}
};
</script>

<style scoped="scoped">
	
	.box{
		height: 50px;
		line-height: 50px;
	}
</style>
