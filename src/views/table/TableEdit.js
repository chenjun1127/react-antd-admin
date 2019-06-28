import React, { Component } from 'react';
import { Table, Divider, Modal, message } from 'antd';
import EditForm from '../../components/EditForm';
const { confirm } = Modal;
class TableEdit extends Component {
	state = {
		data: [],
		pagination: {
			pageSize: 10,
			current: 1
		},
		loading: false,
		selectedRowKeys: [],
		columns: [
			{
				title: 'Name',
				dataIndex: 'name'
			},
			{
				title: 'Age',
				dataIndex: 'age'
			},
			{
				title: 'Address',
				dataIndex: 'address'
			},
			{
				title: 'Email',
				dataIndex: 'email'
			},
			{
				title: 'Action',
				dataIndex: 'Action',
				width: 200,
				align: 'center',
				render: (text, row, index) => (
					<span>
						<button className="link-button" onClick={() => this.handleEdit(row)}>
							编辑
						</button>
						<Divider type="vertical" />
						<button className="link-button" onClick={() => this.handleDel(row)}>
							删除
						</button>
					</span>
				)
			}
		],
		currentRow: null
	};

	componentWillMount() {
		const { pageSize, current } = this.state.pagination;
		this.fetch(current, pageSize);
	}

	componentWillUnmount() {
		// componentWillMount进行异步操作时且在callback中进行了setState操作时，需要在组件卸载时清除state
		this.setState = () => {
			return;
		};
	}
	// 分页操作
	handleTableChange = pagination => {
		const pager = { ...this.state.pagination };
		pager.current = pagination.current;
		this.setState({ pagination: pager }, () => {
			this.fetch(pager.current, this.state.pagination.pageSize);
		});
	};
	fetch = (pageCurrent, pageSize) => {
		this.setState({ loading: true });
		setTimeout(() => {
			const pager = { ...this.state.pagination };
			pager.total = 100;
			const data = [];
			for (let i = (pageCurrent - 1) * pageSize; i < pageSize * pageCurrent; i++) {
				data.push({
					key: i,
					name: `Edward King ${i}`,
					age: 32,
					email: 'Mr.Jack@gmail.com',
					address: `London, Park Lane no. ${i}`
				});
			}
			this.setState({
				loading: false,
				data,
				pagination: pager
			});
		}, 1000);
	};
	selectRow = record => {
		const selectedRowKeys = [...this.state.selectedRowKeys];
		if (selectedRowKeys.indexOf(record.key) >= 0) {
			selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
		} else {
			selectedRowKeys.push(record.key);
		}
		this.setState({ selectedRowKeys });
	};
	onSelectedRowKeysChange = selectedRowKeys => {
		console.log('selectedRowKeys changed: ', selectedRowKeys);
		this.setState({ selectedRowKeys });
	};
	// 编辑
	handleEdit(row) {
		this.setState({ currentRow: row, visible: true });
	}
	// 删除
	handleDel(row) {
		confirm({
			title: '温馨提示',
			content: '确定要删除当前内容吗？',
			okText: '确定',
			cancelText: '取消',
			onOk() {
				message.info('你点击了确定，当前行key为：' + row.key, 1);
			},
			onCancel() {}
		});
	}
	handleOk = () => {
		this.setState({ visible: false });
	};

	handleCancel = () => {
		this.setState({ visible: false });
	};
	// 提交
	handleSubmit = e => {
		e.preventDefault();
		let _this = this;
		this.formRef.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				this.setState({ visible: false });
				// 此处应该为后台业务逻辑
				setTimeout(() => {
					Modal.info({
						title: '点击了提交',
						content: (
							<div>
								<p>当前表单内容为：</p>
								<p>{JSON.stringify(values)}</p>
							</div>
						),
						onOk() {
							// 操作完跳转到第一页
							const pager = { ..._this.state.pagination };
							pager.current = 1;
							_this.setState({ pagination: pager });
							_this.fetch(1, _this.state.pagination.pageSize);
							// console.log(_this.state.selectedRowKeys)
						}
					});
				}, 500);
			}
		});
	};
	render() {
		const { selectedRowKeys, loading, pagination, columns, data } = this.state;
		const rowSelection = {
			selectedRowKeys,
			onChange: this.onSelectedRowKeysChange
		};
		return (
			<div className="shadow-radius">
				<Table
					bordered
					columns={columns}
					dataSource={data}
					loading={loading}
					onChange={this.handleTableChange}
					pagination={pagination}
					rowSelection={rowSelection}
					onRow={record => ({
						onClick: () => {
							this.selectRow(record);
						}
					})}
				/>
				<Modal title="编辑信息" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel} footer={null}>
					<EditForm data={this.state.currentRow} visible={this.state.visible} wrappedComponentRef={form => (this.formRef = form)} handleSubmit={this.handleSubmit} />
				</Modal>
			</div>
		);
	}
}

export default TableEdit;
