import React, { Component } from 'react';

class Index extends Component {
	render() {
		return (
			<div className="shadow-radius">
				<div >
					<h1>这是一个通用的后台管理系统，基于 react+react-router+react-redux+antd 开发。</h1>
					<p>基本功能包含：登录、登出、数据存储、路由权限控制、Echarts、数据表格等，UI采用 Ant Design 风格。</p>
				</div>
			</div>
		);
	}
}

export default Index;
