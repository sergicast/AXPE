import React from "react";
import './Reset.scss'


export const Reset = ({ onClick, text }) => {

    return (
        <button
            className="reset"
            onClick={(e) => {
                e.preventDefault()
                onClick()
            }}
        >
            {text}
        </button>
    )
}
