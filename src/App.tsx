import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { ContactPage } from "./ContactPage";
import { ContactPage2, contactPageAction } from "./ContactPage2";
import { ThankYouPage } from "./ThankYouPage";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

function App() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="contact" />,
  },
  {
    path: "/contact",
    element: <ContactPage2 />,
    action: contactPageAction,
  },
  {
    path: "/thankyou/:name",
    element: <ThankYouPage />,
  },
]);
export default App;
