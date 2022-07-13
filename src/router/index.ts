import Home from '~/pages/Home.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/project/1',
    name: 'Project-1',
    component: () => import('~/pages/project-1/index.vue'),
  },
]
