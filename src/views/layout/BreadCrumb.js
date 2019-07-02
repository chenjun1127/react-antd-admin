import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { menus } from '@/router/menus';

class BreadCrumb extends React.Component {
	render() {
		const { location } = this.props;
		const routes_1 = [];
		const routes_2 = [];
		for (let i = 0; i < menus.length; i++) {
			if (menus[i].children) {
				for (let j = 0; j < menus[i].children.length; j++) {
					if (location.pathname === menus[i].children[j].path) {
						routes_1.push({
							path: menus[i].path,
							breadcrumbName: menus[i].title
						});
						routes_2.push({
							path: menus[i].children[j].path,
							breadcrumbName: menus[i].children[j].title
						});
					}
				}
			} else {
				if (location.pathname === menus[i].path) {
					routes_1.push({
						breadcrumbName: menus[i].title,
						path: menus[i].path
					});
				}
			}
		}
		const routes = [...routes_1, ...routes_2];
		if (!routes.length) return null;
		const itemRender = (route, params, routes, paths) => {
			const first = routes.indexOf(route) === 0;
			return first ? <span>{route.breadcrumbName}</span> : <Link to={route.path}>{route.breadcrumbName}</Link>;
		};
		return (
			<div className="breadCrumb">
				<Breadcrumb routes={routes} itemRender={itemRender} />
			</div>
		);
	}
}

export default withRouter(BreadCrumb);
