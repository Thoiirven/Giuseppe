import styled from 'styled-components';

export const BodyHomeBody = styled.body`
    width:1280px;
    height:720px;
    margin: auto;
    background-color: #ffffff;
    z-index : 1;
`;
export const BodyDiv = styled.div`
    padding: 1cm;
`;
export const BodyP = styled.p`
    text-align:center;
    font-size:1.4cm;
`;
export const BodyBcreme = styled.button`
    background-color: white;
    color: black;
    border: 2px solid #555555;
    padding: 8px 16px;
    text-align: center;
    font-size: 16px;
    margin: auto;
    transition-duration: 0.4s;
    cursor: pointer;
    float: right;
    :hover {
        background-color: black;
        color: white;
    }
`;
export const BodyBtomate = styled.button`
    margin : auto;
    background-color: red;
    color: black;
    border: 2px solid #555555;
    padding: 8px 16px;
    text-align: center;
    font-size: 16px;
    transition-duration: 0.4s;
    cursor: pointer;
    float: left;
    :hover {
        background-color: black;
        color: white;
    }
`;