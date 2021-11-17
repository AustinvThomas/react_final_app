import React from 'react'

function SelectOption(props) {
    console.log(props)
    return (
        <select className="SelectOption">
                                <option value="1">{props.title}</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
    )
}

export default SelectOption
