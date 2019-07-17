import React from 'react';
import { Icon, message } from 'antd';
import copy from 'copy-to-clipboard';
import '@/assets/css/app';

const Index = () => {
	let id = 0;
	let data = [
		'down',
		'up',
		'left',
		'right',
		'down-circle',
		'up-circle',
		'left-circle',
		'right-circle',
		'login',
		'logout',
		'question',
		'question-circle',
		'plus',
		'plus-circle',
		'pause',
		'pause-circle',
		'minus',
		'minus-circle',
		'info-circle',
		'close',
		'close-circle',
		'check',
		'check-circle',
		'delete',
		'alipay-circle',
		'weibo-circle',
		'wechat',
		'alipay',
		'alert',
		'camera',
		'calendar',
		'cloud',
		'car',
		'code',
		'environment',
		'file-image',
		'file',
		'folder-add',
		'folder',
		'folder-open',
		'lock',
		'mail',
		'pay-circle',
		'star',
		'smile',
		'setting',
		'menu',
		'user'
	];
	const click = e => {
		console.log(e);
		copy(`<Icon type="${e}"/>`);
		message.success(`<Icon type="${e}"/>已复制到剪切板！`, 0.5);
	};
	return (
		<div className="shadow-radius">
			<div className="public-title">
				<h1>常用图标</h1>
			</div>
			<ul className="list">
				{data.map(item => (
					<li key={id++} onClick={click.bind(this, item)}>
						<Icon type={item} />
						<span>{item}</span>
					</li>
				))}
			</ul>
			<div className="public-title" style={{ border: 0,marginBottom:0 }}>
				<h1>
					更多图标请参考：
					<a target="_blank" rel="noopener noreferrer" href="https://ant.design/components/icon-cn/">
						Icon
					</a>
				</h1>
			</div>
		</div>
	);
};

export default Index;
