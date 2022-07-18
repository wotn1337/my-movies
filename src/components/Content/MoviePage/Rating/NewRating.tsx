import {Space, Typography} from "antd";
import React from 'react'
import './style.css'
import {StopOutlined} from "@ant-design/icons";


type Props = {
    movieId: string
    setRating:  React.Dispatch<React.SetStateAction<string | number | null>>
}

const getColor = (n: number) => {
    if (n <= 4) {
        return '#f5222d'
    }
    if (n <= 6) {
        return '#8c8c8c'
    }
    return '#52c41a'
}

const RatingBlock = ({movieId, setRating}: Props) => {
    const numbers: number[] = []

    for (let i = 1; i <= 10; i++) {
        numbers.push(i)
    }

    const addRating = (rating: number) => {
        localStorage.setItem(movieId, rating.toString())
        setRating(rating)
    }

    const removeRating = () => {
        localStorage.setItem(movieId, '')
        setRating(null)
    }

    return (
        <Space size='middle'>
            <StopOutlined onClick={removeRating} className='number'/>
            {numbers.map(n => (
                <div className='number' onClick={() => addRating(n)}>
                    <Typography.Title
                        style={{
                            margin: 0,
                            color: getColor(n)
                        }}
                        level={4}
                        key={n}
                    >
                        {n}
                    </Typography.Title>
                </div>
            ))}
        </Space>
    )
}

export default RatingBlock