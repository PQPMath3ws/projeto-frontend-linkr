import styled from "styled-components";
import { Link } from "react-router-dom";

export const Box = styled.div`
    width: 22vw;
    margin-top: 60px;
`;

export const BoxContainer = styled.div`
    border-radius: 16px;
    background-color: #171717;
    padding: 6px 10px;
`;

export const Title = styled.h1`
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    color: #FFFFFF;
    margin: 16px;
`;

export const Diviser = styled.hr`
    width: 100%;
    height: 0px;
    background-color: #484848;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1px solid #484848;
`;

export const StyledLink = styled(Link)`
    margin: 16px 16px;
    display: flex;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    text-decoration: none;
    font-size: 19px;
    color: #FFFFFF;
`;