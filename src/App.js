import { BrowserRouter, Route, Routes } from "react-router-dom";

import Provider from "./context/Provider";
import { Application } from "./context/Application";

import { HashtagPage } from "./pages/Hashtag";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Timeline } from "./pages/Timeline";
import { UserPage } from "./pages/User";

import GlobalStyle from "./styles/GlobalStyle";
import ResetStyle from "./styles/ResetStyle";

export default function App() {
    return (
        <Provider>
            <BrowserRouter>
                <ResetStyle />
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/hashtag/:hashtag" element={<Application><HashtagPage></HashtagPage></Application>} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/timeline" element={<Application><Timeline></Timeline></Application>} />
                    <Route path="/user/:id" element={<Application><UserPage></UserPage></Application>}></Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}