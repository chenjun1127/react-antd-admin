import React, { Component } from 'react';
import { Icon, Avatar, Dropdown, Menu, Badge } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUserInfo } from '@/redux/actions/userInfo';
import FullScreen from '@/components/FullScreen';

class TopHeader extends Component {
	handleLogout = () => {
		this.props.setUserInfo({});
		sessionStorage.removeItem('isLogin');
		this.props.history.push('/');
	};
	componentDidMount() {
		let userInfo = sessionStorage.getItem('userInfo') && JSON.parse(sessionStorage.getItem('userInfo'));
		if (userInfo) {
			this.props.setUserInfo(userInfo);
		} else {
			this.props.setUserInfo({});
			this.props.history.push('/login');
		}
	}
	render() {
		const DropdownList = (
			<Menu>
				<Menu.Item key="user">
					<Icon type="user" />
					{this.props.userInfo.userName}
				</Menu.Item>
				<Menu.Item disabled key="edit">
					<Icon type="edit" />
					个人设置
				</Menu.Item>
				<Menu.Item disabled key="setting">
					<Icon type="setting" />
					系统设置
				</Menu.Item>
				<Menu.Item key="logout" onClick={this.handleLogout}>
					<Icon type="logout" />
					退出登录
				</Menu.Item>
			</Menu>
		);
		return (
			<div className="top-header" style={{ height: '70px' }}>
				<div className="header-title">XX后台管理系统</div>
				<div className="header-right">
					<div className="full-screen">
						<FullScreen />
					</div>
					<div className="news-wrap">
						<Badge count={2}>
							<Icon style={{ fontSize: '21px', cursor: 'pointer' }} type="bell" />
						</Badge>
					</div>
					<div className="dropdown-wrap" id="dropdown-wrap">
						<Dropdown getPopupContainer={() => document.getElementById('dropdown-wrap')} overlay={DropdownList}>
							<div>
								<Avatar size="large" />
								<Icon style={{ color: 'rgba(0,0,0,.3)', cursor: 'pointer' }} type="caret-down" />
							</div>
						</Dropdown>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
	setUserInfo: data => {
		dispatch(setUserInfo(data));
	}
});
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(TopHeader));
