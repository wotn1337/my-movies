import React from 'react';
import {Spin} from "antd";

export const Loader = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '50px 0',
            flex: '1 1 auto'
        }}>
            <Spin size='large'/>
        </div>
    )
}

export default Loader