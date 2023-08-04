import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (<>
        <header>
            <Link class="logo" to='/'>LOGO</Link>
            <div class="navbar">
                <nav>

                    <Link to='/projects'>Projects</Link>
                    <Link to='/products'>ProDucts</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/pages'>Pages</Link>
                    <Link to='/cart'>Cart</Link>

                </nav>
                <Link class="get-in-touch" to='/getInTouch'>Get In Touch</Link>
            </div>
            
        </header>
    </>)
}

export default Header;