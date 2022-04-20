import { Modal } from "../../Components/Modal/Modal";
import React from "react";

import { Footer } from "../../Components/Footer/Footer";
import { NavBar } from "../../Components/NavBar/NavBar";
import { SideBarRight } from "../../Components/SideBaRight/SideBarRight";
import { SideBarLeft } from "../../Components/SideBarLeft/SideBarLeft";
import { useSidebar } from "../../Contexts/Sidebar-context";
import "./MainPage.css";
function MainPage({ page }) {
  const { sidebarLeft, sidebarRight } = useSidebar();
  return (
    <div>
      <div className="mainPage">
        <nav>
          <NavBar />
        </nav>
        <Modal />
        <main>
          <div className="mainPageContent">
            <div>
              <SideBarLeft />
            </div>
            <div
              style={{
                paddingLeft: !sidebarLeft ? "1rem" : "",
                marginRight: !sidebarRight ? "0rem" : "",
                // paddingRight: !sidebarRight ? "0rem" : "",
              }}
              className="common-notes"
            >
              {page}
            </div>
            <div>
              <SideBarRight />
            </div>
          </div>
        </main>

        {/* <footer>
          <Footer />
        </footer> */}
      </div>
    </div>
  );
}

export { MainPage };
