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
const setTheme = data => {
	return {
		type: actionTypes.SET_THEME,
		data
	};
};
const setCollapse = data => {
	return {
		type: actionTypes.SET_COLLAPSE,
		data
	};
};

export { setBreadCrumb, setTags, setTheme, setCollapse };
