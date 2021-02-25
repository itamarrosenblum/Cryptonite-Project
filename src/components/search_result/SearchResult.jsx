import './SearchResult.css';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CardCoins from '../card_coins/CardCoins';

const SearchResult = () => {
    const arr = useSelector(state=>state.arr);
    const favArr = useSelector(state=>state.favArr);
    const searchValue = useSelector(state=>state.searchValue);
    const dispatch = useDispatch();

    useEffect(() => { // Search specific coin
        if (Array.isArray(favArr)
            && favArr.indexOf(searchValue) >= 0) {
            arr.filter(coin => {
                if (coin.symbol === searchValue) {
                    dispatch({type: 'MAIN_DATA', mainData: [coin]});
                }
            });
        }
    }, []);

    return(
        <section className="search-section">
            {arr.map(coin => {
                return (
                    <CardCoins coin={coin} key={coin.id}/>
                )
            })}
        </section>
    );
}
export default SearchResult;