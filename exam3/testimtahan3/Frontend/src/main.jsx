import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Detail from './pages/Detail/Detail.jsx';
import Home from "./pages/Home/Home.jsx"
import Add from './pages/Add/Add';
import Basket from './pages/Basket/Basket.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "add",
        element: <Add/>,
      },

      {
        path: "detail/:productId",
        element: <Detail/>,
      },
      {
        path: "basket",
        element: <Basket/>,
      },
       
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
