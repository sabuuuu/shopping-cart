import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { ShoppingBag } from "phosphor-react";
import "../styles/navbar.css";

function Navbar () {
    return (<div className="navbar">
        <div className="links">
            <Link to="/" className="lin" title="Shop"><ShoppingBag size={32}/></Link>
            <Link to="/cart" className="lin" title="Cart"> <ShoppingCart size={32}/></Link>
        </div>
    </div>
    );
};

export default Navbar;