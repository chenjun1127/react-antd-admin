import * as actionTypes from '../constants/index';
const breadCrumbState = sessionStorage.getItem('breadCrumb') ? JSON.parse(sessionStorage.getItem('breadCrumb')) : { show: false };
const tagsState = sessionStorage.getItem('tags') ? JSON.parse(sessionStorage.getItem('tags')) : { show: false };
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

export { breadCrumb, tags };
