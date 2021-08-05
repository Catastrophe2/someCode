import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import rootReducer from "../reducer"; 
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;


// const store = configureStore({
//   reducer: {
//     joke: jokeSlice.reducer
//   }
// })