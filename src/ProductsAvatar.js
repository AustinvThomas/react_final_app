import React from 'react'
import "./ProductsAvatar.css"
function ProductsAvatar(props) {
    return (
        <div className = "productsAvatar">
            <img src = {props.icon} />
            <h4>{props.title}</h4>
        </div>
    )
}

export default ProductsAvatar