import styled from "styled-components";

export const StyledPost = styled.div`
    width: 611px;
    height: 209px;
    background-color: #ffffff;
    border-radius: 16px;
    display: flex;
    justify-content:space-around;
    margin-top: 43px;
    margin-bottom: 29px;

    @media (max-width:611px){
       width: 100vw;

       border-radius: 0;
    }

form{
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
   
}



img{
    width: 53px;
    height: 53px;
    border-radius: 50%;
    margin-top: 16px;
}

.description{
height:66px;
}

h2{
    font-family: 'Lato', sans-serif; 
    font-weight:300;
    color:#707070;
;
}


`
export const StyledInput = styled.input`
    display: flex;
    width: 503px;
    height:30px;
    background-color: #EFEFEF;
    color: #949494;
    border-radius: 5px;
    border:none;
    font-family: 'Lato', sans-serif; 
    padding-left: 10px;

    @media (max-width:610px){
       width: 70vw;
    }


`


export const StyledButton = styled.button`
    width: 112px;
    height:31px;
    background-color: #1877F2;
    border-radius: 5px;
    color: #ffffff;
    position:relative;
    left:390px;

    @media (max-width:611px){
        left:40vw;
    }
    


`

