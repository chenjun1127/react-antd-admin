import * as actionTypes from '../constants/index';
const addTag = data => {
	return {
		type: actionTypes.ADD_TAG,
		data
	};
};
const removeTag = data => {
	return {
		type: actionTypes.REMOVE_TAG,
		data
	};
};
const emptyTag = () => {
	return {
		type: actionTypes.EMPTY_TAG
	};
};
export { addTag, removeTag, emptyTag };
