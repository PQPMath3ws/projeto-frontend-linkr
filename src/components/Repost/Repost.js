import { useState } from "react";
import styled from "styled-components";
import ConfirmRepost from "../ConfirmRepost/ConfirmRepost";
import { BiRepost } from "react-icons/bi";

export default function Repost(props) {
    const { id } = props;
    const [confirm, setConfirm] = useState(false)

    return (
        <RepostBox>
            
        {confirm && <ConfirmRepost confirm={confirm} setConfirm={setConfirm} />}
        <BiRepost></BiRepost>
            <p onClick={() => {
                setConfirm(true)
                console.log(id)
                }}>Repostar</p>
        </RepostBox>
    )
}

const RepostBox = styled.div`
text-align: center;
font-size: 25px;
font-family: Lato, sans-serif;
font-weight: 400;
margin-top: 15px;
p{
    font-size: 11px;
}
`;