import styled from 'styled-components';

export const HeaderHome = styled.div`
    width:1280px;
    height:auto;
    margin:auto;
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const TopNav = styled.div`
    background-color: rgba(0, 0, 0);
    overflow: hidden;
    font-size: 0.5cm;
    z-index : 1;
`;

export const NavLinks = styled.a`
    float: right;
    color: #ffffff;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    transition-duration: 0.4s;
    background-color: #0000;
    cursor: pointer;
    :hover{
        text-decoration: none;
        background:#888888;
        color: #FFFFFF;
    }
`;

export const NavLogo = styled.a`
    transition-duration: 0.4s;
    padding: 14px 16px;
    float: left;
    color: #FFFFFF;
    text-decoration: none;
    cursor: pointer;
    :hover{
        text-decoration: none;
        background:#888888;
        color: #FFFFFF;
    }
`