import { InputType } from "@/types/input";


const Input: React.FC<InputType> = (props) => {
    const {id, placeholder, type, name} = props
    return (
        <>
        <input type={type} placeholder={placeholder} className="py-3 px-4 border-webstyle-gray-600 border border-solid border-webstyle-grey-600 rounded-lg bg-webstyle-grey-0" id={id} name={name} />
        </>
    )
}

export default Input;