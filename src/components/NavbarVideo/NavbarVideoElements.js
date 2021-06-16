import styled from 'styled-components';

export const HeaderHome = styled.div`
    width:1280px;
    height:720px;
    margin:auto;
   
`;

export const VIDEO = styled.div`
    display:block;
    position: absolute;
    filter: brightness(.3);
    z-index: -1;
`;

export const TopNav = styled.div`
    background-color: rgba(0, 0, 0, 0);
    overflow: hidden;
    font-size: 2em;
    z-index : 1;
`;

export const NavLinks = styled.div`
    float: right;
    color: #ffffff;
    text-align: center;
    padding: 0.4em 0.6em;
    text-decoration: none;
    background-color: #0000;
    cursor: pointer;
    transition-duration: 0.4s;
    :hover{
        text-decoration: none;
        background:#888888;
        color: #FFFFFF;
    }
`;

export const NavLogo = styled.div`
    padding: 0.4em 0.6em;
    float: left;
    color: #FFFFFF;
    text-decoration: none;
    cursor: pointer;
    transition-duration: 0.4s;
    :hover{
        text-decoration: none;
        background:#888888;
        color: #FFFFFF;
    }
`;

export const INTRO = styled.h2`
    margin-top: 1em;
    color: #A8BBC1;
    z-index : 1;
    text-align: center;
    font-size: 3em;
`;

export const TITRE = styled.h1`
    margin-top: 3;
    font-weight: normal;
    font-size: 6em;
    color: #FFFFFF;
    z-index : 1;
    text-align: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
`;
export const Texte = styled.h3`
    font-style: italic;
    margin-top: 10%;
    margin-left: 15%;
    margin-right: 15%;
    color: #EAECEE ;
    z-index : 1;
    text-align: center;
    font-size: 2em;
`;