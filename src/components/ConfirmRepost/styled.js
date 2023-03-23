import styled from "styled-components";

export const WhiteScreen = styled.div`
width: 100vw;
height: 100vh;
background-color: rgba(255, 255, 255, 0.9);
position: fixed;
top: 0;
left: 0;
`;
export const ConfirmBox = styled.div`
background-color: #333333;
width: 597px;
height: 210px;
border-radius: 20px;
text-align: center;
margin: 300px auto;
padding: 1px;
@media(max-width: 900px){
    min-width: 450px;
    width: fit-content;
    height: 170px;
}
`;
export const NoBox = styled.button`
background-color: #ffffff;
color: #1877F2;
`;
export const YesBox = styled.button`
background-color: #1877F2;
color: #ffffff;
`;
export const Options = styled.div`
width: 60%;
margin: 60px auto;
display: flex;
justify-content: space-evenly;
button{
    font-family: Lato, sans-serif;
    font-weight: 700;
    font-size: 18px;
    border-radius: 5px;
    padding: 8px;
    box-sizing: border-box;
    width: 134px; 
    height: 37px;
    border: none;
    @media(max-width: 900px){
    font-size: 12px;
    width: 100px;
    height: 30px;
}
}
`;
export const Question = styled.div`
width: 60%;
margin: -37px auto;
h1{
    font-family: Lato, sans-serif;
    font-weight: 700;
    font-size: 29px;
    @media(max-width: 900px){
    font-size: 18px;
}
}
`;