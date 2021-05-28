import styled from 'styled-components';

export const BodyHomeBody = styled.div`
    width:1280px;
    height:auto;
    margin: auto;
    background-color: #ffffff;
    z-index : 1;
`;
export const BodyDiv = styled.div`
    padding: 1em;
    height:500px;
`;
export const BodyP = styled.p`
    margin-top: 2em;
    text-align:center;
    font-size:1.4cm;
`;
export const BodyBcreme = styled.button`
    background-color: rgb(253, 241, 184);
    border-radius: 20%;
    color: black;
    border: 2px solid #555555;
    padding: 16px 32px;
    text-align: center;
    font-size: 2em;
    margin: 1em;
    transition-duration: 0.4s;
    cursor: pointer;
    float: right;
    :hover {
        background-color: black;
        color: white;
    }
`;
export const BodyBtomate = styled.button`
    background-color: rgb(215,14,24);
    border-radius: 20%;
    color: black;
    border: 2px solid #555555;
    padding: 16px 32px;
    text-align: center;
    font-size: 2em;
    margin: 1em;
    transition-duration: 0.4s;
    cursor: pointer;
    float: left;
    :hover {
        background-color: black;
        color: white;
    }
`;

export const FlexContainer = styled.div`
    display : flex;
    flex-wrap: wrap;
    margin: auto;
    list-style: none;
`;

export const FlexItem = styled.div`
    background:#ffffff;
    border: 3.8px solid white;
    border-radius: 20px;
    margin:auto;
    margin-bottom:2em;
    box-shadow: 4.5px 4.5px 4.5px #494949;
    color: rgb(20,135,56);
    Background-color: black;
    font-weight: bold;
    :hover {
        background-color: #BEBEBE;
    }
    width: 630px;
    height:auto;
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
    font-size: 3em;
    text-align: center;
`;
export const ImagePizza = styled.div`
    display:flex;
    margin:auto;
    width: 550px; 
    height: 550px;
    background-size: cover;
`;