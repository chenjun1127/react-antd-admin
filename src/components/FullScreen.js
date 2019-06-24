import React from 'react';
import { Icon } from 'antd';

export default class FullScreen extends React.Component {
	state = { isFullScreen: false };

	componentDidMount() {
		this.watchFullScreen();
	}

	handleFullScrren = () => {
		!this.state.isFullScreen ? this.requestFullScreen() : this.exitFullscreen();
	};

	// 进入全屏
	requestFullScreen = () => {
		let de = document.documentElement;
		if (de.requestFullscreen) {
			de.requestFullscreen();
		} else if (de.mozRequestFullScreen) {
			de.mozRequestFullScreen();
		} else if (de.webkitRequestFullScreen) {
			de.webkitRequestFullScreen();
		}
	};
	// 退出全屏
	exitFullscreen = () => {
		let de = document;
		if (de.exitFullscreen) {
			de.exitFullscreen();
		} else if (de.mozCancelFullScreen) {
			de.mozCancelFullScreen();
		} else if (de.webkitCancelFullScreen) {
			de.webkitCancelFullScreen();
		}
	};

	// 监听fullscreenchange事件
	watchFullScreen = () => {
		document.addEventListener(
			'fullscreenchange',
			() => {
				this.setState({ isFullScreen: document.fullscreen });
			},
			false
		);
		document.addEventListener(
			'mozfullscreenchange',
			() => {
				this.setState({ isFullScreen: document.mozFullScreen });
			},
			false
		);
		document.addEventListener(
			'webkitfullscreenchange',
			() => {
				this.setState({ isFullScreen: document.webkitIsFullScreen });
			},
			false
		);
	};

	render() {
		return <Icon style={{ fontSize: '20px', cursor: 'pointer' }} type="fullscreen" onClick={this.handleFullScrren} />;
	}
}
