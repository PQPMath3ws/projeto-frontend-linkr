import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppStyle } from "../styles/AppStyle";
import { ContentAlignDiv, SocialMediaDescriptionH2, SocialMediaForm, SocialMediaFormButton, SocialMediaFormDiv, SocialMediaFormInput, SocialMediaFormLink, SocialMediaInfoDiv, SocialMediaTitleH1 } from "../styles/Sign";

export function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [image, setImage] = useState('');
    const [disable, setDisable] = useState(false);
    const [pageHeight, setPageHeight] = useState(120);

    const navigate = useNavigate();

    const title = "Linkr | Sign Up";

    function resizeDivs() {
        setPageHeight(Math.round((( window.outerWidth - 10 ) / window.outerWidth) * 100) + 21);
    }

    async function register(e) {
        e.preventDefault();
        
        setDisable(true);

        if (email === '' || password === '' || username === '' || image === '') {
            alert('Please fill in all required fields.')
            return;
        }

        const bodyRequest = {
            email, password, username, image
        };

        try {
            const request = await axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, bodyRequest);
            console.log(request.data);
            setDisable(false);
            navigate('/');
        } catch (error) {
            setDisable(false);
            if (error.request.status === 409) {
                alert('The email entered is already registered.')
            }
            if (error.request.status === 400) {
                alert('Please make sure your password has more than 6 characters.')
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
                    <SocialMediaForm onSubmit={register}>
                        <SocialMediaFormInput data-test="email" disabled={disable} onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder="e-mail" name="email"></SocialMediaFormInput>
                        <SocialMediaFormInput data-test="password" disabled={disable} onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder="password" name="password"></SocialMediaFormInput>
                        <SocialMediaFormInput data-test="username" disabled={disable} onChange={(e) => setUsername(e.target.value)} value={username} type='text' placeholder="username" name="username"></SocialMediaFormInput>
                        <SocialMediaFormInput data-test="picture-url" disabled={disable} onChange={(e) => setImage(e.target.value)} value={image} type='text' placeholder="image" name="image"></SocialMediaFormInput>
                        <SocialMediaFormButton data-test="sign-up-btn" disabled={disable} type="submit">Sign Up</SocialMediaFormButton>
                        <SocialMediaFormLink to={'/'} data-test="login-link">
                            Switch back to log in
                        </SocialMediaFormLink>
                    </SocialMediaForm>
                </ContentAlignDiv>
            </SocialMediaFormDiv>
        </AppStyle>
    )
}