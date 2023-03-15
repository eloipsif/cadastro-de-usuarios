import "./App.css";
import Home from "./Components/Home/Home";
import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cadastro from "./Components/Cadastro/Cadastro";
import Dowload from "./Components/Dowload/Dowload";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/cadastro",
      element: <Cadastro/>,
    },
    {
      path: "/dowload",
      element: <Dowload/>,
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;