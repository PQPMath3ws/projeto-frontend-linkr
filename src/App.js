import { BrowserRouter, Route, Routes } from "react-router-dom";

import Provider from "./context/Provider.js";

import { HashtagPage } from "./pages/Hashtag.js";
import { SignIn } from "./pages/SignIn.js";
import { SignUp } from "./pages/SignUp.js";
import { Timeline } from "./pages/Timeline.js";

import GlobalStyle from "./styles/GlobalStyle.js";
import ResetStyle from "./styles/ResetStyle.js";

export default function App() {
    return (
        <Provider>
            <BrowserRouter>
                <ResetStyle />
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/hashtag/:hashtag" element={<HashtagPage />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/timeline" element={<Timeline />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}