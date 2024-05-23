import { Link } from "react-router-dom";
import {ShoppingCart, House} from 'phosphor-react';
import './navbar.css';

function Navbar(){

    return(
    <div className="navbar">  
        <div className="links">
            <Link className="linkH" to='/'>
                <House size={29}/>
            </Link>
            <Link className="linkC" to='/cart' >
                <ShoppingCart size={29} />
                <span className="iconName"> Cart</span>
            </Link>
            <a className="iconName" id="menu">⋮</a>

        </div>
    </div>  
    )
};

export default Navbar;