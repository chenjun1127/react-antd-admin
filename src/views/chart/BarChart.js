import React from 'react';
import { connect } from 'react-redux';
import Chart from '@/components/chart/Chart';
const chartData = {
	backgroundColor: '#fff',
	title: {
		top: 30,
		text: '柱状图',
		textStyle: {
			fontWeight: 'normal',
			fontSize: 16,
			color: '#57617B'
		},
		left: 'center'
	},
	tooltip: {
		trigger: 'axis'
	},
	// tab
	legend: {
		data: ['蒸发量', '降水量'],
		right: '2%',
		top: 20
	},
	grid: {
		top: 80,
		left: '2%',
		right: '2%',
		bottom: '6%',
		containLabel: true
	},
	// x轴
	xAxis: [
		{
			type: 'category', //分类
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
		}
	],
	yAxis: [
		{
			type: 'value',
			axisLabel: {
				formatter: '{value} mm'
			}
		}
	],
	series: [
		{
			name: '蒸发量',
			type: 'bar',
			data: [8.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
			markPoint: {
				data: [{ type: 'max', name: '最大值' }, { type: 'min', name: '最小值' }]
			},
			markLine: {
				data: [{ type: 'average', name: '平均值' }]
			},
			itemStyle: {
				normal: {
					// 设置柱状图颜色
					color: '#1890FF',
					// 以下为是否显示，显示位置和显示格式的设置了
					label: {
						show: true,
						position: 'top',
						formatter: '{c}'
						// formatter: '{b}\n{c}'
					}
				}
			}
			// 设置柱的宽度，要是数据太少，柱子太宽不美观~
			// barWidth:100
		},
		{
			name: '降水量',
			type: 'bar',
			data: [10.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
			markPoint: {
				data: [{ name: '年最高', value: 182.2, xAxis: 7, yAxis: 183 }, { name: '年最低', value: 2.3, xAxis: 11, yAxis: 3 }]
			},
			markLine: {
				data: [{ type: 'average', name: '平均值' }]
			},
			itemStyle: {
				normal: {
					// 设置柱状图颜色
					color: '#001529'
				}
			}
		}
	]
};

const BarChart = props => <Chart chartData={chartData} height={'500px'} style={{ padding: 0 }} {...props} />;

const mapStateToProps = state => {
	return {
		collapse: state.collapse
	};
};

export default connect(mapStateToProps)(BarChart);
