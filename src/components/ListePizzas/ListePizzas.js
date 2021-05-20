import styled from 'styled-components';

export const BodyHomeBody = styled.div`
    width:1280px;
    height:720px;
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
    border: 0.1px solid #49494980;
    margin: 2.5cm 2.5cm 2.5cm 2.5cm;
    box-shadow: 2.5px 2.5px 2.5px #494949;
    color: Black;
    font-weight: bold;
    font-size: 16;
`;
export const FlexItemP = styled.p`
    font-weight: bold;
    text-align: center;
`;
export const FlexItemB = styled.button`
    background-color: white;
    color: Blue;
    border: 2px solid #555555;
    padding: 8px 16px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    float:right;
    :hover {
        background-color: Blue;
        color: white;
    }
`;
