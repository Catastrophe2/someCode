import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { jokeActions } from '../../store/jokeSlice'
import { jokeDispatcher } from '../../store/fetcher';


const FooterVer2 = ()=>{
    const dispatch = useDispatch();
    const getJoke = ()=>{
        //tell the server we are pending (loading comp = true)
        dispatch(jokeDispatcher())
    }
    const jokeFinal = useSelector(state => state.joke)

    return <div>
        <button onClick={getJoke}>get joke</button>
        <p>{jokeFinal.joke}</p> 
        <h4>Footer</h4>
    </div>
}
export default FooterVer2; 

