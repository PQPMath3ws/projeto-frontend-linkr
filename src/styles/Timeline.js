import styled from "styled-components";

export const LinkrContent = styled.div`
    display: flex;
    margin-bottom: 40px;
    width: 100%;
`;

export const LinkrContentContainer = styled.div`
    margin-top: 40px;
    display: flex;
    margin-right: 25px;
    width: 65%;
    flex-direction: column;
    gap: 35px;
    align-items: center;
`;

export const TimelineMessageInfoText = styled.p`
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    color: #FFFFFF;
`;

export const TimelineInfoDiv = styled.div`
    display: flex;
    width: 85%;
    margin-left: 8%;
    margin-bottom: 10px;
    gap: 25px;
`;

export const TimelineImage = styled.img`
    border-radius: 50%;
    width: 50px;
    height: 50px;
`;

export const TimelineImageText = styled.h1`
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    color: #FFFFFF;
`;

export const FollowUnfollowButton = styled.button`
    border: none;
    background-color: ${props => props.isFollowing ? "#FFFFFF" : "#1877F2"};
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: ${props => props.isFollowing ? "#1877F2" : "#FFFFFF"};
    padding: 10px 40px;
    border-radius: 5px;
    margin-left: 4%;
    cursor: pointer;
`;

export const TimelineText = styled.h1`
    color: #FFFFFF;
    font-size: 41px;
    font-weight: 700;
    font-family: 'Oswald';
    font-style: normal;
    width: 100%;
    margin-left: 25%;
`;

export const ModalStyle = {
    overlay: {
        zIndex: 5,
    },
    content: {
        backgroundColor: "#333333",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: "50px",
        width: "28%",
        paddingLeft: "8%",
        paddingRight: "8%",
        textAlign: "center",
    }
};

export const ModalTitleText = styled.p`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    color: #FFFFFF;
    margin-top: 10px;
`;

export const ModalActionsDiv = styled.div`
    margin-top: 40px;
    display: flex;
    gap: 60px;
    justify-content: center;
    margin-bottom: 20px;
`;

export const ModalActionButton = styled.button`
    background-color: ${props => props.inverted ? "#1877F2" : "#FFFFFF"};
    color: ${props => props.inverted ? "#FFFFFF" : "#1877F2"};
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
`;