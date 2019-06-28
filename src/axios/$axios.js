import axios from 'axios';
import { message } from 'antd';
const $axios = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	timeout: 6000,
	retry:4,
	retryDelay:1000
});

//请求拦截
$axios.interceptors.request.use(
	function(config) {
		// 在发送请求之前做些什么
		// 通过reudx的store拿到拿到全局状态树的token ，添加到请求报文，后台会根据该报文返回status
		// 此处应根据具体业务写token
		// const token = store.getState().user.token || localStorage.getItem('token');
		const token = 'FA2019';
		config.headers['X-Token'] = token;
		return config;
	},
	function(error) {
		// 对请求错误做些什么
		message.error(error);
		return Promise.reject(error);
	}
);

// 添加响应拦截器
$axios.interceptors.response.use(
	function(response) {
		// 对响应数据做点什么
		if (response.data.success === false) {
			message.error(response.data.message);
		}
		return response;
	},
	function(error) {
		if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
			var config = error.config;
			config.__retryCount = config.__retryCount || 0;

			if (config.__retryCount >= config.retry) {
				// Reject with the error
				//window.location.reload();
				return Promise.reject(error);
			}

			// Increase the retry count
			config.__retryCount += 1;

			// Create new promise to handle exponential backoff
			var backoff = new Promise(function(resolve) {
				setTimeout(function() {
					//console.log('resolve');
					resolve();
				}, config.retryDelay || 1);
			});

			return backoff.then(function() {
				return axios(config);
			});
		} else {
			return Promise.reject(error);
		}
	}
);

export default $axios;
