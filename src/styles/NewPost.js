import styled from "styled-components";

export const NewPostStyle = styled.div`
    width: 50vw;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row;
    border-radius: 16px;
    padding-bottom: 14px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 20px;
`;

export const LeftDiv = styled.div`
    text-align: center;
    margin-top: 15px;
    width: 15%;
`;

export const RightDiv = styled.div`
    margin-top: 15px;
    width: 85%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    clear: both;
`;

export const ProfilePicture = styled.img`
    width: 53px;
    height: 53px;
    border-radius: 50%;
`;

export const ShareStatusText = styled.p`
    width: 95%;
    color: #707070;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    margin-bottom: 5px;
`;

export const StyledInput = styled.input`
    width: 95%;
    margin-top: 10px;
    border: none;
    color: #333333;
    background-color: #EFEFEF;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    box-sizing: border-box;
    vertical-align: top;
    padding: ${props => props.padding[0]}px ${props => props.padding[1]}px ${props => props.padding[2]}px ${props => props.padding[3]}px;
    border-radius: 5px;

    &:focus {
        outline: none;
    }
`;

export const StyledButtonDiv = styled.div`
    width: 100%;
    clear: both;
`;

export const StyledButton = styled.button`
    width: 120px;
    height: 40px;
    float: right;
    margin-top: 20px;
    margin-right: 5%;
    background-color: #1877F2;
    border: none;
    border-radius: 5px;
    color: #FFFFFF;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
`;