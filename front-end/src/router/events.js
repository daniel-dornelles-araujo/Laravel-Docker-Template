export default {
  path: '/Events',
  component: () => import('src/App.vue'),
  children: [
    {
      path: 'New',
      component: () => import('pages/Events/New.vue')
    },
    {
      path: '',
      component: () => import('pages/Events/List.vue')
    },
    {
      path: ':eventId',
      component: () => import('pages/Events/View.vue'),
      name: 'EventView'
    }
  ]
}
