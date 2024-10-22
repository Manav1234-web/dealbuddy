import { useState, ReactNode, useEffect, useMemo } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserService } from "../service/userservice";

type AuthGuardProps = {
  children: ReactNode;
};

const userService = UserService.getInstance<UserService>();

export default function AuthGuard({ children}: AuthGuardProps) {

  const { pathname } = useLocation();
  const [required, setRequired] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!userService.getUser())    

  if (!isAuthenticated) {
    if (pathname !== required) {
      setRequired(pathname);
    }
    
    return <Navigate to={required || "/login"} />;
  }

  if (required && pathname !== required) {
    setRequired(null);
    return <Navigate to={required} />;
  }  

  return <>{children}</>;


  
};
