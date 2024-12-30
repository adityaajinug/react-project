import { InputType } from "@/types/input";


const Input: React.FC<InputType & { onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void }> = (props) => {
  const { id, placeholder, type, name, onChange } = props;
    return (
        <>
        <input type={type} placeholder={placeholder} className="py-3 px-4 border-webstyle-gray-600 border border-solid border-webstyle-grey-600 rounded-lg bg-webstyle-grey-0" id={id} name={name}  
      onChange={onChange}/>
        </>
    )
}

export default Input;