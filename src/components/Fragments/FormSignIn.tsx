import { useState } from "react";
import axios from "axios";
import googleLogo from "@/assets/google.svg";
import PrimaryButton from "@/components/Elements/Button/PrimaryButton";
import { SSOButton } from "@/components/Elements/Button/SSOButton";
import Checkbox from "@/components/Elements/Checkbox/Index";
import InputLabel from "@/components/Elements/Input/Index";
import { Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "@/context/AuthContext";
import { useNotif } from "@/context/NotifContext";

interface FormValues {
  email: string;
  password: string;
}

const FormSignIn: React.FC = () => {
  const navigate = useNavigate();
  const { login, setIsLoggedIn } = useAuth();
  const { setMsg, setOpen, setIsLoading } = useNotif();
  const [formData, setFormData] = useState<FormValues>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ email?: string; password?: string }>({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Handle validation
    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Email is required",
        }));
      } else if (!emailPattern.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Invalid email address",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "",
        }));
      }
    }

    if (name === "password") {
      if (!value) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "Password is required",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "",
        }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (errors.email || errors.password) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://jwt-auth-eight-neon.vercel.app/login",
        formData
      );
      console.log("Login success:", response.data);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      const decodedToken: any = jwtDecode(response.data.refreshToken);
      console.log("Decoded Token:", decodedToken);
      login(response.data.refreshToken, decodedToken.name);
      setIsLoggedIn(true);
      setIsLoading(false);
      setOpen(true);
      setMsg({
        severity: "success", 
        message: "Login successful",
        desc: "You have successfully logged In.",
      });
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Login failed:", error);
      setSnackbarMessage("Login failed. Please check your credentials.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="mt-16">
      <div className="flex gap-8 flex-col w-full mt-16">
        <InputLabel
          labelValue={{
            labelName: "Email",
            idFor: "email",
          }}
          InputValue={{
            type: "email",
            name: "email",
            id: "email",
            placeholder: "Enter your email",
          }}
          onChange={handleChange}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email}</p>
        )}
        <InputLabel
          labelValue={{
            labelName: "Password",
            idFor: "password",
            optionalLink: {
              href: "/forgot-password",
              text: "Forgot Password?",
            },
          }}
          InputValue={{
            type: "password",
            name: "password",
            id: "password",
            placeholder: "**********",
          }}
          onChange={handleChange}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}

        <Checkbox
          name="remember"
          id="remember"
          type="checkbox"
        />
      </div>
      <div className="mt-4 flex flex-col gap-6 relative">
        <PrimaryButton
          name={isSubmitting ? "Logging in..." : "Login"}
          type="submit"
          id="login"
          disabled={isSubmitting}
        />
        <div className="relative flex items-center justify-center">
          <div className="w-full px-2 border border-solid border-gray-300"></div>
          <span className="bg-webstyle-grey-0 text-gray-300 absolute px-2">
            or sign in with
          </span>
        </div>
        <SSOButton
          name="Google"
          type="button"
          id="google"
          img={googleLogo}
        />
      </div>
    </form>
    <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
    >
        <Alert
        onClose={() => setOpenSnackbar(false)}
        severity={snackbarSeverity}
        sx={{ width: "100%" }}
        >
        {snackbarMessage}
        </Alert>
    </Snackbar>
    
    </>
  );
};

export default FormSignIn;
