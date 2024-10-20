
import googleLogo from "@/assets/google.svg";
import PrimaryButton from "@/components/Elements/Button/PrimaryButton";
import { SSOButton } from "@/components/Elements/Button/SSOButton";
import Checkbox from "@/components/Elements/Checkbox/Index";
import InputLabel from "@/components/Elements/Input/Index";
const FormSignIn: React.FC = () => {
    return (
        <>
            <form action="#" method="post" className="mt-16">
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
                    />
                    <InputLabel
                        labelValue={{
                            labelName: "Password",
                            idFor: "password",
                            optionalLink: {
                                href: "/forgot-password",
                                text: "Forgot Password?",
                            }
                        }}
                        InputValue={{
                            type: "password",
                            name: "password",
                            id: "password",
                            placeholder: "**********",
                        }}
                    />
                    <Checkbox name="Keep me sign in" id="remember" type="checkbox" />
                </div>
                <div className="mt-4 flex flex-col gap-6 relative">
                    <PrimaryButton name="Login" type="submit" id="login" />
                    <div className="relative flex items-center justify-center">
                        <div className="w-full px-2 border border-solid border-gray-300"></div>
                        <span className="bg-webstyle-grey-0 text-gray-300 absolute px-2">or sign in with</span>
                    </div>
                    <SSOButton name="Google" type="button" id="google" img={googleLogo} />
                </div>
            </form>
        </>
    )
}

export default FormSignIn;