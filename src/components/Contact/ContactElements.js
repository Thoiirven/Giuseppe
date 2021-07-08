import styled from 'styled-components';


export const BodyHomeBody = styled.div`
    border: 3.8px solid black;
    box-shadow: 4.5px 4.5px 4.5px black ,-4.5px -4.5px 4.5px black ;
    width:1280px;
    height:1000px;
    margin: auto;
    background-color: #ffffff;
    z-index : 1;
`;
export const BodyDiv = styled.div`
    padding:1em;
`;
export const BodyP = styled.p`
    padding: 1em;;
    width: 100%;
    font-size:2em;
    text-align:center;
    z-index : 1;
`;
export const ImageLogoInsta = styled.div`
    display: flex;
    width: 100px;
	height: 100px;
    margin-left:150px;
    position: absolute;
`;
export const ImageLogoFacebook = styled.div`
    display: flex;
    width: 100px;
	height: 100px;
    margin-top: 100px;
    margin-left:150px;
    position: absolute;
`;
export const BodyInsta = styled.div`
    padding: 5px;
    width: auto;
    margin-right:575px;
    margin-top: 20px;
    margin-left: 300px;
    font-size:2em;
    z-index : 1;
    transition-duration: 0.4s;
    :hover {
        background-color: red;
    }
`;
export const BodyFacebook = styled.div`
    padding: 5px;
    width: auto;
    margin-right:500px;
    margin-top: 40px;
    margin-left: 300px;
    font-size:2em;
    z-index : 1;
    transition-duration: 0.4s;
    :hover {
        background-color: blue;
    }
`;