
import Logo from "@/components/Elements/Logo/Index";
import { Link } from "react-router-dom";
interface AuthLayoutProps {
    children: React.ReactNode,
    type: string;
}
const AuthLayout: React.FC<AuthLayoutProps> = (props) => {
    const {children, type} = props
    return (
        <>
        <div className="flex items-center justify-center min-h-screen bg-webstyle-grey-0">
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
        
        </div>
        </>
    )
}

export default AuthLayout;