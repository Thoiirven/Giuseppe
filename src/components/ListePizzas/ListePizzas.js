import styled from 'styled-components';

export const BodyHomeBody = styled.div`
    border: 3.8px solid black;
    box-shadow: 4.5px 4.5px 4.5px black ,-4.5px -4.5px 4.5px black ;
    width:1280px;
    height:auto;
    margin:auto;
    z-index : 1;
`;

export const PageBody = styled.div`
    background-color: rgb(255,255,255);
`;

export const Titre2 = styled.h1`
    color: rgb(0, 0, 0);
    z-index : 1;
    text-align: center;
    font-weight: bold;
    font-size: 4em;
    padding: 1em;
`;

export const FlexContainer = styled.div`
    display : flex;
    flex-wrap: wrap;
    padding: auto;
    margin-top: 1em;
    list-style: none;
`;

export const FlexItem = styled.div`
    background:#ffffff;
    border: 3.8px solid white;
    border-radius: 20px;
    margin:auto;
    margin-bottom:2em;
    box-shadow: 4.5px 4.5px 4.5px #494949,-4.5px -4.5px 4.5px #494949 ;
    color: rgb(20,135,56);
    Background-color: black;
    font-weight: bold;
    :hover {
        background-color: #BEBEBE;
    }
    width: 630px;
    height:1050px;

`;
export const FlexItemP = styled.h2`
    text-align: center;
    color:rgb(215,14,24);
    font-size: 14em;
`;
export const FlexItemI = styled.p`
    font-weight: bold;
    padding: 8px 16px;
    font-style: italic;
    font-size: 2em;
    text-align: center;
`;
export const ImagePizza = styled.div`
    display: flex;
    margin : auto;
    width: 550px; 
    height: 550px;
    justify-content:center;
`;
export const Form = styled.form`
    text-align: center;
    font-size: 2em;
`;
export const Input = styled.input`
    font-size: 1em;   
`;
export const Select = styled.select`
    font-size: 1em;
`;