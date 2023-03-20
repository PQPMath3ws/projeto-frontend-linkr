import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Context from "../context/Context";

import { AppStyle } from "../styles/AppStyle";
import { ContentAlignDiv, SocialMediaDescriptionH2, SocialMediaForm, SocialMediaFormButton, SocialMediaFormDiv, SocialMediaFormInput, SocialMediaFormLink, SocialMediaInfoDiv, SocialMediaTitleH1 } from "../styles/Sign";

export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disable, setDisable] = useState(false);
    const [pageHeight, setPageHeight] = useState(100);

    const { setToken } = useContext(Context);

    const navigate = useNavigate();

    const title = "Linkr | Log In";

    function resizeDivs() {
        setPageHeight(Math.round((( window.outerWidth - 10 ) / window.outerWidth) * 100) + 1);
    }

    async function login(e) {
        e.preventDefault();

        setDisable(true);

        if (email === '' || password === '') {
            alert('Please fill in all required fields.')
            setDisable(false);
            return;
        }

        const bodyRequest = {
            email, password
        };

        try {
            const request = await axios.post(`${process.env.REACT_APP_API_URL}/sign-in`, bodyRequest);
            setToken(request.data.token);
            localStorage.setItem('token', request.data.token);
            setDisable(false);
            navigate('/timeline');
        } catch (error) {
            console.log(error);
            setDisable(false);
            if (error.request.status === 401) {
                alert('Incorrect email or password.')
            }
        }
    }

    useEffect(() => {
        document.title = title;
        window.addEventListener("resize", resizeDivs);
    }, []);

    return (
        <AppStyle>
            <SocialMediaInfoDiv pageHeight={pageHeight}>
                <ContentAlignDiv>
                    <SocialMediaTitleH1>linkr</SocialMediaTitleH1>
                    <SocialMediaDescriptionH2>save, share and discover the best links on the web</SocialMediaDescriptionH2>
                </ContentAlignDiv>
            </SocialMediaInfoDiv>
            <SocialMediaFormDiv pageHeight={pageHeight}>
                <ContentAlignDiv>
                    <SocialMediaForm onSubmit={login}>
                        <SocialMediaFormInput data-test="email" disabled={disable} onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder="e-mail" name="email"></SocialMediaFormInput>
                        <SocialMediaFormInput input data-test="password" disabled={disable} onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder="password" name="password"></SocialMediaFormInput>
                        <SocialMediaFormButton data-test="login-btn" disabled={disable} type="submit">Log In</SocialMediaFormButton>
                        <SocialMediaFormLink to={'/sign-up'} data-test="sign-up-link">
                            First time? Create an account!
                        </SocialMediaFormLink>
                    </SocialMediaForm>
                </ContentAlignDiv>
            </SocialMediaFormDiv>
        </AppStyle>
    );
}