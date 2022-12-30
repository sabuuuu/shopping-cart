import React from "react";
import { PRODUCTS } from "../shop/products";
import { Product } from "./product";
import "../../styles/shop.css";

function Shop() {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>The Odin Shop</h1>
            </div>
            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product data={product} />
                ) )}
            </div>
        </div>
    );
}

export default Shop;