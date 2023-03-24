import styled from "styled-components";
import { Link } from "react-router-dom";

export const Bar = styled.div`
    width: 100%;
    height: 72px;
    background-color: #151515;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    position: relative;
`;

export const Logo = styled(Link)`
    margin-left: 10px;
    color: #FFFFFF;
    text-decoration: none;
    font-family: Passion One, sans-serif;
    font-weight: 700;
    font-size: 49px;
    cursor: pointer;
`;

export const SearchContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
`;

export const SearchDiv = styled.div`
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    height: 42px;
    margin-top: 5px;
    border-radius: 8px;
    gap: 10px;
    z-index: 2;
`;

export const SearchInput = styled.input`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #333333;
    border: none;
    margin-left: 15px;
    width: 88%;

    &:focus {
        outline: none;
    }
`;

export const AfterBarDiv = styled.div`
    display: ${props => props.canShowResultBar ? "flex" : "none"};
    position: absolute;
    width: 100%;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
`;

export const SearchResultsDiv = styled.div`
    position: absolute;
    box-sizing: border-box;
    padding: 10px;
    width: 39.4%;
    margin-top: 41px;
    z-index: 1;
    padding-top: 20px;
    padding-bottom: 20px;
    border-end-start-radius: 8px;
    border-end-end-radius: 8px;
    background-color: #E7E7E7;
    display: ${props => props.canShowResultBar ? "flex" : "none"};
    ${props => props.canShowResultBar ? "flex-direction: column;" : ""}
    ${props => props.canShowResultBar ? "gap: 20px;" : ""}
`;

export const SearchResultsContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SearchResultDiv = styled(Link)`
    display: flex;
    margin-left: 10px;
    text-decoration: none;
    align-items: center;
    gap: 4px;
`;

export const SearchResultImage = styled.img`
    width: 39px;
    height: 39px;
    object-fit: fill;
    border-radius: 50%;
`;

export const SearchResultText = styled.p`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    margin-left: 10px;
    color: #515151;
`;

export const RightDivContent = styled.div`
    margin-right: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`;

export const Avatar = styled.img`
    width: 43px;
    height: 43px;
    border-radius: 50%;
`;

export const DropdownLogout = styled.div`
    position: absolute;
    top: 70px;
    right: 0;
    padding: 17px;
    border-radius: 0 0 0 14px;
    background-color: #171717;
    width: 110px;
    z-index: 3;
`;

export const Logout = styled(Link)`
    margin-left: 20px;
    text-decoration: none;
    font-family: Lato, sans-serif;
    font-weight: 700;
    font-size: 17px;
    color: #FFFFFF;
`;