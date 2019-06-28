/* eslint-disable */
import * as actionTypes from '../constants/index';
const tagList = (state = [], action) => {
	switch (action.type) {
		case actionTypes.ADD_TAG:
			let arr = [...state, action.data];
			let hash = {};
			// 去除数组里的重复对象
			let newArr = arr.reduce((item, next) => {
				hash[next.path] ? '' : (hash[next.path] = true && item.push(next));
				return item;
			}, []);
			return newArr;
			break;
		case actionTypes.REMOVE_TAG:
			return state.filter(item => {
				if (item.path !== action.data) {
					return item;
				}
			});
			break;
		case actionTypes.EMPTY_TAG:
			return (state = []);
			break;
		default:
			return state;
	}
};

export default tagList;
