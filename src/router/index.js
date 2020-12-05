import {createWebHashHistory,createRouter} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
const history=createWebHashHistory();
const router=createRouter({
  history,
  routes:[
    {
      path:'/',component:Home
    },{
      path:'/about',component:About
    }
  ]
});

export default router;