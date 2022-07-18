import {FullMovieInfoType} from "./types";
import {MoviesResponseType} from "../../api/responseTypes";

const prefix = 'movies'
export const SET_MOVIES = prefix + 'SET_MOVIES'
export const SET_MOVIE = prefix + 'SET_MOVIE'

type SetMoviesActionType = {
    type: typeof SET_MOVIES
    data: MoviesResponseType
}
export const setMovies = (data: MoviesResponseType): SetMoviesActionType => ({type: SET_MOVIES, data})


type SetMovieActionType = {
    type: typeof SET_MOVIE
    data: FullMovieInfoType
}
export const setMovie = (data: FullMovieInfoType): SetMovieActionType => ({type: SET_MOVIE, data})

export type ActionTypes = SetMoviesActionType | SetMovieActionType