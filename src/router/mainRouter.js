import Dashboard from '../views/dashboard/Index';
import NotFound from '../views/error/NotFound';
import LineChart from '../views/chart/LineChart';
import Keyboard from '../views/chart/KeyBoard';
import BarChart from '../views/chart/BarChart';
import PieChart from '../views/chart/PieChart';
import MixinChart from '../views/chart/MixinChart';
import Intercept from '../views/permission/Intercept';
import Toggle from '../views/permission/Toggle';

export const routes = [
	{ path: '/dashboard', component: Dashboard },
	{ path: '/chart/line', component: LineChart },
	{ path: '/chart/keyboard', component: Keyboard },
	{ path: '/chart/bar', component: BarChart },
	{ path: '/chart/pie', component: PieChart },
	{ path: '/chart/mixin', component: MixinChart },
	{ path: '/permission/toggle', component: Toggle, permission: 1},
	{ path: '/permission/intercept', component: Intercept , },

	// { path: '/table/basic', component: TableBasic },
	// { path: '/table/edit', component: TableEdit },
	// { path: '/table/dynamic', component: TableDynamic },

	// { path: '/form', component: FormCreate, permission:'admin'},

	// { path: '/components/wysiwyg', component: ComponentWysiwyg },
	// { path: '/components/drag', component: ComponentDrag },
	// { path: '/components/backToTop', component: ComponentBackToTop },

	// { path: '/error/401', component: Error401},
	// { path: '/error/404', component: Error404},

	// {
	//   path: '/map', component: Map
	// }
	{ path: '/error/404', component: NotFound }
];
