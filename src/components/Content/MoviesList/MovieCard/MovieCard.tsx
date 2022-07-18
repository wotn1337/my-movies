import React from 'react';
import {Movie} from "../../../../redux/movies/types";
import {Card} from "antd";
import {NavLink} from "react-router-dom";

const {Meta} = Card

const MovieCard = (props: Movie) => {
    return (
        <NavLink to={`/${props.id}`}>
            <Card
                hoverable
                style={{width: 150, margin: '0 auto'}}
                cover={<img alt={props.title} src={props.image}/>}
            >
                <Meta title={props.title} description={props.imDbRating}/>
            </Card>
        </NavLink>
    )
}

export default MovieCard