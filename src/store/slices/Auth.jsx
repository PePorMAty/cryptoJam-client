import { useCurrentQuery } from "../services/auth";

const Auth = ({ children }) => {
  const { isLoading } = useCurrentQuery();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return children;
};

export default Auth;
