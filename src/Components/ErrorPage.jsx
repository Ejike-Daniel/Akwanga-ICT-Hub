import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className=" error-page-bg relative  ">
      <p className="text-red-600 text-center hidden lg:block absolute top-28 right-48 text-3xl font-semibold">
        <p>Sorry, an unexpected error has occurred.</p>
        <i>Page </i>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={"/"}>
        <button className=" p-2 rounded-lg hover:bg-blue shadow-lg absolute bottom-16  lg:right-48">
          👈 Back
        </button>
      </Link>
    </div>
  );
}
