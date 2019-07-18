import React from 'react';
import { Drawer, Switch } from 'antd';
const styles = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	paddingBottom: '8px'
};

const BasicDrawer = props => {
	return (
		<>
			<Drawer title={props.title} placement="right" closable={props.closable} onClose={props.onClose} visible={props.visible}>
				<p style={styles}>
					<span>主题切换</span> <Switch checkedChildren="暗" unCheckedChildren="亮" defaultChecked={props.theme.type === 'dark' ? true : false} onChange={props.onChangeTheme} />
				</p>
				<p style={styles}>
					<span>面包屑</span> <Switch defaultChecked={props.breadCrumb.show} onChange={props.onChangeBreadCrumb} />
				</p>
				<p style={styles}>
					<span>多页签</span> <Switch defaultChecked={props.tags.show} onChange={props.onChangeTags} />
				</p>
			</Drawer>
		</>
	);
};
export default BasicDrawer;
