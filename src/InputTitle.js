
import React from 'react'
import './InputTitle.css'

function InputTitle(props) {
    console.log(props)
    return (
        <h1 className="input_tittle">{props.title}</h1>
    )
}

export default InputTitle
