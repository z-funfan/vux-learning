import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/Home'
import MyPoints from '@/page/MyPoints'
import MyAccount from '@/page/MyAccount'
import MyConsume from '@/page/MyConsume'
import AmountDetails from '@/components/amount-details/amount-details'
import AccountDetails from '@/components/amount-details/account-details'
import ConsumeDetails from '@/components/amount-details/consume-details'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home-page',
    component: Home
  },
  {
    path: '/helloworld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/point/:userId',
    name: 'my-point',
    component: MyPoints,
    props: true,
    children: [
      {
        path: '/amount-details/:userId/:conditionType',
        name: 'amount-details',
        component: AmountDetails,
        props: true
      }
    ]
  },
  {
    path: '/consume/:userId',
    name: 'my-consume',
    component: MyConsume,
    props: true,
    children: [
      {
        path: '/consume-details/:userId/:conditionType',
        name: 'consume-details',
        component: ConsumeDetails,
        props: true
      }
    ]
  },
  {
    path: '/account/:userId',
    name: 'my-account',
    component: MyAccount,
    props: true,
    children: [
      {
        path: '/account-details/:userId/:conditionType',
        name: 'account-details',
        component: AccountDetails,
        props: true
      }
    ]
  }
  ]
})
