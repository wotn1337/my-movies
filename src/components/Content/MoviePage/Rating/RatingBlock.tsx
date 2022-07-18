import {Button, Popover, Typography} from "antd";
import React, {useState} from 'react'
import Rating from "./Rating";
import NewRating from "./NewRating";

const {Title} = Typography

type Props = {
    marginBottom?: boolean,
    title?: string
    rating: number | string | null,
    editable?: boolean
    movieId: string
}


const RatingBlock = ({marginBottom = false, title = 'Rating', editable = false, movieId, ...props}: Props) => {
    const [rating, setRating] = useState(props.rating)
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: marginBottom ? '0.5em' : 0
        }}>
            <Title level={3} style={{margin: 0}}>{title}:</Title>
            {editable
                ? (
                    <Popover content={<NewRating movieId={movieId} setRating={setRating}/>} trigger="click" placement='bottomRight'>
                        <Button style={{
                            backgroundColor: 'transparent',
                            width: 'fit-content',
                            height: 'fit-content',
                            display: 'flex',
                            alignItems: 'center'
                        }}><Rating rating={rating}/></Button>
                    </Popover>
                )
                : <Rating rating={rating}/>
            }
        </div>
    )
}

export default RatingBlock