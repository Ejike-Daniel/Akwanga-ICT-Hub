import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import ErrorPage from "./Components/ErrorPage";
import Landing from "./Pages/Home/Landing";
import AboutUS from "./Pages/About/AboutUs";
import OurServices from "./Pages/Services/Services";
import Reviews from "./Pages/Review/Reveiws";
import Program from "./Pages/Program/Program";
import JoinUs from "./Components/JoinUs";

function App() {
  return (
    <>
      <RouterProvider
        router={createBrowserRouter([
          {
            path: "/",
            element: <RootLayout />,
            errorElement: <ErrorPage />,
            children: [
              {
                index: true,
                element: <Landing />,
              },
              {
                path: "about",
                element: <AboutUS />,
              },
              {
                path: "services",
                element: <OurServices />,
              },
              {
                path: "testimonials",
                element: <Reviews />,
              },
              {
                path: "programs",
                element: <Program />,
              },

              {
                path: "signup",
                element: <JoinUs />,
              },
            ],
          },
        ])}
      />
    </>
  );
}

export default App;
