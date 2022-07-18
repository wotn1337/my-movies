import React from 'react';
import {Empty} from "antd";


const EmptyBlock = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '1 1 auto'}}>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
        </div>
    )
}

export default EmptyBlock