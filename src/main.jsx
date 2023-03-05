import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  redirect,
  RouterProvider
} from "react-router-dom";

import userService from './services/user.service';

import App from './App';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';
import './index.css';
import Register from './pages/RegisterPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, 
        element: <HomePage /> 
      },
      { path: 'login', 
        element: <LoginPage />, 
        loader: await userService.preventAuthAccess()
      },
      {
        path: 'register',
        element: <Register/>,
        action: async ({request}) => {
          return await userService.register(request)
        },
        loader: await userService.preventAuthAccess()

      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
