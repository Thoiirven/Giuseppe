import styled from 'styled-components';

export const BodyHomeBody = styled.body`
    width:1280px;
    height:900px;
    margin: auto;
    background-color: #ffffff;
    z-index : 1;
`;
export const BodyDiv = styled.div`
    padding: 1cm;
`;
export const BodyP = styled.p`
    margin-top: 4cm;
    text-align:center;
    font-size:1.4cm;
`;
export const BodyBcreme = styled.button`
    background-color: white;
    border-radius: 20%;
    color: black;
    border: 2px solid #555555;
    padding: 16px 32px;
    text-align: center;
    font-size: 42px;
    margin: 2cm;
    transition-duration: 0.4s;
    cursor: pointer;
    float: right;
    :hover {
        background-color: black;
        color: white;
    }
`;
export const BodyBtomate = styled.button`
    background-color: red;
    border-radius: 20%;
    color: black;
    border: 2px solid #555555;
    padding: 16px 32px;
    text-align: center;
    font-size: 42px;
    margin: 2cm;
    transition-duration: 0.4s;
    cursor: pointer;
    float: left;
    :hover {
        background-color: black;
        color: white;
    }
`;