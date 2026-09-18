import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { LoginPage } from "./pages/LoginPage.jsx";
import { LayoutPage } from "./layouts/layoutPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { RegisterPage } from "./pages/RegisterPage.jsx";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { useAuth } from "./context/AuthContext.jsx";

function AuthAwareLoginRoute() {
  const { isAuth } = useAuth();

  return isAuth ? <Navigate to="/" replace /> : <LoginPage />;
}

const routes = createBrowserRouter([
  {
    element: (
      <>
        <ProtectedRoute>
          <LayoutPage username={"furkan"}></LayoutPage>
        </ProtectedRoute>
      </>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterPage></RegisterPage>,
  },
  {
    path: "/login",
    element: <AuthAwareLoginRoute></AuthAwareLoginRoute>,
  },
]);

export default function App() {
  return (
    <RouterProvider router={routes}>
      <LayoutPage username={"furkan"}></LayoutPage>
    </RouterProvider>
  );
}
