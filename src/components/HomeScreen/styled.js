import styled from "styled-components";

export const ScreenInfo = styled.div`
background-color: #151515;
width: 165%;
height: 100vh;
padding-left: 150px;
color: #FFFFFF;
font-weight: 700;
box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
@media(max-width: 900px) {
    padding: 12px;
    min-width: 100%;
    width: 100vw;
    height: 200px;
    text-align: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
h1 {
    width: 470px;
    margin: 175px 0 0 0;
    font-size: 106px;
    font-weight: 700;
    font-family: Passion One, sans-serif;
    @media(max-width: 900px){
        width: 100%;
        margin: 10px auto;
        font-size: 76px;
    }
}
h2 {
    width: 470px;
    font-size: 43px;
    font-family: Oswald, sans-serif;
    @media(max-width: 900px){
        margin: 0 auto;
        font-size: 23px;
        width: 237px;
    }
}
`;