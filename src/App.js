import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn } from "./components/SignIn/SignIn.js";
import { SignUp } from "./components/SignUp/SignUp.js";
import Provider from "./context/Provider.js";
import HashtagPage from "./pages/HashtagPages/HashtagPage";
import UserPage from "./pages/UserPage/UserPage";
import TimelinePage from "./pages/TimelinePages/TimelinePage";


export default function App() {
    return (
        <BrowserRouter>

            <Provider>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/hashtag/:hashtag" element={<HashtagPage />} />
                    <Route path="/user/:id" element={<UserPage />}></Route>
                    <Route path="/timeline" element={<TimelinePage />} />
                </Routes>

            </Provider>

        </BrowserRouter>
    )
}