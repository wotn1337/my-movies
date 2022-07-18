import {Movie} from "../redux/movies/types";

export type MoviesResponseType = {
    items: Movie[],
    errorMessage: string
}