import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from '@/views/Nav.vue'
import Index from '@/views/Index.vue'
import Article from '@/views/Article.vue'
import Topic from '@/views/Topic.vue'
import ArticleDetail from '@/views/ArticleDetail.vue'
import TopicDetail from '@/views/TopicDetail.vue'
import UserDetail from '@/views/UserDetail.vue'
import Users from '@/views/Users.vue'
import SignIn from '@/views/SignIn.vue'
import Basic from '@/views/Basic.vue'
import Setting from '@/views/Setting.vue'

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
				path: 'article',
				component: Article,
			},
			{
				path: 'article/:id',
				component: ArticleDetail
			},
			{
				path: 'topic',
				component: Topic
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
			}
		]
	},
	{
		path: '/sign-in',
		component: SignIn
	}
]

const router = new VueRouter({
	routes
})

export default router
