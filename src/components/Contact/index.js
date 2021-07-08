import React from 'react';
import {BodyHomeBody,BodyP,BodyDiv,ImageLogoInsta,BodyInsta,ImageLogoFacebook,BodyFacebook} from './ContactElements';
import logoInsta from '../../images/Instagram.png';
import logoF from '../../images/Facebook.png';
const Contact = () => {
    return (
        <>
            <BodyHomeBody id="Body">
                <BodyDiv>
                    <ImageLogoInsta>
                        <img src={logoInsta} />
                    </ImageLogoInsta>
                    <ImageLogoFacebook>
                        <img src={logoF} />
                    </ImageLogoFacebook>
                    <BodyInsta ><a href="https://www.instagram.com/giuseppe.38270/">@giuseppe.38270</a> </BodyInsta>
                    <BodyFacebook><a href="https://www.facebook.com/giuseppe.pizza38270/">@giuseppe.pizza38270</a></BodyFacebook>
                    <BodyP></BodyP>
                    <BodyP id="SousTitre">Numéro pour passer commande : 0749838749</BodyP>
                    <BodyP id="SousTitre">Pour tout contact professionnel : giuseppe38270@gmail.com</BodyP>
                
            </BodyDiv>
            </BodyHomeBody>
        </>
    );
}

export default Contact;