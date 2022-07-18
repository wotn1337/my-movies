import React, {useLayoutEffect, useState} from 'react';
import {connect} from "react-redux";
import {FullMovieInfoType} from "../../../redux/movies/types";
import Loader from "../../common/Loader/Loader";
import {useNavigate, useParams} from "react-router";
import {getMovie} from "../../../redux/movies/movieReducer";
import MoviePage from "./MoviePage";
import EmptyBlock from "../../common/Empty/EmptyBlock";

type PropsType = {
    movie: FullMovieInfoType
    getMovie: (id: string) => Promise<any>
}

const MoviePageContainer = (props: PropsType) => {
    const [isLoading, setIsLoading] = useState(true)
    const [personId, setPersonId] = useState('')
    const [myRating, setMyRating] = useState<string | null>(null)
    const navigate = useNavigate()
    const {id} = useParams()
    useLayoutEffect(() => {
        if (id) {
            props.getMovie(id)
                .finally(() => setIsLoading(false))
            setMyRating(localStorage.getItem(id))
        }
    }, [id])

    return (
        <>
            {
                isLoading
                    ? <Loader/>
                    : <>
                        {
                            !props.movie.errorMessage
                                ? <MoviePage
                                    {...props.movie}
                                    goBack={() => navigate(-1)}
                                    personId={personId}
                                    setPersonId={setPersonId}
                                    myRating={myRating}
                                />
                                : <EmptyBlock />
                        }
                    </>
            }
        </>

    )
}

type StateType = { movie: FullMovieInfoType }
const mapStateToProps = (state: StateType) => ({
    movie: state.movie
})

export default connect(mapStateToProps, {
    getMovie
})(MoviePageContainer)