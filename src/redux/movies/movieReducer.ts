import {ActionTypes, SET_MOVIE, setMovie} from "./actionCreators";
import {FullMovieInfoType, ThunkType} from "./types";
import {moviesAPI} from "../../api/api";
import {message} from "antd";

const initState: FullMovieInfoType = {
    id: '',
    title: '',
    fullTitle: '',
    year: 0,
    image: '',
    imDbRating: 0,
    plot: '',
    posters: [],
    directorList: [],
    starList: [],
    images: {items: []},
    errorMessage: ''
}

export const movieReducer = (state = initState, action: ActionTypes) => {
    switch (action.type) {
        case SET_MOVIE:
            return {...state, ...action.data}

        default:
            return state;
    }
}

export const getMovie = (id: string): ThunkType => async (dispatch) => {
    const response = await moviesAPI.getMovie(id)
    if (response.data.errorMessage) {
        message.error('Слишком много запросов на сегодня :(')
    }
    dispatch(setMovie(response.data))
}