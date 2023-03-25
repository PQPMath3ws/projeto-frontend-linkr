import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledPost = styled.div`
    width: 50vw;
    background-color: #171717;
    border-radius: 16px;
    display: flex;
    justify-content: space-around;
`;

export const StyledLefDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: 11px;
    color: #FFFFFF;
    width: 15%;
    margin-top: 18px;
`;

export const StyledRightDiv = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 11px;
    color: #FFFFFF;
    width: 85%;
    margin-top: 20px;
    margin-bottom: 24px;
`;

export const ProfilePicture = styled.img`
    width: 53px;
    height: 53px;
    border-radius: 50%;
`;

export const StyledIcon = styled.div`
    color: ${props => props.likedByUser ? "red" : "#FFFFFF"};
    font-size: 20px;
    margin-top: 18px;
`;

export const LikesText = styled.p`
    margin-top: 5px;
    margin-bottom: 13px;
    font-size: 11px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
`;

export const RightHeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 95%;
`;

export const UsernameText = styled(Link)`
    text-decoration: none;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    color: #FFFFFF;
`;

export const RightActionsDiv = styled.div`
    display: flex;
    gap: 20px;
`;

export const ActionButton = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

export const PostText = styled.h3`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: #B7B7B7;
    margin-top: 16px;
`;

export const PostTextInput = styled.textarea`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: #4C4C4C;
    margin-top: 16px;
    width: 92%;
    border: none;
    padding: 10px;
    border-radius: 7px;
    resize: none;

    &:focus {
        outline: none;
    }
`;

export const StyledLink = styled(Link)`
    border: 1px solid #FFFFFF;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    color:#9B9595;
    padding-left: 20px;
    margin-top: 20px;
    width: 90%;
    cursor: pointer;
    text-decoration: none;
`;

export const StyledLinkTitle = styled.h2`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #CECECE;
    margin-top: 16px;
    width: 90%;
`;

export const StyledLinkDescription = styled.p`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    color: #9B9595;
    margin-top: 16px;
    width: 90%;
`;

export const StyledLinkUrl = styled.p`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    color: #CECECE;
    margin-top: 16px;
    margin-bottom: 16px;
    width: 90%;
`;

export const StyledLinkUrlImage = styled.img`
    width: 154px;
    border-radius: 0px 12px 13px 0px;
`;