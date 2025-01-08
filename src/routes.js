export default [
  {
    path: '/:pathMatch(.*)*',
    name: 'Home',
    component: () => import('./components/HelloWorld.vue'),
    meta: { keepAlive: true },
  },
]
