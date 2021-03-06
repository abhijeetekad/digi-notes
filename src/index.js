import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./Contexts/Theme-context";
import { AuthProvider } from "./Contexts/Auth-context";
import { SidebarProvider } from "./Contexts/Sidebar-context";
import { NoteProvider } from "./Contexts/Note-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <NoteProvider>
      <SidebarProvider>
        <AuthProvider>
          <ThemeProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ThemeProvider>
        </AuthProvider>
      </SidebarProvider>
    </NoteProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
