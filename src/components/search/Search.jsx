import './Search.css';
import React, {useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Search = () => {
    const userInput = useRef();
    const favArr = useSelector(state=>state.favArr);
    const dispatch = useDispatch();
    
    const searchBtn = (e) => { // Search button
        const userValue = userInput.current.value.toLowerCase();

        if (favArr.indexOf(userValue) >= 0) {
            dispatch({type: 'SEARCH_VALUE', searchValue: userValue});
            userInput.current.value = '';
        } else {
            e.preventDefault(); // Prevent click if userValue is undefined
        }
    }
    
    return(
        <div className="search-container">
            <input ref={userInput} type="text" placeholder="🔍  Enter a coin name..." />
            <Link to="/search-result" onClick={searchBtn} className="btn-search">Serach</Link>
        </div>
    );
}
export default Search;