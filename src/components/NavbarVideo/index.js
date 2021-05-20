import React from 'react';
import ReactPlayer from 'react-player';
import {BrowserRouter as Router,Link} from "react-router-dom";
import { HeaderHome, NavLogo, INTRO, TITRE, VIDEO, TopNav, NavLinks} from './NavbarVideoElements';
import video1 from '../../videos/video1.mp4';

const NavbarVideo = () => {
    return (
        <>
                <HeaderHome>
                    <VIDEO>
                        <ReactPlayer width='100%' height='100%'
                            playing={true}
                            loop={true}
                            url={[video1]}>
                        </ReactPlayer>
                    </VIDEO>
                    <TopNav>
                    <Router forceRefresh={true}>
                        <Link to="/"><NavLogo>Giuseppe</NavLogo></Link>
                        <Link to="/Explore"><NavLinks>Liste Pizzas</NavLinks></Link>
                        <Link to="/A-propos"><NavLinks>A propos</NavLinks></Link>
                        <Link to="/Contact"><NavLinks>Contact</NavLinks></Link>
                    </Router>
                    </TopNav>
                    <INTRO>Introduction</INTRO>
                    <TITRE>Pizzeria Giuseppe</TITRE>
                    
                </HeaderHome>
        </>
    );
}
export default NavbarVideo;