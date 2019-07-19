import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { setUserInfo } from '@/redux/actions/userInfo';
import { addTag } from '@/redux/actions/tagList';
import { menus } from '@/router/menus';
import { routes } from '@/router/routes';
const { Sider } = Layout;
const { SubMenu } = Menu;

class SideNenu extends Component {
	state = { menuSelected: this.props.history.location.pathname };

	handleFilter = permission => {
		const roleType = localStorage.getItem('userInfo') && JSON.parse(localStorage.getItem('userInfo')).role.type;
		// 过滤没有权限的页面
		if (!permission || permission === roleType) {
			return true;
		}
		return false;
	};

	// 点击之后加入页签
	handClickTag(currentLink, parent) {
		const { path, title } = currentLink;
		for (let i = 0; i < routes.length; i++) {
			if (path === routes[i].path) {
				let obj = { path, title, component: routes[i].component };
				this.props.addTag(parent ? Object.assign({}, obj, { parent: parent.title }) : obj);
			}
		}
	}
	// 递归渲染菜单
	renderMenu = data => {
		return data.map(item => {
			if (item.children) {
				return (
					this.handleFilter(item.permission) && (
						<SubMenu
							key={item.path}
							title={
								<span>
									{item.icon ? <Icon type={item.icon} /> : ''}
									<span>{item.title}</span>
								</span>
							}
						>
							{this.renderMenu(item.children)}
						</SubMenu>
					)
				);
			}
			return (
				this.handleFilter(item.permission) && (
					<Menu.Item key={item.path}>
						<Link to={item.path} onClick={() => this.handClickTag(item)}>
							{item.icon ? <Icon type={item.icon} /> : ''}
							<span>{item.title}</span>
						</Link>
					</Menu.Item>
				)
			);
		});
	};
	render() {
		// console.log(this.props);
		const menuSelected = this.props.history.location.pathname;
		const menuOpened = `/${menuSelected.split('/')[1]}`;
		const type = this.props.theme.type;
		const { collapse } = this.props;
		return (
			<Sider trigger={null} collapsible collapsed={collapse.isCollapsed} theme={type} className="app-sider">
				<div className="logo" style={{ color: type === 'dark' ? '#ffffffa6' : '' }}>
					Logo
				</div>
				<Menu style={{ height: '50px' }} theme={type} defaultOpenKeys={[menuOpened]} defaultSelectedKeys={[menuSelected]} selectedKeys={[menuSelected]} mode="inline">
					{this.renderMenu(menus)}
				</Menu>
			</Sider>
		);
	}
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
	setUserInfo: data => {
		dispatch(setUserInfo(data));
	},
	addTag: data => {
		dispatch(addTag(data));
	}
});
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(SideNenu));
