/**
 * @ Author: Jone Chen
 * @ Create Time: 2019-06-19 16:58:23
 * @ Modified by: Jone Chen
 * @ Modified time: 2019-06-21 18:26:26
 * @ Description:权限控制，1==超级管理员，其它为普通用户
 */



export const menus = [
  { path: '/dashboard', title: '首页', icon: 'home' },
  {
    path: '/chart', title: '图表', icon: 'area-chart',
    children: [
      { path: '/chart/line', title: '折线图' },
			{ path: '/chart/keyboard', title: '键盘图表' },
			{ path: '/chart/bar', title: '柱状图' },
			{ path: '/chart/pie', title: '饼图' },
      { path: '/chart/mixin', title: '混合图表'},
    ]
  },
  {
    path: '/permission', title: '权限测试', icon: 'rocket',
    children: [
      { path: '/permission/toggle', title: '权限切换' , permission: 1},
      { path: '/permission/intercept', title: '路由拦截', }
    ]
  },
  {
    path: '/error', title: '错误页面', icon: 'switcher',
    children: [
			{ path: '/error/404', title: '404'},
    ]
  },

]
