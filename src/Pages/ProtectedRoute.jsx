import { Navigate } from "react-router-dom";
import { useAuth } from "../Contexts/Auth-context";

const ProtectedRoute = ({ children }) => {
  const { auth } = useAuth();
  return auth.status ? children : <Navigate to="/signup" />;
};
export { ProtectedRoute };
