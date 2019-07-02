import * as actionTypes from '../constants/index';
const setBreadCrumb = data => {
	return {
		type: actionTypes.SET_BREADCRUMB,
		data
	};
};
const setTags = data => {
	return {
		type: actionTypes.SET_TAGS,
		data
	};
};

export { setBreadCrumb, setTags };
