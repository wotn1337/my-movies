import {FullPersonInfo} from "./types";
import {ThunkAction} from "redux-thunk";
import {appStateType} from "../store";

const prefix = 'person'
export const SET_PERSON = prefix + 'SET_PERSON'

type SetPersonActionType = {
    type: typeof SET_PERSON
    data: FullPersonInfo
}
export const setPerson = (data: FullPersonInfo): SetPersonActionType => ({type: SET_PERSON, data})

export type ActionTypes = SetPersonActionType

export type ThunkType = ThunkAction<Promise<void>, appStateType, unknown, ActionTypes>