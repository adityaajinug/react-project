
import googleLogo from "@/assets/google.svg";
import PrimaryButton from "@/components/Elements/Button/PrimaryButton";
import { SSOButton } from "@/components/Elements/Button/SSOButton";
import InputLabel from "@/components/Elements/Input/Index";
const FormSignUp: React.FC = () => {
    return (
        <>
            <form action="#" method="post" className="mt-16">
                <div className="flex gap-8 flex-col w-full mt-16">
                    <InputLabel
                        labelValue={{
                            labelName: "Name",
                            idFor: "name",
                        }}
                        InputValue={{
                            type: "text",
                            name: "name",
                            id: "name",
                            placeholder: "Enter your name",
                        }}
                    />
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
                        }}
                        InputValue={{
                            type: "password",
                            name: "password",
                            id: "password",
                            placeholder: "**********",
                        }}
                    />
                    <div>By continuing you agree to our <a href="#" className="text-webstyle-primary hover:text-webstyle-secondary">terms of services</a></div>
                </div>
                <div className="mt-4 flex flex-col gap-6 relative">
                    <PrimaryButton name="Sign up" type="submit" id="sign-up" />
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

export default FormSignUp;