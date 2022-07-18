import {ThunkAction} from "redux-thunk";
import {appStateType} from "../store";
import {ActionTypes} from "./actionCreators";

export type Movie = {
    id: string
    rank: number
    title: string
    fullTitle: string
    year: number
    image: string
    crew: string
    imDbRating: number
}

export type MoviesState = {
    movies: Movie[],
    errorMessage: string
}

type Poster = {
    id: string
    link: string
}

type Image = {
    title: string
    image: string
}

export type Person = {
    id: string
    name: string
}

export type FullMovieInfoType = {
    id: string
    title: string
    fullTitle: string
    year: number
    image: string
    imDbRating: number
    plot: string
    directorList: Person[]
    starList: Person[]
    posters: Poster[],
    images: { items: Image[] }
    errorMessage: string
}

export type ThunkType = ThunkAction<Promise<void>, appStateType, unknown, ActionTypes>