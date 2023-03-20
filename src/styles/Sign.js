import styled from "styled-components";
import { Link } from "react-router-dom";

export const SocialMediaInfoDiv = styled.div`
    background-color: #151515;
    width: 70%;
    height: ${props => props.pageHeight}vh;
`;

export const ContentAlignDiv = styled.div`
    margin-top: 24vh;
    margin-left: 10%;
    margin-right: 10%;
`;

export const SocialMediaTitleH1 = styled.h1`
    color: #FFFFFF;
    font-size: 106px;
    font-weight: 700;
    font-family: Passion One, sans-serif;
`;

export const SocialMediaDescriptionH2 = styled.h2`
    width: 60%;
    margin-top: 30px;
    color: #FFFFFF;
    font-size: 43px;
    font-weight: 700;
    font-family: Oswald, sans-serif;
`;

export const SocialMediaFormDiv = styled.div`
    background-color: #333333;
    width: 30%;
    height: ${props => props.pageHeight}vh;
`;

export const SocialMediaForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const SocialMediaFormInput = styled.input`
    width: 100%;
    border-radius: 5px;
    box-sizing: border-box;
    border: 1px solid #D4D4D4;
    padding: 16px;
    font-size: 27px;
    color: #9F9F9F;
    font-family: Oswald, sans-serif;

    &:focus {
        outline: none;
    }
`;

export const SocialMediaFormButton = styled.button`
    width: 100%;
    height: 65px;
    font-size: 27px;
    font-family: Oswald, sans-serif;
    color: #FFFFFF;
    font-weight: 700;
    text-align: center;
    background-color: #1877F2;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export const SocialMediaFormLink = styled(Link)`
    text-decoration: underline;
    font-family: Lato, sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #FFFFFF;
    text-align: center;
`;