import React from 'react';
import {BodyHomeBody,BodyP,BodyDiv,BodyBcreme,BodyBtomate} from './ChoixBasePizza';
import {BrowserRouter as Router,Link} from "react-router-dom";
const ChoixBasePizza = () => {
    return (
        <>
        <BodyHomeBody>
            <BodyDiv>
                <BodyP>Quelle base pour votre Pizza voulez-vous ?</BodyP>
                <Router forceRefresh={true}>
                    <Link to="/Explore/Creme"><BodyBcreme>Base crème</BodyBcreme></Link>
                    <Link to="/Explore/Tomate"><BodyBtomate>Base tomate</BodyBtomate></Link>
                </Router>
            </BodyDiv>
        </BodyHomeBody>
        </>
    );
}

export default ChoixBasePizza;