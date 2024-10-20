import { ButtonType } from "@/types/button";

const PrimaryButton: React.FC<ButtonType> = (props) => {
    const {type, name, id} = props
    return (
        <>
        <button type={type} className="py-3 w-full bg-webstyle-primary rounded-md text-white font-semibold" id={id}>{name}</button>
        </>
    )
}
export default PrimaryButton;