import React from 'react';

const NoData = props => <div className="no-data" style={{textAlign:'center',padding:'10px'}}>{props.text || '暂无数据'}</div>;

export default NoData;
