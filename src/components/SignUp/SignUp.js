import axios from "axios";
import { useNavigate } from "react-router-dom";
import { HomeScreen } from '../HomeScreen/HomeScreen.js'
import { useState } from "react";
import { AllScreen, Inputs } from "./styled.js";

export function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [image, setImage] = useState('');
    const [disable, setDisable] = useState(false);
    const navigate = useNavigate();

    function validateForm(e) {
        e.preventDefault();
        setDisable(true)

        const email = document.forms[0]["email"].value;
        const password = document.forms[0]["password"].value;
        const username = document.forms[0]["username"].value;
        const image = document.forms[0]["image"].value;

        if (email === '' || password === '' || username === '' || image === '') {
            alert('Por favor, preencha todos os campos obrigatórios.')
            return false;
        }

        const userRegister = {
            email, password, username, image
        }

        axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, userRegister)
            .then((res) => {
                console.log(res.data)
                setDisable(true)
                setTimeout(() => {
                    navigate('/')
                }, 2000);
            })
            .catch((err) => {
                setDisable(false)
                if (err.response.status === 409) {
                    alert('Email inserido já está cadastrado.')
                }
                if (err.response.status === 400) {
                    alert('Verifique se sua senha tem mais de 6 caracteres.')
                }

            })

    }

    return (
        <AllScreen>
            <HomeScreen />
            <Inputs>
                <div>
                    <form onSubmit={validateForm}>
                        <input disabled={disable} onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder="e-mail" name="email"></input>
                        <input disabled={disable} onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder="password" name="password"></input>
                        <input disabled={disable} onChange={(e) => setUsername(e.target.value)} value={username} type='text' placeholder="username" name="username"></input>
                        <input disabled={disable} onChange={(e) => setImage(e.target.value)} value={image} type='text' placeholder="image" name="image"></input>
                        <button disabled={disable} type="submit">Sign Up</button>
                    </form>
                    <h1 onClick={() => navigate('/')}>Switch back to log in</h1>
                </div>
            </Inputs>
        </AllScreen>
    )
}