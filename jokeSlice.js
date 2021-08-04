import { createSlice} from '@reduxjs/toolkit'
import { fetcher } from '../features/actions'
import { URL } from './config'

const jokeSlice = createSlice({
    name: "joke",
    initialState: {joke:"click to get joke"},
    reducers:{
        getJoke(state){
            const res = fetcher(URL)
            state.joke = res.joke
        }
    }
})

export const jokeActions = jokeSlice.actions;
export default jokeSlice;