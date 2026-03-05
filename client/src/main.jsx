import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import './index.css'
import App from './App.jsx'
import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: '/dasbord',
    element: <Dashboard></Dashboard>
  },
  {
    path: '/login',
    element: <Login></Login>
  }
]);

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);