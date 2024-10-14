
import Logo from "../Elements/Logo/Index";
import FormLogin from "../Fragments/FormLogin";

const AuthLayout = () => {
    return (
        <>
        <div className="flex items-center justify-center min-h-screen bg-webstyle-grey-0">
            <div className="max-w-[400px] w-full">
                <Logo />
                <FormLogin />
            </div>
        
        </div>
        </>
    )
}

export default AuthLayout;