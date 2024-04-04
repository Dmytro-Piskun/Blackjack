import { useRouteError } from "react-router-dom";

const ErrorPage = (props) => {

    const error = useRouteError();
    console.log(error)

  return (
    <div>
      u suck
    </div>
  )
};

export default ErrorPage;
