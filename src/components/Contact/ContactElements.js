import styled from 'styled-components';

export const BodyHomeBody = styled.body`
    width:1280px;
    height:900px;
    margin: auto;
    background-color: #ffffff;
    z-index : 1;
`;
export const BodyDiv = styled.div`
    padding:20%;
`;
export const BodyP = styled.p`
    padding: 5px;
    width: 100%;
    text-align:center;
    z-index : 1;
`;
export const ImageLogoInsta = styled.div`
    display: flex;
    width: 50px;
	height: 50px;
    margin-left:250px;
    justify-content:center;
    position: absolute;
`;
export const ImageLogoFacebook = styled.div`
    display: flex;
    width: 50px;
	height: 50px;
    margin-top: 60px;
    margin-left:250px;
    justify-content:center;
    position: absolute;
`;
export const BodyInsta = styled.div`
    padding: 5px;
    width: auto;
    margin-top: 10px;
    text-align:center;
    z-index : 1;
    transition-duration: 0.4s;
    :hover {
        background-color: red;
    }
`;
export const BodyFacebook = styled.div`
    padding: 5px;
    width: 100%;
    margin-top: 30px;
    text-align:center;
    z-index : 1;
    transition-duration: 0.4s;
    :hover {
        background-color: blue;
    }
`;