import styled from "styled-components";

export const Bar = styled.div`
width: 100%;
height: 72px;
background-color: #151515;
display: flex;
justify-content: space-between;
padding: 10px;
box-sizing: border-box;

img{
    width: 53px;
    height: 53px;
    border-radius: 50%;
    margin: 0 15px 0 0;
}


`;
export const Logo = styled.h1`
color: #ffffff;
font-family: Passion One, sans-serif;
font-weight: 700;
font-size: 49px;
cursor: pointer;
@media(max-width: 900px){
    font-size: 45px;
}
`;
export const LogoutFocus = styled.div`
width: 100vw;
height: 100vh;
position: fixed;
top: 0;
left: 0;
opacity: 0%;
`;
export const LogOutBar = styled.div`
position: absolute;
top: 65px;
right: 0;
padding: 17px;
border-radius: 0 0 0 14px;
background-color: #171717;
width: 110px;
z-index: 3;
h2{
    text-align: center;
    font-family: Lato, sans-serif;
    font-weight: 700;
    font-size: 17px;
    color: #ffffff;
    @media(max-width: 900px) {
        font-size: 15px;
    }
}
`;