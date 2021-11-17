import React from 'react'
import "./Product.css"
function Products(props) {
    return (
        <div className = "products">
            <div className="product_buttons_left">
                <div class="neuEffect">
                    <img src = {props.icon}/>
                    <h4>{props.title}</h4>
                </div> 
            </div>
        </div>  
    )
}

export default Products