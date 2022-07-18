import React from 'react';
import {CastMovie} from "../../../../../redux/persons/types";
import {Card, Space} from "antd";

type PropsType = {
    movies: CastMovie[]
}

const { Meta } = Card

const CastMoviesList = ({movies}: PropsType) => {
    return (
        <Space>
            {movies.map(movie => (
                <Card
                    style={{ width: 100 }}
                    cover={<img alt={movie.title} src={movie.image} />}
                    key={movie.id}
                >
                    <Meta title={movie.title} description={movie.year} />
                </Card>
            ))}
        </Space>
    )
}

export default CastMoviesList