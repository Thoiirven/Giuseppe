import styled from 'styled-components';

export const HeaderHome = styled.div`
    width:1280px;
    height:720px;
    margin:auto;
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const VIDEO = styled.div`
    display:block;
    width:1280;
    height:720;
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
    padding: 14px 16px;
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
    padding: 14px 16px;
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
    margin-top: 10%;
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