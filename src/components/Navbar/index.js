import React from 'react';
import { HeaderHome, NavLogo, TopNav, NavLinks} from './NavbarElements';
import {BrowserRouter as Router,Link} from "react-router-dom";



const Navbar = () => {
    return (
        <>
            <HeaderHome id="navbar">
                <TopNav >
                    <Router forceRefresh={true}>
                        <Link to="/"><NavLogo id = "Nav">Giuseppe</NavLogo></Link>
                        <Link to="/Explore"><NavLinks id = "Nav">La carte</NavLinks></Link>
                        <Link to="/A-propos"><NavLinks id = "Nav">A propos</NavLinks></Link>
                        <Link to="/Contact"><NavLinks id = "Nav">Contact</NavLinks></Link>
                    </Router>
                </TopNav>
            </HeaderHome>
        </>
    );
}

export default Navbar;