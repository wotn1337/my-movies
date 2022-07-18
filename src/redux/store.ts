import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {moviesReducer} from "./movies/moviesReducer";
import {movieReducer} from "./movies/movieReducer";
import {personReducer} from "./persons/personReducer";


const rootReducer = combineReducers({
    moviesState: moviesReducer,
    movie: movieReducer,
    person: personReducer
})

type RootReducerType = typeof rootReducer
export type appStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store;