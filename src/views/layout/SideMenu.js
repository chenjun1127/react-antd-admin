import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { setUserInfo } from '@/redux/actions/userInfo';
import { addTag } from '@/redux/actions/tagList';
import { menus } from '@/router/menus';
import { routes } from '@/router/mainRouter';
const { Sider } = Layout;
const { SubMenu } = Menu;
class SideNenu extends Component {
	state = { collapsed: false, menuSelected: this.props.history.location.pathname };

	toggle = () => {
		this.setState({ collapsed: !this.state.collapsed });
	};

	handleFilter = permission => {
		const roleType = sessionStorage.getItem('userInfo') && JSON.parse(sessionStorage.getItem('userInfo')).role.type;
		// 过滤没有权限的页面
		if (!permission || permission === roleType) return true;
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
	render() {
		const menuSelected = this.props.history.location.pathname;
		const menuOpened = `/${menuSelected.split('/')[1]}`;
		return (
			<Sider trigger={null} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
				<div className="logo" />
				<Icon className="trigger toggle-btn" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle} />
				<Menu theme="dark" defaultOpenKeys={[menuOpened]} defaultSelectedKeys={[menuSelected]} selectedKeys={[menuSelected]} mode="inline">
					{menus.map(ele => {
						if (ele.children) {
							return (
								this.handleFilter(ele.permission) && (
									<SubMenu
										key={ele.path}
										title={
											<span>
												<Icon type={ele.icon} />
												<span>{ele.title}</span>
											</span>
										}
									>
										{ele.children.map(
											subItem =>
												this.handleFilter(subItem.permission) && (
													<Menu.Item key={subItem.path}>
														<Link onClick={() => this.handClickTag(subItem, ele)} to={subItem.path}>
															{subItem.title}
														</Link>
													</Menu.Item>
												)
										)}
									</SubMenu>
								)
							);
						} else {
							return (
								this.handleFilter(ele.permission) && (
									<Menu.Item key={ele.path}>
										<Link to={ele.path} onClick={() => this.handClickTag(ele)}>
											<Icon type={ele.icon} />
											<span>{ele.title}</span>
										</Link>
									</Menu.Item>
								)
							);
						}
					})}
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
