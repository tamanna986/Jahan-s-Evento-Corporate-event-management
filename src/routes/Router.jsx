import { createBrowserRouter } from "react-router-dom";
import Root from "../layoutes/Root";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import GallaryOverview from "../components/GallaryOverview/GallaryOverview";
import Faq from "../pages/Faq/Faq";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
            loader : () => fetch('/service.json')
        },
        {
            path: '/service/:id',
            element: (<PrivateRoute><Services></Services></PrivateRoute>),
            loader: () => fetch("/service.json")
            
        },
        {
            path: '/Login',
            element: <LogIn></LogIn>
        },
        {
            path: '/Register',
            element: <Register></Register>
        },
        {
            path: '/gallery',
            element: (<PrivateRoute><GallaryOverview></GallaryOverview></PrivateRoute>),
            loader: () => fetch('gallery.json')
        },
        {
            path: '/faq',
            element: (<PrivateRoute><Faq></Faq></PrivateRoute>),loader: () => fetch('service.json')             
        }

      ]
    },
  ]);
  export default router;