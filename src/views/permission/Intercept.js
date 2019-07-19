import React, { Component } from 'react';
import { Row } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Intercept extends Component {
	state = { value: null };

	onChange = e => {
		const value = e.target.value;
		this.setState({ value });
	};

	render() {
		const userInfo = this.props.userInfo;
		if (Object.keys(userInfo).length === 0) return null;
		let name = userInfo.role.type === 1 ? '超级管理员' : '普通用户';
		return (
			<div className="shadow-radius">
				<Row>
					<p>hi, {userInfo.userName}，你当前为{name}，</p>
					<p>普通用户看不到权限切换页面（被拦截了，(づ￣3￣)づ╭❤～）</p>
				</Row>
			</div>
		);
	}
}
const mapStateToProps = state => state;
export default withRouter(connect(mapStateToProps)(Intercept));
