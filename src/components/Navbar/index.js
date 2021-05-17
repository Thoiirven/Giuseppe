import React from 'react';
import { HeaderHome, NavLogo, TopNav, NavLinks} from './NavbarElements';
import {BrowserRouter as Router,Link} from "react-router-dom";



const Navbar = () => {
    return (
        <>
            <HeaderHome>
                <TopNav>
                    <Router forceRefresh={true}>
                        <Link to="/"><NavLogo>Giuseppe</NavLogo></Link>
                        <Link to="/Explore"><NavLinks>Liste Pizzas</NavLinks></Link>
                        <Link to="/A-propos"><NavLinks>A propos</NavLinks></Link>
                        <Link to="/Contact"><NavLinks>Contact</NavLinks></Link>
                    </Router>
                </TopNav>
            </HeaderHome>
        </>
    );
}

export default Navbar;