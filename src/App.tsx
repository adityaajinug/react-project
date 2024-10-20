import ForgotPasswordPage from "@/pages/ForgotPasswordPage";
import SignInPage from "@/pages/SignInPage";
import SignUpPage from "@/pages/SignUpPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
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
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  )
}
