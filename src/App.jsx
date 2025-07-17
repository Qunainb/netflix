import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./modules/core/Pages/Home";
import Login from "./modules/auth/pages/Login";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
