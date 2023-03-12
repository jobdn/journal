import { selectUserIsAuth } from "entities/User";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth: React.FC = ({ children }) => {
  const auth = useSelector(selectUserIsAuth);
  const location = useLocation();

  if (!auth) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return <>{children}</>;
};
