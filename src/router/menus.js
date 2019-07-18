/**
 * @ Author: Jone Chen
 * @ Create Time: 2019-06-19 16:58:23
 * @ Modified by: Jone Chen
 * @ Modified time: 2019-07-18 16:09:41
 * @ Description:权限控制，permission 1==超级管理员，其它为普通用户
 */

export const menus = [
	{
		path: '/dashboard',
		title: '首页',
		icon: 'home'
	},
	{
		path: '/icon',
		title: '图标',
		icon: 'file'
	},
	{
		path: '/form',
		title: '表单',
		icon: 'form',
		children: [
			{
				path: '/form/basic',
				title: '基本表单'
			},
			{
				path: '/form/editor',
				title: '富文本'
			},
			{
				path: '/form/markdown',
				title: 'MarkDown'
			}
		]
	},
	{
		path: '/menu',
		title: '多级菜单',
		icon: 'menu',
		children: [
			{
				path: '/menu/level',
				title: '二级菜单',
				children: [
					{
						path: '/menu/level/submenu-1',
						title: '三级菜单1',
					},
					{
						path: '/menu/level/submenu-2',
						title: '三级菜单2'
					}
				]
			}
		]
	},
	{
		path: '/table',
		title: '表格',
		icon: 'table',
		children: [
			{
				path: '/table/basic',
				title: '基础表格'
			},
			{
				path: '/table/edit',
				title: '表格编辑'
			},
			{
				path: '/table/search',
				title: '表格搜索'
			}
		]
	},
	{
		path: '/chart',
		title: '图表',
		icon: 'area-chart',
		children: [
			{
				path: '/chart/line',
				title: '折线图'
			},
			{
				path: '/chart/keyboard',
				title: '键盘图表'
			},
			{
				path: '/chart/bar',
				title: '柱状图'
			},
			{
				path: '/chart/pie',
				title: '饼图'
			},
			{
				path: '/chart/mixin',
				title: '混合图表'
			}
		]
	},
	{
		path: '/control',
		title: '控件',
		icon: 'control',
		children: [
			{
				path: '/control/tree',
				title: '树形控件'
			},
			{
				path: '/control/select',
				title: '选择器'
			},
			{
				path: '/control/other',
				title: '其它'
			}
		]
	},
	{
		path: '/permission',
		title: '权限测试',
		icon: 'safety-certificate',
		children: [
			{
				path: '/permission/toggle',
				title: '权限切换',
				permission: 1
			},
			{
				path: '/permission/intercept',
				title: '路由拦截'
			}
		]
	},
	{
		path: '/news',
		title: '消息',
		icon: 'bell'
	},
	{
		path: '/error',
		title: '错误页面',
		icon: 'switcher',
		children: [
			{
				path: '/error/404',
				title: '404'
			},
			{
				path: '/error/500',
				title: '500'
			}
		]
	},
	{
		path: '/about',
		title: '关于',
		icon: 'copyright'
	}
];
