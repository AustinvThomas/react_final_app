
import React, { PureComponent } from 'react'
import './ProductMain.css'
import Products from "./Products"
import ProductsAvatar from "./ProductsAvatar"
import blazer from "./blazer.png"
import bra from "./bra.png"
import underwear from "./underwear.png"
import trousers from "./trousers.png"
import bridalwear from "./bridalwear.png"
import man from "./man.png"
import girl from "./girl.png"
import baby from "./baby.png"
import sportswear from "./sportswear.png"

class ProductMain extends PureComponent {
    render() {
        return (
            <div className="product">
            <div className="product_header">
              <h1>Product Interest</h1>
            </div>
            <div className="product_items">
            <div className = "app_icons">
          <Products icon = {bra} title = "inner wear"/>     
          <Products icon = {underwear} title = "intimate wear"/>   
          </div>
          <div className = "app_icons">
          <Products icon = {bridalwear} title = "Bridal wear"/>
          <Products icon = {blazer} title = "Blazer wear"/>
          </div>
          <div className = "app_icons">
          <Products icon = {trousers} title = "active wear"/>
          <Products icon = {sportswear} title = "sport wear"/>
          </div>
            </div>
    
          <div className="product_footer">
            <ProductsAvatar icon = {man} title = "men"/>
            <ProductsAvatar icon = {baby} title = "kids"/>
            <ProductsAvatar icon = {girl} title = "women"/>
          </div>
          </div>

        )
    }
}

export default ProductMain