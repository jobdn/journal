import { UserRole, hasRoles, selectUserRoles } from "entities/User";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePaths } from "shared/config/router";

export interface RequireRoles {
  roles: UserRole[];
}

export const RequireRoles: React.FC<RequireRoles> = ({ children, roles }) => {
  const userRoles = useSelector(selectUserRoles);
  const location = useLocation();

  const userHasRole = useMemo(
    () => hasRoles(roles, userRoles),
    [roles, userRoles]
  );

  if (!userHasRole) {
    return <Navigate to={RoutePaths.forbidden} state={{ from: location }} />;
  }

  return <>{children}</>;
};
