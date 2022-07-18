import axios from "axios";
import {MoviesResponseType} from "./responseTypes";
import {FullMovieInfoType} from "../redux/movies/types";
import {FullPersonInfo} from "../redux/persons/types";

const LANG = 'en'
const API_key = 'k_r1uaqz5o'

const instance = axios.create({
    baseURL: `https://imdb-api.com/${LANG}/API/`,
    headers: {
        'Content-Type': 'application/json'
    }
})

const urlWithAPIKey = (urlStart: string, urlEnd?: string) =>`${urlStart}/${API_key}/${urlEnd || ''}`


export const moviesAPI = {
    getTop250Movies() {
        return instance.get<MoviesResponseType>(urlWithAPIKey('Top250Movies'))
    },

    getMovie(id: string) {
        return instance.get<FullMovieInfoType>(urlWithAPIKey('Title', `${id}/Posters,Images`))
    }
}

export const personsAPI = {
    getPerson(id: string) {
        return instance.get<FullPersonInfo>(urlWithAPIKey('Name', id))
    }
}