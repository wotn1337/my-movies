import React from 'react';
import {Layout, Typography} from 'antd'


const Header = () => {
    return (
        <Layout.Header style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Title level={1} style={{color: 'white', margin: 0}}>My movies</Typography.Title>
        </Layout.Header>
    )
}

export default Header