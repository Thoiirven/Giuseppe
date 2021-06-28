import styled from 'styled-components';

export const BodyHomeBody = styled.div`
    width:1280px;
    height:auto;
    margin:auto;
    z-index : 1;
`;

export const PageBody = styled.div`
    background-color: rgb(255,255,255);
`;

export const Titre2 = styled.div`
    color: rgb(0, 0, 0);
    z-index : 1;
    text-align: center;
    font-weight: bold;
    font-size: 1.75cm;
    padding: 1cm;
`;
export const SousTitre = styled.div`
    z-index : 1;
    text-align: center;
    font-weight: bold;
    font-size: 1.5em;
    padding: 1em;
`;
export const Carte = styled.div`
    margin : auto;
    width: 100%; 
    height: 80em;
    margin-top: 1em;
`;
export const ImageLogo = styled.div`
    display: flex;
    margin : auto;
    width: 500px; 
    height: 500px;
    
    justify-content:center;
`;
export const BodyBordure = styled.div`
    display:block;
    border: 3.8px solid black;
    box-shadow: 4.5px 4.5px 4.5px #494949;
    margin: auto;
    height: auto;
    background-color: white;
    z-index : 1;
    transition-duration: 0.4s;
    :hover {
        background-color: black;
        color: white;
    }
`;
export const Titre2Couleur = styled.div`
    margin:auto;
    z-index : 1;
    text-align: center;
    font-weight: bold;
    font-size: 2em;
`;
export const SousTitreCouleur = styled.div`
    color: rgb(215,14,24);
    z-index : 1;
    text-align: center;
    font-weight: bold;
    font-size: 3em;
    padding: 0.5em;
`;
export const SousTitreCouleurVert = styled.div`
    color: rgb(20,135,56);
    z-index : 1;
    text-align: center;
    font-weight: bold;
    font-size: 2em;
    padding: 0.5em;
`;
export const SousTitreCouleurListeL = styled.div`
    color: rgb(193,193,193);
    z-index : 1;
    text-align: center;
    font-weight: bold;
    font-size: 1.5em;
    padding: 0.2em;
`;
export const BodyBouton = styled.button`
    background-color: white;
    color: black;
    border: 0.2em solid #FF7902;
    padding: 0.8em 1.4em;
    text-align: center;
    font-size: 1em;
    margin: 0.5em;
    transition-duration: 0.4s;
    cursor: pointer;
    :hover {
        background-color: rgb(20,135,56);
        color: white;
    }
`;
export const ListeLivraison = styled.div`
    color: rgb(193,193,193);
    z-index : 1;
    text-align: center;
    font-size: 1.5em;
    padding: 0.5em;
`;
export const Secret = styled.div`
    overflow: hidden;
    background-color: #0000;
    text-decoration: none;
    color:rgba(0, 0, 0, 0);
    float: left;
    font-size: 1.5em;
`;
export const Actualite = styled.div`
    background-color: #11111;
    text-decoration: none;
    filter: brightness(.3);
    height: 22em;
    display:block;
    border: 3.8px solid black;
    box-shadow: 4.5px 4.5px 4.5px #494949;
    margin: auto;
    font-size: 1.5em;
`;
export const BoutonActualiteGauche = styled.button`
text-decoration: none;
height: 100%;
width:5%;
    background-color: white;
    color: black;
    padding: 8px 16px;
    text-align: center;
    font-size: 1em;
    transition-duration: 0.4s;
    cursor: pointer;
    float : left;
    :hover {
        background-color: rgb(20,135,56);
        color: white;
    }
`;
export const BoutonActualiteDroite = styled.button`
text-decoration: none;
height: 100%;
width:5%;
    background-color: white;
    color: black;
    padding: 8px 16px;
    text-align: center;
    font-size: 1em;
    transition-duration: 0.4s;
    cursor: pointer;
    float: right;
    :hover {
        background-color: rgb(20,135,56);
        color: white;
    }
`;