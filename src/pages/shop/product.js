import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "../../styles/shop.css";

export const Product = (props) => {
    const { id, productName , price , productImage} = props.data;
    const {addToCart ,cartItems} = useContext(ShopContext);
    const cartItemAmount = cartItems[id]; 
    return (
        <div className="productCard">
            <img src={productImage} />
            <div className="description">
                <p>{ productName}</p>
                <p>price: ${ price}</p>                
            </div>
            <button className="addToCart" onClick={() => addToCart(id)}>
                add to cart { cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
        </div>)
}
