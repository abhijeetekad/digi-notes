import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [sidebarLeft, setSidebarLeft] = useState(false);
  const [sidebarRight, setSidebarRight] = useState(false);

  const sidebarLeftToggle = () => {
    setSidebarLeft((sidebarLeft) => !sidebarLeft);
  };
  const sidebarRightToggle = () => {
    setSidebarRight((sidebarRight) => !sidebarRight);
  };
  return (
    <SidebarContext.Provider
      value={{
        sidebarLeft,
        sidebarRight,
        sidebarLeftToggle,
        sidebarRightToggle,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
const useSidebar = () => useContext(SidebarContext);
export { SidebarProvider, useSidebar };
