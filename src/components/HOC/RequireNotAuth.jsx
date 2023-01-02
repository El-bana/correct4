import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RequireNotAuth = ({ children, to }) => {
  const user = useSelector((state) => state.user.user);

  if (!user) {
    return children;
  } else {
    return <Navigate to={to || "/"} />;
  }
};

export default RequireNotAuth;
