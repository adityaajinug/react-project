import Input from "@/components/Elements/Input/Input";
import Label from "@/components/Elements/Input/Label";
import { InputType, LabelType } from "@/types/input";
interface InputLabelProps {
    labelValue: LabelType;
    InputValue: InputType;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const InputLabel: React.FC<InputLabelProps> = (props) => {
    const {labelValue, InputValue, onChange} = props
    return (
        <>
        <div className="flex gap-2 flex-col w-full">
            <Label labelName={labelValue.labelName} idFor={labelValue.idFor} optionalLink={labelValue.optionalLink}/>
            <Input type={InputValue.type} name={InputValue.name} id={InputValue.id} placeholder={InputValue.placeholder}  onChange={onChange} />
        </div>
        </>
    )
}

export default InputLabel;