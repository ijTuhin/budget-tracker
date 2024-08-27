import { Navigate, useLocation } from "react-router-dom";
import { useAuthUser } from "./UserContext";

const Protected = ({ children }) => {
  const { authUser, loading } = useAuthUser();
  const location = useLocation();
  console.log(authUser);
  if (loading) {
    // return <>{authUser?.token}</>;
  }
  if (authUser) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default Protected;
