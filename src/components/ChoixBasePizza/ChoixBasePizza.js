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
    padding: 1em;
    height:500px;
`;
export const BodyP = styled.p`
    margin-top: 2em;
    text-align:center;
    font-size:1.4cm;
    font-weight: bold;
`;
export const BodyBcreme = styled.button`
    border: 3.8px solid black;
    box-shadow: 4.5px 4.5px 4.5px black;
    background-color: rgb(253, 241, 184);
    border-radius: 20%;
    color: black;
    border: 2px solid #555555;
    padding: 0.6em 2.2em;
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
    border: 3.8px solid black;
    box-shadow: 4.5px 4.5px 4.5px black;
    background-color: rgb(215,14,24);
    border-radius: 20%;
    color: black;
    border: 2px solid #555555;
    padding: 0.6em 2.2em;
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
    box-shadow: 4.5px 4.5px 4.5px #494949,-4.5px -4.5px 4.5px #494949 ;
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
export const Modal= styled.div`
    font-size: 1.2em;
`;
export const Header= styled.p`
    width: 100%;
    border-bottom: 1px solid gray;
    font-weight: bold;
    font-size: 2em;
    text-align: center;
    padding: 5px;
`;
export const Content= styled.div`
    width: 100%;
    padding: 10px 5px;
`;
export const ContentBold= styled.div`
    font-weight: bolder;
`;
export const Action= styled.div`
    width: 100%;
    padding: 10px 5px;
    margin: auto;
    text-align: center;
`;
export const Close= styled.button`
    border: 3.8px solid black;
    box-shadow: 4.5px 4.5px 4.5px black;
    cursor: pointer;
    position: absolute;
    display: block;
    right: 10px;
    top: 10px;
    font-size: 2.4em;
    background: #ffffff;
    border-radius: 18px;
    border: 1px solid #cfcece;
    :hover {
        background-color: red;
        color: white;
    }
`;
export const BodyBouton = styled.button`
    margin: auto;
    margin-bottom: 2em;
    font-weight: bold;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    border: 3.8px solid black;
    box-shadow: 4.5px 4.5px 4.5px black;
    background-color: #DCDCDC;
    color: black;
    font-size: 3em;
    transition-duration: 0.4s;
    cursor: pointer;
    :hover {
        background-color: rgb(20,135,56);
        color: white;
    }
`;
export const BodyBoutonBase = styled.div`
    margin: auto;
    margin-bottom: 2em;
    font-weight: bold;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    transition-duration: 0.4s;
`;
export const BoutonFermer = styled.button`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;   
    background-color: white;
    color: black;
    text-align: center;
    font-size: 1em;
    margin: auto;
    transition-duration: 0.4s;
    cursor: pointer;
    border: 3.8px solid black;
    box-shadow: 4.5px 4.5px 4.5px black;
    :hover {
        background-color: red;
        color: white;
    }
`;