import React, { useState } from "react";
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete'
import { highlightText, removeHtml } from '../../utils'
import { useDispatch } from 'react-redux'
import { ADD_MARKERS } from '../../redux/states'
import parse from 'html-react-parser';
import './InputSearch.scss'


export const InputSearch = ({ placeholder }) => {

    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions } = usePlacesAutocomplete()
    const dispatch = useDispatch()
    const [isFocus, setIsFocus] = useState(false)
    const [query, setQuery] = useState('')


    const handleOnGetAdreess = async (address) => {
        setValue(removeHtml(address), false)
        clearSuggestions()
        const res = await getGeocode({ address })
        const latLng = await getLatLng(res[0])
        dispatch({ type: ADD_MARKERS, payload: latLng })
    }

    return (
        <div className="input__search">
            {
                <input
                    id='search-input'
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    value={value}
                    onChange={(evt) => {
                        setQuery(evt.target.value)
                        setValue(evt.target.value)
                    }}
                    placeholder={placeholder}
                />
            }
            <div className="input__search__list">
                {
                    isFocus && status === 'OK' && highlightText(data, query).map( (description, i) => <p
                        onMouseDown={() => handleOnGetAdreess(description)}
                        key={i}>{parse(description)}</p>)
                }
            </div>
        </div>
    )
}
