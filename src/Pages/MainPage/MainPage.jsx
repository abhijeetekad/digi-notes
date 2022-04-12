import React from "react";

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
            <div>
              <SideBarLeft />
            </div>
            <div className="common-notes">{page}</div>
            <div>
              <SideBarRight />
            </div>
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
