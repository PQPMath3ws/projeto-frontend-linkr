import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsSend } from "react-icons/bs";

export const StyledContainer = styled.div`
    width: 611px;
    margin-bottom: 16px;
    border-radius: 16px;
    background: #1E1E1E;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width:610px){
       width: 100%;
       border-radius: 0;
       
    }
    
`

export const StyledLeftDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: 11px;
    color: #FFFFFF;
    width: 80px;
    padding-left: 10px;
    
`
export const StyledPost = styled.div`
    width: 611px;
    height: 276px;
    background-color: #171717;
    border-radius: 16px;
    display: flex;
    justify-content: space-around;
    position: relative;
    margin-top: ${props => props.isReposted && '33px'};
    box-shadow: ${props => props.isReposted && 'rgba(30, 30, 30, 1) 0px -25px, rgba(30, 30, 30, 1) 0px -20px, rgba(30, 30, 30, 1) 0px -15px, rgba(30, 30, 30, 1) 0px -10px, rgba(30, 30, 30, 1) 0px -5px'};
    

a{
    font-family: 'Lato', sans-serif; 
    font-weight:400;
    font-size: 19px;
    color: #FFFFFF;
}

.link{
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    width: 503px; 
    @media (max-width:610px){
        width: 160px; 
    }   
}



img{
    width: 53px;
    height: 53px;
    border-radius: 50%;
    margin-top: 16px;
    padding: 1px;
    padding-right: 0px;
}


h2{
    font-family: 'Lato', sans-serif; 
    font-weight:400;
    font-size: 19px;
    color: #FFFFFF;

}

h3{
    color:#B7B7B7;
    font-weight: 400;
    font-size: 17px;

}

@media (max-width:611px){
       width: 100vw;
       h2{
        font-size: 15px;
       }
       h3{
        font-size: 15px;
       }
       
    }


`
export const StyledIcon = styled.div`
      color: ${props => props.likedByUser ? "red" : "#FFFFFF"};
      font-size: 20px;
      margin-top: 19px;
`

export const StyledLink = styled(Link)`
width: 503px;
height: 155px;
border: 1px solid #ffffff;
border-radius: 16px;
display: flex;
align-items: center;
justify-content: space-between;
color:#9B9595;
padding-left:10px;
overflow-wrap: break-word;
@media (max-width:610px){
       width: 278px;
    }



div{
width: 303px;
max-width: 303px;
overflow-wrap: break-word;
@media (max-width:610px){
       width: 100px;
    }

}

img{
    width: 154px;
    height: 155px;
    border-radius: 0px 12px 13px 0px;
    margin-top: 0;
    @media (max-width:610px){
       width: 95px;
    }
}
h2{
    font-size: 16px;
    @media (max-width:610px){
    font-size: 11px;
    }
}
p{
    margin-top: 5px;
    margin-bottom: 13px;
    font-size: 11px;
    @media (max-width:610px){
    font-size: 9px;
    }
}



`
export const StyledComment = styled.div`
display: flex;
color:#ffffff;
align-items: center;
border-bottom: 1px solid #353535;

h2{
    font-size: 14px;
}

p{
    font-size: 14px;
    color: #ACACAC;
    margin-top: 3px;
    align-items: center;
}

img{
    width: 39px;
    height: 39px;
    border-radius: 50%;
    margin-top: 13px;
    margin-bottom: 16px;
    margin-right: 18px;
}
h3{
    font-size: 14px;
    color: #565656;
    margin-left: 4px;
}
.authorComment{
    display: flex;
}
`
export const StyledCommentsContainer = styled.div`
width: 571px;
@media (max-width:610px){
       width: 90%;
    }
`

export const StyledNewComments = styled.div`
    display: flex;
    
    img{
    width: 39px;
    height: 39px;
    border-radius: 50%;
    margin-top: 13px;
    margin-bottom: 16px;

}
    input{
    width: 510px;
    height: 39px;
    background: #252525;
    margin-top: 19px;
    margin-left:14px;
    border:none;
    border-radius: 8px;
    padding-left: 10px;
}
`

export const StyledSendIcon = styled(BsSend)`
  color:#ffffff;
  position: relative;
  right: 30px;
  top:32px;
  
`;



export const StyledRightDiv = styled.div`
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 11px;
    color: #FFFFFF;
    margin: auto;

`;

export const RepostedBy = styled.div`
background-color: #1E1E1E;
color: #ffffff;
font-size: 22px;
position: absolute;
width: 100%;
height: 33px;
border-radius: 16px 16px 0 0;
box-shadow: #1E1E1E;
top: -33px;
left: 0;
display: flex;
box-sizing: border-box;
padding: 6px;
h4{
    margin: 8px 0 0 8px;
    color: #ffffff;
    font-size: 10px;
    font-family: Lato, sans-serif;
    font-weight: 700;
}
`;

export const BlockIfReposted = styled.div`
position: absolute;
top: 0;
left: 0;
background-color: hotpink;
opacity: 0;
width: 100%;
height: 100%;
`;