import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
    return(
        <React.Fragment>
            <ul className="containerNav">
                <li>
                <Link to="/home">Home</Link>
                </li>
                <li>
                <Link to="/order">Order</Link>
                </li>
                <li>
                <Link to="/kitchen">Kitchen</Link>
                </li>
            </ul>
        </React.Fragment>
    );
};

export default Nav;