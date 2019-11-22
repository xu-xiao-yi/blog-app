import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from '@/views/Nav.vue'
import Index from '@/views/Index.vue'
import Articles from '@/views/Articles.vue'
import Topics from '@/views/Topics.vue'
import Users from '@/views/Users.vue'
import ArticleDetail from '@/views/ArticleDetail.vue'
import TopicDetail from '@/views/TopicDetail.vue'
import UserDetail from '@/views/UserDetail.vue'
import SignIn from '@/views/SignIn.vue'
import SignUp from '@/views/SignUp.vue'
import Basic from '@/views/Basic.vue'
import Setting from '@/views/Setting.vue'
import Empty from '@/views/Empty.vue'
Vue.use(VueRouter)

const routes = [{
		path: '/',
		component: Nav,
		children: [{
				path: '/',
				redirect: 'index'
			},
			{
				path: 'index',
				component: Index
			},
			{
				path: 'articles',
				name: 'my-articles',
				component: Articles
			},
			{
				path: 'article/:id',
				component: ArticleDetail
			},
			{
				path: 'topics',
				component: Topics
			},
			{
				path: 'topic/:id',
				component: TopicDetail
			},

			{
				path: 'users',
				component: Users
			},
			{
				path: 'user/:id',
				component: UserDetail,
				children: [{
						path: '/',
						redirect: 'user/:id'
					},
					{
						path: 'basic',
						component: Basic
					},
					{
						path: 'setting',
						component: Setting
					}
				]
			},
			{
				path: 'empty',
				component: Empty
			}
		]
	},
	{
		path: '/sign-in',
		component: SignIn
	},
	{
		path: '/sign-up',
		component: SignUp
	}
]

const router = new VueRouter({
	routes
})

export default router
