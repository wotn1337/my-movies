import React from 'react';
import {Typography} from "antd";
import {StarOutlined} from "@ant-design/icons";

const {Title} = Typography

type PropsType = {
    rating: number | string | null
}

const getBGColor = (rating: number) => {
    if (!rating) return '#001529'

    if (rating >= 7) {
        return '#52c41a'
    }

    if (rating >= 5) {
        return '#8c8c8c'
    }

    return '#f5222d'
}

const Rating = (props: PropsType) => {
    return (
        <Title level={3} style={{
            backgroundColor: getBGColor(Number(props.rating)),
            width: 'fit-content',
            padding: '5px 10px',
            borderRadius: '10px',
            color: 'white',
            margin: 0
        }}>
            {props.rating ?? <StarOutlined />}
        </Title>
    )
}

export default Rating