import styled from "styled-components";


export const StyledMain = styled.main`
 display: flex;
 justify-content: center;
`;


export const Container = styled.div`
  width: 99vw;
  height: auto;
  display: flex;
  justify-content: center;
`;

export const StyledContainer = styled.div`
  display: flex;
  margin-right: 25px;
  width: 611px;
  flex-direction: column;
 
  h1 {
    font-size: 41px;
    color: #ffffff;
    font-family: "Oswald", sans-serif;
    margin-top: 78px;
    @media (max-width:610px){
      padding-left: 20px;
      margin-top: 19px;
  }
   
  }

  > h3{
    color: #ffffff;
    font-size: 20px;
    text-align: center;
    margin-top: 70px;
    opacity: 50%;

  }
  @media (max-width:900px){
       margin: auto;
       width: 100%;
  }
   
`;
