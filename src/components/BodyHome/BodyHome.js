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
    font-size: 0.75cm;
    padding: 1cm;
`;
export const SousTitre = styled.div`
    z-index : 1;
    text-align: center;
    font-weight: bold;
    font-size: 0.5cm;
    padding: 0.5cm;
`;
export const Carte = styled.div`
    margin : auto;
    width: 50%; 
    height: 530px;
`;
export const ImageLogo = styled.div`
    display: flex;
    margin : auto;
    width: auto; 
    height: auto;
    align-items:center;
    justify-content:center;
`;
export const BodyBordure = styled.div`
    display:block;
    border: 3.8px solid #FF7902;
    margin-left :10%;
    margin-right :10%;
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
    font-size: 1cm;
`;
export const SousTitreCouleur = styled.div`
    color: rgb(215,14,24);
    z-index : 1;
    text-align: center;
    font-weight: bold;
    font-size: 0.75cm;
    padding: 0.5cm;
`;
export const SousTitreCouleurListeL = styled.div`
    color: rgb(193,193,193);
    z-index : 1;
    text-align: center;
    font-weight: bold;
    font-size: 0.5cm;
    padding: 0cm;
`;
export const BodyBouton = styled.button`
    background-color: white;
    color: black;
    border: 2px solid #FF7902;
    padding: 8px 16px;
    text-align: center;
    font-size: 16px;
    margin: 0.5cm;
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
    font-size: 0.5cm;
    padding: 0.5cm;
`;