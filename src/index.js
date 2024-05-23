import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Menu from './Components/MenuComponent'
import Filmes from './Pages/Filmes';
import Login from './Components/LoginComponent'
import Signin from './Components/SigninComponent';
import Livros from './Pages/Livros';
import Home from './Pages/Home';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/08122008",
    element: <div><br></br><br></br><br></br>Hello world!</div>,
  },
  {
    path: "/filmes",
    element: <Filmes/>,
  },
  {
    path: "/livros",
    element: <Livros/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signin",
    element: <Signin/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
