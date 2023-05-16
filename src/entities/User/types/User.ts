export const hasRoles = (pageRoles: UserRole[], userRoles?: UserRole[]) => {
  if (!userRoles) return false;

  return pageRoles.some((role) => userRoles.includes(role));
};

export const isAdmin = (userRoles?: UserRole[]) =>
  hasRoles([UserRole.ADMIN], userRoles);

export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
  MANAGER = "MANAGER",
}

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
}
