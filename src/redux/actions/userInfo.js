import * as actionTypes from '../constants/index';
const setUserInfo = (data) => {
    return {
        type: actionTypes.SET_USERINFO,
        data
    }
};
export {setUserInfo};
