import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue' 
import IntroPage from '../views/IntroPage.vue'
import LoginPage from '../views/LoginPage.vue' 
import BeforeStartPage from '../views/BeforeStartPage.vue'
import TrainPage from '../views/TrainPage.vue'
import MainPage from '@/views/MainPage.vue'
import MenuPage from '@/views/MenuPage.vue'
import ReferenceExample from '@/views/ReferenceExample.vue'
import ReferenceIntro from '@/views/ReferenceIntro.vue'
import ResultPage from '@/views/ResultPage.vue'

Vue.use(VueRouter)

//1. router有问题,分开感觉好一点？
//3. 为什么要一个#？（解决）     我的后端api呢
// 要让每个人打分的图片尽可能广? question: 一张image 15 个人评价？
                                      // or 5个人评价三次 (我perfer)
                        // 1. user login or create ==> 接口 
                        // 2. //backend determines which photos to load
                              //  传回json文件{
                                //一个list，有imageid-rating的dictionrary
                              //}， frontend 
                              // 每次 30mins, 250张
                        // 打乱， 用key-value 存image id 和 rating
                        //3. 结束了存data（结束前一起用json存在前端）
                        //user_data:{
                             // photo id + photo rating
                             //...
                             // ...
                             //进度没必要存
                        //}// 为了避免麻烦，直接就覆盖重写就好
                        //   ---》 

// 把照片都存前端，从1234...编号，

const routes = [
  {
    path: '/',
    redirect: 'login'
  },
  {
    path: '/app', 
    name: 'App',
    component: App 
  },
  {
    path: '/login',
    name: 'LoginPage', 
    component: LoginPage
  },
  {
    path: '/intro/:ID',
    name: 'IntroPage',
    component: IntroPage
  },

  {
    path: '/beforeStart/:ID',
    name: 'BeforeStartPage',
    component: BeforeStartPage
  },
  {
    path:'/train/:ID',
    name:'TrainPage',
    component:TrainPage
  },
  {
    path:'/main/:ID',
    name:'MainPage',
    component:MainPage
  },
  {
    path:'/menu/:ID',
    name:'MenuPage',
    component:MenuPage
  },
  {
    path:'/referenceExample/:ID',
    name:'ReferenceExample',
    component:ReferenceExample
  },
  {
    path:'/referenceIntro/:ID',
    name:'ReferenceIntro',
    component:ReferenceIntro
  },
  {
    path:'/result/:ID',
    name:'ResultPage',
    component:ResultPage
  }
]

const router = new VueRouter({
  mode : 'history',
  routes
})

export default router