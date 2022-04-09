import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Archive } from "./Pages/Archive/Archive";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Labels } from "./Pages/Labels/Labels";
import { MainPage } from "./Pages/MainPage/MainPage";
import { SignIn } from "./Pages/SignIn/SignIn";
import { SignUp } from "./Pages/SignUp/SignUp";
import { Trash } from "./Pages/Trash/Trash";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route exact path="mainpage" element={<MainPage />} />
        <Route
          path="mainpage/archive"
          element={<MainPage page={<Archive />} />}
        />
        <Route path="mainpage/trash" element={<MainPage page={<Trash />} />} />
        <Route path="mainpage/label" element={<MainPage page={<Labels />} />} />
      </Routes>
    </div>
  );
}

export default App;
