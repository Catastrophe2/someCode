import { combineReducers } from 'redux'

import jokeReducer from './store/jokeSlice'

const rootReducer = combineReducers({
    joke: jokeReducer,
})

export default rootReducer;