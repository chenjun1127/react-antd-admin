import React from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
const { Option } = Select;

const residences = [
	{
		value: 'zhejiang',
		label: 'Zhejiang',
		children: [
			{
				value: 'hangzhou',
				label: 'Hangzhou',
				children: [
					{
						value: 'xihu',
						label: 'West Lake'
					}
				]
			}
		]
	},
	{
		value: 'jiangsu',
		label: 'Jiangsu',
		children: [
			{
				value: 'nanjing',
				label: 'Nanjing',
				children: [
					{
						value: 'zhonghuamen',
						label: 'Zhong Hua Men'
					}
				]
			}
		]
	}
];

class BasicForm extends React.Component {
	state = {
		confirmDirty: false
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};

	handleConfirmBlur = e => {
		const { value } = e.target;
		this.setState({ confirmDirty: this.state.confirmDirty || !!value });
	};

	compareToFirstPassword = (rule, value, callback) => {
		const { form } = this.props;
		if (value && value !== form.getFieldValue('password')) {
			callback('Two passwords that you enter is inconsistent!');
		} else {
			callback();
		}
	};

	validateToNextPassword = (rule, value, callback) => {
		const { form } = this.props;
		if (value && this.state.confirmDirty) {
			form.validateFields(['confirm'], { force: true });
		}
		callback();
	};

	render() {
		const { getFieldDecorator } = this.props.form;

		const formItemLayout = {
			labelCol: {
				sm: { span: 9 }
			},
			wrapperCol: {
				sm: { span: 6 }
			}
		};
		const tailFormItemLayout = {
			wrapperCol: {
				sm: {
					span: 9,
					offset: 9
				}
			}
		};
		const prefixSelector = getFieldDecorator('prefix', {
			initialValue: '86'
		})(
			<Select style={{ width: 70 }}>
				<Option value="86">+86</Option>
				<Option value="87">+87</Option>
			</Select>
		);

		return (
			<div className="shadow-radius">
				<div className="public-title">
					<h1>注册表单</h1>
					<h1>
						更多表单参考：<a target="_blank" href="https://ant.design/components/form-cn/" rel="noopener noreferrer">Form </a>
					</h1>
				</div>
				<Form {...formItemLayout} onSubmit={this.handleSubmit}>
					<Form.Item label="邮箱">
						{getFieldDecorator('emial', {
							rules: [
								{
									type: 'email',
									message: '请输入正确邮箱！'
								},
								{
									required: true,
									message: '请输入邮箱！'
								}
							]
						})(<Input />)}
					</Form.Item>
					<Form.Item label="密码" hasFeedback>
						{getFieldDecorator('password', {
							rules: [
								{
									required: true,
									message: '请输入密码！'
								},
								{
									validator: this.validateToNextPassword
								}
							]
						})(<Input.Password />)}
					</Form.Item>
					<Form.Item label="确认密码" hasFeedback>
						{getFieldDecorator('confirm', {
							rules: [
								{
									required: true,
									message: '请确认密码！'
								},
								{
									validator: this.compareToFirstPassword
								}
							]
						})(<Input.Password onBlur={this.handleConfirmBlur} />)}
					</Form.Item>
					<Form.Item
						label={
							<span>
								昵称&nbsp;
								<Tooltip title="您希望别人叫你什么？">
									<Icon type="question-circle-o" />
								</Tooltip>
							</span>
						}
					>
						{getFieldDecorator('nickname', {
							rules: [{ required: true, message: '请输入昵称！', whitespace: true }]
						})(<Input />)}
					</Form.Item>
					<Form.Item label="常居地">
						{getFieldDecorator('residence', {
							initialValue: ['zhejiang', 'hangzhou', 'xihu'],
							rules: [{ type: 'array', required: true, message: '请选择常居地！' }]
						})(<Cascader options={residences} />)}
					</Form.Item>
					<Form.Item label="手机号码">
						{getFieldDecorator('phone', {
							rules: [{ required: true, message: '请输入手机号码！' }]
						})(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
					</Form.Item>
					<Form.Item label="验证码" extra="我们必须确认你不是机器人.">
						<Row gutter={8}>
							<Col span={12}>
								{getFieldDecorator('captcha', {
									rules: [{ required: true, message: '请输入验证码！' }]
								})(<Input />)}
							</Col>
							<Col span={12}>
								<Button>获取验证码</Button>
							</Col>
						</Row>
					</Form.Item>
					<Form.Item {...tailFormItemLayout}>
						{getFieldDecorator('agreement', {
							valuePropName: 'checked'
						})(
							<Checkbox>
								我已经阅读过 <a href="#/agreement">协议</a>
							</Checkbox>
						)}
					</Form.Item>
					<Form.Item {...tailFormItemLayout}>
						<Button type="primary" htmlType="submit">
							注册
						</Button>
					</Form.Item>
				</Form>
			</div>
		);
	}
}
export default Form.create()(BasicForm);
