import styled from 'styled-components';


export const BodyHomeBody = styled.div`
    border: 3.8px solid black;
    box-shadow: 4.5px 4.5px 4.5px black ,-4.5px -4.5px 4.5px black ;
    width:1280px;
    height:auto;
    margin: auto;
    background-color: #ffffff;
    z-index : 1;
`;
export const BodyDiv = styled.div`
    padding:1em;
`;
export const BodyP = styled.p`
    padding: 1em;
    width: 100%;
    font-size:2em;
    text-align:center;
    z-index : 1;
`;
export const Objet = styled.div`
    display : flex;
    flex-wrap: wrap;
    margin: auto;
    list-style: none;
    align-items: center;
    justify-content: center;  
`;
export const CoteTexte = styled.div`
    padding: 1em;
    font-size:2em;
    text-align:center;
    z-index : 1;
    :hover {
        background-color: #BEBEBE;
    }
`;
export const CoteImage = styled.div`
    display: block;
    width: auto;
    heigth:auto;
`;