import React, {ChangeEvent, SyntheticEvent, useState} from "react";


import search from "../../images/search.png";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {searchForAd} from "../../store/searchSlice";



export const SearchBar = () => {
    const text = useSelector((state: RootState) => state.ads.searchValue);
    const [valueFromSearch, setValueFromSearch] = useState(text);
    const dispatch = useDispatch();

    const submitHandler = (e: SyntheticEvent) => {
        e.preventDefault();
        dispatch(searchForAd(valueFromSearch))
    }

    return (
        <form onSubmit={submitHandler}>
            <input value={valueFromSearch} onChange={(e: ChangeEvent<HTMLInputElement>) => setValueFromSearch(e.target.value)} type="text"/>
            <button style={{background: "transparent", border: "none"}}>
                <img src={search} alt="search icon"/>
            </button>
        </form>
    )
};