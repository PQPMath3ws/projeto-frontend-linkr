import { WhiteScreen, ConfirmBox, Question, Options, NoBox, YesBox } from "./styled.js";

export default function ConfirmRepost(props) {
    const { setConfirm} = props;

    return (
        <WhiteScreen>
            <ConfirmBox>
                <Question>
                    <h1>Do you want to re-post this link?</h1>
                </Question>
                <Options>
                    <NoBox data-test="cancel" onClick={() => setConfirm(false)}>No, cancel</NoBox>
                    <YesBox data-test="confirm" onClick={() => setConfirm(false)}>Yes, share!</YesBox>
                </Options>
            </ConfirmBox>
        </WhiteScreen>
    )
}