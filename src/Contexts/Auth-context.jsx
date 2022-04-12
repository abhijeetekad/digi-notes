const { createContext, useContext, useState } = require("react");

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: localStorage.getItem("user"),
    status: localStorage.getItem("authToken") ? true : false,
    authToken: localStorage.getItem("authToken"),
  });
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
