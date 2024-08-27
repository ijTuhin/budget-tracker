import { Navigate, useLocation, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const location = useLocation();
  console.error(error);
  if (error.status === 404) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  } else
    return (
      <div className="">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{error.statusText || error.message}</p>
      </div>
    );
};

export default ErrorPage;
