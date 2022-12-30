import React, { useContext } from "react";
import { PRODUCTS } from "../shop/products";
import {ShopContext} from "../../context/shop-context"
import { CartItem} from "./cart-item";
import { useNavigate } from "react-router-dom";
import "../../styles/cart.css";
function Cart() {
    const { cartItems, getTotalCartAmount,checkout} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();
    return (
        <div className="cart">
            <div className="cartItemsH">
                <h1>Your cart items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data ={product}/>
                    }
                })}
            </div>

            {totalAmount >0 ?
            <div className="checkout">
                    <p>subtotal: ${totalAmount}</p>
                <div className="btns">  
                        <button onClick={() =>navigate("/")}>continue shopping</button>
                        <button onClick={() => { checkout(); navigate("/") }}>checkout</button>
                </div>
                </div>
                : <h1 className="cartEmpty">Your cart is empty</h1>}
        </div>
    );
}

export default Cart;