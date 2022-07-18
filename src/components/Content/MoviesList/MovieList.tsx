import React from 'react';
import {Movie} from "../../../redux/movies/types";
import MovieCard from "./MovieCard/MovieCard";
import {Col, Row} from "antd";


type PropsType = {
    movies: Movie[]
}

const MoviesList = (props: PropsType) => {
    return (
        <Row gutter={[16, 16]} style={{padding: '20px 0', marginRight: 0, marginLeft: 0}}>
            {props.movies.map(movie => (
                <Col className="gutter-row" span={3} key={movie.id}>
                    <MovieCard {...movie}/>
                </Col>
            ))}
        </Row>
    )
}

export default MoviesList