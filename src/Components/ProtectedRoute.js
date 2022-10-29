import { useSelector } from "react-redux/es/exports";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { token } = useSelector((store) => store.auth);
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default ProtectedRoute;
