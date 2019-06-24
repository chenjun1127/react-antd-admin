import React, { Component } from 'react';
import { Radio, Row } from 'antd';
import { setUserInfo } from '@/redux/actions/userInfo';
import { connect } from 'react-redux';

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

class Toggle extends Component {
	state = { value: null };

	onChange = e => {
		const value = e.target.value;
		const name = value === 1 ? '超级管理员' : '普通用户';
		if (value === 1) {
			this.props.history.push('/permission/toggle');
		} else {
			this.props.history.push('/permission/intercept');
		}
		// 模拟生成一些数据
		this.props.setUserInfo(Object.assign({}, this.props.userInfo, { role: { type: value, name } }));
		sessionStorage.setItem('userInfo', JSON.stringify(Object.assign({}, this.props.userInfo, { role: { type: value, name } })));
	};
	render() {
		const userInfo = this.props.userInfo;
		if (Object.keys(userInfo).length === 0) return null;
		return (
			<div className="shadow-radius" style={{ padding: 20 }}>
				<Row style={{ margin: '20px 0' }}>
					<RadioGroup defaultValue={parseInt(userInfo.role.type)} onChange={this.onChange}>
						<RadioButton value={0}>普通用户</RadioButton>
						<RadioButton value={1}>超级管理员</RadioButton>
					</RadioGroup>
				</Row>
				<Row style={{ margin: '20px 0' }}>hi, {this.props.userInfo.userName}，你当前为超级管理员，</Row>
				<Row>只有超级管理员可以看到当前页面，切换到普通用户时，无法访问当前页面和表单页面</Row>
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
)(Toggle);
