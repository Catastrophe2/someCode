import { createSlice} from '@reduxjs/toolkit'
import { fetcher } from '../features/actions'
import { URL } from './config'

const initalState = {joke:""}

export const jokeReducer = (state = {}, action)=>{

    switch(action.type){
        case "GETMEAJOKE" : return {...state, joke:action.data} 
        default: return state;
    }}

export default jokeReducer;