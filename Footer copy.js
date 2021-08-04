import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { jokeActions } from '../../store/jokeSlice'


const Footer = ()=>{
    const dispatch = useDispatch();
    const getJoke = ()=>{
        dispatch(jokeActions.getJoke())
    }
    const jokeFinal = useSelector(state => state.joke.joke)

    return <div>
        <button onClick={getJoke}>get joke</button>
        <p>{jokeFinal}</p> 
        <h4>Footer</h4>
    </div>
}
export default Footer; 

