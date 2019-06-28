import Dashboard from '../views/dashboard/Index';
import NotFound from '../views/error/NotFound';
import LineChart from '../views/chart/LineChart';
import Keyboard from '../views/chart/KeyBoard';
import BarChart from '../views/chart/BarChart';
import PieChart from '../views/chart/PieChart';
import MixinChart from '../views/chart/MixinChart';
import Intercept from '../views/permission/Intercept';
import Toggle from '../views/permission/Toggle';
import TableBasic from '../views/table/TableBasic';
import TableEdit from '../views/table/TableEdit';
import TableSearch from '../views/table/TableSearch';
import BasicForm from '../views/form/BasicForm';
import Editor from '../views/form/TextEditor';
import News from '../views/News';

export const routes = [
	{ path: '/dashboard', component: Dashboard },
	{ path: '/form/basic', component: BasicForm },
	{ path: '/form/editor', component: Editor },
	{ path: '/table/basic', component: TableBasic },
	{ path: '/table/edit', component: TableEdit },
	{ path: '/table/search', component: TableSearch },
	{ path: '/chart/line', component: LineChart },
	{ path: '/chart/keyboard', component: Keyboard },
	{ path: '/chart/bar', component: BarChart },
	{ path: '/chart/pie', component: PieChart },
	{ path: '/chart/mixin', component: MixinChart },
	{ path: '/permission/toggle', component: Toggle, permission: 1 },
	{ path: '/permission/intercept', component: Intercept },
	{ path: '/news', component: News },
	{ path: '/error/404', component: NotFound }
];
