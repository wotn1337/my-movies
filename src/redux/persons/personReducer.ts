import {FullPersonInfo} from "./types";
import {ActionTypes, SET_PERSON, setPerson, ThunkType} from "./actionCreators";
import {personsAPI} from "../../api/api";
import {message} from "antd";
import {getAge} from "./helpers";

const initState: FullPersonInfo = {
    id: '',
    name: '',
    role: '',
    image: '',
    summary: '',
    birthDate: '',
    deathDate: '',
    age: 0,
    awards: '',
    knownFor: [],
    errorMessage: ''
}

export const personReducer = (state = initState, action: ActionTypes) => {
    switch (action.type) {
        case SET_PERSON:
            return {...state, ...action.data, age: getAge(action.data.birthDate, action.data.deathDate)}

        default:
            return state;
    }
}

export const getPerson = (id: string): ThunkType => async (dispatch) => {
    const response = await personsAPI.getPerson(id)
    if (response.data.errorMessage) {
        message.error('Слишком много запросов на сегодня :(')
    }
    dispatch(setPerson(response.data))
}