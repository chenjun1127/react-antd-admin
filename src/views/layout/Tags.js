import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addTag, removeTag, emptyTag } from '@/redux/actions/tagList';
// import { Tabs } from 'antd';
import { menus } from '../../router/menus';
// const { TabPane } = Tabs;
class Tags extends Component {
	// onChange = activeKey => {
	// 	if (this.props.location.pathname === activeKey) return;
	// 	this.props.history.push(activeKey);
	// };
	// onEdit = (targetKey, action) => {
	// 	if (action === 'remove') {
	// 		// 删除页签
	// 		const { tagList } = this.props;
	// 		const { location } = this.props;
	// 		if (location.pathname === targetKey) {
	// 			tagList.forEach(() => {
	// 				this.props.removeTag(targetKey);
	// 				if (targetKey === tagList[tagList.length - 1].path) {
	// 					// 当前页签在最后,删除之后则路由跳转到前一个页签
	// 					this.props.history.replace(tagList[tagList.length - 2].path);
	// 				} else {
	// 					// 当页页签不是在最后,删除之后则跳转到最后去
	// 					this.props.history.replace(tagList[tagList.length - 1].path);
	// 				}
	// 			});
	// 		} else {
	// 			this.props.removeTag(targetKey);
	// 		}
	// 	}
	// };
	handChangeTag(activeKey) {
		console.log('change');
		if (this.props.location.pathname === activeKey) return;
		this.props.history.push(activeKey);
	}
	handRemoveTag(e, targetKey) {
		e.stopPropagation();
		// 删除页签
		const { tagList } = this.props;
		const { location } = this.props;
		if (location.pathname === targetKey) {
			tagList.forEach(() => {
				this.props.removeTag(targetKey);
				if (targetKey === tagList[tagList.length - 1].path) {
					// 当前页签在最后,删除之后则路由跳转到前一个页签
					this.props.history.replace(tagList[tagList.length - 2].path);
				} else {
					// 当页页签不是在最后,删除之后则跳转到最后去
					this.props.history.replace(tagList[tagList.length - 1].path);
				}
			});
		} else {
			this.props.removeTag(targetKey);
		}
	}
	componentDidMount() {
		// 默认加入首页
		this.props.addTag({
			title: '首页',
			path: '/dashboard'
		});
		const { location } = this.props;
		for (let i = 0; i < menus.length; i++) {
			if (menus[i].children) {
				for (let j = 0; j < menus[i].children.length; j++) {
					if (location.pathname === menus[i].children[j].path) {
						this.props.addTag({
							title: menus[i].children[j].title,
							path: menus[i].children[j].path
						});
					}
				}
			} else {
				if (location.pathname === menus[i].path) {
					this.props.addTag({
						title: menus[i].title,
						path: menus[i].path
					});
				}
			}
		}
	}
	render() {
		const { tagList, location } = this.props;
		if (tagList.length === 0) return null;
		return (
			<ul className="tags">
				{/* <Tabs hideAdd onChange={this.onChange} activeKey={location.pathname} type="editable-card" onEdit={this.onEdit} tabBarGutter={10} size="small">
					{tagList.map((pane, index) => (
						<TabPane tab={pane.title} key={pane.path} closable={index === 0 ? false : true} />
					))}
				</Tabs> */}
				{tagList.map((item, index) => (
					<li key={item.path} className={location.pathname === item.path ? 'isActive' : ''} onClick={() => this.handChangeTag(item.path)}>
						<span>{item.title}</span>
						<em onClick={e => this.handRemoveTag(e, item.path)} className={index === 0 ? 'hide' : ''}>
							&times;
						</em>
					</li>
				))}
			</ul>
		);
	}
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
	addTag: data => {
		dispatch(addTag(data));
	},
	removeTag: data => {
		dispatch(removeTag(data));
	},
	emptyTag: () => {
		dispatch(emptyTag());
	}
});
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(Tags));
