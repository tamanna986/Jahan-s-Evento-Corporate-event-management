import { createBrowserRouter } from "react-router-dom";
import Root from "../layoutes/Root";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/Services',
            element: <Services></Services>
        },
        {
            path: '/Login',
            element: <LogIn></LogIn>
        },
        {
            path: '/Register',
            element: <Register></Register>
        },

      ]
    },
  ]);
  export default router;