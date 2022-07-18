import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {getTop250Movies} from "../../../redux/movies/moviesReducer";
import {Movie, MoviesState} from "../../../redux/movies/types";
import MovieList from "./MovieList";
import Loader from "../../common/Loader/Loader";
import EmptyBlock from "../../common/Empty/EmptyBlock";

type PropsType = {
    movies: Movie[]
    errorMessage: string
    getTop250Movies: () => Promise<any>
}

const MoviesListContainer = (props: PropsType) => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        props.getTop250Movies()
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <>
            {
                isLoading
                    ? <Loader/>
                    : <>
                        {
                            !props.errorMessage
                                ? <MovieList movies={props.movies}/>
                                : <EmptyBlock/>
                        }
                    </>
            }
        </>

    )
}

type StateType = { moviesState: MoviesState }
const mapStateToProps = (state: StateType) => ({
    movies: state.moviesState.movies,
    errorMessage: state.moviesState.errorMessage
})

export default connect(mapStateToProps, {
    getTop250Movies
})(MoviesListContainer)