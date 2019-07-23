import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addTag, removeTag, emptyTag } from '@/redux/actions/tagList';
import { menus } from '../../router/menus';
import { Scrollbars } from 'react-custom-scrollbars';

class Tags extends Component {
	handChangeTag(activeKey) {
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
					} else {
						if (menus[i].children[j].children) {
							for (let k = 0; k < menus[i].children[j].children.length; k++) {
								if (location.pathname === menus[i].children[j].children[k].path) {
									this.props.addTag({
										title: menus[i].children[j].children[k].title,
										path: menus[i].children[j].children[k].path
									});
								}
							}
						}
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

	componentDidUpdate(newProps) {
		let tagList = document.querySelector('.tags-list');
		let arrLi = tagList.querySelectorAll('li');
		let w = 0; // 根据tags计算宽度
		for (var i = 0; i < arrLi.length; i++) {
			w += arrLi[i].offsetWidth + 4;
		}
		tagList.style.width = w + 'px';
	}

	render() {
		const { tagList, location } = this.props;
		if (tagList.length === 0) return null;
		return (
			<div className="tags">
				<div className="tags-scroll">
					<Scrollbars style={{ width: '100%', height: 45 }} autoHide universal={true}>
						<ul className="tags-list">
							{tagList.map((item, index) => (
								<li key={item.path} className={location.pathname === item.path ? 'isActive' : ''} onClick={() => this.handChangeTag(item.path)}>
									<span>{item.title}</span>
									<em onClick={e => this.handRemoveTag(e, item.path)} className={index === 0 ? 'hide' : ''}>
										&times;
									</em>
								</li>
							))}
						</ul>
					</Scrollbars>
				</div>
			</div>
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
