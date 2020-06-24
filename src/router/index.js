import Vue from 'vue'
import Router from 'vue-router'
import Head from '@/components/Head' 
import Video from '@/components/Video'
import Career from '@/components/Career' 
import Test from '@/components/Test'
import History from '@/components/History' 
import Position from '@/components/Position'
import Nation from '@/components/Nation'
import aaa from '@/components/aaa'
import Injury from '@/components/jishu/Injury'
import Calendar from '@/components/jishu/Calendar'
import JsHead from '@/components/jishu/Head'
import Graph from '@/components/jishu/Graph'
import EC from '@/components/jishu/Ec'
import Year from '@/components/jishu/Year'
import Regression from '@/components/jishu/Regression'
import Shapebar from '@/components/jishu/Shapebar'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/n', name: 'Nation', component: Nation },
    { path: '/', name: 'aaa', component: aaa },
    { path: '/v', name: 'Video', component: Video },
    { path: '/c', name: 'Career', component: Career },
    { path: '/head', name: 'Head', component: Head },
    { path: '/h', name: 'History', component: History },
    { path: '/t', name: 'test', component: Test },
    { path: '/p', name: 'position', component: Position },
    { path: '/js/i', name: 'injury', component: Injury },
    { path: '/js/c', name: 'calendar', component: Calendar },
    { path: '/js/h', name: 'JsHead', component: JsHead },
    { path: '/js/g', name: 'Graph', component:Graph },
    { path: '/js/s', name: 'Shapebar', component: Shapebar },
    { path: '/js/e', name: 'EC', component: EC },
    { path: '/js/y', name: 'Year', component: Year },
    { path: '/js/r', name: 'Regression', component: Regression },
  ]
})
