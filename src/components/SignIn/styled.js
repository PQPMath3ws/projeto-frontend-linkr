import styled from "styled-components";

export const AllScreen = styled.div`
display: flex;
flex-wrap: nowrap;
height: 100%;
@media(max-width: 900px) {
    display: block;
    margin: 0 auto;
}
`;
export const Inputs = styled.div`
width: 100%;
margin: 298px auto;
text-align: center;
padding: 20px;
@media(max-width: 900px) {
    margin: 10px auto;
    width: 100%;
}
input {
    margin-top: 13px;
    max-width: 429px;
    min-width: 100%;
    height: 65px;
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    border: 1px solid #D4D4D4;
    padding: 16px;
    font-size: 27px;
    color: #9f9f9f;
    font-family: Oswald, sans-serif;
    @media(max-width: 900px){
        max-width: 100%;
        width: 330px;
        font-size: 22px;
    }
    ::placeholder{
        font-size: 27px;
        color: #9f9f9f;
        font-family: Oswald, sans-serif;
        @media(max-width: 900px){
        font-size: 22px;
    }
    }
}
button{
    width: 429px;
    max-width: 100%;
    height: 65px;
    font-size: 27px;
    font-family: Oswald, sans-serif;
    color: #FFFFFF;
    font-weight: 700;
    text-align: center;
    margin-top: 13px;
    background-color: #1877F2;
    border: none;
    border-radius: 5px;
    @media(max-width: 900px){
        max-width: 100%;
        font-size: 22px;
    }
}
h1{
    margin-top: 10px;
    text-decoration: underline;
    font-family: Lato, sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #FFFFFF;
    @media(max-width: 900px){
        font-size: 17px;
    }
}
div{
    max-width: 400px;
    margin: 0 auto;
}
`;