import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import echarts from 'echarts';
import { debounce } from '@/utils';

class Chart extends Component {
	static propTypes = {
		width: PropTypes.string.isRequired,
		height: PropTypes.string.isRequired,
		className: PropTypes.string.isRequired,
		style: PropTypes.object.isRequired,
		chartData: PropTypes.object.isRequired
	};
	static defaultProps = {
		width: '100%',
		height: '340px',
		className: 'shadow-radius',
		style: {},
		chartData: {}
	};

	state = { chart: null };

	componentDidMount() {
		debounce(this.initChart.bind(this), 500)(); //初始化图表
		window.addEventListener('resize', () => this.resize()); // 监听窗口，变化时重置图表
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.collapse.isCollapsed !== this.props.collapse.isCollapsed) {
			this.resize();
		}
	}

	componentWillUnmount() {
		this.dispose();
	}

	// 重置图表
	resize() {
		const chart = this.state.chart;
		if (chart) {
			debounce(chart.resize.bind(this), 300)();
		}
	}

	initChart() {
		if (!this.el) return;
		this.setState(
			{
				chart: echarts.init(this.el, 'macarons')
			},
			() => {
				this.state.chart.setOption(this.props.chartData, true);
			}
		);
	}

	dispose() {
		if (!this.state.chart) return;
		window.removeEventListener('resize', () => this.resize()); // 移除窗口，变化时重置图表
		this.setState({ chart: null });
	}
	render() {
		const { className, height, width, style } = this.props;
		return <div className={className} ref={el => (this.el = el)} style={{ ...style, height, width }} />;
	}
}

export default Chart;
