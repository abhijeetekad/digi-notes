// import { useTheme } from "@emotion/react";
import MockmanEs from "mockman-js";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MainPageNotes } from "./Components/MainPageNotes/MainPageNotes";
import { useAuth } from "./Contexts/Auth-context";
import { Archive } from "./Pages/Archive/Archive";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Labels } from "./Pages/Labels/Labels";
import { MainPage } from "./Pages/MainPage/MainPage";
import { ProtectedRoute } from "./Pages/ProtectedRoute";
import { SignIn } from "./Pages/SignIn/SignIn";
import { SignUp } from "./Pages/SignUp/SignUp";
import { Trash } from "./Pages/Trash/Trash";

function App() {
  // const { theme } = useTheme();
  const { auth } = useAuth();
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {!auth.status && (
          <>
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </>
        )}
        <Route
          exact
          path="mainpage"
          element={
            <ProtectedRoute>
              <MainPage page={<MainPageNotes />} />
            </ProtectedRoute>
          }
        />
        <Route
          path="mainpage/archive"
          element={
            <ProtectedRoute>
              <MainPage page={<Archive />} />
            </ProtectedRoute>
          }
        />
        <Route
          path="mainpage/trash"
          element={
            <ProtectedRoute>
              <MainPage page={<Trash />} />
            </ProtectedRoute>
          }
        />
        <Route
          path="mainpage/label"
          element={
            <ProtectedRoute>
              <MainPage page={<Labels />} />
            </ProtectedRoute>
          }
        />
        <Route path="mockman" element={<MockmanEs />} />
      </Routes>
    </div>
  );
}

export default App;
