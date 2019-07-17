import React, { useState } from 'react';
import { Select, Row, Col, TreeSelect } from 'antd';

const { Option } = Select;
const treeData = [
	{
		title: '广东省',
		key: '广东省',
		value: '440000',
		children: [
			{
				title: '深圳市',
				value: '深圳市',
				key: '440300',
				children: [
					{
						title: '福田区',
						value: '福田区',
						key: '440304'
					},
					{
						title: '南区区',
						value: '南区区',
						key: '440305'
					},
					{
						title: '宝安区',
						value: '宝安区',
						key: '440306'
					}
				]
			},
			{
				title: '广州市',
				value: '广州市',
				key: '440100',
				children: [
					{
						title: '荔湾区',
						value: '荔湾区',
						key: '440103'
					},
					{
						title: '越秀区',
						value: '越秀区',
						key: '440104'
					},
					{
						title: '海珠区',
						value: '海珠区',
						key: '440105'
					}
				]
			}
		]
	},
	{
		title: '湖南省',
		value: '湖南省',
		key: '430000',
		children: [
			{
				title: '长沙市',
				value: '长沙市',
				key: '430100'
			},
			{
				title: '株洲市',
				value: '株洲市',
				key: '430200'
			},
			{
				title: '湘潭市',
				value: '湘潭市',
				key: '430300'
			}
		]
	}
];

const SelectDemo = () => {
	const handleChange = () => {};
	const children = (children = []) => {
		for (let i = 10; i < 36; i++) {
			children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
		}
		return children;
	};
	return (
		<Select mode="multiple" style={{ width: '100%' }} placeholder="Please select" onChange={handleChange} allowClear={true}>
			{children()}
		</Select>
	);
};

const SelectTreeDemo = () => {
	const [value, setValue] = useState(null);
	const onChange = (value, label, extra) => {
		console.log(label, extra);
		setValue(value);
	};

	return <TreeSelect showSearch treeCheckable style={{ width: '100%' }} value={value} dropdownStyle={{ maxHeight: 400, overflow: 'auto' }} placeholder="Please select" allowClear multiple treeDefaultExpandAll onChange={onChange} treeData={treeData} />;
};
const BasicSelect = () => {
	return (
		<div className="shadow-radius">
			<Row gutter={16}>
				<Col span={12} offset={6}>
					<h1 style={styles}>多选框</h1>
					<SelectDemo />
				</Col>
				<Col span={12} offset={6}>
					<h1 style={styles}>树选择框</h1>
					<SelectTreeDemo />
				</Col>
			</Row>
		</div>
	);
};

const styles = {
	padding: '15px 0',
	margin: 0
};

export default BasicSelect;
