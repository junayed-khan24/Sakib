import { createBrowserRouter } from "react-router";
import Home from "../Components/Home";
import Layout from "../layout/Layout";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Blog from "../Components/Blog";
import BookingForm from "../Components/BookingForm";
import Portfolio from "../Components/Portfolio";
import Dashboard from "../Components/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/booking",
        element: <BookingForm></BookingForm>
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
    ],
  },
]);

export default router;