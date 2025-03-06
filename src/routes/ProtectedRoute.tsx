import React from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
// import { useAppSelector } from '../redux/hooks';
// import { TOKEN } from '../constants/appConfig';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // const accessToken = useAppSelector((state) => state.auth.accessToken);
  // const [searchParams] = useSearchParams();
  // const token = searchParams.get(TOKEN);
  // const isAuthorized = !!accessToken || token;
  const token = localStorage.getItem("token")

  if (!token) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;