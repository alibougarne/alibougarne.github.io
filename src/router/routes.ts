import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '',
    component: () => import('layouts/MyLayout/MyLayout.vue'),
    children: [
      { name: 'Home', path: '/', component: () => import('pages/home/Index.vue') },
      { name: 'Projects', path: '/projects', component: () => import('pages/home/Index.vue') },
      {
        name: 'Tags',
        path: '/tags',
        component: () => import('pages/tags/list/Index.vue'),
      },
      {
        name: 'CreateTag',
        path: '/tags/create',
        component: () => import('pages/tags/create/Index.vue'),
      },
      {
        name: 'ProjectsPerTag',
        path: '/tags/:id',
        component: () => import('pages/projects/Index.vue'),
      }
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
