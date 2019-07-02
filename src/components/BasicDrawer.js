import React from 'react';
import { Drawer, Switch } from 'antd';
const styles = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	paddingBottom: '5px'
};

const BasicDrawer = ({ title, closable, onClose, visible, onChangeTags, onChangeBreadCrumb, tagsChecked, breadCrumbChecked }) => {
	return (
		<>
			<Drawer title={title} placement="right" closable={closable} onClose={onClose} visible={visible}>
				<p style={styles}>
					<span>多页签</span> <Switch size="small" defaultChecked={tagsChecked} onChange={onChangeTags} />
				</p>
				<p style={styles}>
					<span>面包屑</span> <Switch size="small" defaultChecked={breadCrumbChecked} onChange={onChangeBreadCrumb} />
				</p>
			</Drawer>
		</>
	);
};
export default BasicDrawer;
