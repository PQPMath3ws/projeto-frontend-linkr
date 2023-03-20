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