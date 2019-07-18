import * as actionTypes from '../constants/index';
const breadCrumbState = localStorage.getItem('breadCrumb') ? JSON.parse(localStorage.getItem('breadCrumb')) : { show: true };
const tagsState = localStorage.getItem('tags') ? JSON.parse(localStorage.getItem('tags')) : { show: false };
const themeState = localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')) : { type: 'dark' };
const breadCrumb = (state = breadCrumbState, action) => {
	switch (action.type) {
		case actionTypes.SET_BREADCRUMB:
			return action.data;
		default:
			return state;
	}
};
const tags = (state = tagsState, action) => {
	switch (action.type) {
		case actionTypes.SET_TAGS:
			return action.data;
		default:
			return state;
	}
};
const theme = (state = themeState, action) => {
	switch (action.type) {
		case actionTypes.SET_THEME:
			return action.data;
		default:
			return state;
	}
};
const collapse = (state = { isCollapsed: false }, action) => {
	switch (action.type) {
		case actionTypes.SET_COLLAPSE:
			return action.data;
		default:
			return state;
	}
};

export { breadCrumb, tags, theme, collapse };
