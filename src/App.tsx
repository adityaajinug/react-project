import { useAuth } from "@/context/AuthContext";
import DashboardPage from "@/pages/DashboardPage";
import { ExpensePage } from "@/pages/ExpensePage";
import ForgotPasswordPage from "@/pages/ForgotPasswordPage";
import SignInPage from "@/pages/SignInPage";
import SignUpPage from "@/pages/SignUpPage";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

export default function App() {
  const { isLoggedIn } = useAuth();
  const RequireAuth = ({ children }: { children: React.ReactNode }) => {
    return isLoggedIn ? <>{children}</> : <Navigate to="/" />;
  };
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <SignInPage />
    },
    {
      path: "/sign-up",
      element: <SignUpPage />
    },
    {
      path: "/forgot-password",
      element: <ForgotPasswordPage />
    },
    {
      path: "/dashboard",
      element: <RequireAuth><DashboardPage /></RequireAuth>
    },
    {
      path: "/expense",
      element: <RequireAuth><ExpensePage /></RequireAuth>
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  )
}
