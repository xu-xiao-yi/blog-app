<template>
	<div class="container">
		<div class="card-wraaper">
			<div class="card" v-for="(user, index) in users" :key="index">
				<div class="card-head"><img :src="user.avatar" /></div>
				<div class="card-body">
					<h3 class="title">{{ user.nickname }}</h3>
					<p class="sub-title">{{ user.introduction }}</p>
					<p class="sub-title">{{ user.address }}</p>
					<p class="bottom sub-title">
						<span>关注{{ user.follows }}</span>
						<span>粉丝{{ user.fans }}</span>
						<span>文章{{ user.articles }}</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			users: [],
			dialog: false,
			        items: [
			          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' },
			          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' },
			          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014' },
			        ],
			        items2: [
			          { icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
			          { icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' },
			        ]
		};
	},
	mounted() {},
	created() {
		this.axios.get('http://localhost:8080/api/users').then(res => {
			this.users = res.data.data;
		});
	},
	computed: {},
	methods: {}
};
</script>

<style scoped="scoped"></style>
