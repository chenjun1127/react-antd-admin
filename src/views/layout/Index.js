import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideMenu from './SideMenu';
import TopHeader from './TopHeader';
import { setUserInfo } from '@/redux/actions/userInfo';
import { Layout } from 'antd';
import MainContent from './MainContent';
import BreadCrumb from './BreadCrumb';
class Index extends Component {
	render() {
		const { breadCrumb } = this.props;
		return (
			<div className="layout">
				<Layout style={{ minHeight: '100vh' }}>
					<SideMenu />
					<Layout>
						<TopHeader />
						{breadCrumb.show ? <BreadCrumb /> : null}
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
