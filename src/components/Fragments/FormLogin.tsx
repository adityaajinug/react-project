
import googleLogo from "@/assets/google.svg";
import InputLabel from "../Elements/InputLabel/Index";
const FormLogin: React.FC = () => {
    return (
        <>
            <form action="#" method="post" className="mt-16">
                <div className="flex gap-8 flex-col w-full mt-16">
                    <InputLabel />
                    <div className="flex gap-2 flex-col w-full">
                        <label htmlFor="password" className="text-webstyle-addon-black text-base font-medium flex justify-between items-center">
                            Password
                            <a href="#" className="text-webstyle-primary font-semibold text-xs hover:text-webstyle-secondary">Forgot Password?</a>
                            </label>
                        <input type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;" className="py-3 px-4 border-webstyle-gray-600 border border-solid border-webstyle-grey-600 rounded-lg bg-webstyle-grey-0" id="password" />
                    </div>
                    <div className="flex gap-2 w-full">
                        <input type="checkbox" id="remember-me" className="accent-webstyle-primary min-w-5 min-h-5" />
                        <label htmlFor="remember-me" className="text-webstyle-addon-black text-base font-medium flex justify-between items-center">
                            Keep me signed in
                        </label>
                    </div>
                </div>
                <div className="mt-4 flex flex-col gap-6 relative">
                    <button type="submit" className="py-3 w-full bg-webstyle-primary rounded-md text-white font-semibold">Login</button>
                    <div className="relative flex items-center justify-center">
                        <div className="w-full px-2 border border-solid border-gray-300"></div>
                        <span className="bg-webstyle-grey-0 text-gray-300 absolute px-2">or sign in with</span>
                    </div>
                    <button type="button" className="flex items-center gap-4 justify-center bg-[#E4E7EB] py-3 rounded-md">
                        <img src={googleLogo} alt="google" loading="lazy" />
                        Continue with Google
                    </button>
                </div>
            </form>
            <a href="#" className="text-webstyle-primary text-center font-medium text-base hover:text-webstyle-secondary w-full inline-block mt-6">Create an account</a>
        </>
    )
}

export default FormLogin;