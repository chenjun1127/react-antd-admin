import React from 'react';

const About = props => {
	return (
		<div className="shadow-radius">
			<h1 style={styles.title}>简介</h1>
			<p>React-Antd-Admin，一个 JavaScript 应用，项目由业界最优秀的 React 应用开发工具 create-react-app 初始化创建， 搭配 Antd 开箱即用的高质量 React 组件，非常适合后台产品。</p>
			<p>React-Antd-Admin 同时也是个很好的前端脚手架学习示例，如果你在学习 React 或即将学习 React，它应该可以做为教程给你一些帮助。如果你准备使用 React 全家桶开发应用，它能够快速给你提供项目脚手架，为你节省前期部分工作。 让我们一起享受整个 React 生态圈和工具链带来的愉悦开发体验。</p>
			<p>在开始之前，推荐先学习 React、 ES2015、ES6、Node.js、Webpack 等知识，并正确安装和配置了 Node.js 环境。</p>
			<h1 style={styles.title}>技术栈</h1>
			<ul style={styles.list}>
				<li>
					<a href="https://facebook.github.io/create-react-app/docs/getting-started" target="_blank" rel="noopener noreferrer">
						Create React App
					</a>
				</li>
				<li>
					<a href="https://ant.design/index-cn" target="_blank" rel="noopener noreferrer">
						Ant Design
					</a>
				</li>
				<li>
					<a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
						React
					</a>
				</li>
				<li>
					<a href="https://reacttraining.com/react-router/" target="_blank" rel="noopener noreferrer">
						React-Router
					</a>
				</li>
				<li>
					<a href="https://react-redux.js.org" target="_blank" rel="noopener noreferrer">
						React-Redux
					</a>
				</li>
				<li>
					<a href="https://www.webpackjs.com" target="_blank" rel="noopener noreferrer">
						Webpack
					</a>
				</li>
				<li>
					<a href="http://es6.ruanyifeng.com" target="_blank" rel="noopener noreferrer">
						ECMAScript 6
					</a>
				</li>
				<li>
					<a href="https://babeljs.io" target="_blank" rel="noopener noreferrer">
						Babel
					</a>
				</li>
			</ul>
			<h1 style={styles.title}>Github</h1>
			<ul style={styles.list}>
				<li>
					<a href="https://github.com/chenjun1127/react-antd-manager" target="_blank" rel="noopener noreferrer">
						Github源码
					</a>
				</li>
			</ul>
			<h1 style={styles.title}>致谢</h1>
			<ul style={styles.list}>
				<li>
					<a href="https://facebook.github.io/create-react-app/docs/getting-started" target="_blank" rel="noopener noreferrer">
						Create React App
					</a>
				</li>
				<li>
					<a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
						React
					</a>
				</li>
				<li>
					<a href="https://ant.design/index-cn" target="_blank" rel="noopener noreferrer">
						Ant Design
					</a>
				</li>
			</ul>
			<p>
				欢迎{' '}
				<a href="https://github.com/chenjun1127/react-antd-manager" target="_blank" rel="noopener noreferrer">
					star
				</a>{' '}
				和{' '}
				<a href="https://github.com/chenjun1127/react-antd-manager" target="_blank" rel="noopener noreferrer">
					watch
				</a>{' '}
				支持
			</p>
		</div>
	);
};

const styles = {
	title: {
		color: '#333'
	},
	list: {
		padding: 0,
		marginLeft: '40px',
		lineHeight: '2.2em'
	}
};

export default About;
