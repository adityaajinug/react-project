
import { SimpleBackdrop } from "@/components/Elements/Backdrop/SimpleBackdrop";
import Logo from "@/components/Elements/Logo/Index";
import { Notify } from "@/components/Elements/SnakeBar/Notify";
import { useBackgroundTheme } from "@/context/BackgroundThemeContext";
import { useNotif } from "@/context/NotifContext";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
interface AuthLayoutProps {
    children: React.ReactNode,
    type: string;
}
const AuthLayout: React.FC<AuthLayoutProps> = (props) => {
    const {children, type} = props;
    const { msg, setMsg, open, setOpen, isLoading, setIsLoading } = useNotif();
    const { backgroundTheme, toggleBackgroundTheme } = useBackgroundTheme();
    const isDarkMode = backgroundTheme.color === "bg-black";

  
    const handleCloseSnackbar = () => {
        setOpen(false);
        setMsg(undefined);
      };

    return (
        <>
        <div className="w-full max-w-full">
            {isLoading && (
                <SimpleBackdrop isLoading={isLoading} setIsLoading={setIsLoading} />
            )}
            {msg && (
                <Notify
                    openSnackbar={open}
                    snackbarSeverity={msg?.severity || "success"}
                    snackbarMessage={msg?.desc || 'success'}
                    onClose={handleCloseSnackbar}
                />
            )}
        </div>
        <div className={`flex items-center justify-center min-h-screen ${backgroundTheme.color}`}>
            <div className="max-w-[400px] w-full">
                <Logo />
                {type === "sign-up" ? (
                    <h2 className="text-base font-semibold text-webstyle-secondary text-center mt-3">Create an account</h2>
                ): type === "forgot-password" ? (
                    <>
                    <h2 className="text-base font-semibold text-webstyle-secondary text-center mt-3">Forgot Password?</h2>
                    <p className="text-gray-400 mt-3 text-center text-sm">Enter your email address to get the password reset link</p>
                    </>

                ) : ""}
                {children}
                {type === "sign-in" ? (
                    <Link 
                        to="/sign-up" 
                        className="text-webstyle-primary text-center font-medium text-base hover:text-webstyle-secondary w-full inline-block mt-6"
                    >
                        Create an account
                    </Link>
                ) : type === "sign-up" ? (
                    <div className="flex items-center justify-center gap-1 w-full mt-3">
                    <div className="text-gray-500">Already have an account?</div>
                    <Link 
                        to="/" 
                        className="text-webstyle-primary font-medium text-base hover:text-webstyle-secondary"
                    >
                        Sign In here
                    </Link>
                </div>
                ) : type === "forgot-password" ? (
                    <Link 
                        to="/" 
                        className="text-webstyle-grey-200 text-center font-medium text-base hover:text-webstyle-secondary w-full inline-block mt-6"
                    >
                        Back to Login
                    </Link>
                ): ""}
            </div>
        
            <button
                onClick={toggleBackgroundTheme}
                className="absolute top-4 right-4 p-3 rounded-full bg-gray-800 text-white shadow-md flex items-center justify-center"
            >
                {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-300" />}
            </button>
        </div>
        </>
    )
}

export default AuthLayout;