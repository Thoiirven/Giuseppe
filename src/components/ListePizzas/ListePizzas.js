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

export const Titre2 = styled.h1`
    color: rgb(0, 0, 0);
    z-index : 1;
    text-align: center;
    font-weight: bold;
    font-size: 24;
    padding: 1cm;
`;

export const FlexContainer = styled.div`
    display : flex;
    flex-wrap: wrap;
    padding: 0;
    margin: auto;
    list-style: none;
`;

export const FlexItem = styled.div`
    background:#ffffff;
    border: 3.8px solid #FF7902;
    margin:auto;
    margin-bottom:0.5cm;
    box-shadow: 2.5px 2.5px 2.5px #494949;
    color: White;
    Background-color: black;
    font-weight: bold;
    font-size: 16;
    transition-duration: 0.4s;
    cursor: pointer;
    :hover {
        background-color: White;
        color: black;
    }
`;
export const FlexItemP = styled.p`
    font-weight: bold;
    font-size: 30px;
    text-align: center;
`;
export const FlexItemI = styled.p`
    font-weight: bold;
    padding: 8px 16px;
    font-style: italic;
    font-size: 16px;
    text-align: center;
`;

