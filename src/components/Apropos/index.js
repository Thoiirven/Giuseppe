import React from 'react';
import {BodyHomeBody,BodyP,BodyDiv,Objet,CoteImage,CoteTexte} from './Apropos';
import logo from '../../images/LogoNatan.jpg';
const Apropo = () => {
    return (
        <>
            <BodyHomeBody>
                <BodyDiv>
                    
                <Objet>
                    <CoteImage>
                        <img src={logo}/>
                    </CoteImage>
                    
                    <CoteTexte id="texte">
                    L'entreprise Giuseppe est une entreprise familiale dirigée par Monsieur Natan Cino.
                     Le nom de Giuseppe ne désigne pas simplement le nom de la remorque, il est l'âme 
                     de la société. Giuseppe est le nom du grand-père de Natan, de nationalité française 
                     d'origine sicilienne. C'est également son deuxième prénom.
                     Natan a eu une révélation aux alentours de ses 19 ans, date à laquelle il a perdu son 
                     grand-père, Giuseppe Cino, grand patriarche de sa famille. Son grand-père voulait devenir 
                     pizzaiolo, et Mr Cino espère ainsi faire vivre le rêve de son grand-père à travers
                      cette entreprise. Ce nom représente l'héritage de ses racines siciliennes. 
                    </CoteTexte>
                    <CoteImage>
                        <img src={logo}/>
                    </CoteImage>
                    <CoteTexte id="texte">
                    L'entreprise Giuseppe est une entreprise familiale dirigée par Monsieur Natan Cino.
                    
                    </CoteTexte>
                    
                </Objet>
            </BodyDiv>
            </BodyHomeBody>
        </>
    );
}

export default Apropo;