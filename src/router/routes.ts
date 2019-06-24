import loadable from '@loadable/component'

const Heros = loadable(() => import(/* webpackChunkName: "heros" */ '@views/Heros'))
const Items = loadable(() => import(/* webpackChunkName: "items" */ '@views/Items'))
const News = loadable(() => import(/* webpackChunkName: "news" */ '@views/News'))
const About = loadable(() => import(/* webpackChunkName: "about" */ '@views/About'))
const Error404 = loadable(() => import(/* webpackChunkName: "error-404" */ '@views/ErrorPage/404'))

const routes = [
  {
    path: "/heros",
    component: Heros
  },
  {
    path: "/items",
    component: Items
  },
  {
    path: "/news",
    component: News
  },
  {
    path: "/about",
    component: About
  },
  {
    component: Error404
  }
  // {
  //   path: "/tacos",
  //   component: Tacos,
  //   routes: [
  //     {
  //       path: "/tacos/bus",
  //       component: Bus
  //     },
  //     {
  //       path: "/tacos/cart",
  //       component: Cart
  //     }
  //   ]
  // }
]

export default routes