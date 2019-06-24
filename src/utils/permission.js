/**
 * @ Author: Jone Chen
 * @ Create Time: 2019-06-21 16:03:11
 * @ Modified by: Jone Chen
 * @ Modified time: 2019-06-21 16:06:04
 * @ Description:权限控制
 */

const roleType = sessionStorage.getItem('userInfo') && JSON.parse(sessionStorage.getItem('userInfo')).role.type;
const handleFilter = permission => {
	// 过滤没有权限的页面
	if (!permission || permission !== roleType) return true;
	return false;
};

export { handleFilter };
