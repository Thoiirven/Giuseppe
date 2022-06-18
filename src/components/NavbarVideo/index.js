import React from 'react';
import ReactPlayer from 'react-player';

import {BrowserRouter as Router,Link} from "react-router-dom";
import { HeaderHome, NavLogo, INTRO, TITRE, VIDEO, TopNav, NavLinks,Texte} from './NavbarVideoElements';
import video1 from '../../videos/video1.mp4';

const NavbarVideo = () => {
    return (
        <>
                <HeaderHome id="navbarvideo">
                    <VIDEO id="video">
                        <ReactPlayer width='100%' height='100%'
                            playing={true}
                            loop={true}
                            url={[video1]}>
                        </ReactPlayer>
                    </VIDEO>
                    <TopNav>
                    <Router forceRefresh={true}>
                        <Link to="/"><NavLogo id = "Nav">Giuseppe</NavLogo></Link>
                        <Link to="/Explore"><NavLinks id = "Nav">La carte</NavLinks></Link>
                        <Link to="/A-propos"><NavLinks id = "Nav">A propos</NavLinks></Link>
                        <Link to="/Contact"><NavLinks id = "Nav">Contact</NavLinks></Link>
                    </Router>
                    </TopNav>
                    <INTRO>Introduction</INTRO>
                    <TITRE>Pizzeria Giuseppe</TITRE>
                    <Texte>
                    "Camion de pizzas et de spécialités italiennes. Natan et Florence vous 
                    accueillent du mercredi au dimanche dans leur foodtruck. Situé dans l'Isère 
                    nous faisons le tour des villages de Bellegarde poussieu, Assieu, Poncin,
                     Sonnay et de leurs environs"
                    </Texte>
                </HeaderHome>
        </>
    );
}
export default NavbarVideo;
