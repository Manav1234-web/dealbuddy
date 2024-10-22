import { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { PATH_AUTH } from "../routes/paths";
import { UserService } from "../service/userservice";

type GuestGuardProps = {
  children: ReactNode;
};

const userService = UserService.getInstance<UserService>();

export default function GuestGuard({ children }: GuestGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(!!userService.getUser());

  useEffect(() => {
    setIsAuthenticated(!!userService.getUser());
  }, []);

  if (isAuthenticated) {
    return <Navigate to={PATH_AUTH.root} replace />;
  }

  return <>{children}</>;
}
