import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideMenu from './SideMenu';
import TopHeader from './TopHeader';
import { setUserInfo } from '@/redux/actions/userInfo';
import { Layout } from 'antd';
import MainContent from './MainContent';

class Index extends Component {
	render() {
		return (
			<div>
				<Layout style={{ minHeight: '100vh' }}>
					<SideMenu />
					<Layout>
						<TopHeader />
						<MainContent />
					</Layout>
				</Layout>
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
)(Index);
