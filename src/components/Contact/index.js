import React from 'react';
import { BodyHomeBody, BodyP, BodyDiv, ImageLogoInsta, BodyInsta, ImageLogoFacebook, BodyFacebook, DivCentre } from './ContactElements';
import logoInsta from '../../images/Instagram.png';
import logoF from '../../images/Facebook.png';
const Contact = () => {
    return (
        <>
            <BodyHomeBody id="Body">
                <BodyDiv>
                    <DivCentre>
                        <BodyInsta >
                            <ImageLogoInsta>
                                <img src={logoInsta} />
                            </ImageLogoInsta>
                            <a href="https://www.instagram.com/giuseppe.38270/">@giuseppe.38270</a>
                        </BodyInsta>
                        <BodyFacebook>
                            <ImageLogoFacebook>
                                <img src={logoF} />
                            </ImageLogoFacebook>
                            <a href="https://www.facebook.com/giuseppe.pizza38270/">@giuseppe.pizza38270</a>
                        </BodyFacebook>
                    </DivCentre>

                    <BodyP></BodyP>
                    <BodyP id="SousTitre">Numéro pour passer commande : 0749838749</BodyP>
                    <BodyP id="SousTitre">Pour tout contact professionnel : giuseppe38270@gmail.com</BodyP>

                </BodyDiv>
            </BodyHomeBody>
        </>
    );
}

export default Contact;