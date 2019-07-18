import React, { Component } from 'react';
import { Tabs, List, Button } from 'antd';
import '@/assets/css/news';
const { TabPane } = Tabs;
const news = [
	{
		title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护。',
		createTime: '2018-04-19 20:00:00',
		status: 0, //0==>未读，1==>已读
		id: 0
	},
	{
		title: '今晚12点整发大红包，先到先得!',
		createTime: '2018-06-10 00:00:00',
		status: 0,
		id: 1
	},
	{
		title: '明天晚上0:00发布V3.0版本，请期待!',
		createTime: '2018-11-11 00:00:00',
		status: 0,
		id: 2
	},
	{
		title: '本系统于2088年0:00:00下线！',
		createTime: '2018-12-29 00:00:00',
		status: 1,
		id: 3
	}
];
export default class News extends Component {
	state = { loading: false, dataSource: [] };
	componentDidMount() {
		this.setState({ loading: true });
		setTimeout(() => {
			this.setState({ loading: false, dataSource: news.filter(item => item.status === 0) });
		}, 500);
	}
	handleChangeTab = key => {
		if (parseInt(key) === 1) {
			this.setState({ dataSource: news.filter(item => item.status === 0) });
		} else if (parseInt(key) === 2) {
			this.setState({ dataSource: news.filter(item => item.status === 1) });
		}
	};

	render() {
		const { loading, dataSource } = this.state;
		return (
			<div className="shadow-radius">
				<Tabs defaultActiveKey="1" onChange={this.handleChangeTab}>
					<TabPane tab="未读消息" key="1">
						<List
							loading={loading}
							className="list-news"
							footer={
								<div>
									<Button type="primary">全部标为已读</Button>
								</div>
							}
							dataSource={dataSource}
							renderItem={item => (
								<List.Item key={item.id}>
									<div className="list-title">
										<span style={{ color: '#1890ff', cursor: 'pointer' }}>{item.title}</span>
									</div>
									<div className="list-time">{item.createTime}</div>
									<Button>标为已读</Button>
								</List.Item>
							)}
						/>
					</TabPane>
					<TabPane tab="已读消息" key="2">
						<List
							loading={loading}
							className="list-news"
							footer={
								<div>
									<Button type="danger">删除全部</Button>
								</div>
							}
							dataSource={dataSource}
							renderItem={item => (
								<List.Item key={item.id}>
									<div className="list-title">
										<span>{item.title}</span>
									</div>
									<div className="list-time">{item.createTime}</div>
									<Button type="danger">删除</Button>
								</List.Item>
							)}
						/>
					</TabPane>
				</Tabs>
			</div>
		);
	}
}
