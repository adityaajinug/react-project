import PrimaryButton from "@/components/Elements/Button/PrimaryButton";
import InputLabel from "@/components/Elements/Input/Index";
const FormForgotPassword: React.FC = () => {
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
                            placeholder: "hello@example.com",
                        }}
                    />
                </div>
                <div className="mt-4 flex flex-col gap-6 relative">
                    <PrimaryButton name="Password Reset" type="submit" id="password-reset" />
                </div>
            </form>
        </>
    )
}

export default FormForgotPassword;