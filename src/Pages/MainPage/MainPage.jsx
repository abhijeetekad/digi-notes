import React from "react";
import { Route } from "react-router-dom";
import { Footer } from "../../Components/Footer/Footer";
import { NavBar } from "../../Components/NavBar/NavBar";
import { SideBarRight } from "../../Components/SideBaRight/SideBarRight";
import { SideBarLeft } from "../../Components/SideBarLeft/SideBarLeft";
import "./MainPage.css";
function MainPage({ page }) {
  return (
    <div>
      <div className="mainPage">
        <nav>
          <NavBar />
        </nav>
        <main>
          <div className="mainPageContent">
            <SideBarLeft />
            <div>{page}</div>
            <SideBarRight />
          </div>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export { MainPage };
