import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MyLayout/MyLayout.vue'),
    // component: () => import('layouts/MyLayout.vue'),
    children: [
      { name:'home',path: '', component: () => import('pages/home/Index.vue') },
      { name:'work',path: 'work', component: () => import('pages/work/Index.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
