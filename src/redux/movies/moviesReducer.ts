import {ActionTypes, SET_MOVIES, setMovies} from "./actionCreators";
import {MoviesState, ThunkType} from "./types";
import {moviesAPI} from "../../api/api";
import {message} from "antd";

const initState: MoviesState = {
    movies: [],
    errorMessage: ''
}

export const moviesReducer = (state = initState, action: ActionTypes) => {
    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                // @ts-ignore
                movies: action.data.items,
                errorMessage: action.data.errorMessage
            }

        default:
            return state;
    }
}

export const getTop250Movies = (): ThunkType => async (dispatch) => {
    const response = await moviesAPI.getTop250Movies()
    if (response.data.errorMessage) {
        message.error('Слишком много запросов на сегодня :(')
    }
    dispatch(setMovies(response.data))
}